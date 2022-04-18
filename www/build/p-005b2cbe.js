/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const n=(n,e=0)=>new Promise((i=>{t(n,e,i)})),t=(n,t=0,e)=>{let i,r;const o={passive:!0},a=()=>{i&&i()},s=t=>{void 0!==t&&n!==t.target||(a(),e(t))};return n&&(n.addEventListener("webkitTransitionEnd",s,o),n.addEventListener("transitionend",s,o),r=setTimeout(s,t+500),i=()=>{r&&(clearTimeout(r),r=void 0),n.removeEventListener("webkitTransitionEnd",s,o),n.removeEventListener("transitionend",s,o)}),a},e=(n,t)=>{n.componentOnReady?n.componentOnReady().then((n=>t(n))):s((()=>t(n)))},i=(n,t=[])=>{const e={};return t.forEach((t=>{n.hasAttribute(t)&&(null!==n.getAttribute(t)&&(e[t]=n.getAttribute(t)),n.removeAttribute(t))})),e},r=(n,t,e,i)=>{var r;if("undefined"!=typeof window){const o=window,a=null===(r=null==o?void 0:o.Ionic)||void 0===r?void 0:r.config;if(a){const r=a.get("_ael");if(r)return r(n,t,e,i);if(a._ael)return a._ael(n,t,e,i)}}return n.addEventListener(t,e,i)},o=(n,t,e,i)=>{var r;if("undefined"!=typeof window){const o=window,a=null===(r=null==o?void 0:o.Ionic)||void 0===r?void 0:r.config;if(a){const r=a.get("_rel");if(r)return r(n,t,e,i);if(a._rel)return a._rel(n,t,e,i)}}return n.removeEventListener(t,e,i)},a=(n,t=n)=>n.shadowRoot||t,s=n=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(n):"function"==typeof requestAnimationFrame?requestAnimationFrame(n):setTimeout(n),u=n=>!!n.shadowRoot&&!!n.attachShadow,l=n=>{const t=n.closest("ion-item");return t?t.querySelector("ion-label"):null},d=n=>{if(n.focus(),n.classList.contains("ion-focusable")){const t=n.closest("ion-app");t&&t.setFocus([n])}},f=(n,t)=>{let e;const i=n.getAttribute("aria-labelledby"),r=n.id;let o=null!==i&&""!==i.trim()?i:t+"-lbl",a=null!==i&&""!==i.trim()?document.getElementById(i):l(n);return a?(null===i&&(a.id=o),e=a.textContent,a.setAttribute("aria-hidden","true")):""!==r.trim()&&(a=document.querySelector(`label[for="${r}"]`),a&&(""!==a.id?o=a.id:a.id=o=`${r}-lbl`,e=a.textContent)),{label:a,labelId:o,labelText:e}},c=(n,t,e,i,r)=>{if(n||u(t)){let n=t.querySelector("input.aux-input");n||(n=t.ownerDocument.createElement("input"),n.type="hidden",n.classList.add("aux-input"),t.appendChild(n)),n.disabled=r,n.name=e,n.value=i||""}},m=(n,t,e)=>Math.max(n,Math.min(t,e)),b=(n,t)=>{if(!n){const n="ASSERT: "+t;throw console.error(n),new Error(n)}},w=n=>n.timeStamp||Date.now(),v=n=>{if(n){const t=n.changedTouches;if(t&&t.length>0){const n=t[0];return{x:n.clientX,y:n.clientY}}if(void 0!==n.pageX)return{x:n.pageX,y:n.pageY}}return{x:0,y:0}},p=n=>{const t="rtl"===document.dir;switch(n){case"start":return t;case"end":return!t;default:throw new Error(`"${n}" is not a valid value for [side]. Use "start" or "end" instead.`)}},_=(n,t)=>{const e=n._original||n;return{_original:n,emit:y(e.emit.bind(e),t)}},y=(n,t=0)=>{let e;return(...i)=>{clearTimeout(e),e=setTimeout(n,t,...i)}},T=(n,t)=>{if(null!=n||(n={}),null!=t||(t={}),n===t)return!0;const e=Object.keys(n);if(e.length!==Object.keys(t).length)return!1;for(const i of e){if(!(i in t))return!1;if(n[i]!==t[i])return!1}return!0};export{s as a,a as b,r as c,_ as d,m as e,l as f,f as g,u as h,i,o as j,d as k,e as l,p as m,b as n,y as o,v as p,w as q,c as r,T as s,n as t}