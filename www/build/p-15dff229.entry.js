import{r as i,c as t,h as n}from"./p-21a72a99.js";import{D as s}from"./p-5e4d4f5d.js";import{b as o}from"./p-8b39d8b1.js";import"./p-890f8034.js";import"./p-007262f0.js";import"./p-add30d46.js";import"./p-005b2cbe.js";const a=class{constructor(n){i(this,n),this.ionInput=t(this,"ionInput",7),this.fireenjinFetch=t(this,"fireenjinFetch",7),this.type="text",this.searchParams={},this.disableSearch=!1,this.mode="popover",this.results=[]}async checkValidity(i){return(this.required||i&&i.setValidationClass)&&await this.setValidationClass(i&&i.validationClassOptions?i.validationClassOptions:null),!this.inputEl||await(await this.inputEl.getInputElement()).checkValidity()}async reportValidity(){const i=!this.inputEl||await(await this.inputEl.getInputElement()).reportValidity();return this.inputEl.classList[i?"remove":"add"]("invalid"),await this.setValidationClass(),i}async onBlur(){const i=await this.checkValidity();this.inputEl.classList[i?"remove":"add"]("invalid"),await this.setValidationClass()}async onSuccess(i){var t,n,s,a;(null===(t=null==i?void 0:i.detail)||void 0===t?void 0:t.endpoint)===this.endpoint&&(null===(n=null==i?void 0:i.detail)||void 0===n?void 0:n.data)&&(this.results=await(s=i.detail.data,a=this.resultsKey?this.resultsKey:"searchUsers.results",a.split(".").reduce(((i,t)=>i[t]),s)),console.log(this.results),"popover"===this.mode&&(this.resultsPopover=await o.create({translucent:!0,showBackdrop:!1,event:i.detail.event,component:"fireenjin-input-search-popover",componentProps:{results:this.results,template:this.template}}),this.resultsPopover.present()))}onInput(i){var t,n;this.disableSearch||(null===(n=null===(t=null==i?void 0:i.target)||void 0===t?void 0:t.value)||void 0===n?void 0:n.length)<=1||this.fireenjinFetch.emit({event:i,endpoint:this.endpoint,params:{data:Object.assign({query:i.target.value},this.searchParams)},dataPropsMap:this.dataPropsMap})}async clearResults(){return this.results=[]}async closePopover(){return this.resultsPopover.dismiss()}async openPopover(){return this.resultsPopover.present()}async setValidationClass(i){const t=Object.values(this.itemEl.classList);t.indexOf("invalid")>=0&&this.itemEl.classList.remove("invalid"),t.indexOf("valid")>=0&&this.itemEl.classList.remove("valid");const n=await(await this.inputEl.getInputElement()).checkValidity();(!i||!i.ignoreInvalid||i&&i.ignoreInvalid&&n)&&this.itemEl.classList.add(n?"valid":"invalid")}render(){var i;return[n("ion-item",{lines:this.lines,class:"search-input",ref:i=>this.itemEl=i,onClick:i=>this.onInput(i)},n("slot",{name:"start"}),this.iconStart&&n("ion-icon",{name:this.iconStart,slot:"start"}),this.label&&n("ion-label",{position:this.labelPosition},this.label),n("ion-input",{onInput:i=>this.onInput(i),ref:i=>this.inputEl=i,disabled:this.disabled,type:this.type,name:this.name,placeholder:this.placeholder,required:this.required,autofocus:this.autofocus,value:this.value}),this.iconEnd&&n("ion-icon",{name:this.iconEnd,slot:"end"}),n("slot",{name:"end"})),"inline"===this.mode&&(null===(i=this.results)||void 0===i?void 0:i.length)?this.results.map((i=>this.template(i))):null]}};(function(i,t,n,s){var o,a=arguments.length,e=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)e=Reflect.decorate(i,t,n,s);else for(var r=i.length-1;r>=0;r--)(o=i[r])&&(e=(a<3?o(e):a>3?o(t,n,e):o(t,n))||e);a>3&&e&&Object.defineProperty(t,n,e)})([s(1e3)],a.prototype,"onInput",null),a.style='fireenjin-input-search .search-input ion-label{color:var(--ion-color-medium) !important;font-size:12px;font-weight:bold;text-transform:uppercase;font-family:arial;display:block;background:transparent;text-align:left;padding:0 0 8px 0;font-family:var(--ion-font-family)}fireenjin-input-search ion-icon{color:var(--ion-text-color)}fireenjin-input-search .search-input ion-icon[slot="start"]{margin-right:5px}fireenjin-input-search .search-input [slot="end"]{margin-left:5px}fireenjin-input-search .invalid{--border-color:var(--ion-color-danger) !important}fireenjin-input-search .invalid ion-label{color:var(--ion-color-danger) !important}fireenjin-input-search .valid{--border-color:var(--ion-color-success) !important}fireenjin-input-search .valid ion-label{color:var(--ion-color-success) !important}';export{a as fireenjin_input_search}