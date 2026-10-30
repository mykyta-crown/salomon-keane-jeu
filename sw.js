// Service worker du jeu publié (installé depuis l'écran d'accueil) : le jeu se relance sans réseau.
// Le code est mis en cache à l'installation ; les images descendent ensuite, hors installation (remplir) ; la page et le code
// passent d'abord par le réseau pour recevoir les mises à jour. La musique (lue par plages, Range) n'est pas interceptée.
// VERSION est remplacée à chaque publication (outils/site.sh) : le nouveau cache remplace l'ancien, mais reprend ses images.
const VERSION = '5903f87-1793352090';
// IMAGES : à changer seulement quand une image change de contenu sans changer de nom ; les images gardées sont alors
// retéléchargées. Sinon, d'une publication à l'autre, seules les images nouvelles descendent.
const IMAGES = '1';
const CACHE = 'sk-' + VERSION + '~i' + IMAGES, POLICES = 'sk-polices';
const COEUR = [
  'jouer.html', 'ui.css', 'habillages.css', 'manifest.webmanifest',
  'data.js', 'themes.js', 'game.js', 'gardiens.js', 'bestiaire.js', 'eau.js', 'fusions.js', 'sorts2.js', 'progression.js', 'arenes.js',
  'render.js', 'gardiens-rendu.js', 'bestiaire-rendu.js', 'hero.js', 'sprites.js', 'enligne.js', 'bienvenue.js', 'installer.js', 'app.js', 'ambiance.js', 'village.js', 'defis.js', 'retrait.js', 'mondes.js', 'dragons.js', 'rares.js',
  'sprites/sprites.json', 'sprites/ennemis.json', 'sprites/creatures.json', 'sprites/gardiens.json', 'sprites/decor.json', 'sprites/decor2.json',
  'sprites/bobine.json', 'sprites/portraits.json', 'sprites/morvelle-portraits.json', 'sprites/village.json',
  'icones/icone-192.png',
  'sprites/monde-glace.webp', 'sprites/monde-sable.webp', 'sprites/monde-feu.webp',   // portail magique (mondes.js, habillages.css) : 42 Ko
];
// images de l'accueil, du Bourg et de l'acte 1 (environ 7 Mo), descendues en premier : sans elles, une première partie
// hors ligne se jouait sans Pépin ni créatures dessinés, et le Bourg sans son image.
const IMAGES_ACTE1 = [
  'sprites/pepin.webp', 'sprites/hd/pepin-idle.webp', 'sprites/hd/pepin-walk.webp', 'sprites/hd/pepin-cast.webp', 'sprites/hd/pepin-hit.webp',
  'sprites/sk_minion.webp', 'sprites/sk_mage.webp', 'sprites/sk_warrior.webp', 'sprites/sk_ally.webp',
  'sprites/o_chiffe.webp', 'sprites/o_pelote.webp', 'sprites/o_bobineuse.webp', 'sprites/o_dame_bobine.webp',
  'sprites/hd/o_dame_bobine-idle-tel.webp', 'sprites/hd/o_dame_bobine-act-tel.webp',
  'sprites/decor.webp', 'sprites/decor2.webp', 'sprites/portraits.webp', 'sprites/morvelle-portraits.webp',
  'sprites/mirliton.webp', 'sprites/accueil.webp', 'sprites/accueil@2x.webp',
  'sprites/village.webp', 'sprites/village@2x.webp', 'sprites/village-aube.webp', 'sprites/village-aube@2x.webp', 'sprites/mercerie.webp',
];

