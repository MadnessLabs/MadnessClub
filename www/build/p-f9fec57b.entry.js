import{r as s,h as t,H as i}from"./p-21a72a99.js";import{g as o}from"./p-007262f0.js";import{m as e}from"./p-2180ad2c.js";import{u as a}from"./p-6ec34938.js";import"./p-add30d46.js";import"./p-005b2cbe.js";import"./p-fe17063e.js";const n=class{constructor(t){s(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>e.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await a(this.menu)}render(){const s=o(this),e=this.autoHide&&!this.visible;return t(i,{onClick:this.onClick,"aria-hidden":e?"true":null,class:{[s]:!0,"menu-toggle-hidden":e}},t("slot",null))}};n.style=":host(.menu-toggle-hidden){display:none}";export{n as ion_menu_toggle}