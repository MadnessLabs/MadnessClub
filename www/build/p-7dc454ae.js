import{w as t}from"./p-884d6dd0.js";import{h as o,a as e,b as n}from"./p-c563b4de.js";import{createGesture as r}from"./p-f5849699.js";const s=(s,d)=>{let a,i;const c=(t,o,e)=>{if("undefined"==typeof document)return;const n=document.elementFromPoint(t,o);n&&d(n)?n!==a&&(f(),m(n,e)):f()},m=(o,e)=>{a=o,i||(i=a);const n=a;t((()=>n.classList.add("ion-activated"))),e()},f=(o=!1)=>{if(!a)return;const e=a;t((()=>e.classList.remove("ion-activated"))),o&&i!==a&&a.click(),a=void 0};return r({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,e),onMove:t=>c(t.currentX,t.currentY,n),onEnd:()=>{f(!0),o(),i=void 0}})};export{s as c}