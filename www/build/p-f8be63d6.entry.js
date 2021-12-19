import{r as i,h as t,H as n,c as e,w as s,e as r,a as o,f as a}from"./p-884d6dd0.js";import{g as l,c as h}from"./p-5c0ea631.js";import{o as c,c as d}from"./p-7840618d.js";import{s as g}from"./p-111520a0.js";import{c as p}from"./p-b5f35666.js";let f=class{constructor(t){i(this,t),this.button=!1,this.type="button",this.disabled=!1,this.routerDirection="forward"}isClickable(){return void 0!==this.href||this.button}renderCard(i){const n=this.isClickable();if(!n)return[t("slot",null)];const{href:e,routerAnimation:s,routerDirection:r}=this,o=n?void 0===e?"button":"a":"div";return t(o,Object.assign({},"button"===o?{type:this.type}:{download:this.download,href:this.href,rel:this.rel,target:this.target},{class:"card-native",part:"native",disabled:this.disabled,onClick:i=>c(e,i,r,s)}),t("slot",null),n&&"md"===i&&t("ion-ripple-effect",null))}render(){const i=l(this);return t(n,{class:d(this.color,{[i]:!0,"card-disabled":this.disabled,"ion-activatable":this.isClickable()})},this.renderCard(i))}};f.style={ios:":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-600, #666666)));margin-left:16px;margin-right:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;transform:translateZ(0);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);font-size:14px;box-shadow:0 4px 16px rgba(0, 0, 0, 0.12)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.ion-activated){transform:scale3d(0.97, 0.97, 1)}",md:":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, #737373)));margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:14px;box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}"};let m=class{constructor(t){i(this,t),this.ionInfinite=e(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=()=>{const i=this.scrollEl;if(!i||!this.canStart())return 1;const t=this.el.offsetHeight;if(0===t)return 2;const n=i.scrollTop,e=i.offsetHeight,s=0!==this.thrPc?e*this.thrPc:this.thrPx;if(("bottom"===this.position?i.scrollHeight-t-n-s-e:n-t-s)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4}}thresholdChanged(){const i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)}disabledChanged(){const i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)}async connectedCallback(){const i=this.el.closest("ion-content");i?(this.scrollEl=await i.getScrollElement(),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&s((()=>{this.scrollEl&&(this.scrollEl.scrollTop=this.scrollEl.scrollHeight-this.scrollEl.clientHeight)}))):console.error("<ion-infinite-scroll> must be used inside an <ion-content>")}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}async complete(){const i=this.scrollEl;if(this.isLoading&&i&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;const t=i.scrollHeight-i.scrollTop;requestAnimationFrame((()=>{r((()=>{const n=i.scrollHeight-t;requestAnimationFrame((()=>{s((()=>{i.scrollTop=n,this.isBusy=!1}))}))}))}))}}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}enableScrollEvents(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const i=l(this);return t(n,{class:{[i]:!0,"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!this.disabled}})}get el(){return o(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}};m.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";let u=class{constructor(t){i(this,t)}componentDidLoad(){if(void 0===this.loadingSpinner){const i=l(this);this.loadingSpinner=h.get("infiniteLoadingSpinner",h.get("spinner","ios"===i?"lines":"crescent"))}}render(){const i=l(this);return t(n,{class:{[i]:!0,[`infinite-scroll-content-${i}`]:!0}},t("div",{class:"infinite-loading"},this.loadingSpinner&&t("div",{class:"infinite-loading-spinner"},t("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&t("div",{class:"infinite-loading-text",innerHTML:g(this.loadingText)})))}};u.style={ios:"ion-infinite-scroll-content{display:flex;flex-direction:column;justify-content:center;min-height:84px;text-align:center;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",md:"ion-infinite-scroll-content{display:flex;flex-direction:column;justify-content:center;min-height:84px;text-align:center;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"};const b=(i,t)=>{const n=v(i,t);return n&&i.ownerDocument?i.ownerDocument.importNode(n.content,!0).children[0]:null},v=(i,t)=>{switch(t){case"item":return i.querySelector("template:not([name])");case"header":return i.querySelector("template[name=header]");case"footer":return i.querySelector("template[name=footer]")}},x=(i,t,n,e,s,r,o,a,l,h,c,d)=>{const g=[],p=d+c;for(let d=c;d<p;d++){const c=i[d];if(s){const t=s(c,d,i);null!=t&&g.push({i:h++,type:"header",value:t,index:d,height:n?n(t,d):o,reads:n?0:2,visible:!!n})}if(g.push({i:h++,type:"item",value:c,index:d,height:t?t(c,d):l,reads:t?0:2,visible:!!t}),r){const t=r(c,d,i);null!=t&&g.push({i:h++,type:"footer",value:t,index:d,height:e?e(t,d):a,reads:e?0:2,visible:!!e})}}return g};let w=class{constructor(t){i(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=()=>{this.updateVirtualScroll()}}itemsChanged(){this.calcCells(),this.updateVirtualScroll()}componentWillLoad(){console.warn("[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.")}async connectedCallback(){const i=this.el.closest("ion-content");i?(this.scrollEl=await i.getScrollElement(),this.contentEl=i,this.calcCells(),this.updateState()):console.error("<ion-virtual-scroll> must be used inside an <ion-content>")}componentDidUpdate(){this.updateState()}disconnectedCallback(){this.scrollEl=void 0}onResize(){this.calcCells(),this.updateVirtualScroll()}positionForItem(i){return Promise.resolve(((i,t,n)=>{const e=t.find((t=>"item"===t.type&&t.index===i));return e?n[e.i]:-1})(i,this.cells,this.getHeightIndex()))}async checkRange(i,t=-1){if(!this.items)return;const n=-1===t?this.items.length-i:t,e=((i,t)=>0===t?0:t===(i.length>0?i[i.length-1].index:0)+1?i.length:i.findIndex((i=>i.index===t)))(this.cells,i),s=x(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,e,i,n);this.cells=((i,t,n)=>{if(0===n&&t.length>=i.length)return t;for(let e=0;e<t.length;e++)i[e+n]=t[e];return i})(this.cells,s,e),this.lastItemLen=this.items.length,this.indexDirty=Math.max(i-1,0),this.scheduleUpdate()}async checkEnd(){this.items&&this.checkRange(this.lastItemLen)}updateVirtualScroll(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),r(this.readVS.bind(this)),s(this.writeVS.bind(this)))}readVS(){const{contentEl:i,scrollEl:t,el:n}=this;let e=0,s=n;for(;s&&s!==i;)e+=s.offsetTop,s=s.offsetParent;this.viewportOffset=e,t&&(this.viewportHeight=t.offsetHeight,this.currentScrollTop=t.scrollTop)}writeVS(){const i=this.indexDirty,t=(s=this.currentScrollTop-this.viewportOffset,r=this.viewportHeight,{top:Math.max(s-100,0),bottom:s+r+100}),n=this.getHeightIndex(),e=((i,t)=>{const n=t.top,e=t.bottom;let s=0;for(;s<i.length&&!(i[s]>n);s++);const r=Math.max(s-2-1,0);for(;s<i.length&&!(i[s]>=e);s++);return{offset:r,length:Math.min(s+2,i.length)-r}})(n,t);var s,r;((i,t,n)=>i<=n.offset+n.length||t.offset!==n.offset||t.length!==n.length)(i,this.range,e)&&(this.range=e,((i,t,n,e)=>{for(const t of i)t.change=0,t.d=!0;const s=[],r=e.offset+e.length;for(let o=e.offset;o<r;o++){const e=n[o],r=i.find((i=>i.d&&i.cell===e));if(r){const i=t[o];i!==r.top&&(r.top=i,r.change=1),r.d=!1}else s.push(e)}const o=i.filter((i=>i.d));for(const n of s){const e=o.find((i=>i.d&&i.cell.type===n.type)),s=n.i;e?(e.d=!1,e.change=2,e.cell=n,e.top=t[s]):i.push({d:!1,cell:n,visible:!0,change:2,top:t[s]})}i.filter((i=>i.d&&-9999!==i.top)).forEach((i=>{i.change=1,i.top=-9999}))})(this.virtualDom,n,this.cells,e),this.nodeRender?((i,t,n,e)=>{const s=Array.from(i.children).filter((i=>"TEMPLATE"!==i.tagName)),r=s.length;let o;for(let a=0;a<n.length;a++){const l=n[a],h=l.cell;if(2===l.change){if(a<r)o=s[a],t(o,h,a);else{const n=b(i,h.type);o=t(n,h,a)||n,o.classList.add("virtual-item"),i.appendChild(o)}o.$ionCell=h}else o=s[a];0!==l.change&&(o.style.transform=`translate3d(0,${l.top}px,0)`);const c=h.visible;l.visible!==c&&(c?o.classList.remove("virtual-loading"):o.classList.add("virtual-loading"),l.visible=c),h.reads>0&&(e(h,o),h.reads--)}})(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&a(this))}updateCellHeight(i,t){const n=()=>{if(t.$ionCell===i){const n=window.getComputedStyle(t),e=t.offsetHeight+parseFloat(n.getPropertyValue("margin-bottom"));this.setCellHeight(i,e)}};t?p(t,n):n()}setCellHeight(i,t){const n=i.i;i===this.cells[n]&&(i.height===t&&!0===i.visible||(i.visible=!0,i.height=t,this.indexDirty=Math.min(this.indexDirty,n),this.scheduleUpdate()))}scheduleUpdate(){clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout((()=>this.updateVirtualScroll()),100)}updateState(){const i=!(!this.scrollEl||!this.cells);i!==this.isEnabled&&(this.enableScrollEvents(i),i&&this.updateVirtualScroll())}calcCells(){this.items&&(this.lastItemLen=this.items.length,this.cells=x(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}getHeightIndex(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}calcHeightIndex(i=0){this.heightIndex=((i,t)=>{if(!i)return new Uint32Array(t);if(i.length===t)return i;if(t>i.length){const n=new Uint32Array(t);return n.set(i),n}return i.subarray(0,t)})(this.heightIndex,this.cells.length),this.totalHeight=((i,t,n)=>{let e=i[n];for(let s=n;s<i.length;s++)i[s]=e,e+=t[s].height;return e})(this.heightIndex,this.cells,i),this.indexDirty=1/0}enableScrollEvents(i){this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);const t=this.scrollEl;t&&(this.isEnabled=i,t.addEventListener("scroll",this.onScroll),this.rmEvent=()=>{t.removeEventListener("scroll",this.onScroll)})}renderVirtualNode(i){const{type:t,value:n,index:e}=i.cell;switch(t){case"item":return this.renderItem(n,e);case"header":return this.renderHeader(n,e);case"footer":return this.renderFooter(n,e)}}render(){return t(n,{style:{height:`${this.totalHeight}px`}},this.renderItem&&t(k,{dom:this.virtualDom},this.virtualDom.map((i=>this.renderVirtualNode(i)))))}get el(){return o(this)}static get watchers(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}};const k=({dom:i},t,n)=>n.map(t,((t,n)=>{const e=i[n],s=t.vattrs||{};let r=s.class||"";return r+="virtual-item ",e.visible||(r+="virtual-loading"),Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},s),{class:r,style:Object.assign(Object.assign({},s.style),{transform:`translate3d(0,${e.top}px,0)`})})})}));w.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;transition-duration:0ms;will-change:transform}";export{f as ion_card,m as ion_infinite_scroll,u as ion_infinite_scroll_content,w as ion_virtual_scroll}