import{q as t,p as o}from"./p-005b2cbe.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const e=e=>{let l,f,d,v,p=10*-u,m=0;const b=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),h=new WeakMap,w=o=>{p=t(o),x(o)},T=()=>{clearTimeout(v),v=void 0,f&&(k(!1),f=void 0)},S=t=>{f||void 0!==l&&null!==l.parentElement||(l=void 0,E(i(t),t))},x=t=>{E(void 0,t)},E=(t,e)=>{if(t&&t===f)return;clearTimeout(v),v=void 0;const{x:i,y:r}=o(e);if(f){if(h.has(f))throw new Error("internal error");f.classList.contains(c)||D(f,i,r),k(!0)}if(t){const o=h.get(t);o&&(clearTimeout(o),h.delete(t));const e=n(t)?0:a;t.classList.remove(c),v=setTimeout((()=>{D(t,i,r),v=void 0}),e)}f=t},D=(t,o,e)=>{m=Date.now(),t.classList.add(c);const i=b&&r(t);i&&i.addRipple&&(j(),d=i.addRipple(o,e))},j=()=>{void 0!==d&&(d.then((t=>t())),d=void 0)},k=t=>{j();const o=f;if(!o)return;const e=s-Date.now()+m;if(t&&e>0&&!n(o)){const t=setTimeout((()=>{o.classList.remove(c),h.delete(o)}),s);h.set(o,t)}else o.classList.remove(c)},q=document;q.addEventListener("ionScrollStart",(t=>{l=t.target,T()})),q.addEventListener("ionScrollEnd",(()=>{l=void 0})),q.addEventListener("ionGestureCaptured",T),q.addEventListener("touchstart",(o=>{p=t(o),S(o)}),!0),q.addEventListener("touchcancel",w,!0),q.addEventListener("touchend",w,!0),q.addEventListener("mousedown",(o=>{const e=t(o)-u;p<e&&S(o)}),!0),q.addEventListener("mouseup",(o=>{const e=t(o)-u;p<e&&x(o)}),!0),q.addEventListener("contextmenu",(t=>{x(t)}),!0)},i=t=>{if(!t.composedPath)return t.target.closest(".ion-activatable");{const o=t.composedPath();for(let t=0;t<o.length-2;t++){const e=o[t];if(!(e instanceof ShadowRoot)&&e.classList.contains("ion-activatable"))return e}}},n=t=>t.classList.contains("ion-activatable-instant"),r=t=>{if(t.shadowRoot){const o=t.shadowRoot.querySelector("ion-ripple-effect");if(o)return o}return t.querySelector("ion-ripple-effect")},c="ion-activated",a=200,s=200,u=2500;export{e as startTapClick}