self.addEventListener('install', (e) => {
  // le code seul : la mise à jour prend la main sans attendre les images. Un fichier absent ne bloque pas l'installation.
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(COEUR.map((u) => c.add(new Request(u, { cache: 'reload' })).catch(() => {}))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  const pret = reprendre().then(() => self.clients.claim());
  e.waitUntil(pret);
  pret.then(remplir, remplir);   // hors waitUntil : les images descendent doucement, sans retenir l'activation
});

// les images déjà gardées par une version précédente passent dans le nouveau cache, puis l'ancien cache est supprimé.
// Refait au début de chaque remplissage : si iOS arrête le service worker au milieu, la copie reprend à l'ouverture suivante.
async function reprendre() {
  try {
    const vieux = (await caches.keys()).filter((k) => k.startsWith('sk-') && k !== CACHE && k !== POLICES);
    if (!vieux.length) return;
    const c = await caches.open(CACHE);
    for (const k of vieux) {
      if ((k.split('~i')[1] || '1') !== IMAGES) continue;   // images changées sous le même nom : on les reprend du réseau
      try {
        const o = await caches.open(k);
        for (const r of await o.keys()) {
          if (!/\.(webp|png)$/i.test(new URL(r.url).pathname) || (await c.match(r, { ignoreSearch: true }))) continue;
          const h = await o.match(r);
          if (h) await c.put(r, h).catch(() => {});
        }
      } catch (err) {}
    }
    await Promise.all(vieux.map((k) => caches.delete(k)));
  } catch (err) {}
}

// remplissage des images : d'abord l'accueil, le Bourg et l'acte 1, à la suite ; puis les autres planches (créatures et
// gardiens des actes 2 à 5, formes) une à la fois, 300 ms entre deux, pour qu'un acte jamais vu en ligne se joue quand même
// hors ligne. Reprenable : iOS arrête souvent le service worker, on relance donc à chaque ouverture du jeu ; ce qui est déjà
// gardé est sauté (une publication ne fait descendre que les images nouvelles). Les feuilles hd des formes (près de 40 Mo)
// restent au premier usage. Mode « économie de données » : rien.
let remplissage = null;
function remplir() {
  if (remplissage) return remplissage;
  if (self.navigator && self.navigator.connection && self.navigator.connection.saveData) return null;
  remplissage = (async () => {
    await reprendre();
    const c = await caches.open(CACHE), liste = [];
    for (const idx of ['ennemis', 'creatures', 'gardiens', 'bobine', 'sprites']) {
      try {
        const r = (await c.match('sprites/' + idx + '.json')) || (await fetch('sprites/' + idx + '.json'));
        const m = r && r.ok ? await r.json() : null;
        if (m && m.sheets) for (const id in m.sheets) if (typeof m.sheets[id] === 'string') liste.push('sprites/' + m.sheets[id]);
      } catch (err) {}
    }
    const vite = new Set(IMAGES_ACTE1);
    for (const u of [...IMAGES_ACTE1, ...liste.filter((u) => !vite.has(u))]) {
      if (await c.match(u, { ignoreSearch: true })) continue;
      try { await c.add(u); } catch (err) {}
      if (!vite.has(u)) await new Promise((ok) => setTimeout(ok, 300));
    }
  })().catch(() => {}).finally(() => { remplissage = null; });
  return remplissage;
}

async function premierCache(req, nom) {
  const c = await caches.open(nom);
  const hit = await c.match(req, { ignoreSearch: true });
  if (hit) return hit;
  const r = await fetch(req);
  if (r && (r.ok || r.type === 'opaque')) c.put(req, r.clone()).catch(() => {});
  return r;
}

// la page et le code (js, css, json, manifeste) passent d'abord par le réseau : le jeu se met à jour dès la prochaine ouverture,
// même dans l'appli de l'écran d'accueil que l'iPhone garde en veille. Sans réponse en 4 s (hors ligne, réseau très lent), la
// copie gardée prend le relais ; la réponse du réseau, si elle arrive ensuite, remplace la copie pour la fois suivante.
async function reseauDabord(req, page) {
  const c = await caches.open(CACHE);
  const net = fetch(req).then((r) => { if (r && r.ok) c.put(req, r.clone()).catch(() => {}); return r; });
  const garde = () => c.match(req, { ignoreSearch: true }).then((h) => h || (page ? c.match('index.html').then((x) => x || c.match('jouer.html')) : null));
  try {
    const r = await Promise.race([net, new Promise((_, rej) => setTimeout(() => rej(new Error('lent')), 4000))]);
    if (r && r.ok) return r;
    return (await garde()) || r;
  } catch (err) {
    return (await garde()) || net.catch(() => Response.error());
  }
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || req.headers.has('range')) return;
  const u = new URL(req.url);
  if (u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com') { e.respondWith(premierCache(req, POLICES)); return; }
  if (u.origin !== self.location.origin || /\.(mp4|mp3|m4a)$/i.test(u.pathname)) return;
  if (req.mode === 'navigate') { e.respondWith(reseauDabord(req, true)); setTimeout(remplir, 8000); return; }   // après le premier chargement de la page
  if (/\.(js|css|json|webmanifest|html)$/i.test(u.pathname)) { e.respondWith(reseauDabord(req, false)); return; }
  e.respondWith(premierCache(req, CACHE));   // images : gardées (lourdes, et leur nom change rarement)
});
