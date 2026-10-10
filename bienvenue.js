(function(){const o={get(e){try{return localStorage.getItem(e)}catch{return null}},set(e,t){try{localStorage.setItem(e,t)}catch{}}},g=e=>String(e??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),c="sk-nom",w="sk-tuto-vu",y=navigator.userAgent||"",S=!!(window.matchMedia&&window.matchMedia("(pointer: coarse)").matches),T=/iPad/.test(y)||/Macintosh/.test(y)&&navigator.maxTouchPoints>1,z=Math.min(screen.width||0,screen.height||0)<600,b=T?"iPad":S?z?/iPhone/.test(y)?"iPhone":"Téléphone":"Tablette":"Ordinateur",l=S,A=/^fr|^be/i.test(navigator.language||""),P=`
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
  .skb-rond { width: 64px; height: 64px; border-radius: 50%; display: grid; place-items: center; font: 900 13px/1.1 "Alegreya Sans", sans-serif; color: #2a1838; box-shadow: 0 4px 0 #1c1626; }
  .skb-mage { width: 22px; height: 22px; border-radius: 50%; background: #5fd4ff; box-shadow: 0 0 0 4px rgba(95,212,255,.25); }
  .skb-trait { width: 70px; height: 4px; border-radius: 2px; background: linear-gradient(90deg, rgba(255,240,106,0), #fff06a); animation: skb-tir 1s linear infinite; }
  @keyframes skb-tir { from { transform: scaleX(.2); transform-origin: left; opacity: .3 } to { transform: scaleX(1); transform-origin: left; opacity: 1 } }
  .skb-ennemi { width: 26px; height: 26px; border-radius: 6px; background: #e0303c; transform: rotate(45deg); }
  .skb-tour { display: flex; flex-direction: column-reverse; gap: 4px; align-items: center; }
  .skb-tour i { display: block; width: 74px; height: 16px; border-radius: 4px; background: #5b5470; }
  .skb-tour i.fait { background: #e0a630; }
  .skb-tour i.haut { width: 40px; background: #ff2d9a; }
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
  `,f=A?["Z","Q","S","D"]:["W","A","S","D"],K=`<div class="skb-touches"><kbd>${f[0]}</kbd><kbd>${f[1]}</kbd><kbd>${f[2]}</kbd><kbd>${f[3]}</kbd></div>`,m=[{titre:"Bouger",dessin:l?'<div class="skb-joy"></div>':K,texte:l?"Pose le pouce sur la <b>moitié gauche</b> de l’écran et fais-le glisser : un joystick apparaît sous ton doigt.":`<b>${f.join("")}</b> ou les <b>flèches</b> pour te déplacer.`},{titre:"Attaquer",dessin:'<div class="skb-ligne"><div class="skb-mage"></div><div class="skb-trait"></div><div class="skb-ennemi"></div></div>',texte:"Tes sorts partent <b>tout seuls</b> vers l’ennemi le plus proche. Arrête-toi un instant : ton tir frappe <b>×1,5</b>."+(l?" Pour t’arrêter, lève le pouce.":"")},{titre:"Esquiver et frapper fort",dessin:l?'<div class="skb-ligne"><div class="skb-rond" style="background:#f4ead2">Esquive</div><div class="skb-rond" style="background:#e0a630">Ultime</div></div>':'<div class="skb-ligne"><kbd class="large">Espace</kbd><kbd>E</kbd></div>',texte:l?"Le bouton <b>Esquive</b> te fait traverser les attaques. L’<b>Ultime</b> s’allume quand sa jauge est pleine. Les deux boutons sont en bas, du côté opposé au joystick.":"<b>Espace</b> : une esquive qui traverse les attaques. <b>E</b> : l’Ultime, quand sa jauge est pleine. <b>Échap</b> met en pause."},{titre:"Monter la tour",dessin:'<div class="skb-tour"><i class="fait"></i><i class="fait"></i><i></i><i></i><i class="haut"></i></div>',texte:"Chaque étage a un <b>objectif</b>, affiché en haut. Remplis-le : un <b>portail</b> s’ouvre vers l’étage suivant. À chaque niveau gagné, choisis un nouveau sort. À l’étage 3, choisis ta <b>forme</b>. Tout en haut t’attend <b>Morvelle la Tisseuse</b>.",astuce:b==="iPad"||b==="Tablette"?"Le son démarre au premier toucher. La tablette se tient comme tu préfères.":l?"Tiens le téléphone en hauteur. Le son démarre au premier toucher.":"La touche M coupe ou remet le son."}];let s=null,p=!1,d=-1,E=null;function $(){if(s)return;const e=document.createElement("style");e.textContent=P,document.head.appendChild(e),s=document.createElement("div"),s.className="skb",s.hidden=!0,s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),document.body.appendChild(s)}function x(){p=!1,s.hidden=!0,s.innerHTML="",o.set(w,"1");const e=document.getElementById("jeu");if(e&&e.focus(),E){const t=E;E=null,t()}}function V(){const e=o.get(c)||"";s.innerHTML=`<form class="skb-carte" autocomplete="off">
      <p class="skb-kicker">Bienvenue dans la tour</p>
      <h1>Salomon Keane</h1>
      <p>Un apprenti magicien, une tour, et Morvelle la Tisseuse tout en haut.</p>
      <label for="skb-nom">Comment t’appelles-tu ?</label>
      <input id="skb-nom" name="nom" maxlength="30" placeholder="Ton prénom" value="${g(e)}" enterkeyhint="go" autocapitalize="words" spellcheck="false">
      <div class="skb-btns"><button class="on" type="submit" disabled>Entrer</button></div>
    </form>`;const t=s.querySelector("form"),i=t.querySelector("input"),a=t.querySelector("button"),n=()=>{a.disabled=!i.value.trim()};i.addEventListener("input",n),n(),t.addEventListener("submit",r=>{r.preventDefault();const h=i.value.trim().replace(/\s+/g," ").slice(0,30);h&&(o.set(c,h),v.ecrire(!0),o.get(w)?x():(d=0,L()))}),l||setTimeout(()=>i.focus(),50)}function L(){const e=m[d],t=d===m.length-1,i=o.get(c);s.innerHTML=`<div class="skb-carte">
      ${d===0&&i?`<p class="skb-salut">Bonjour ${g(i)} !</p>`:""}<p class="skb-kicker">Comment jouer · ${d+1}/${m.length}</p>
      <h2>${e.titre}</h2>
      <div class="skb-dessin" aria-hidden="true">${e.dessin}</div>
      <p>${e.texte}</p>${e.astuce?`<p class="skb-astuce">${e.astuce}</p>`:""}
      <div class="skb-btns">${t?"":'<button type="button" class="lien" data-a="passer">Passer</button>'}<button type="button" class="on" data-a="suivant">${t?"Jouer":"Suivant"}</button></div>
      <div class="skb-points">${m.map((n,r)=>`<i class="${r===d?"on":""}"></i>`).join("")}</div>
    </div>`,s.querySelector('[data-a="suivant"]').addEventListener("click",()=>{t?x():(d++,L())});const a=s.querySelector('[data-a="passer"]');a&&a.addEventListener("click",x),setTimeout(()=>{const n=s&&s.querySelector('[data-a="suivant"]');n&&!l&&n.focus()},30)}function k(e){$(),p=!0,s.hidden=!1,e==="tuto"?(d=0,L()):V()}const j=e=>{if(p&&(e.stopImmediatePropagation(),e.type==="keydown"&&e.key==="Enter"&&d>=0&&e.target.tagName!=="BUTTON")){e.preventDefault();const t=s.querySelector('[data-a="suivant"]');t&&t.click()}};window.addEventListener("keydown",j,!0),window.addEventListener("keyup",j,!0);const v={db:null,user:null,uid:null,peut:null,dernier:"",compte:!1,web:!1,async init(){try{if(window.VK&&VK.EnLigne&&VK.EnLigne.actif){this.web=!0,this.ecrire(!0),document.addEventListener("visibilitychange",()=>{document.hidden&&this.ecrire(!1)}),setInterval(()=>this.ecrire(!1),12e4);return}if(!window.claude||!window.claude.use)return;const[e,t]=await Promise.all([window.claude.use("db"),window.claude.use("user")]);if(!e||!t)return;this.db=e,this.user=t;try{this.peut=await t.can("data.write")}catch{this.peut=null}try{this.uid=await t.id()}catch{this.uid=null}let i=!1;try{i=!!await t.isOwner()}catch{}i&&D.activer(),this.ecrire(!0),document.addEventListener("visibilitychange",()=>{document.hidden&&this.ecrire(!1)}),setInterval(()=>this.ecrire(!1),12e4)}catch{}},stats(){const e=window.VK&&VK.Meta?VK.Meta.read():{};return{record:+(o.get("vk-record")||0)||0,parties:e.runs||0,gardiens:e.gardiens||0}},async ecrire(e){const t=o.get(c);if(!t||!this.web&&(!this.db||!this.uid||this.peut===!1))return;const i=this.stats(),a=JSON.stringify([t,i]);if(!e&&a===this.dernier)return;const n=e&&!this.compte;if(n&&(this.compte=!0),this.web){try{await VK.EnLigne.visite({nom:t,appareil:b,record:i.record,parties:i.parties,visite:n}),this.dernier=a}catch{n&&(this.compte=!1)}return}try{const r=this.db.doc("joueurs/"+this.uid),h=await r.get(),u=h.exists?h.data():{},M=Date.now();await r.set({nom:t,appareil:b,premiere:u.premiere||M,derniere:M,visites:(u.visites||0)+(n?1:0)||1,record:Math.max(u.record||0,i.record),parties:Math.max(u.parties||0,i.parties),gardiens:Math.max(u.gardiens||0,i.gardiens),appareils:Array.from(new Set([].concat(u.appareils||[],[b]))).slice(0,6)}),this.dernier=a}catch(r){r&&(r.code==="invalid_argument"||r.code==="not_granted")&&(this.peut=!1)}}},C=e=>{if(!e)return"—";const t=(Date.now()-e)/1e3;return t<120?"à l’instant":t<3600?`il y a ${Math.round(t/60)} min`:t<86400?`il y a ${Math.round(t/3600)} h`:new Date(e).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})},D={pill:null,activer(){$(),this.pill=document.createElement("button"),this.pill.type="button",this.pill.className="skb-pill",this.pill.textContent="Joueurs",this.pill.hidden=!0,this.pill.addEventListener("click",()=>this.ouvrir()),document.body.appendChild(this.pill),setInterval(()=>{const e=window.vkApp;this.pill.hidden=p||!e||e.overlay!=="title"},500)},async ouvrir(){p=!0,d=-1,s.hidden=!1,s.innerHTML='<div class="skb-carte large"><p class="skb-kicker">Visible par toi seul</p><h2>Qui a joué</h2><p>Chargement…</p></div>';let e=[];try{e=(await v.db.collection("joueurs").orderBy("derniere","desc").limit(200).get()).docs.map(a=>a.data())}catch{e=null}if(!p)return;const t=e==null?"<p>Impossible de lire la liste pour l’instant.</p>":e.length?`<p>${e.length} joueur${e.length>1?"s":""}</p><div class="skb-liste"><table><thead><tr><th>Joueur</th><th>Dernière venue</th><th>Record</th></tr></thead><tbody>${e.map(i=>`<tr>
            <td><b>${g(i.nom)}</b><small>${g((i.appareils||[i.appareil]).filter(Boolean).join(", "))}</small></td>
            <td>${C(i.derniere)}<small>${i.visites||1} visite${(i.visites||1)>1?"s":""}</small></td>
            <td>${i.record?`étage ${i.record}`:"—"}<small>${i.parties||0} partie${(i.parties||0)>1?"s":""}</small></td></tr>`).join("")}</tbody></table></div>`:"<p>Personne n’a encore donné son prénom. Partage le lien !</p>";s.innerHTML=`<div class="skb-carte large"><p class="skb-kicker">Visible par toi seul</p><h2>Qui a joué</h2>${t}
        <div class="skb-btns"><button type="button" class="lien" data-a="tuto">Revoir le tutoriel</button><button type="button" class="on" data-a="fermer">Fermer</button></div></div>`,s.querySelector('[data-a="fermer"]').addEventListener("click",x),s.querySelector('[data-a="tuto"]').addEventListener("click",()=>k("tuto"))}},B=window.VK||(window.VK={});B.Bienvenue={ouvrir:k,nom:()=>o.get(c)||""};const q=()=>{$(),o.get(c)?o.get(w)?v.ecrire(!0):k("tuto"):k("nom"),v.init()};document.body?q():document.addEventListener("DOMContentLoaded",q)})();
