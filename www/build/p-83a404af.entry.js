import{r as s,h as t,H as i}from"./p-a6d76906.js";import{g as o}from"./p-99a4a552.js";import{m as a}from"./p-c99cc42e.js";import{u as r}from"./p-d2fc0195.js";import"./p-f2660943.js";import"./p-b5f35666.js";import"./p-d8292a8c.js";let e=class{constructor(t){s(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>a.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await r(this.menu)}render(){const s=o(this),a=this.autoHide&&!this.visible;return t(i,{onClick:this.onClick,"aria-hidden":a?"true":null,class:{[s]:!0,"menu-toggle-hidden":a}},t("slot",null))}};e.style=":host(.menu-toggle-hidden){display:none}";export{e as ion_menu_toggle}