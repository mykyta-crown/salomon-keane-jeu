(function(){const n={get(e){try{return localStorage.getItem(e)}catch{return null}},set(e,t){try{localStorage.setItem(e,t)}catch{}}},h=e=>String(e??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),c="sk-nom",w="sk-tuto-vu",y=navigator.userAgent||"",$=!!(window.matchMedia&&window.matchMedia("(pointer: coarse)").matches),D=/iPad/.test(y)||/Macintosh/.test(y)&&navigator.maxTouchPoints>1,F=Math.min(screen.width||0,screen.height||0)<600,f=D?"iPad":$?F?/iPhone/.test(y)?"iPhone":"Téléphone":"Tablette":"Ordinateur",l=$,M=/^fr|^be/i.test(navigator.language||""),T=`
  .skb { position: fixed; inset: 0; z-index: 2147483000; display: grid; place-items: center; padding: max(16px, env(safe-area-inset-top)) 16px max(16px, env(safe-area-inset-bottom));
    background: radial-gradient(120% 90% at 50% 0%, #4a1b3d 0%, #24122b 55%, #120914 100%); color: #fff3dc; font-family: "Alegreya Sans", "Trebuchet MS", sans-serif;
    -webkit-text-size-adjust: 100%; overflow-y: auto; overscroll-behavior: contain;
    touch-action: manipulation; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; }
  .skb input { -webkit-user-select: text; user-select: text; }
  .skb[hidden] { display: none; }
  .skb-carte { width: min(460px, 100%); box-sizing: border-box; padding: 28px 24px 22px; border-radius: 18px; text-align: center;
    background: linear-gradient(180deg, #3b2246, #2a1838); border: 2px solid #e0a630; box-shadow: 0 0 0 5px #1c1626, 0 18px 50px rgba(0,0,0,.6); }
  .skb p.skb-salut { margin: 0 0 8px; font: 800 20px/1.2 Eczar, Georgia, serif; color: #fff3dc; }
  .skb p.skb-kicker { margin: 0 0 6px; font: 800 13px/1.2 "Alegreya Sans", sans-serif; letter-spacing: .14em; text-transform: uppercase; color: #e0a630; }
  .skb h1, .skb h2 { margin: 0 0 12px; font-family: Eczar, Georgia, serif; font-weight: 800; line-height: 1.05; color: #fff3dc; text-shadow: 0 3px 0 #1c1626; text-wrap: balance; }
  .skb h1 { font-size: clamp(32px, 9vw, 44px); }
  .skb h2 { font-size: clamp(25px, 7vw, 32px); }
  .skb p { margin: 0 0 14px; font-size: 18px; line-height: 1.4; color: #e9dcc4; text-wrap: pretty; }
  .skb p b { color: #fff3dc; }
  .skb-astuce { font-size: 15px !important; color: #cdbfa6 !important; margin-top: 4px !important; }
  .skb label { display: block; margin: 6px 0 8px; font-weight: 800; font-size: 15px; color: #cdbfa6; text-align: left; }
  .skb input { width: 100%; box-sizing: border-box; font: 700 20px/1.2 "Alegreya Sans", sans-serif; padding: 12px 14px; border-radius: 12px;
    border: 2px solid #5b5470; background: #1c1626; color: #fff3dc; outline: none; }
  .skb input:focus { border-color: #e0a630; box-shadow: 0 0 0 3px rgba(224,166,48,.25); }
  .skb-btns { display: flex; gap: 10px; justify-content: center; margin-top: 18px; flex-wrap: wrap; }
  .skb button { font: 800 18px/1 Eczar, Georgia, serif; min-height: 48px; padding: 0 22px; border-radius: 12px; cursor: pointer;
    border: 3px solid #1c1626; color: #fff7e0; background: linear-gradient(180deg, #7d7590, #5b5470 45%, #463f58); box-shadow: 0 4px 0 #1c1626; text-shadow: 0 2px 0 #1c1626; }
  .skb button.on { background: linear-gradient(180deg, #fff1a8, #e0a630 45%, #b8701c); color: #3a1c06; text-shadow: none; }
  .skb button:disabled { opacity: .45; cursor: default; }
  .skb button:focus-visible { outline: 3px solid #f4ead2; outline-offset: 2px; }
  .skb button.lien { background: none; border: 0; box-shadow: none; color: #cdbfa6; font: 700 15px/1 "Alegreya Sans", sans-serif; min-height: 44px; padding: 0 10px; text-decoration: underline; text-shadow: none; }
  .skb-dessin { height: 112px; display: grid; place-items: center; margin: 4px 0 14px; }
  .skb-points { display: flex; gap: 8px; justify-content: center; margin-top: 16px; }
  .skb-points i { width: 9px; height: 9px; border-radius: 50%; background: #5b5470; }
  .skb-points i.on { background: #e0a630; }
  .skb-touches { display: grid; grid-template-columns: repeat(3, 46px); gap: 6px; justify-content: center; }
  .skb kbd { display: grid; place-items: center; min-width: 46px; height: 46px; padding: 0 10px; box-sizing: border-box; border-radius: 9px; background: #f4ead2; color: #2a1838;
    font: 900 20px/1 "Alegreya Sans", sans-serif; box-shadow: 0 4px 0 #8a7d66; }
  .skb kbd.large { min-width: 150px; font-size: 16px; }
  .skb-touches kbd:first-child { grid-column: 2; }
  .skb-touches kbd:nth-child(n+2) { grid-row: 2; }
  .skb-ligne { display: flex; gap: 14px; align-items: center; justify-content: center; }
  .skb-joy { width: 92px; height: 92px; border-radius: 50%; border: 3px solid rgba(244,234,210,.55); background: rgba(244,234,210,.08); display: grid; place-items: center; position: relative; }
  .skb-joy::after { content: ""; width: 40px; height: 40px; border-radius: 50%; background: #f4ead2; box-shadow: 0 3px 0 #8a7d66; animation: skb-glisse 2.4s ease-in-out infinite; }
  @keyframes skb-glisse { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(18px, -12px); } 50% { transform: translate(-6px, 20px); } 75% { transform: translate(-18px, -8px); } }
  @keyframes skb-glisse-p { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(14px, -9px); } 50% { transform: translate(-5px, 15px); } 75% { transform: translate(-14px, -6px); } }
  .skb-rond { width: 64px; height: 64px; border-radius: 50%; display: grid; place-items: center; font: 900 13px/1.1 "Alegreya Sans", sans-serif; color: #2a1838; box-shadow: 0 4px 0 #1c1626; }
  .skb-rond.esq { background: #f4ead2; } .skb-rond.ult { background: #e0a630; }
  .skb-mage { width: 22px; height: 22px; border-radius: 50%; background: #5fd4ff; box-shadow: 0 0 0 4px rgba(95,212,255,.25); }
  .skb-trait { width: 70px; height: 4px; border-radius: 2px; background: linear-gradient(90deg, rgba(255,240,106,0), #fff06a); animation: skb-tir 1s linear infinite; }
  @keyframes skb-tir { from { transform: scaleX(.2); transform-origin: left; opacity: .3 } to { transform: scaleX(1); transform-origin: left; opacity: 1 } }
  .skb-ennemi { width: 26px; height: 26px; border-radius: 6px; background: #e0303c; transform: rotate(45deg); }
  .skb-tour { display: flex; flex-direction: column-reverse; gap: 4px; align-items: center; }
  .skb-tour i { display: block; width: 74px; height: 16px; border-radius: 4px; background: #5b5470; }
  .skb-tour i.fait { background: #e0a630; }
  .skb-tour i.haut { width: 40px; background: #ff2d9a; }
  /* écran bas (iPhone SE) : dessin réduit (vraies tailles, pas de scale : libellés ≥ 12 px) et marges plus serrées, pour que « Jouer » reste visible sans défiler */
  @media (max-height: 620px) {
    .skb-carte { padding: 20px 18px 16px; }
    .skb h2 { margin-bottom: 8px; }
    .skb-dessin { height: 80px; margin: 0 0 10px; }
    .skb-joy { width: 72px; height: 72px; }
    .skb-joy::after { width: 32px; height: 32px; animation-name: skb-glisse-p; }
    .skb .skb-rond, .skb.skb-mod .skb-rond { width: 56px; height: 56px; font-size: 12px; }
    .skb kbd { min-width: 38px; height: 38px; }
    .skb kbd.large { min-width: 124px; }
    .skb-touches { grid-template-columns: repeat(3, 38px); gap: 4px; }
    .skb-tour { gap: 3px; }
    .skb-tour i { height: 12px; width: 60px; }
    .skb-tour i.haut { width: 32px; }
    .skb p { margin-bottom: 10px; }
    .skb-btns { margin-top: 12px; }
    .skb-points { margin-top: 12px; }
  }
  @media (prefers-reduced-motion: reduce) { .skb-joy::after, .skb-trait { animation: none; } }
  .skb-pill { position: fixed; left: max(12px, env(safe-area-inset-left)); bottom: max(12px, env(safe-area-inset-bottom)); z-index: 2147482000; font: 800 14px/1 "Alegreya Sans", sans-serif;
    padding: 10px 14px; min-height: 40px; border-radius: 999px; border: 2px solid #e0a630; background: rgba(28,22,38,.88); color: #fff3dc; cursor: pointer; }
  .skb-pill[hidden] { display: none; }
  .skb-liste { width: min(640px, 100%); max-height: min(70vh, 640px); overflow: auto; text-align: left; margin: 0 -4px; }
  .skb-liste table { width: 100%; border-collapse: collapse; font-size: 15px; }
  .skb-liste th { position: sticky; top: 0; background: #2a1838; color: #cdbfa6; font-weight: 800; text-align: left; padding: 8px 6px; font-size: 13px; }
  .skb-liste td { padding: 9px 6px; border-top: 1px solid rgba(244,234,210,.12); vertical-align: top; }
  .skb-liste td b { color: #fff3dc; font-size: 16px; }
  .skb-liste td small { display: block; color: #cdbfa6; }
  .skb-carte.large { width: min(680px, 100%); }
  /* habillage Moderne (classe skb-mod) : violet nuit, Bricolage Grotesque pour les titres, Figtree pour le texte */
  .skb.skb-mod { background: radial-gradient(120% 90% at 50% 0%, #2A2147 0%, #17122A 70%); color: #F4EBDD; font-family: Figtree, Inter, system-ui, sans-serif; }
  .skb-mod .skb-carte { background: #221A3A; border: 1px solid #3A2F57; box-shadow: 0 24px 60px rgba(0,0,0,.5); border-radius: 22px; }
  .skb-mod h1, .skb-mod h2, .skb-mod p.skb-salut { font-family: 'Bricolage Grotesque', Figtree, sans-serif; font-weight: 800; letter-spacing: -.03em; text-shadow: none; color: #F4EBDD; }
  .skb-mod p.skb-kicker { font: 600 13px/1.2 Figtree, sans-serif; letter-spacing: 0; text-transform: none; color: #B9ACD3; }
  .skb-mod p { font-family: Figtree, sans-serif; color: #D5C9EA; }
  .skb-mod label, .skb-mod .skb-astuce { font-family: Figtree, sans-serif; color: #B9ACD3 !important; }
  .skb-mod button { font: 600 17px/1 Figtree, sans-serif; border: 1px solid rgba(185,172,211,.28); background: #2A2147; color: #F4EBDD; box-shadow: none; text-shadow: none; border-radius: 14px; }
  .skb-mod button.on { background: #F5C542; color: #2A1A05; border-color: transparent; }
  .skb-mod button.lien { background: none; border: 0; color: #B9ACD3; font: 600 15px/1 Figtree, sans-serif; }
  .skb-mod button:focus-visible { outline: 3px solid #F5C542; outline-offset: 2px; }
  .skb-mod input { font: 600 18px Figtree, sans-serif; border: 1px solid #3A2F57; background: #17122A; color: #F4EBDD; }
  .skb-mod input:focus { border-color: #F5C542; box-shadow: 0 0 0 3px rgba(245,197,66,.25); }
  .skb-mod .skb-points i.on, .skb-mod .skb-tour i.fait { background: #F5C542; }
  .skb-mod p b { color: #F4EBDD; }
  .skb-mod .skb-points i:not(.on), .skb-mod .skb-tour i:not(.fait):not(.haut) { background: #3A2F57; }
  .skb-mod .skb-rond { font: 700 13px/1.1 Figtree, sans-serif; color: #2A1A05; box-shadow: none; }
  .skb-mod .skb-rond.esq { background: #F4EBDD; } .skb-mod .skb-rond.ult { background: #F5C542; }
  `,g=M?["Z","Q","S","D"]:["W","A","S","D"],z=`<div class="skb-touches"><kbd>${g[0]}</kbd><kbd>${g[1]}</kbd><kbd>${g[2]}</kbd><kbd>${g[3]}</kbd></div>`,k=[{titre:"Bouger",dessin:l?'<div class="skb-joy"></div>':z,texte:l?"Pose le pouce <b>n’importe où</b> sur l’écran et fais-le glisser&nbsp;: un joystick apparaît sous ton doigt.":`<b>${g.join("")}</b> ou les <b>flèches</b> pour te déplacer.`},{titre:"Attaquer",dessin:'<div class="skb-ligne"><div class="skb-mage"></div><div class="skb-trait"></div><div class="skb-ennemi"></div></div>',texte:"Ton <b>tir</b> part <b>tout seul</b> vers l’ennemi le plus proche, et tes sorts aussi. Arrête-toi un instant&nbsp;: tu tires <b>1,5&nbsp;fois plus vite</b>."+(l?" Pour t’arrêter, lève le pouce.":"")},{titre:"Esquiver et frapper fort",dessin:l?'<div class="skb-ligne"><div class="skb-rond esq">Esquive</div><div class="skb-rond ult">Ultime</div></div>':'<div class="skb-ligne"><kbd class="large">Espace</kbd><kbd>E</kbd></div>',texte:l?"Le bouton <b>Esquive</b> te fait traverser les attaques. L’<b>Ultime</b> arrive avec ta forme, à la fin de l’étage 3, et s’allume quand sa jauge est pleine. Les deux boutons sont en bas à gauche (à changer dans Pause → Joystick).":"<b>Espace</b>&nbsp;: une esquive qui traverse les attaques. <b>E</b>&nbsp;: l’Ultime, qui arrive avec ta forme à la fin de l’étage 3, quand sa jauge est pleine. <b>Échap</b> met en pause."},{titre:"Monter la tour",dessin:'<div class="skb-tour"><i class="fait"></i><i class="fait"></i><i></i><i></i><i class="haut"></i></div>',texte:"Chaque étage a un <b>objectif</b>, affiché en haut. Remplis-le&nbsp;: un <b>portail</b> s’ouvre vers l’étage suivant. À chaque niveau gagné, choisis une <b>carte</b>&nbsp;: un sort ou un pouvoir. À la fin de l’étage&nbsp;3, choisis ta <b>forme</b>. Tout en haut t’attend <b>Morvelle la Tisseuse</b>.",astuce:f==="iPad"||f==="Tablette"?"Le son démarre au premier toucher. La tablette se tient comme tu préfères.":l?"Tiens le téléphone en hauteur. Le son démarre au premier toucher.":"La touche M coupe ou remet le son."}];let i=null,b=!1,o=-1,E=null;function A(){if(i)return;const e=document.createElement("style");e.textContent=T,document.head.appendChild(e),i=document.createElement("div"),i.className="skb",i.hidden=!0,((/[?&]menus=(classique|moderne)/.exec(location.search)||[])[1]||n.get("sk-menus"))!=="classique"&&i.classList.add("skb-mod"),i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),document.body.appendChild(i)}function m(){b=!1,i.hidden=!0,i.innerHTML="",n.set(w,"1");const e=document.getElementById("jeu");if(e&&e.focus(),E){const t=E;E=null,t()}}function C(){const e=n.get(c)||"";i.innerHTML=`<form class="skb-carte" autocomplete="off">
      <p class="skb-kicker">Bienvenue dans la tour</p>
      <h1>Salomon Keane</h1>
      <p>Pépin, apprenti magicien, une tour, et Morvelle la Tisseuse tout en haut.</p>
      <label for="skb-nom">Comment t’appelles-tu&nbsp;?</label>
      <input id="skb-nom" name="nom" maxlength="30" placeholder="Ton prénom" value="${h(e)}" enterkeyhint="go" autocapitalize="words" spellcheck="false">
      <div class="skb-btns"><button class="on" type="submit" disabled>Entrer</button></div>
    </form>`;const t=i.querySelector("form"),s=t.querySelector("input"),a=t.querySelector("button"),d=()=>{a.disabled=!s.value.trim()};s.addEventListener("input",d),d(),t.addEventListener("submit",r=>{r.preventDefault();const p=s.value.trim().replace(/\s+/g," ").slice(0,30);p&&(n.set(c,p),v.ecrire(!0),n.get(w)?m():(o=0,q()))}),l||setTimeout(()=>s.focus(),50)}function q(){const e=k[o],t=o===k.length-1,s=n.get(c),a=t&&!!window.vkApp&&vkApp.overlay==="title"&&!(window.VK&&VK.Save&&VK.Save.read());i.innerHTML=`<div class="skb-carte">
      ${o===0&&s?`<p class="skb-salut">Bonjour ${h(s)}&nbsp;!</p>`:""}<p class="skb-kicker">Comment jouer · ${o+1}/${k.length}</p>
      <h2>${e.titre}</h2>
      <div class="skb-dessin" aria-hidden="true">${e.dessin}</div>
      <p>${e.texte}</p>${e.astuce?`<p class="skb-astuce">${e.astuce}</p>`:""}
      <div class="skb-btns">${t?"":'<button type="button" class="lien" data-a="passer">Passer</button>'}<button type="button" class="on" data-a="suivant">${t?a?"Jouer":"C’est compris":"Suivant"}</button></div>
      <div class="skb-points">${k.map((r,p)=>`<i class="${p===o?"on":""}"></i>`).join("")}</div>
    </div>`,i.querySelector('[data-a="suivant"]').addEventListener("click",()=>{t?(m(),a&&window.vkApp&&vkApp.game.mode!=="play"&&vkApp.activate("start",!0)):(o++,q())});const d=i.querySelector('[data-a="passer"]');d&&d.addEventListener("click",m),setTimeout(()=>{const r=i&&i.querySelector('[data-a="suivant"]');r&&!l&&r.focus()},30)}function x(e){A(),b=!0,i.hidden=!1,e==="tuto"?(o=0,q()):C()}const S=e=>{if(b&&(e.stopImmediatePropagation(),e.type==="keydown"&&e.key==="Enter"&&o>=0&&e.target.tagName!=="BUTTON")){e.preventDefault();const t=i.querySelector('[data-a="suivant"]');t&&t.click()}};window.addEventListener("keydown",S,!0),window.addEventListener("keyup",S,!0);const v={db:null,user:null,uid:null,peut:null,dernier:"",compte:!1,web:!1,async init(){try{if(window.VK&&VK.EnLigne&&VK.EnLigne.actif){this.web=!0,this.ecrire(!0),document.addEventListener("visibilitychange",()=>{document.hidden&&this.ecrire(!1)}),setInterval(()=>this.ecrire(!1),12e4);return}if(!window.claude||!window.claude.use)return;const[e,t]=await Promise.all([window.claude.use("db"),window.claude.use("user")]);if(!e||!t)return;this.db=e,this.user=t;try{this.peut=await t.can("data.write")}catch{this.peut=null}try{this.uid=await t.id()}catch{this.uid=null}let s=!1;try{s=!!await t.isOwner()}catch{}s&&P.activer(),this.ecrire(!0),document.addEventListener("visibilitychange",()=>{document.hidden&&this.ecrire(!1)}),setInterval(()=>this.ecrire(!1),12e4)}catch{}},stats(){const e=window.VK&&VK.Meta?VK.Meta.read():{};return{record:+(n.get("vk-record")||0)||0,parties:e.runs||0,gardiens:e.gardiens||0}},async ecrire(e){const t=n.get(c);if(!t||!this.web&&(!this.db||!this.uid||this.peut===!1))return;const s=this.stats(),a=JSON.stringify([t,s]);if(!e&&a===this.dernier)return;const d=e&&!this.compte;if(d&&(this.compte=!0),this.web){try{await VK.EnLigne.visite({nom:t,appareil:f,record:s.record,parties:s.parties,visite:d}),this.dernier=a}catch{d&&(this.compte=!1)}return}try{const r=this.db.doc("joueurs/"+this.uid),p=await r.get(),u=p.exists?p.data():{},j=Date.now();await r.set({nom:t,appareil:f,premiere:u.premiere||j,derniere:j,visites:(u.visites||0)+(d?1:0)||1,record:Math.max(u.record||0,s.record),parties:Math.max(u.parties||0,s.parties),gardiens:Math.max(u.gardiens||0,s.gardiens),appareils:Array.from(new Set([].concat(u.appareils||[],[f]))).slice(0,6)}),this.dernier=a}catch(r){r&&(r.code==="invalid_argument"||r.code==="not_granted")&&(this.peut=!1)}}},B=e=>{if(!e)return"—";const t=(Date.now()-e)/1e3;return t<120?"à l’instant":t<3600?`il y a ${Math.round(t/60)} min`:t<86400?`il y a ${Math.round(t/3600)} h`:new Date(e).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})},P={pill:null,activer(){A(),this.pill=document.createElement("button"),this.pill.type="button",this.pill.className="skb-pill",this.pill.textContent="Joueurs",this.pill.hidden=!0,this.pill.addEventListener("click",()=>this.ouvrir()),document.body.appendChild(this.pill),setInterval(()=>{const e=window.vkApp;this.pill.hidden=b||!e||e.overlay!=="title"},500)},async ouvrir(){b=!0,o=-1,i.hidden=!1,i.innerHTML='<div class="skb-carte large"><p class="skb-kicker">Visible par toi seul</p><h2>Qui a joué</h2><p>Chargement…</p></div>';let e=[];try{e=(await v.db.collection("joueurs").orderBy("derniere","desc").limit(200).get()).docs.map(a=>a.data())}catch{e=null}if(!b)return;const t=e==null?"<p>Impossible de lire la liste pour l’instant.</p>":e.length?`<p>${e.length} joueur${e.length>1?"s":""}</p><div class="skb-liste"><table><thead><tr><th>Joueur</th><th>Dernière venue</th><th>Record</th></tr></thead><tbody>${e.map(s=>`<tr>
            <td><b>${h(s.nom)}</b><small>${h((s.appareils||[s.appareil]).filter(Boolean).join(", "))}</small></td>
            <td>${B(s.derniere)}<small>${s.visites||1} visite${(s.visites||1)>1?"s":""}</small></td>
            <td>${s.record?`étage ${s.record}`:"—"}<small>${s.parties||0} partie${(s.parties||0)>1?"s":""}</small></td></tr>`).join("")}</tbody></table></div>`:"<p>Personne n’a encore donné son prénom. Partage le lien !</p>";i.innerHTML=`<div class="skb-carte large"><p class="skb-kicker">Visible par toi seul</p><h2>Qui a joué</h2>${t}
        <div class="skb-btns"><button type="button" class="lien" data-a="tuto">Revoir le tutoriel</button><button type="button" class="on" data-a="fermer">Fermer</button></div></div>`,i.querySelector('[data-a="fermer"]').addEventListener("click",m),i.querySelector('[data-a="tuto"]').addEventListener("click",()=>x("tuto"))}},K=window.VK||(window.VK={});K.Bienvenue={ouvrir:x,nom:()=>n.get(c)||""};const L=()=>{A(),n.get(c)?n.get(w)?v.ecrire(!0):x("tuto"):x("nom"),v.init()};document.body?L():document.addEventListener("DOMContentLoaded",L)})();
