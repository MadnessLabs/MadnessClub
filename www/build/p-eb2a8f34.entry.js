import{r as t,c as i,h as s,d as e}from"./p-21a72a99.js";import{g as n,c as o}from"./p-007262f0.js";import{g as r}from"./p-4d4077ea.js";import{n as a,s as h}from"./p-005b2cbe.js";import{l as c,t as l,s as d,L as u,a as v,b as m}from"./p-e6d7b416.js";import{a as f}from"./p-d5d76201.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */class p{constructor(t,i){this.component=t,this.params=i,this.state=1}async init(t){if(this.state=2,!this.element){const i=this.component;this.element=await f(this.delegate,t,i,["ion-page","ion-page-invisible"],this.params)}}_destroy(){a(3!==this.state,"view state must be ATTACHED");const t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=3}}const w=(t,i,s)=>!!t&&t.component===i&&h(t.params,s),b=(t,i)=>t?t instanceof p?t:new p(t,i):null,g=class{constructor(s){t(this,s),this.ionNavWillLoad=i(this,"ionNavWillLoad",7),this.ionNavWillChange=i(this,"ionNavWillChange",3),this.ionNavDidChange=i(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=null!==document.querySelector("ion-router")&&null===this.el.closest("[no-router]"),void 0===this.swipeGesture){const t=n(this);this.swipeGesture=o.getBoolean("swipeBackEnabled","ios"===t)}this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged(),this.gesture=(await import("./p-424cc20b.js")).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}disconnectedCallback(){for(const t of this.views)c(t.element,u),t._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=0,this.views.length=0,this.destroyed=!0}push(t,i,s,e){return this.insert(-1,t,i,s,e)}insert(t,i,s,e,n){return this.insertPages(t,[{component:i,componentProps:s}],e,n)}insertPages(t,i,s,e){return this.queueTrns({insertStart:t,insertViews:i,opts:s},e)}pop(t,i){return this.removeIndex(-1,1,t,i)}popTo(t,i,s){const e={removeStart:-1,removeCount:-1,opts:i};return"object"==typeof t&&t.component?(e.removeView=t,e.removeStart=1):"number"==typeof t&&(e.removeStart=t+1),this.queueTrns(e,s)}popToRoot(t,i){return this.removeIndex(1,-1,t,i)}removeIndex(t,i=1,s,e){return this.queueTrns({removeStart:t,removeCount:i,opts:s},e)}setRoot(t,i,s,e){return this.setPages([{component:t,componentProps:i}],s,e)}setPages(t,i,s){return null!=i||(i={}),!0!==i.animated&&(i.animated=!1),this.queueTrns({insertStart:0,insertViews:t,removeStart:0,removeCount:-1,opts:i},s)}setRouteId(t,i,s,e){const n=this.getActiveSync();if(w(n,t,i))return Promise.resolve({changed:!1,element:n.element});let o;const r=new Promise((t=>o=t));let a;const h={updateURL:!1,viewIsReady:t=>{let i;const s=new Promise((t=>i=t));return o({changed:!0,element:t,markVisible:async()=>{i(),await a}}),s}};if("root"===s)a=this.setRoot(t,i,h);else{const n=this.views.find((s=>w(s,t,i)));n?a=this.popTo(n,Object.assign(Object.assign({},h),{direction:"back",animationBuilder:e})):"forward"===s?a=this.push(t,i,Object.assign(Object.assign({},h),{animationBuilder:e})):"back"===s&&(a=this.setRoot(t,i,Object.assign(Object.assign({},h),{direction:"back",animated:!0,animationBuilder:e})))}return r}async getRouteId(){const t=this.getActiveSync();if(t)return{id:t.element.tagName,params:t.params,element:t.element}}async getActive(){return this.getActiveSync()}async getByIndex(t){return this.views[t]}async canGoBack(t){return this.canGoBackSync(t)}async getPrevious(t){return this.getPreviousSync(t)}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(t=this.getActiveSync()){return!(!t||!this.getPreviousSync(t))}getPreviousSync(t=this.getActiveSync()){if(!t)return;const i=this.views,s=i.indexOf(t);return s>0?i[s-1]:void 0}async queueTrns(t,i){var s,e;if(this.isTransitioning&&(null===(s=t.opts)||void 0===s?void 0:s.skipIfBusy))return!1;const n=new Promise(((i,s)=>{t.resolve=i,t.reject=s}));if(t.done=i,t.opts&&!1!==t.opts.updateURL&&this.useRouter){const i=document.querySelector("ion-router");if(i){const s=await i.canTransition();if(!1===s)return!1;if("string"==typeof s)return i.push(s,t.opts.direction||"back"),!1}}return 0===(null===(e=t.insertViews)||void 0===e?void 0:e.length)&&(t.insertViews=void 0),this.transInstr.push(t),this.nextTrns(),n}success(t,i){if(this.destroyed)this.fireError("nav controller was destroyed",i);else if(i.done&&i.done(t.hasCompleted,t.requiresTransition,t.enteringView,t.leavingView,t.direction),i.resolve(t.hasCompleted),!1!==i.opts.updateURL&&this.useRouter){const i=document.querySelector("ion-router");i&&i.navChanged("back"===t.direction?"back":"forward")}}failed(t,i){this.destroyed?this.fireError("nav controller was destroyed",i):(this.transInstr.length=0,this.fireError(t,i))}fireError(t,i){i.done&&i.done(!1,!1,t),i.reject&&!this.destroyed?i.reject(t):i.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const t=this.transInstr.shift();return!!t&&(this.runTransition(t),!0)}async runTransition(t){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(t);const i=this.getActiveSync(),s=this.getEnteringView(t,i);if(!i&&!s)throw new Error("no views in the stack to be removed");s&&1===s.state&&await s.init(this.el),this.postViewInit(s,i,t);const e=(t.enteringRequiresTransition||t.leavingRequiresTransition)&&s!==i;let n;e&&t.opts&&i&&("back"===t.opts.direction&&(t.opts.animationBuilder=t.opts.animationBuilder||(null==s?void 0:s.animationBuilder)),i.animationBuilder=t.opts.animationBuilder),n=e?await this.transition(s,i,t):{hasCompleted:!0,requiresTransition:!1},this.success(n,t),this.ionNavDidChange.emit()}catch(i){this.failed(i,t)}this.isTransitioning=!1,this.nextTrns()}prepareTI(t){var i,s,e;const n=this.views.length;if(null!==(i=t.opts)&&void 0!==i||(t.opts={}),null!==(s=(e=t.opts).delegate)&&void 0!==s||(e.delegate=this.delegate),void 0!==t.removeView){a(void 0!==t.removeStart,"removeView needs removeStart"),a(void 0!==t.removeCount,"removeView needs removeCount");const i=this.views.indexOf(t.removeView);if(i<0)throw new Error("removeView was not found");t.removeStart+=i}void 0!==t.removeStart&&(t.removeStart<0&&(t.removeStart=n-1),t.removeCount<0&&(t.removeCount=n-t.removeStart),t.leavingRequiresTransition=t.removeCount>0&&t.removeStart+t.removeCount===n),t.insertViews&&((t.insertStart<0||t.insertStart>n)&&(t.insertStart=n),t.enteringRequiresTransition=t.insertStart===n);const o=t.insertViews;if(!o)return;a(o.length>0,"length can not be zero");const r=o.map((t=>t instanceof p?t:"component"in t?b(t.component,null===t.componentProps?void 0:t.componentProps):b(t,void 0))).filter((t=>null!==t));if(0===r.length)throw new Error("invalid views to insert");for(const i of r){i.delegate=t.opts.delegate;const s=i.nav;if(s&&s!==this)throw new Error("inserted view was already inserted");if(3===i.state)throw new Error("inserted view was already destroyed")}t.insertViews=r}getEnteringView(t,i){const s=t.insertViews;if(void 0!==s)return s[s.length-1];const e=t.removeStart;if(void 0!==e){const s=this.views,n=e+t.removeCount;for(let t=s.length-1;t>=0;t--){const o=s[t];if((t<e||t>=n)&&o!==i)return o}}}postViewInit(t,i,s){var e,n,o;a(i||t,"Both leavingView and enteringView are null"),a(s.resolve,"resolve must be valid"),a(s.reject,"reject must be valid");const r=s.opts,{insertViews:h,removeStart:l,removeCount:d}=s;let f;if(void 0!==l&&void 0!==d){a(l>=0,"removeStart can not be negative"),a(d>=0,"removeCount can not be negative"),f=[];for(let s=l;s<l+d;s++){const e=this.views[s];e&&e!==t&&e!==i&&f.push(e)}null!==(e=r.direction)&&void 0!==e||(r.direction="back")}const p=this.views.length+(null!==(n=null==h?void 0:h.length)&&void 0!==n?n:0)-(null!=d?d:0);if(a(p>=0,"final balance can not be negative"),0===p)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(h){let t=s.insertStart;for(const i of h)this.insertViewAt(i,t),t++;s.enteringRequiresTransition&&(null!==(o=r.direction)&&void 0!==o||(r.direction="forward"))}if(f&&f.length>0){for(const t of f)c(t.element,v),c(t.element,m),c(t.element,u);for(const t of f)this.destroyView(t)}}async transition(t,i,s){const e=s.opts,r=e.progressAnimation?t=>this.sbAni=t:void 0,a=n(this),h=t.element,c=i&&i.element,d=Object.assign(Object.assign({mode:a,showGoBack:this.canGoBackSync(t),baseEl:this.el,progressCallback:r,animated:this.animated&&o.getBoolean("animated",!0),enteringEl:h,leavingEl:c},e),{animationBuilder:e.animationBuilder||this.animation||o.get("navAnimation")}),{hasCompleted:u}=await l(d);return this.transitionFinish(u,t,i,e)}transitionFinish(t,i,s,e){const n=t?i:s;return n&&this.cleanup(n),{hasCompleted:t,requiresTransition:!0,enteringView:i,leavingView:s,direction:e.direction}}insertViewAt(t,i){const s=this.views,e=s.indexOf(t);e>-1?(a(t.nav===this,"view is not part of the nav"),s.splice(e,1),s.splice(i,0,t)):(a(!t.nav,"nav is used"),t.nav=this,s.splice(i,0,t))}removeView(t){a(2===t.state||3===t.state,"view state should be loaded or destroyed");const i=this.views,s=i.indexOf(t);a(s>-1,"view must be part of the stack"),s>=0&&i.splice(s,1)}destroyView(t){t._destroy(),this.removeView(t)}cleanup(t){if(this.destroyed)return;const i=this.views,s=i.indexOf(t);for(let t=i.length-1;t>=0;t--){const e=i[t],n=e.element;n&&(t>s?(c(n,u),this.destroyView(e)):t<s&&d(n,!0))}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.pop({direction:"back",progressAnimation:!0})}onMove(t){this.sbAni&&this.sbAni.progressStep(t)}onEnd(t,i,s){if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish((()=>{this.animationEnabled=!0}),{oneTimeCallback:!0});let e=t?-.001:.001;t?e+=r([0,0],[.32,.72],[0,1],[1,1],i)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),e+=r([0,0],[1,0],[.68,.28],[1,1],i)[0]),this.sbAni.progressEnd(t?1:0,e,s)}}render(){return s("slot",null)}get el(){return e(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};g.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";export{g as ion_nav}