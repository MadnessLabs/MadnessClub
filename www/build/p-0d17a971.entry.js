import{r as i,c as t,h as s}from"./p-884d6dd0.js";import{D as h}from"./p-1e0c793c.js";import"./p-eab67c09.js";let n=class{constructor(s){i(this,s),this.fireenjinFetch=t(this,"fireenjinFetch",7),this.disablePageCheck=!1,this.disableFetch=!1,this.display="grid",this.page=0,this.results=[],this.loadingSpinner="bubbles",this.loadingText="Loading more data...",this.name="pagination",this.disableVirtualScroll=!1,this.removeDuplicates=!1,this.paramData={}}onQuery(){this.infiniteScrollEl.disabled=!1,this.results=[],this.getResults({page:0})}onOrderBy(){this.results=[],this.infiniteScrollEl.disabled=!1,this.getResults({page:0})}onDisplay(){this.infiniteScrollEl.disabled=!1,setTimeout((async()=>{window.dispatchEvent(new window.Event("resize"))}),2e3)}async onSuccess(i){if(i.detail.name===this.name){let t=[];try{t=this.resultsKey.split(".").reduce(((i,t)=>i[t]),i.detail.data)}catch(t){console.log("Error getting results",i.detail,this.resultsKey)}try{0===this.page&&(this.results=[]),this.page=this.pageKey?this.pageKey.split(".").reduce(((i,t)=>i[t]),i.detail.data):this.page+1,await this.addResults(t)}catch(i){console.log("Error updating results!")}await this.infiniteScrollEl.complete(),(!(null==t?void 0:t.length)||this.pageCountKey&&this.pageKey&&this.pageKey.split(".").reduce(((i,t)=>i[t]),i.detail.data)===this.pageCountKey.split(".").reduce(((i,t)=>i[t]),i.detail.data))&&(this.infiniteScrollEl.disabled=!0),this.disableVirtualScroll||(await this.virtualScrollEl.checkEnd(),setTimeout((()=>{window.dispatchEvent(new window.Event("resize"))}),200))}}onInfiniteScroll(){this.getResults({next:!0})}onResize(){var i,t;if(!this.disableVirtualScroll)if("list"===this.display&&(null===(i=this.virtualScrollEl)||void 0===i?void 0:i.querySelector("ion-item")))this.approxItemHeight=this.virtualScrollEl.querySelector("ion-item").offsetHeight;else if("grid"===this.display&&(null===(t=this.virtualScrollEl)||void 0===t?void 0:t.querySelectorAll("ion-col"))){let i,t;const s=this.virtualScrollEl.querySelectorAll("ion-col");for(i=0;i<s.length;i++){const h=s[i];if(t&&h.offsetTop!==t.offsetTop)break;t=h}t&&t.firstChild&&(this.approxItemHeight=t.firstChild.scrollHeight/i+18)}}async clearParamData(i){if(i&&this.paramData[i]){const t=this.paramData;delete t[i],this.paramData=t}else i||(this.paramData={});return this.infiniteScrollEl.disabled=!1,this.paramData}async addResults(i=[]){if(this.removeDuplicates){const t=i.map((i=>i.id));this.results=[...this.results.filter((i=>!t.includes(i.id))),...i]}else this.results=[...this.results,...i];this.infiniteScrollEl.disabled=!1}async clearResults(){this.page=0,this.results=[],this.infiniteScrollEl.disabled=!1}async getResults(i={}){var t,s,h;(this.disablePageCheck||(null===(t=null===window||void 0===window?void 0:window.location)||void 0===t?void 0:t.pathname)===this.initailizedOnPath)&&((i.page||0===i.page)&&(this.page=i.page),i.next&&(this.page=this.page+1),this.paramData=Object.assign(Object.assign(Object.assign({},this.paramData),{limit:i.limit?i.limit:this.limit,orderBy:this.orderBy,orderDirection:this.orderDirection,page:this.page}),(null==i?void 0:i.paramData)?i.paramData:{}),(this.query||""===this.query)&&(this.paramData.query=this.query),0===this.page&&(this.paramData.next=null,this.paramData.back=null),i.next&&(null===(s=this.results)||void 0===s?void 0:s.length)&&(null===(h=this.results[this.results.length-1])||void 0===h?void 0:h.id)&&(this.paramData.next=this.results[this.results.length-1].id),this.fireenjinFetch.emit({name:this.name,endpoint:this.endpoint,dataPropsMap:this.dataPropsMap?this.dataPropsMap:null,disableFetch:this.disableFetch,params:Object.assign(Object.assign({},this.fetchParams?this.fetchParams:{}),{data:Object.assign(Object.assign({},this.fetchData?this.fetchData:{}),this.paramData)})}))}componentWillLoad(){this.collection&&(this.resultsKey=this.resultsKey?this.resultsKey:`${this.collection}.results`,this.pageKey=this.pageKey?this.pageKey:`${this.collection}.page`,this.pageCountKey=this.pageCountKey?this.pageCountKey:`${this.collection}.pageCount`,this.resultCountKey=this.resultCountKey?this.resultCountKey:`${this.collection}.resultCount`,this.name=this.name?this.name:`${this.collection}Pagination`)}componentDidLoad(){var i,t;(null===(i=null===window||void 0===window?void 0:window.location)||void 0===i?void 0:i.pathname)&&(this.initailizedOnPath=window.location.pathname),this.disableVirtualScroll||(window.dispatchEvent(new window.Event("resize")),this.resizeInterval=setInterval((()=>{window.dispatchEvent(new window.Event("resize"))}),3e3)),(null===(t=this.results)||void 0===t?void 0:t.length)||this.getResults()}disconnectedCallback(){this.disableVirtualScroll||clearInterval(this.resizeInterval)}renderResults(){return"grid"===this.display?s("ion-grid",null,s("ion-row",null,this.results.map((i=>"string"==typeof this.gridEl({result:i},null,null)?s("ion-col",{innerHTML:this.gridEl({result:i},null,null)}):s("ion-col",null,this.gridEl({result:i},null,null)))))):s("ion-card",null,s("ion-list",null,this.results.map((i=>"string"==typeof this.listEl({result:i},null,null)?s("div",{innerHTML:this.listEl({result:i},null,null)}):this.listEl({result:i},null,null)))))}render(){return s("div",{class:"pagination"},this.disableVirtualScroll?s("div",null,this.renderResults()):s("ion-virtual-scroll",{items:this.results,approxItemHeight:this.approxItemHeight,renderItem:this.renderItem,ref:i=>this.virtualScrollEl=i},this.renderResults()),s("ion-infinite-scroll",{style:{display:"block"},ref:i=>this.infiniteScrollEl=i},s("ion-infinite-scroll-content",{"loading-spinner":this.loadingSpinner,"loading-text":this.loadingText})))}static get watchers(){return{query:["onQuery"],orderBy:["onOrderBy"],display:["onDisplay"]}}};(function(i,t,s,h){var n,e=arguments.length,l=e<3?t:null===h?h=Object.getOwnPropertyDescriptor(t,s):h;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(i,t,s,h);else for(var o=i.length-1;o>=0;o--)(n=i[o])&&(l=(e<3?n(l):e>3?n(t,s,l):n(t,s))||l);e>3&&l&&Object.defineProperty(t,s,l)})([h(1e3)],n.prototype,"onQuery",null),n.style="";export{n as fireenjin_pagination}