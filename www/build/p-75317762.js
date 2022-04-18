import{e as o,w as s}from"./p-21a72a99.js";import{a,s as t}from"./p-d5b56948.js";import{l as r}from"./p-005b2cbe.js";import"./p-e8c0a813.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const e=()=>{const e=window;e.addEventListener("statusTap",(()=>{o((()=>{const o=document.elementFromPoint(e.innerWidth/2,e.innerHeight/2);if(!o)return;const n=a(o);n&&new Promise((o=>r(n,o))).then((()=>{s((async()=>{n.style.setProperty("--overflow","hidden"),await t(n,300),n.style.removeProperty("--overflow")}))}))}))}))};export{e as startStatusTap}