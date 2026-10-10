// Service worker du jeu publié (installé depuis l'écran d'accueil) : le jeu se relance sans réseau.
// Le code est mis en cache à l'installation ; images et polices au premier usage ; la page et le code passent d'abord
// par le réseau pour recevoir les mises à jour. La musique (lue par plages, Range) n'est pas interceptée.
// VERSION est remplacée à chaque publication (outils/site.sh) : le nouveau cache remplace l'ancien.
const VERSION = '7194c91-1791673173';
const CACHE = 'sk-' + VERSION, POLICES = 'sk-polices';
const COEUR = [
  'jouer.html', 'ui.css', 'habillages.css', 'manifest.webmanifest',
  'data.js', 'themes.js', 'game.js', 'gardiens.js', 'bestiaire.js', 'eau.js', 'fusions.js', 'sorts2.js', 'progression.js', 'arenes.js',
  'render.js', 'gardiens-rendu.js', 'bestiaire-rendu.js', 'hero.js', 'sprites.js', 'enligne.js', 'bienvenue.js', 'installer.js', 'app.js', 'ambiance.js', 'village.js', 'defis.js', 'retrait.js', 'mondes.js', 'dragons.js', 'rares.js',
  'sprites/sprites.json', 'sprites/ennemis.json', 'sprites/creatures.json', 'sprites/gardiens.json', 'sprites/decor.json', 'sprites/decor2.json',
  'sprites/bobine.json', 'sprites/portraits.json', 'sprites/morvelle-portraits.json', 'sprites/village.json',
  'icones/icone-192.png',
];

self.addEventListener('install', (e) => {
  // un fichier absent ne bloque pas l'installation : il viendra du réseau au premier usage
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(COEUR.map((u) => c.add(new Request(u, { cache: 'reload' })).catch(() => {})))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('sk-') && k !== CACHE && k !== POLICES).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

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
  if (req.mode === 'navigate') { e.respondWith(reseauDabord(req, true)); return; }
  if (/\.(js|css|json|webmanifest|html)$/i.test(u.pathname)) { e.respondWith(reseauDabord(req, false)); return; }
  e.respondWith(premierCache(req, CACHE));   // images : gardées (lourdes, et leur nom change rarement)
});
