import{r as e,h as t}from"./p-21a72a99.js";const a=class{constructor(t){e(this,t),this.selected=!1}render(){return t("div",{class:{"tab-selected":this.selected,"tab-deselected":!this.selected,"tab-wrapper":!0}},t("slot",null))}};a.style="fireenjin-tab .tab-wrapper{opacity:0;pointer-events:none;height:0;display:block;transition:0.3s ease opacity;overflow:hidden}fireenjin-tab .tab-wrapper.tab-selected{opacity:1;pointer-events:all;height:auto;overflow:auto}";export{a as fireenjin_tab}