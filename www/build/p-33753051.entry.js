import{r as t,c as n,h as i,a as e,f as s,H as r,d as o,e as l,w as a}from"./p-884d6dd0.js";import{a as u,c as h}from"./p-eab67c09.js";import{g as c}from"./p-5c0ea631.js";import{h as d,i as f,d as p,f as g,r as m,g as w,a as v}from"./p-b5f35666.js";import{o as b,c as y,h as x}from"./p-7840618d.js";import{p as k,a as _,b as E}from"./p-4b91bf08.js";import{c as I,I as T}from"./p-259c77bf.js";import"./p-f2660943.js";let S=class{constructor(i){t(this,i),this.fireenjinFetch=n(this,"fireenjinFetch",7),this.fireenjinReset=n(this,"fireenjinReset",7),this.fireenjinSubmit=n(this,"fireenjinSubmit",7),this.fireenjinValidation=n(this,"fireenjinValidation",7),this.componentIsLoaded=!1,this.formData={},this.submitButton="Save",this.submitButtonColor="primary",this.submitButtonFill="solid",this.resetButton="Cancel",this.resetButtonColor="dark",this.resetButtonFill="clear",this.hideControls=!1,this.excludeData=[],this.disableLoader=!1,this.loading=!1,this.disableEnterButton=!1,this.disableReset=!1,this.confirmExit=!1,this.hasChanged=!1,this.method="post"}onInput(t){t&&t.target&&t.target.name&&!t.target.name.startsWith("ion-")&&0===(this.excludeData?this.excludeData:[]).filter((n=>n===t.target.name)).length&&(this.setByPath(this.formData,t.target.name,t.target.value),this.componentIsLoaded&&!this.hasChanged&&(this.hasChanged=!0))}onSelect(t){t&&t.target&&t.target.name&&0===(this.excludeData?this.excludeData:[]).filter((n=>n===t.target.name)).length&&(this.formData[t.target.name]=t.target.value,this.componentIsLoaded&&!this.hasChanged&&(this.hasChanged=!0))}async onKeyDown(t){"Enter"===t.key&&await this.checkFormValidity()&&this.submitButtonEl&&!this.disableEnterButton&&this.submitButtonEl.click()}async onSuccess(t){var n;t.detail.target===this.fireenjinFormEl&&this.findDataMap&&(this.formData=await this.mapFormData(this.findDataMap,(null===(n=t.detail)||void 0===n?void 0:n.data)?t.detail.data:{}),await this.setFormData(this.formData))}async setLoading(t){this.loading=!!t}async submit(t,n={manual:!1}){t&&t.preventDefault(),await this.checkFormValidity(),this.loading=!this.disableLoader;const i=this.beforeSubmit&&"function"==typeof this.beforeSubmit?await this.beforeSubmit(this.formData,n):this.formData;this.fireenjinSubmit.emit({event:t,id:this.documentId,endpoint:this.endpoint,data:i,name:this.name}),this.hasChanged=!1}async reset(t){if(!t)return this.formEl.reset(),!1;this.disableReset?t.preventDefault():(this.formData={},this.hasChanged=!1),this.fireenjinReset.emit({event:t,id:this.documentId,endpoint:this.endpoint,data:this.formData,name:this.name})}async checkFormValidity(t=!0){let n=!0;const i=[].slice.call(this.formEl.querySelectorAll("fireenjin-input"));for(const e of i)await e.checkValidity(t?null:{validationClassOptions:{ignoreInvalid:!0}})||(n&&t&&await e.reportValidity(),n=!1);return n}async reportFormValidity(){const t=await this.checkFormValidity(!1);this.fireenjinValidation.emit({event,isValid:t,name:this.name}),this.submitButtonEl&&(this.submitButtonEl.disabled=!t)}async setFormData(t){this.formEl.querySelectorAll("[data-fill]").forEach((n=>{var i,e;const s=(null===(e=null===(i=n.dataset)||void 0===i?void 0:i.fill)||void 0===e?void 0:e.length)>0?n.dataset.fill:n.name;n.value=this.getByPath(t,s)})),this.formData=t}async mapFormData(t,n){let i=n||{};if(t){const e=Object.keys(t);for(const s of e)t[s]?i[t[s]]=n[s]:i=Object.assign(Object.assign({},i),n[s])}return i}getByPath(t,n){for(var i=(n=(n=n.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),e=0,s=i.length;e<s;++e){var r=i[e];if(!(r in t))return;t=t[r]}return t}setByPath(t,n,i){const e=n.split("."),s=e.length;for(let n=0;n<s-1;n++){const i=e[n];t[i]||(t[i]={}),t=t[i]}t[e[s-1]]=i}componentDidLoad(){setTimeout((()=>{this.componentIsLoaded=!0}),2e3),this.findEndpoint&&this.documentId&&this.fireenjinFetch.emit({endpoint:this.findEndpoint,params:Object.assign(Object.assign({},this.findParams?this.findParams:{}),{id:this.documentId})}),this.formData&&this.setFormData(this.formData)}render(){return i("form",{ref:t=>this.formEl=t,name:this.name,id:this.name,action:this.action?this.action:`${this.apiUrl?this.apiUrl:"http://localhost:4000"}/${this.endpoint}`,method:this.method,onReset:t=>this.reset(t),onSubmit:t=>this.submit(t),class:{"is-loading":this.loading}},i("slot",null),!this.hideControls&&i("ion-grid",{class:"form-controls"},i("ion-row",null,i("ion-col",null,this.resetButton?i("ion-button",{ref:t=>this.resetButtonEl=t,type:"reset",fill:this.resetButtonFill,color:this.resetButtonColor,innerHTML:this.resetButton}):null),i("ion-col",null,this.submitButton?i("ion-button",{ref:t=>this.submitButtonEl=t,type:"submit",color:this.submitButtonColor,fill:this.submitButtonFill,innerHTML:this.submitButton}):null))))}get fireenjinFormEl(){return e(this)}};S.style="fireenjin-form{display:block}fireenjin-form .form-controls{opacity:1;pointer-events:all;transition:all ease-out 0.4s}fireenjin-form .form-controls ion-col:last-of-type{display:flex;flex-direction:row;justify-content:flex-end}fireenjin-form .is-hidden{opacity:0;pointer-events:none;height:0px}";var C="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},A=function(t,n,i,e,s,r,o,l,a,u){var h=this;h.numeralDecimalMark=t||".",h.numeralIntegerScale=n>0?n:0,h.numeralDecimalScale=i>=0?i:2,h.numeralThousandsGroupStyle=e||A.groupStyle.thousand,h.numeralPositiveOnly=!!s,h.stripLeadingZeroes=!1!==r,h.prefix=o||""===o?o:"",h.signBeforePrefix=!!l,h.tailPrefix=!!a,h.delimiter=u||""===u?u:",",h.delimiterRE=u?new RegExp("\\"+u,"g"):""};A.groupStyle={thousand:"thousand",lakh:"lakh",wan:"wan",none:"none"},A.prototype={getRawValue:function(t){return t.replace(this.delimiterRE,"").replace(this.numeralDecimalMark,".")},format:function(t){var n,i,e,s,r=this,o="";switch(t=t.replace(/[A-Za-z]/g,"").replace(r.numeralDecimalMark,"M").replace(/[^\dM-]/g,"").replace(/^\-/,"N").replace(/\-/g,"").replace("N",r.numeralPositiveOnly?"":"-").replace("M",r.numeralDecimalMark),r.stripLeadingZeroes&&(t=t.replace(/^(-)?0+(?=\d)/,"$1")),i="-"===t.slice(0,1)?"-":"",e=void 0!==r.prefix?r.signBeforePrefix?i+r.prefix:r.prefix+i:i,s=t,t.indexOf(r.numeralDecimalMark)>=0&&(s=(n=t.split(r.numeralDecimalMark))[0],o=r.numeralDecimalMark+n[1].slice(0,r.numeralDecimalScale)),"-"===i&&(s=s.slice(1)),r.numeralIntegerScale>0&&(s=s.slice(0,r.numeralIntegerScale)),r.numeralThousandsGroupStyle){case A.groupStyle.lakh:s=s.replace(/(\d)(?=(\d\d)+\d$)/g,"$1"+r.delimiter);break;case A.groupStyle.wan:s=s.replace(/(\d)(?=(\d{4})+$)/g,"$1"+r.delimiter);break;case A.groupStyle.thousand:s=s.replace(/(\d)(?=(\d{3})+$)/g,"$1"+r.delimiter)}return r.tailPrefix?i+s.toString()+(r.numeralDecimalScale>0?o.toString():"")+r.prefix:e+s.toString()+(r.numeralDecimalScale>0?o.toString():"")}};var N=A,D=function(t,n,i){var e=this;e.date=[],e.blocks=[],e.datePattern=t,e.dateMin=n.split("-").reverse().map((function(t){return parseInt(t,10)})),2===e.dateMin.length&&e.dateMin.unshift(0),e.dateMax=i.split("-").reverse().map((function(t){return parseInt(t,10)})),2===e.dateMax.length&&e.dateMax.unshift(0),e.initBlocks()};D.prototype={initBlocks:function(){var t=this;t.datePattern.forEach((function(n){t.blocks.push("Y"===n?4:2)}))},getISOFormatDate:function(){var t=this,n=t.date;return n[2]?n[2]+"-"+t.addLeadingZero(n[1])+"-"+t.addLeadingZero(n[0]):""},getBlocks:function(){return this.blocks},getValidatedDate:function(t){var n=this,i="";return t=t.replace(/[^\d]/g,""),n.blocks.forEach((function(e,s){if(t.length>0){var r=t.slice(0,e),o=r.slice(0,1),l=t.slice(e);switch(n.datePattern[s]){case"d":"00"===r?r="01":parseInt(o,10)>3?r="0"+o:parseInt(r,10)>31&&(r="31");break;case"m":"00"===r?r="01":parseInt(o,10)>1?r="0"+o:parseInt(r,10)>12&&(r="12")}i+=r,t=l}})),this.getFixedDateString(i)},getFixedDateString:function(t){var n,i,e,s=this,r=s.datePattern,o=[],l=0,a=0,u=0,h=0,c=0,d=0,f=!1;return 4===t.length&&"y"!==r[0].toLowerCase()&&"y"!==r[1].toLowerCase()&&(c=2-(h="d"===r[0]?0:2),n=parseInt(t.slice(h,h+2),10),i=parseInt(t.slice(c,c+2),10),o=this.getFixedDate(n,i,0)),8===t.length&&(r.forEach((function(t,n){switch(t){case"d":l=n;break;case"m":a=n;break;default:u=n}})),d=2*u,h=l<=u?2*l:2*l+2,c=a<=u?2*a:2*a+2,n=parseInt(t.slice(h,h+2),10),i=parseInt(t.slice(c,c+2),10),e=parseInt(t.slice(d,d+4),10),f=4===t.slice(d,d+4).length,o=this.getFixedDate(n,i,e)),4!==t.length||"y"!==r[0]&&"y"!==r[1]||(d=2-(c="m"===r[0]?0:2),i=parseInt(t.slice(c,c+2),10),e=parseInt(t.slice(d,d+2),10),f=2===t.slice(d,d+2).length,o=[0,i,e]),6!==t.length||"Y"!==r[0]&&"Y"!==r[1]||(d=2-.5*(c="m"===r[0]?0:4),i=parseInt(t.slice(c,c+2),10),e=parseInt(t.slice(d,d+4),10),f=4===t.slice(d,d+4).length,o=[0,i,e]),o=s.getRangeFixedDate(o),s.date=o,0===o.length?t:r.reduce((function(t,n){switch(n){case"d":return t+(0===o[0]?"":s.addLeadingZero(o[0]));case"m":return t+(0===o[1]?"":s.addLeadingZero(o[1]));case"y":return t+(f?s.addLeadingZeroForYear(o[2],!1):"");case"Y":return t+(f?s.addLeadingZeroForYear(o[2],!0):"")}}),"")},getRangeFixedDate:function(t){var n=this,i=n.dateMin||[],e=n.dateMax||[];return!t.length||i.length<3&&e.length<3||n.datePattern.find((function(t){return"y"===t.toLowerCase()}))&&0===t[2]?t:e.length&&(e[2]<t[2]||e[2]===t[2]&&(e[1]<t[1]||e[1]===t[1]&&e[0]<t[0]))?e:i.length&&(i[2]>t[2]||i[2]===t[2]&&(i[1]>t[1]||i[1]===t[1]&&i[0]>t[0]))?i:t},getFixedDate:function(t,n,i){return t=Math.min(t,31),n=Math.min(n,12),i=parseInt(i||0,10),(n<7&&n%2==0||n>8&&n%2==1)&&(t=Math.min(t,2===n?this.isLeapYear(i)?29:28:30)),[t,n,i]},isLeapYear:function(t){return t%4==0&&t%100!=0||t%400==0},addLeadingZero:function(t){return(t<10?"0":"")+t},addLeadingZeroForYear:function(t,n){return n?(t<10?"000":t<100?"00":t<1e3?"0":"")+t:(t<10?"0":"")+t}};var O=D,R=function(t,n){var i=this;i.time=[],i.blocks=[],i.timePattern=t,i.timeFormat=n,i.initBlocks()};R.prototype={initBlocks:function(){var t=this;t.timePattern.forEach((function(){t.blocks.push(2)}))},getISOFormatTime:function(){var t=this,n=t.time;return n[2]?t.addLeadingZero(n[0])+":"+t.addLeadingZero(n[1])+":"+t.addLeadingZero(n[2]):""},getBlocks:function(){return this.blocks},getTimeFormatOptions:function(){return"12"===String(this.timeFormat)?{maxHourFirstDigit:1,maxHours:12,maxMinutesFirstDigit:5,maxMinutes:60}:{maxHourFirstDigit:2,maxHours:23,maxMinutesFirstDigit:5,maxMinutes:60}},getValidatedTime:function(t){var n=this,i="";t=t.replace(/[^\d]/g,"");var e=n.getTimeFormatOptions();return n.blocks.forEach((function(s,r){if(t.length>0){var o=t.slice(0,s),l=o.slice(0,1),a=t.slice(s);switch(n.timePattern[r]){case"h":parseInt(l,10)>e.maxHourFirstDigit?o="0"+l:parseInt(o,10)>e.maxHours&&(o=e.maxHours+"");break;case"m":case"s":parseInt(l,10)>e.maxMinutesFirstDigit?o="0"+l:parseInt(o,10)>e.maxMinutes&&(o=e.maxMinutes+"")}i+=o,t=a}})),this.getFixedTimeString(i)},getFixedTimeString:function(t){var n,i,e,s=this,r=s.timePattern,o=[],l=0,a=0,u=0,h=0,c=0,d=0;return 6===t.length&&(r.forEach((function(t,n){switch(t){case"s":l=2*n;break;case"m":a=2*n;break;case"h":u=2*n}})),d=u,c=a,h=l,n=parseInt(t.slice(h,h+2),10),i=parseInt(t.slice(c,c+2),10),e=parseInt(t.slice(d,d+2),10),o=this.getFixedTime(e,i,n)),4===t.length&&s.timePattern.indexOf("s")<0&&(r.forEach((function(t,n){switch(t){case"m":a=2*n;break;case"h":u=2*n}})),d=u,c=a,n=0,i=parseInt(t.slice(c,c+2),10),e=parseInt(t.slice(d,d+2),10),o=this.getFixedTime(e,i,n)),s.time=o,0===o.length?t:r.reduce((function(t,n){switch(n){case"s":return t+s.addLeadingZero(o[2]);case"m":return t+s.addLeadingZero(o[1]);case"h":return t+s.addLeadingZero(o[0])}}),"")},getFixedTime:function(t,n,i){return i=Math.min(parseInt(i||0,10),60),n=Math.min(n,60),[t=Math.min(t,60),n,i]},addLeadingZero:function(t){return(t<10?"0":"")+t}};var P=R,M=function(t,n){var i=this;i.delimiter=n||""===n?n:" ",i.delimiterRE=n?new RegExp("\\"+n,"g"):"",i.formatter=t};M.prototype={setFormatter:function(t){this.formatter=t},format:function(t){var n=this;n.formatter.clear();for(var i,e="",s=!1,r=0,o=(t=(t=(t=t.replace(/[^\d+]/g,"")).replace(/^\+/,"B").replace(/\+/g,"").replace("B","+")).replace(n.delimiterRE,"")).length;r<o;r++)i=n.formatter.inputDigit(t.charAt(r)),/[\s()-]/g.test(i)?(e=i,s=!0):s||(e=i);return(e=e.replace(/[()]/g,"")).replace(/[\s-]/g,n.delimiter)}};var L=M,j={blocks:{uatp:[4,5,6],amex:[4,6,5],diners:[4,6,4],discover:[4,4,4,4],mastercard:[4,4,4,4],dankort:[4,4,4,4],instapayment:[4,4,4,4],jcb15:[4,6,5],jcb:[4,4,4,4],maestro:[4,4,4,4],visa:[4,4,4,4],mir:[4,4,4,4],unionPay:[4,4,4,4],general:[4,4,4,4]},re:{uatp:/^(?!1800)1\d{0,14}/,amex:/^3[47]\d{0,13}/,discover:/^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,diners:/^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,mastercard:/^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,dankort:/^(5019|4175|4571)\d{0,12}/,instapayment:/^63[7-9]\d{0,13}/,jcb15:/^(?:2131|1800)\d{0,11}/,jcb:/^(?:35\d{0,2})\d{0,12}/,maestro:/^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,mir:/^220[0-4]\d{0,12}/,visa:/^4\d{0,15}/,unionPay:/^(62|81)\d{0,14}/},getStrictBlocks:function(t){var n=t.reduce((function(t,n){return t+n}),0);return t.concat(19-n)},getInfo:function(t,n){var i=j.blocks,e=j.re;for(var s in n=!!n,e)if(e[s].test(t)){var r=i[s];return{type:s,blocks:n?this.getStrictBlocks(r):r}}return{type:"unknown",blocks:n?this.getStrictBlocks(i.general):i.general}}},F=j,$={noop:function(){},strip:function(t,n){return t.replace(n,"")},getPostDelimiter:function(t,n,i){if(0===i.length)return t.slice(-n.length)===n?n:"";var e="";return i.forEach((function(n){t.slice(-n.length)===n&&(e=n)})),e},getDelimiterREByDelimiter:function(t){return new RegExp(t.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),"g")},getNextCursorPosition:function(t,n,i,e,s){return n.length===t?i.length:t+this.getPositionOffset(t,n,i,e,s)},getPositionOffset:function(t,n,i,e,s){var r,o,l;return r=this.stripDelimiters(n.slice(0,t),e,s),o=this.stripDelimiters(i.slice(0,t),e,s),0!=(l=r.length-o.length)?l/Math.abs(l):0},stripDelimiters:function(t,n,i){var e=this;if(0===i.length){var s=n?e.getDelimiterREByDelimiter(n):"";return t.replace(s,"")}return i.forEach((function(n){n.split("").forEach((function(n){t=t.replace(e.getDelimiterREByDelimiter(n),"")}))})),t},headStr:function(t,n){return t.slice(0,n)},getMaxLength:function(t){return t.reduce((function(t,n){return t+n}),0)},getPrefixStrippedValue:function(t,n,i,e,s,r,o,l,a){if(0===i)return t;if(t===n&&""!==t)return"";if(a&&"-"==t.slice(0,1)){var u="-"==e.slice(0,1)?e.slice(1):e;return"-"+this.getPrefixStrippedValue(t.slice(1),n,i,u,s,r,o,l,a)}if(e.slice(0,i)!==n&&!l)return o&&!e&&t?t:"";if(e.slice(-i)!==n&&l)return o&&!e&&t?t:"";var h=this.stripDelimiters(e,s,r);return t.slice(0,i)===n||l?t.slice(-i)!==n&&l?h.slice(0,-i-1):l?t.slice(0,-i):t.slice(i):h.slice(i)},getFirstDiffIndex:function(t,n){for(var i=0;t.charAt(i)===n.charAt(i);)if(""===t.charAt(i++))return-1;return i},getFormattedValue:function(t,n,i,e,s,r){var o="",l=s.length>0,a="";return 0===i?t:(n.forEach((function(n,u){if(t.length>0){var h=t.slice(0,n),c=t.slice(n);a=l?s[r?u-1:u]||a:e,r?(u>0&&(o+=a),o+=h):(o+=h,h.length===n&&u<i-1&&(o+=a)),t=c}})),o)},fixPrefixCursor:function(t,n,i,e){if(t){var s=t.value;if(t.setSelectionRange&&n&&!(n.length+(i||e[0]||" ").length<=s.length)){var r=2*s.length;setTimeout((function(){t.setSelectionRange(r,r)}),1)}}},checkFullSelection:function(t){try{return(window.getSelection()||document.getSelection()||{}).toString().length===t.length}catch(t){}return!1},setSelection:function(t,n,i){if(t===this.getActiveElement(i)&&!(t&&t.value.length<=n))if(t.createTextRange){var e=t.createTextRange();e.move("character",n),e.select()}else try{t.setSelectionRange(n,n)}catch(t){console.warn("The input element type does not support selection")}},getActiveElement:function(t){var n=t.activeElement;return n&&n.shadowRoot?this.getActiveElement(n.shadowRoot):n},isAndroid:function(){return navigator&&/android/i.test(navigator.userAgent)},isAndroidBackspaceKeydown:function(t,n){return!!(this.isAndroid()&&t&&n)&&n===t.slice(0,-1)}},U={assign:function(t,n){return(t=t||{}).creditCard=!!(n=n||{}).creditCard,t.creditCardStrictMode=!!n.creditCardStrictMode,t.creditCardType="",t.onCreditCardTypeChanged=n.onCreditCardTypeChanged||function(){},t.phone=!!n.phone,t.phoneRegionCode=n.phoneRegionCode||"AU",t.phoneFormatter={},t.time=!!n.time,t.timePattern=n.timePattern||["h","m","s"],t.timeFormat=n.timeFormat||"24",t.timeFormatter={},t.date=!!n.date,t.datePattern=n.datePattern||["d","m","Y"],t.dateMin=n.dateMin||"",t.dateMax=n.dateMax||"",t.dateFormatter={},t.numeral=!!n.numeral,t.numeralIntegerScale=n.numeralIntegerScale>0?n.numeralIntegerScale:0,t.numeralDecimalScale=n.numeralDecimalScale>=0?n.numeralDecimalScale:2,t.numeralDecimalMark=n.numeralDecimalMark||".",t.numeralThousandsGroupStyle=n.numeralThousandsGroupStyle||"thousand",t.numeralPositiveOnly=!!n.numeralPositiveOnly,t.stripLeadingZeroes=!1!==n.stripLeadingZeroes,t.signBeforePrefix=!!n.signBeforePrefix,t.tailPrefix=!!n.tailPrefix,t.swapHiddenInput=!!n.swapHiddenInput,t.numericOnly=t.creditCard||t.date||!!n.numericOnly,t.uppercase=!!n.uppercase,t.lowercase=!!n.lowercase,t.prefix=t.creditCard||t.date?"":n.prefix||"",t.noImmediatePrefix=!!n.noImmediatePrefix,t.prefixLength=t.prefix.length,t.rawValueTrimPrefix=!!n.rawValueTrimPrefix,t.copyDelimiter=!!n.copyDelimiter,t.initValue=null!=n.initValue?n.initValue.toString():"",t.delimiter=n.delimiter||""===n.delimiter?n.delimiter:n.date?"/":n.time?":":n.numeral?",":" ",t.delimiterLength=t.delimiter.length,t.delimiterLazyShow=!!n.delimiterLazyShow,t.delimiters=n.delimiters||[],t.blocks=n.blocks||[],t.blocksLength=t.blocks.length,t.root="object"==typeof C&&C?C:window,t.document=n.document||t.root.document,t.maxLength=0,t.backspace=!1,t.result="",t.onValueChanged=n.onValueChanged||function(){},t}},V=function(t,n){var i=this,e=!1;if("string"==typeof t?(i.element=document.querySelector(t),e=document.querySelectorAll(t).length>1):void 0!==t.length&&t.length>0?(i.element=t[0],e=t.length>1):i.element=t,!i.element)throw new Error("[cleave.js] Please check the element");if(e)try{console.warn("[cleave.js] Multiple input fields matched, cleave.js will only take the first one.")}catch(t){}n.initValue=i.element.value,i.properties=V.DefaultProperties.assign({},n),i.init()};V.prototype={init:function(){var t=this,n=t.properties;n.numeral||n.phone||n.creditCard||n.time||n.date||0!==n.blocksLength||n.prefix?(n.maxLength=V.Util.getMaxLength(n.blocks),t.isAndroid=V.Util.isAndroid(),t.lastInputValue="",t.isBackward="",t.onChangeListener=t.onChange.bind(t),t.onKeyDownListener=t.onKeyDown.bind(t),t.onFocusListener=t.onFocus.bind(t),t.onCutListener=t.onCut.bind(t),t.onCopyListener=t.onCopy.bind(t),t.initSwapHiddenInput(),t.element.addEventListener("input",t.onChangeListener),t.element.addEventListener("keydown",t.onKeyDownListener),t.element.addEventListener("focus",t.onFocusListener),t.element.addEventListener("cut",t.onCutListener),t.element.addEventListener("copy",t.onCopyListener),t.initPhoneFormatter(),t.initDateFormatter(),t.initTimeFormatter(),t.initNumeralFormatter(),(n.initValue||n.prefix&&!n.noImmediatePrefix)&&t.onInput(n.initValue)):t.onInput(n.initValue)},initSwapHiddenInput:function(){var t=this;if(t.properties.swapHiddenInput){var n=t.element.cloneNode(!0);t.element.parentNode.insertBefore(n,t.element),t.elementSwapHidden=t.element,t.elementSwapHidden.type="hidden",t.element=n,t.element.id=""}},initNumeralFormatter:function(){var t=this.properties;t.numeral&&(t.numeralFormatter=new V.NumeralFormatter(t.numeralDecimalMark,t.numeralIntegerScale,t.numeralDecimalScale,t.numeralThousandsGroupStyle,t.numeralPositiveOnly,t.stripLeadingZeroes,t.prefix,t.signBeforePrefix,t.tailPrefix,t.delimiter))},initTimeFormatter:function(){var t=this.properties;t.time&&(t.timeFormatter=new V.TimeFormatter(t.timePattern,t.timeFormat),t.blocks=t.timeFormatter.getBlocks(),t.blocksLength=t.blocks.length,t.maxLength=V.Util.getMaxLength(t.blocks))},initDateFormatter:function(){var t=this.properties;t.date&&(t.dateFormatter=new V.DateFormatter(t.datePattern,t.dateMin,t.dateMax),t.blocks=t.dateFormatter.getBlocks(),t.blocksLength=t.blocks.length,t.maxLength=V.Util.getMaxLength(t.blocks))},initPhoneFormatter:function(){var t=this.properties;if(t.phone)try{t.phoneFormatter=new V.PhoneFormatter(new t.root.Cleave.AsYouTypeFormatter(t.phoneRegionCode),t.delimiter)}catch(t){throw new Error("[cleave.js] Please include phone-type-formatter.{country}.js lib")}},onKeyDown:function(t){var n=this,i=t.which||t.keyCode;n.lastInputValue=n.element.value,n.isBackward=8===i},onChange:function(t){var n=this,i=n.properties,e=V.Util;n.isBackward=n.isBackward||"deleteContentBackward"===t.inputType;var s=e.getPostDelimiter(n.lastInputValue,i.delimiter,i.delimiters);i.postDelimiterBackspace=!(!n.isBackward||!s)&&s,this.onInput(this.element.value)},onFocus:function(){var t=this,n=t.properties;t.lastInputValue=t.element.value,n.prefix&&n.noImmediatePrefix&&!t.element.value&&this.onInput(n.prefix),V.Util.fixPrefixCursor(t.element,n.prefix,n.delimiter,n.delimiters)},onCut:function(t){V.Util.checkFullSelection(this.element.value)&&(this.copyClipboardData(t),this.onInput(""))},onCopy:function(t){V.Util.checkFullSelection(this.element.value)&&this.copyClipboardData(t)},copyClipboardData:function(t){var n,i=this.properties,e=this.element.value;n=i.copyDelimiter?e:V.Util.stripDelimiters(e,i.delimiter,i.delimiters);try{t.clipboardData?t.clipboardData.setData("Text",n):window.clipboardData.setData("Text",n),t.preventDefault()}catch(t){}},onInput:function(t){var n=this,i=n.properties,e=V.Util,s=e.getPostDelimiter(t,i.delimiter,i.delimiters);return i.numeral||!i.postDelimiterBackspace||s||(t=e.headStr(t,t.length-i.postDelimiterBackspace.length)),i.phone?(i.result=!i.prefix||i.noImmediatePrefix&&!t.length?i.phoneFormatter.format(t):i.prefix+i.phoneFormatter.format(t).slice(i.prefix.length),void n.updateValueState()):i.numeral?(i.result=i.prefix&&i.noImmediatePrefix&&0===t.length?"":i.numeralFormatter.format(t),void n.updateValueState()):(i.date&&(t=i.dateFormatter.getValidatedDate(t)),i.time&&(t=i.timeFormatter.getValidatedTime(t)),t=e.stripDelimiters(t,i.delimiter,i.delimiters),t=e.getPrefixStrippedValue(t,i.prefix,i.prefixLength,i.result,i.delimiter,i.delimiters,i.noImmediatePrefix,i.tailPrefix,i.signBeforePrefix),t=i.numericOnly?e.strip(t,/[^\d]/g):t,t=i.uppercase?t.toUpperCase():t,t=i.lowercase?t.toLowerCase():t,i.prefix&&(i.tailPrefix?t+=i.prefix:t=i.prefix+t,0===i.blocksLength)?(i.result=t,void n.updateValueState()):(i.creditCard&&n.updateCreditCardPropsByValue(t),t=e.headStr(t,i.maxLength),i.result=e.getFormattedValue(t,i.blocks,i.blocksLength,i.delimiter,i.delimiters,i.delimiterLazyShow),void n.updateValueState()))},updateCreditCardPropsByValue:function(t){var n,i=this.properties,e=V.Util;e.headStr(i.result,4)!==e.headStr(t,4)&&(n=V.CreditCardDetector.getInfo(t,i.creditCardStrictMode),i.blocks=n.blocks,i.blocksLength=i.blocks.length,i.maxLength=e.getMaxLength(i.blocks),i.creditCardType!==n.type&&(i.creditCardType=n.type,i.onCreditCardTypeChanged.call(this,i.creditCardType)))},updateValueState:function(){var t=this,n=V.Util,i=t.properties;if(t.element){var e=t.element.selectionEnd,s=i.result;e=n.getNextCursorPosition(e,t.element.value,s,i.delimiter,i.delimiters),t.isAndroid?window.setTimeout((function(){t.element.value=s,n.setSelection(t.element,e,i.document,!1),t.callOnValueChanged()}),1):(t.element.value=s,i.swapHiddenInput&&(t.elementSwapHidden.value=t.getRawValue()),n.setSelection(t.element,e,i.document,!1),t.callOnValueChanged())}},callOnValueChanged:function(){var t=this,n=t.properties;n.onValueChanged.call(t,{target:{name:t.element.name,value:n.result,rawValue:t.getRawValue()}})},setPhoneRegionCode:function(t){var n=this;n.properties.phoneRegionCode=t,n.initPhoneFormatter(),n.onChange()},setRawValue:function(t){var n=this,i=n.properties;t=null!=t?t.toString():"",i.numeral&&(t=t.replace(".",i.numeralDecimalMark)),i.postDelimiterBackspace=!1,n.element.value=t,n.onInput(t)},getRawValue:function(){var t=this.properties,n=V.Util,i=this.element.value;return t.rawValueTrimPrefix&&(i=n.getPrefixStrippedValue(i,t.prefix,t.prefixLength,t.result,t.delimiter,t.delimiters,t.noImmediatePrefix,t.tailPrefix,t.signBeforePrefix)),t.numeral?t.numeralFormatter.getRawValue(i):n.stripDelimiters(i,t.delimiter,t.delimiters)},getISOFormatDate:function(){var t=this.properties;return t.date?t.dateFormatter.getISOFormatDate():""},getISOFormatTime:function(){var t=this.properties;return t.time?t.timeFormatter.getISOFormatTime():""},getFormattedValue:function(){return this.element.value},destroy:function(){var t=this;t.element.removeEventListener("input",t.onChangeListener),t.element.removeEventListener("keydown",t.onKeyDownListener),t.element.removeEventListener("focus",t.onFocusListener),t.element.removeEventListener("cut",t.onCutListener),t.element.removeEventListener("copy",t.onCopyListener)},toString:function(){return"[Cleave Object]"}},V.NumeralFormatter=N,V.DateFormatter=O,V.TimeFormatter=P,V.PhoneFormatter=L,V.CreditCardDetector=F,V.Util=$,V.DefaultProperties=U,("object"==typeof C&&C?C:window).Cleave=V;var B=V;(function(){function t(t,n){var i,e=t.split("."),s=$;e[0]in s||!s.execScript||s.execScript("var "+e[0]);for(;e.length&&(i=e.shift());)e.length||void 0===n?s=s[i]?s[i]:s[i]={}:s[i]=n}function n(t,n){function i(){}i.prototype=n.prototype,t.M=n.prototype,t.prototype=new i,t.prototype.constructor=t,t.N=function(t,i,e){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return n.prototype[i].apply(t,s)}}function i(t,n){null!=t&&this.a.apply(this,arguments)}function e(t){t.b=""}function s(t,n){return t>n?1:t<n?-1:0}function r(t,n){this.b=t,this.a={};for(var i=0;i<n.length;i++){var e=n[i];this.a[e.b]=e}}function o(t){return function(t){t.sort(function(t,n){return t.b-n.b}||s)}(t=function(t){var n,i=[],e=0;for(n in t)i[e++]=t[n];return i}(t.a)),t}function l(t,n){switch(this.b=t,this.g=!!n.v,this.a=n.c,this.i=n.type,this.h=!1,this.a){case B:case z:case q:case K:case W:case V:case U:this.h=!0}this.f=n.defaultValue}function a(){this.a={},this.f=this.j().a,this.b=this.g=null}function u(t,n){for(var i=o(t.j()),e=0;e<i.length;e++){var s=(l=i[e]).b;if(null!=n.a[s]){t.b&&delete t.b[l.b];var r=11==l.a||10==l.a;if(l.g)for(var l=h(n,s)||[],a=0;a<l.length;a++){var c=t,d=s,f=r?l[a].clone():l[a];c.a[d]||(c.a[d]=[]),c.a[d].push(f),c.b&&delete c.b[d]}else l=h(n,s),r?(r=h(t,s))?u(r,l):p(t,s,l.clone()):p(t,s,l)}}}function h(t,n){var i=t.a[n];if(null==i)return null;if(t.g){if(!(n in t.b)){var e=t.g,s=t.f[n];if(null!=i)if(s.g){for(var r=[],o=0;o<i.length;o++)r[o]=e.b(s,i[o]);i=r}else i=e.b(s,i);return t.b[n]=i}return t.b[n]}return i}function c(t,n,i){var e=h(t,n);return t.f[n].g?e[i||0]:e}function d(t,n){var i;if(null!=t.a[n])i=c(t,n,void 0);else t:{if(void 0===(i=t.f[n]).f){var e=i.i;if(e===Boolean)i.f=!1;else if(e===Number)i.f=0;else{if(e!==String){i=new e;break t}i.f=i.h?"0":""}}i=i.f}return i}function f(t,n){return t.f[n].g?null!=t.a[n]?t.a[n].length:0:null!=t.a[n]?1:0}function p(t,n,i){t.a[n]=i,t.b&&(t.b[n]=i)}function g(t,n){var i,e=[];for(i in n)0!=i&&e.push(new l(i,n[i]));return new r(t,e)}function m(){a.call(this)}function w(){a.call(this)}function v(){a.call(this)}function b(){}function y(){}function x(){}function k(){this.a={}}function _(t){return 0==t.length||it.test(t)}function E(t,n){if(null==n)return null;n=n.toUpperCase();var i=t.a[n];if(null==i){if(null==(i=Q[n]))return null;i=(new x).a(v.j(),i),t.a[n]=i}return i}function I(t){return null==(t=X[t])?"ZZ":t[0]}function T(t){this.H=RegExp(" "),this.C="",this.m=new i,this.w="",this.i=new i,this.u=new i,this.l=!0,this.A=this.o=this.F=!1,this.G=k.b(),this.s=0,this.b=new i,this.B=!1,this.h="",this.a=new i,this.f=[],this.D=t,this.J=this.g=S(this,this.D)}function S(t,n){var i;if(null!=n&&isNaN(n)&&n.toUpperCase()in Q){if(null==(i=E(t.G,n)))throw Error("Invalid region code: "+n);i=d(i,10)}else i=0;return null!=(i=E(t.G,I(i)))?i:et}function C(t){for(var n=t.f.length,i=0;i<n;++i){var s,r=t.f[i],o=d(r,1);if(t.w==o)return!1;s=t;var l=d(u=r,1);if(-1!=l.indexOf("|"))s=!1;else{var a;l=(l=l.replace(st,"\\d")).replace(rt,"\\d"),e(s.m),a=s;var u=d(u,2),h="999999999999999".match(l)[0];0<(a=h.length<a.a.b.length?"":(a=h.replace(new RegExp(l,"g"),u)).replace(RegExp("9","g")," ")).length?(s.m.a(a),s=!0):s=!1}if(s)return t.w=o,t.B=lt.test(c(r,4)),t.s=0,!0}return t.l=!1}function A(t,n){for(var i=[],e=n.length-3,s=t.f.length,r=0;r<s;++r){var o=t.f[r];0==f(o,3)?i.push(t.f[r]):(o=c(o,3,Math.min(e,f(o,3)-1)),0==n.search(o)&&i.push(t.f[r]))}t.f=i}function N(t){return t.l=!0,t.A=!1,t.f=[],t.s=0,e(t.m),t.w="",R(t)}function D(t){for(var n=t.a.toString(),i=t.f.length,e=0;e<i;++e){var s=t.f[e],r=d(s,1);if(new RegExp("^(?:"+r+")$").test(n))return t.B=lt.test(c(s,4)),O(t,n=n.replace(new RegExp(r,"g"),c(s,2)))}return""}function O(t,n){var i=t.b.b.length;return t.B&&0<i&&" "!=t.b.toString().charAt(i-1)?t.b+" "+n:t.b+n}function R(t){var n=t.a.toString();if(3<=n.length){for(var i=t.o&&0==t.h.length&&0<f(t.g,20)?h(t.g,20)||[]:h(t.g,19)||[],e=i.length,s=0;s<e;++s){var r=i[s];0<t.h.length&&_(d(r,4))&&!c(r,6)&&null==r.a[5]||(0!=t.h.length||t.o||_(d(r,4))||c(r,6))&&ot.test(d(r,2))&&t.f.push(r)}return A(t,n),0<(n=D(t)).length?n:C(t)?P(t):t.i.toString()}return O(t,n)}function P(t){var n=t.a.toString(),i=n.length;if(0<i){for(var e="",s=0;s<i;s++)e=F(t,n.charAt(s));return t.l?O(t,e):t.i.toString()}return t.b.toString()}function M(t){var n,i=t.a.toString(),s=0;return(n=1==c(t.g,10)&&("1"==(n=t.a.toString()).charAt(0)&&"0"!=n.charAt(1)&&"1"!=n.charAt(1)))?(s=1,t.b.a("1").a(" "),t.o=!0):null!=t.g.a[15]&&(n=new RegExp("^(?:"+c(t.g,15)+")"),null!=(n=i.match(n))&&null!=n[0]&&0<n[0].length&&(t.o=!0,t.b.a(i.substring(0,s=n[0].length)))),e(t.a),t.a.a(i.substring(s)),i.substring(0,s)}function L(t){var n=t.u.toString(),i=new RegExp("^(?:\\+|"+c(t.g,11)+")");return null!=(i=n.match(i))&&null!=i[0]&&0<i[0].length&&(t.o=!0,i=i[0].length,e(t.a),t.a.a(n.substring(i)),e(t.b),t.b.a(n.substring(0,i)),"+"!=n.charAt(0)&&t.b.a(" "),!0)}function j(t){if(0==t.a.b.length)return!1;var n,s=new i;t:{if(0!=(n=t.a.toString()).length&&"0"!=n.charAt(0))for(var r,o=n.length,l=1;3>=l&&l<=o;++l)if((r=parseInt(n.substring(0,l),10))in X){s.a(n.substring(l)),n=r;break t}n=0}return 0!=n&&(e(t.a),t.a.a(s.toString()),"001"==(s=I(n))?t.g=E(t.G,""+n):s!=t.D&&(t.g=S(t,s)),t.b.a(""+n).a(" "),t.h="",!0)}function F(t,n){if(0<=(s=t.m.toString()).substring(t.s).search(t.H)){var i=s.search(t.H),s=s.replace(t.H,n);return e(t.m),t.m.a(s),t.s=i,s.substring(0,t.s+1)}return 1==t.f.length&&(t.l=!1),t.w="",t.i.toString()}var $=this;i.prototype.b="",i.prototype.set=function(t){this.b=""+t},i.prototype.a=function(t,n,i){if(this.b+=String(t),null!=n)for(var e=1;e<arguments.length;e++)this.b+=arguments[e];return this},i.prototype.toString=function(){return this.b};var U=1,V=2,B=3,z=4,q=6,K=16,W=18;a.prototype.set=function(t,n){p(this,t.b,n)},a.prototype.clone=function(){var t=new this.constructor;return t!=this&&(t.a={},t.b&&(t.b={}),u(t,this)),t},n(m,a);var G=null;n(w,a);var H=null;n(v,a);var J=null;m.j=m.prototype.j=function(){var t=G;return t||(G=t=g(m,{0:{name:"NumberFormat",I:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,c:9,type:String},2:{name:"format",required:!0,c:9,type:String},3:{name:"leading_digits_pattern",v:!0,c:9,type:String},4:{name:"national_prefix_formatting_rule",c:9,type:String},6:{name:"national_prefix_optional_when_formatting",c:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",c:9,type:String}})),t},w.j=w.prototype.j=function(){var t=H;return t||(H=t=g(w,{0:{name:"PhoneNumberDesc",I:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",c:9,type:String},9:{name:"possible_length",v:!0,c:5,type:Number},10:{name:"possible_length_local_only",v:!0,c:5,type:Number},6:{name:"example_number",c:9,type:String}})),t},v.j=v.prototype.j=function(){var t=J;return t||(J=t=g(v,{0:{name:"PhoneMetadata",I:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",c:11,type:w},2:{name:"fixed_line",c:11,type:w},3:{name:"mobile",c:11,type:w},4:{name:"toll_free",c:11,type:w},5:{name:"premium_rate",c:11,type:w},6:{name:"shared_cost",c:11,type:w},7:{name:"personal_number",c:11,type:w},8:{name:"voip",c:11,type:w},21:{name:"pager",c:11,type:w},25:{name:"uan",c:11,type:w},27:{name:"emergency",c:11,type:w},28:{name:"voicemail",c:11,type:w},29:{name:"short_code",c:11,type:w},30:{name:"standard_rate",c:11,type:w},31:{name:"carrier_specific",c:11,type:w},33:{name:"sms_services",c:11,type:w},24:{name:"no_international_dialling",c:11,type:w},9:{name:"id",required:!0,c:9,type:String},10:{name:"country_code",c:5,type:Number},11:{name:"international_prefix",c:9,type:String},17:{name:"preferred_international_prefix",c:9,type:String},12:{name:"national_prefix",c:9,type:String},13:{name:"preferred_extn_prefix",c:9,type:String},15:{name:"national_prefix_for_parsing",c:9,type:String},16:{name:"national_prefix_transform_rule",c:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",c:8,defaultValue:!1,type:Boolean},19:{name:"number_format",v:!0,c:11,type:m},20:{name:"intl_number_format",v:!0,c:11,type:m},22:{name:"main_country_for_code",c:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",c:9,type:String},26:{name:"leading_zero_possible",c:8,defaultValue:!1,type:Boolean}})),t},b.prototype.a=function(t){throw new t.b,Error("Unimplemented")},b.prototype.b=function(t,n){if(11==t.a||10==t.a)return n instanceof a?n:this.a(t.i.prototype.j(),n);if(14==t.a){if("string"==typeof n&&Y.test(n)){var i=Number(n);if(0<i)return i}return n}if(!t.h)return n;if((i=t.i)===String){if("number"==typeof n)return String(n)}else if(i===Number&&"string"==typeof n&&("Infinity"===n||"-Infinity"===n||"NaN"===n||Y.test(n)))return Number(n);return n};var Y=/^-?[0-9]+$/;n(y,b),y.prototype.a=function(t,n){var i=new t.b;return i.g=this,i.a=n,i.b={},i},n(x,y),x.prototype.b=function(t,n){return 8==t.a?!!n:b.prototype.b.apply(this,arguments)},x.prototype.a=function(t,n){return x.M.a.call(this,t,n)};var X={1:"US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" ")},Q={AG:[null,[null,null,"(?:268|[58]\\d\\d|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}",null,null,null,"2684601234",null,null,null,[7]],[null,null,"268(?:464|7(?:1[3-9]|2\\d|3[246]|64|[78][0-689]))\\d{4}",null,null,null,"2684641234",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002123456"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,"26848[01]\\d{4}",null,null,null,"2684801234",null,null,null,[7]],"AG",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"26840[69]\\d{4}",null,null,null,"2684061234",null,null,null,[7]],null,"268",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],AI:[null,[null,null,"(?:264|[58]\\d\\d|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"2644(?:6[12]|9[78])\\d{4}",null,null,null,"2644612345",null,null,null,[7]],[null,null,"264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}",null,null,null,"2642351234",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002123456"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"AI",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"264",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],AS:[null,[null,null,"(?:[58]\\d\\d|684|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"6846(?:22|33|44|55|77|88|9[19])\\d{4}",null,null,null,"6846221234",null,null,null,[7]],[null,null,"684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}",null,null,null,"6847331234",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002123456"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"AS",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"684",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],BB:[null,[null,null,"(?:246|[58]\\d\\d|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}",null,null,null,"2464123456",null,null,null,[7]],[null,null,"246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}",null,null,null,"2462501234",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002123456"],[null,null,"(?:246976|900[2-9]\\d\\d)\\d{4}",null,null,null,"9002123456",null,null,null,[7]],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,"24631\\d{5}",null,null,null,"2463101234",null,null,null,[7]],"BB",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"246",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"246(?:292|367|4(?:1[7-9]|3[01]|44|67)|7(?:36|53))\\d{4}",null,null,null,"2464301234",null,null,null,[7]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],BM:[null,[null,null,"(?:441|[58]\\d\\d|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"441(?:2(?:02|23|[3479]\\d|61)|[46]\\d\\d|5(?:4\\d|60|89)|824)\\d{4}",null,null,null,"4412345678",null,null,null,[7]],[null,null,"441(?:[37]\\d|5[0-39])\\d{5}",null,null,null,"4413701234",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002123456"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"BM",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"441",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],BS:[null,[null,null,"(?:242|[58]\\d\\d|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}",null,null,null,"2423456789",null,null,null,[7]],[null,null,"242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}",null,null,null,"2423591234",null,null,null,[7]],[null,null,"(?:242300|8(?:00|33|44|55|66|77|88)[2-9]\\d\\d)\\d{4}",null,null,null,"8002123456",null,null,null,[7]],[null,null,"900[2-9]\\d{6}",null,null,null,"9002123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"BS",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"242",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"242225[0-46-9]\\d{3}",null,null,null,"2422250123"],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],CA:[null,[null,null,"(?:[2-8]\\d|90)\\d{8}",null,null,null,null,null,null,[10],[7]],[null,null,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",null,null,null,"5062345678",null,null,null,[7]],[null,null,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",null,null,null,"5062345678",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002123456"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,"600[2-9]\\d{6}",null,null,null,"6002012345"],"CA",1,"011","1",null,null,"1",null,null,1,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],DM:[null,[null,null,"(?:[58]\\d\\d|767|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}",null,null,null,"7674201234",null,null,null,[7]],[null,null,"767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-7])\\d{4}",null,null,null,"7672251234",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002123456"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"DM",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"767",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],DO:[null,[null,null,"(?:[58]\\d\\d|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}",null,null,null,"8092345678",null,null,null,[7]],[null,null,"8[024]9[2-9]\\d{6}",null,null,null,"8092345678",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002123456"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"DO",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"8[024]9",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],GD:[null,[null,null,"(?:473|[58]\\d\\d|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}",null,null,null,"4732691234",null,null,null,[7]],[null,null,"473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}",null,null,null,"4734031234",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002123456"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"GD",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"473",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],GU:[null,[null,null,"(?:[58]\\d\\d|671|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",null,null,null,"6713001234",null,null,null,[7]],[null,null,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",null,null,null,"6713001234",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002123456"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"GU",1,"011","1",null,null,"1",null,null,1,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"671",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],JM:[null,[null,null,"(?:[58]\\d\\d|658|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"(?:658[2-9]\\d\\d|876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}",null,null,null,"8765230123",null,null,null,[7]],[null,null,"876(?:(?:2[14-9]|[348]\\d)\\d|5(?:0[3-9]|[2-57-9]\\d|6[0-24-9])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}",null,null,null,"8762101234",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002123456"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"JM",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"658|876",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],KN:[null,[null,null,"(?:[58]\\d\\d|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}",null,null,null,"8692361234",null,null,null,[7]],[null,null,"869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}",null,null,null,"8697652917",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002123456"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"KN",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"869",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],KY:[null,[null,null,"(?:345|[58]\\d\\d|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}",null,null,null,"3452221234",null,null,null,[7]],[null,null,"345(?:32[1-9]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[67]|2[2-9]|3[689]))\\d{4}",null,null,null,"3453231234",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002345678"],[null,null,"(?:345976|900[2-9]\\d\\d)\\d{4}",null,null,null,"9002345678"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"KY",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"345849\\d{4}",null,null,null,"3458491234"],null,"345",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],LC:[null,[null,null,"(?:[58]\\d\\d|758|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"758(?:4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}",null,null,null,"7584305678",null,null,null,[7]],[null,null,"758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[01]))\\d{4}",null,null,null,"7582845678",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002123456"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"LC",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"758",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],MP:[null,[null,null,"(?:[58]\\d\\d|(?:67|90)0)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",null,null,null,"6702345678",null,null,null,[7]],[null,null,"670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",null,null,null,"6702345678",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002123456"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"MP",1,"011","1",null,null,"1",null,null,1,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"670",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],MS:[null,[null,null,"(?:(?:[58]\\d\\d|900)\\d\\d|66449)\\d{5}",null,null,null,null,null,null,[10],[7]],[null,null,"664491\\d{4}",null,null,null,"6644912345",null,null,null,[7]],[null,null,"66449[2-6]\\d{4}",null,null,null,"6644923456",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002123456"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"MS",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"664",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],PR:[null,[null,null,"(?:[589]\\d\\d|787)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"(?:787|939)[2-9]\\d{6}",null,null,null,"7872345678",null,null,null,[7]],[null,null,"(?:787|939)[2-9]\\d{6}",null,null,null,"7872345678",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002345678"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002345678"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"PR",1,"011","1",null,null,"1",null,null,1,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"787|939",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],SX:[null,[null,null,"(?:(?:[58]\\d\\d|900)\\d|7215)\\d{6}",null,null,null,null,null,null,[10],[7]],[null,null,"7215(?:4[2-8]|8[239]|9[056])\\d{4}",null,null,null,"7215425678",null,null,null,[7]],[null,null,"7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}",null,null,null,"7215205678",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002123456"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002123456"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"SX",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"721",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],TC:[null,[null,null,"(?:[58]\\d\\d|649|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"649(?:712|9(?:4\\d|50))\\d{4}",null,null,null,"6497121234",null,null,null,[7]],[null,null,"649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}",null,null,null,"6492311234",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002345678"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002345678"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,"64971[01]\\d{4}",null,null,null,"6497101234",null,null,null,[7]],"TC",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"649",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],TT:[null,[null,null,"(?:[58]\\d\\d|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"868(?:2(?:01|[23]\\d)|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}",null,null,null,"8682211234",null,null,null,[7]],[null,null,"868(?:2(?:6[6-9]|[7-9]\\d)|[37](?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d))\\d{4}",null,null,null,"8682911234",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002345678"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002345678"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"TT",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"868",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,"868619\\d{4}",null,null,null,"8686191234",null,null,null,[7]]],US:[null,[null,null,"[2-9]\\d{9}",null,null,null,null,null,null,[10],[7]],[null,null,"(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",null,null,null,"2015550123",null,null,null,[7]],[null,null,"(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",null,null,null,"2015550123",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002345678"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002345678"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"US",1,"011","1",null,null,"1",null,null,1,[[null,"(\\d{3})(\\d{4})","$1-$2",["[2-9]"]],[null,"(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],null,null,1]],[[null,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[2-9]"]]],[null,null,null,null,null,null,null,null,null,[-1]],1,null,[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"710[2-9]\\d{6}",null,null,null,"7102123456"],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],VC:[null,[null,null,"(?:[58]\\d\\d|784|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}",null,null,null,"7842661234",null,null,null,[7]],[null,null,"784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4]))\\d{4}",null,null,null,"7844301234",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002345678"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002345678"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"VC",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"784",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],VG:[null,[null,null,"(?:284|[58]\\d\\d|900)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"284(?:(?:229|774|8(?:52|6[459]))\\d|4(?:22\\d|9(?:[45]\\d|6[0-5])))\\d{3}",null,null,null,"2842291234",null,null,null,[7]],[null,null,"284(?:(?:3(?:0[0-3]|4[0-7]|68|9[34])|54[0-57])\\d|4(?:(?:4[0-6]|68)\\d|9(?:6[6-9]|9\\d)))\\d{3}",null,null,null,"2843001234",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002345678"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002345678"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"VG",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"284",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]],VI:[null,[null,null,"(?:(?:34|90)0|[58]\\d\\d)\\d{7}",null,null,null,null,null,null,[10],[7]],[null,null,"340(?:2(?:01|2[06-8]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}",null,null,null,"3406421234",null,null,null,[7]],[null,null,"340(?:2(?:01|2[06-8]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}",null,null,null,"3406421234",null,null,null,[7]],[null,null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",null,null,null,"8002345678"],[null,null,"900[2-9]\\d{6}",null,null,null,"9002345678"],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",null,null,null,"5002345678"],[null,null,null,null,null,null,null,null,null,[-1]],"VI",1,"011","1",null,null,"1",null,null,1,null,null,[null,null,null,null,null,null,null,null,null,[-1]],null,"340",[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]]};k.b=function(){return k.a?k.a:k.a=new k};var Z={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"},tt=RegExp("[+＋]+"),nt=RegExp("([0-9０-９٠-٩۰-۹])"),it=/^\(?\$1\)?$/,et=new v;p(et,11,"NA");var st=/\[([^\[\]])*\]/g,rt=/\d(?=[^,}][^,}])/g,ot=RegExp("^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$"),lt=/[- ]/;T.prototype.K=function(){this.C="",e(this.i),e(this.u),e(this.m),this.s=0,this.w="",e(this.b),this.h="",e(this.a),this.l=!0,this.A=this.o=this.F=!1,this.f=[],this.B=!1,this.g!=this.J&&(this.g=S(this,this.D))},T.prototype.L=function(t){return this.C=function(t,n){var i,s;if(t.i.a(n),nt.test(s=n)||1==t.i.b.length&&tt.test(s)?("+"==(s=n)?(i=s,t.u.a(s)):(t.u.a(i=Z[s]),t.a.a(i)),n=i):(t.l=!1,t.F=!0),!t.l){if(!t.F)if(L(t)){if(j(t))return N(t)}else if(0<t.h.length&&(s=t.a.toString(),e(t.a),t.a.a(t.h),t.a.a(s),i=(s=t.b.toString()).lastIndexOf(t.h),e(t.b),t.b.a(s.substring(0,i))),t.h!=M(t))return t.b.a(" "),N(t);return t.i.toString()}switch(t.u.b.length){case 0:case 1:case 2:return t.i.toString();case 3:if(!L(t))return t.h=M(t),R(t);t.A=!0;default:return t.A?(j(t)&&(t.A=!1),t.b.toString()+t.a.toString()):0<t.f.length?(s=F(t,n),0<(i=D(t)).length?i:(A(t,t.a.toString()),C(t)?P(t):t.l?O(t,s):t.i.toString())):R(t)}}(this,t)},t("Cleave.AsYouTypeFormatter",T),t("Cleave.AsYouTypeFormatter.prototype.inputDigit",T.prototype.L),t("Cleave.AsYouTypeFormatter.prototype.clear",T.prototype.K)}).call("object"==typeof u&&u?u:window);var z="https://js.stripe.com/v3",q=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,K="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",W=null,G=function(t,n,i){if(null===t)return null;var e=t.apply(void 0,n);return function(t,n){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.22.0",startTime:n})}(e,i),e},H=Promise.resolve().then((function(){return t=null,null!==W?W:W=new Promise((function(n,i){if("undefined"!=typeof window)if(window.Stripe&&t&&console.warn(K),window.Stripe)n(window.Stripe);else try{var e=function(){for(var t=document.querySelectorAll('script[src^="'.concat(z,'"]')),n=0;n<t.length;n++){var i=t[n];if(q.test(i.src))return i}return null}();e&&t?console.warn(K):e||(e=function(t){var n=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",i=document.createElement("script");i.src="".concat(z).concat(n);var e=document.head||document.body;if(!e)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return e.appendChild(i),i}(t)),e.addEventListener("load",(function(){window.Stripe?n(window.Stripe):i(new Error("Stripe.js not available"))})),e.addEventListener("error",(function(){i(new Error("Failed to load Stripe.js"))}))}catch(t){return void i(t)}else n(null)}));var t})),J=!1;H.catch((function(t){J||console.warn(t)}));var Y=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];J=!0;var e=Date.now();return H.then((function(t){return G(t,n,e)}))};let X=class{constructor(i){t(this,i),this.ionChange=n(this,"ionChange",7),this.ionInput=n(this,"ionInput",7),this.ionBlur=n(this,"ionBlur",7),this.ionFocus=n(this,"ionFocus",7),this.autocomplete="off",this.clearInput=!1,this.multiple=!1,this.readOnly=!1,this.spellCheck=!1,this.inputMode="text",this.stripeElements={},this.passwordVisible=!1}async onBlur(){const t=await this.checkValidity();this.inputEl.classList[t?"remove":"add"]("invalid"),await this.setValidationClass()}async getCardToken(t={}){return this.stripe.createToken(this.card,Object.assign({address_country:"US",currency:"usd"},t))}async setFocus(){this.input.focus()}async checkValidity(t){return(this.required||t&&t.setValidationClass)&&await this.setValidationClass(t&&t.validationClassOptions?t.validationClassOptions:null),this.input?this.input.checkValidity():!("card"!==this.type||!this.cardValidity||this.cardValidity.empty||!this.cardValidity.complete||this.cardValidity.error)}async clear(){"card"===this.type?this.card.clear():this.inputEl.querySelector("ion-input").value=null}async reportValidity(){const t=!this.input||this.input.reportValidity();return this.inputEl.classList[t?"remove":"add"]("invalid"),await this.setValidationClass(),t}onValueChange(){if(!this.cleave)return!1;this.cleave.setRawValue(this.value?this.value:null)}async setValidationClass(t){const n=Object.values(this.itemEl.classList);if(n.indexOf("invalid")>=0&&this.itemEl.classList.remove("invalid"),n.indexOf("valid")>=0&&this.itemEl.classList.remove("valid"),"card"===this.type)!this.cardValidity||this.cardValidity.empty||this.cardValidity.error||this.itemEl.classList.add(this.cardValidity&&!this.cardValidity.empty&&this.cardValidity.complete&&!this.cardValidity.error?"valid":"invalid");else if(this.input){const n=await this.input.checkValidity();(!t||!t.ignoreInvalid||t&&t.ignoreInvalid&&n)&&this.itemEl.classList.add(n?"valid":"invalid")}}componentDidLoad(){setTimeout((()=>{this.input=this.inputEl.querySelector("input"),this.inputType=this.type?"phone"===this.type?"tel":this.type:"text","phone"===this.type?this.cleave=new B(this.input,{onValueChanged:t=>{this.value=t.target.value,s(this)},phone:!0,phoneRegionCode:"US",delimiter:"-"}):"hour"===this.type?this.cleave=new B(this.input,{onValueChanged:t=>{this.value=t.target.value,s(this)},numericOnly:!0,delimiter:".",blocks:[2,2]}):"expiration"===this.type?this.cleave=new B(this.input,{onValueChanged:t=>{this.value=t.target.value,s(this)},delimiter:"/",numericOnly:!0,blocks:[2,2]}):"cvc"===this.type||"ssn"===this.type?this.cleave=new B(this.input,{onValueChanged:t=>{this.value=t.target.value,s(this)},delimiter:"",numericOnly:!0,blocks:[4]}):"code"===this.type?this.cleave=new B(this.input,{onValueChanged:t=>{this.value=t.target.value,s(this)},delimiter:"",numericOnly:!0,blocks:[6]}):"ein"===this.type&&(this.cleave=new B(this.input,{onValueChanged:t=>{this.value=t.target.value,s(this)},numericOnly:!0,blocks:[2,7],delimiter:"-"}))}),100)}togglePassword(t){t.stopPropagation();const n=this.input.value;this.passwordVisible=!this.passwordVisible,setTimeout((()=>{this.value=n}),50)}initializeStripeElements(){if(!this.stripeKey)return console.log("Stripe Key prop is required to create card field."),!1;this.stripe=((null===window||void 0===window?void 0:window.Stripe)?window.Stripe:Y)(this.stripeKey);const t=this.stripe.elements({fonts:this.stripeElements.fonts?this.stripeElements.fonts:[{cssSrc:"https://fonts.googleapis.com/css?family=Open+Sans"}]});this.card=t.create("card",{hidePostalCode:!0,style:this.stripeElements.style?this.stripeElements.style:{base:{color:"#000",fontFamily:'"Open Sans", arial, sans-serif',fontSize:"16px","::placeholder":{color:"#999"}}},classes:{base:"native-input native-input-md"}}),this.card.mount(this.cardNumberEl),this.card.on("blur",(t=>{this.itemEl.classList.remove("item-has-focus","item-input"),this.ionBlur.emit({event:t,name:this.name?this.name:"card",value:this.cardValidity&&this.cardValidity.card?this.cardValidity.card:null,validity:!(!this.cardValidity||this.cardValidity.empty||!this.cardValidity.complete||this.cardValidity.error)})})),this.card.on("change",(t=>{this.required&&this.setValidationClass(t),this.cardValidity=t;const n={event:t,name:this.name?this.name:"card",value:t.card,validity:!(!this.cardValidity||this.cardValidity.empty||!this.cardValidity.complete||this.cardValidity.error)};this.ionChange.emit(n),this.ionInput.emit(n)})),this.card.on("focus",(t=>{this.itemEl.classList.add("item-has-focus","item-input"),this.ionFocus.emit({event:t,name:this.name?this.name:"card",validity:!(!this.cardValidity||this.cardValidity.empty||!this.cardValidity.complete||this.cardValidity.error)})}))}dateToYearMonthDay(t){const n=new Date(+t);let i=""+(n.getMonth()+1),e=""+n.getDate();const s=n.getFullYear();return i.length<2&&(i="0"+i),e.length<2&&(e="0"+e),[s,i,e].join("-")}renderInput(){return"card"===this.type?(setTimeout((()=>{this.initializeStripeElements()}),200),i("div",{id:"card-number",ref:t=>this.cardNumberEl=t})):"expiration"===this.type?i("div",{id:"card-expiry"}):"cvc"===this.type?i("div",{id:"card-cvc"}):i("ion-input",{type:this.inputType&&!this.passwordVisible?this.inputType:"phone"===this.type||"hours"===this.type||"date"===this.type?"tel":"text",name:this.name,spellcheck:this.spellCheck,readonly:this.readOnly,multiple:this.multiple,clearInput:this.clearInput,inputMode:this.inputMode,pattern:this.pattern?this.pattern:"phone"===this.type?"[0-9]{3}-[0-9]{3}-[0-9]{4}":"ssn"===this.type?"[0-9]{4}":"date"===this.type?"[0-9]{1,2}/[0-9]{1,2}/[0-9]{2,4}":"code"===this.type?"[0-9]{6}":"expiration"===this.type?"[0-9]{2}/[0-9]{2}":"cvc"===this.type?"[0-9]{3,4}":null,value:"date"===this.type?this.dateToYearMonthDay(this.value):this.value,placeholder:this.placeholder,required:this.required,autofocus:this.autofocus,autocomplete:this.autocomplete,autocorrect:this.autocorrect,autocapitalize:this.autocapitalize,minlength:"phone"===this.type?12:this.minlength,maxlength:"phone"===this.type?12:this.maxlength,disabled:this.disabled,min:this.min,max:this.max,step:this.step})}render(){return i("ion-item",{ref:t=>this.itemEl=t,lines:this.lines,class:{"input-password item-input":"password"===this.inputType,"input-card":"card"===this.inputType,"has-info-bubble":!!this.info}},this.iconLeft&&i("ion-icon",{name:this.iconLeft,slot:"start"}),this.label&&i("ion-label",{position:this.labelPosition},i("span",null,this.label)),this.renderInput(),"password"===this.type&&i("div",{class:"input-icon"},i("ion-icon",{name:this.passwordVisible?"eye-off":"eye",onClick:t=>this.togglePassword(t)})),this.iconRight&&i("ion-icon",{name:this.iconRight,slot:"start"}))}get inputEl(){return e(this)}static get watchers(){return{value:["onValueChange"]}}};X.style='fireenjin-input .invalid{--border-color:var(--ion-color-danger) !important}fireenjin-input .invalid ion-label{color:var(--ion-color-danger) !important}fireenjin-input .valid{--border-color:var(--ion-color-success) !important}fireenjin-input .valid ion-label{color:var(--ion-color-success) !important}fireenjin-input ion-label{font-size:16px !important;font-weight:bold !important;display:block;background:transparent;text-align:left;padding:0 0 8px 0;font-family:var(--ion-font-family)}fireenjin-input ion-item{position:relative;box-shadow:none !important;--background:var(--background);font-size:inherit;text-align:inherit;--min-height:var(--item-min-height, 48px) !important}fireenjin-input ion-item ion-input{border:none;box-shadow:none !important;font-size:inherit;outline:none !important;--padding-top:15px;width:85% !important;margin-right:auto;text-align:left;--padding-top:var(--input-padding-top, 10px) !important;--padding-bottom:var(--input-padding-bottom, 10px) !important;--padding-start:var(--input-padding-start, 0px) !important;--padding-end:var(--input-padding-end, 0px) !important}fireenjin-input ion-item ion-icon[slot="start"]{margin:auto 10px 10px auto;fill:var(--ion-text-color)}fireenjin-input ion-item.item-has-focus{--border-width:0;border-color:var(--ion-color-primary)}fireenjin-input ion-item.item-has-focus ion-label{color:var(--ion-color-primary) !important}fireenjin-input ion-item .edit ion-button{text-decoration:none;position:absolute;right:0px;top:3px}fireenjin-input ion-item .edit ion-button .button-inner{font-size:14px;color:var(--ion-color-primary);padding-right:25px}fireenjin-input ion-item .edit ion-button ion-icon{position:absolute;top:6px;right:10px;color:var(--ion-color-primary)}fireenjin-input .input-password input{width:calc(100% - 60px) !important}fireenjin-input .input-icon ion-icon{display:block;position:absolute;right:0px;top:30px;height:35px;width:35px;color:var(--ion-color-dark)}fireenjin-input .input-icon ion-icon:hover{cursor:pointer;color:var(--ion-color-primary)}fireenjin-input .input-password ion-icon{top:25px}fireenjin-input .input-card.item-has-focus{border-bottom:2px solid var(--ion-color-primary);--border-color:transparent !important}fireenjin-input #card-number{padding:12px 0 8px 0;width:100%}';let Q=class{constructor(i){t(this,i),this.fireenjinFetch=n(this,"fireenjinFetch",7),this.disabled=!1,this.cancelText="Dismiss",this.okText="Okay",this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.limit=15,this.options=[],this.results=[]}onSuccess(t){var n,i,e;"select"===(null===(n=null==t?void 0:t.detail)||void 0===n?void 0:n.name)&&t.detail.endpoint===this.endpoint&&(this.results=(null===(e=null===(i=null==t?void 0:t.detail)||void 0===i?void 0:i.data)||void 0===e?void 0:e.results)?t.detail.data.results:[],setTimeout((()=>{this.value=this.value}),200))}fetchData(){this.endpoint&&this.fireenjinFetch.emit({name:"select",endpoint:this.endpoint,dataPropsMap:this.dataPropsMap?this.dataPropsMap:this.resultsKey?{[this.resultsKey]:"results"}:null,params:Object.assign({data:Object.assign(Object.assign(Object.assign({},this.query?{query:this.query}:{}),this.orderBy?{orderBy:this.orderBy}:{}),{limit:this.limit?this.limit:15})},this.params?this.params:{})})}componentWillLoad(){this.fetchData()}render(){return i(r,null,i("ion-item",{lines:this.lines},this.icon&&i("ion-icon",{slot:"start",name:this.icon}),this.label&&i("ion-label",{position:this.labelPosition},this.label),i("ion-select",{disabled:this.disabled,selectedText:this.selectedText,interface:this.interface,compareWith:this.compareWith,name:this.name,value:this.value,okText:this.okText,multiple:this.multiple,cancelText:this.cancelText,placeholder:this.placeholder,interfaceOptions:this.interfaceOptions?this.interfaceOptions:{header:this.header,subHeader:this.subHeader,message:this.message}},(this.options?this.options:[]).map((t=>this.optionEl?this.optionEl(t):i("ion-select-option",{value:t.value,disabled:t.disabled},t.label))),(this.results?this.results:[]).map((t=>this.optionEl?this.optionEl(t):i("ion-select-option",{value:t.id},t.name))))))}get selectEl(){return e(this)}};Q.style="fireenjin-select ion-icon{margin-right:5px;color:var(--ion-text-color);opacity:0.33}";let Z=class{constructor(i){t(this,i),this.ionFocus=n(this,"ionFocus",7),this.ionBlur=n(this,"ionBlur",7),this.inItem=!1,this.inListHeader=!1,this.inToolbar=!1,this.inheritedAttributes={},this.buttonType="button",this.disabled=!1,this.routerDirection="forward",this.strong=!1,this.type="button",this.handleClick=t=>{if("button"===this.type)b(this.href,t,this.routerDirection,this.routerAnimation);else if(d(this.el)){const n=this.el.closest("form");if(n){t.preventDefault();const i=document.createElement("button");i.type=this.type,i.style.display="none",n.appendChild(i),i.click(),i.remove()}}},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}componentWillLoad(){this.inToolbar=!!this.el.closest("ion-buttons"),this.inListHeader=!!this.el.closest("ion-list-header"),this.inItem=!!this.el.closest("ion-item")||!!this.el.closest("ion-item-divider"),this.inheritedAttributes=f(this.el,["aria-label"])}get hasIconOnly(){return!!this.el.querySelector('[slot="icon-only"]')}get rippleType(){return(void 0===this.fill||"clear"===this.fill)&&this.hasIconOnly&&this.inToolbar?"unbounded":"bounded"}render(){const t=c(this),{buttonType:n,type:e,disabled:s,rel:o,target:l,size:a,href:u,color:h,expand:d,hasIconOnly:f,shape:p,strong:g,inheritedAttributes:m}=this,w=void 0===a&&this.inItem?"small":a,v=void 0===u?"button":"a",b="button"===v?{type:e}:{download:this.download,href:u,rel:o,target:l};let k=this.fill;return void 0===k&&(k=this.inToolbar||this.inListHeader?"clear":"solid"),i(r,{onClick:this.handleClick,"aria-disabled":s?"true":null,class:y(h,{[t]:!0,[n]:!0,[`${n}-${d}`]:void 0!==d,[`${n}-${w}`]:void 0!==w,[`${n}-${p}`]:void 0!==p,[`${n}-${k}`]:!0,[`${n}-strong`]:g,"in-toolbar":x("ion-toolbar",this.el),"in-toolbar-color":x("ion-toolbar[color]",this.el),"button-has-icon-only":f,"button-disabled":s,"ion-activatable":!0,"ion-focusable":!0})},i(v,Object.assign({},b,{class:"button-native",part:"native",disabled:s,onFocus:this.onFocus,onBlur:this.onBlur},m),i("span",{class:"button-inner"},i("slot",{name:"icon-only"}),i("slot",{name:"start"}),i("slot",null),i("slot",{name:"end"})),"md"===t&&i("ion-ripple-effect",{type:this.rippleType})))}get el(){return e(this)}};Z.style={ios:':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;box-sizing:border-box;appearance:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-0.03em}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #3880ff);--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;font-size:17px;font-weight:normal;letter-spacing:0}:host(.button-large){--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:hover),:host(.button-outline:hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native::after{background:#fff;opacity:0.1}}',md:':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;box-sizing:border-box;appearance:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};const tt={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"},nt=t=>void 0===t||""===t||!!window.matchMedia&&window.matchMedia(tt[t]).matches,it=window,et=!!(it.CSS&&it.CSS.supports&&it.CSS.supports("--a: 0")),st=["","xs","sm","md","lg","xl"];let rt=class{constructor(n){t(this,n)}onResize(){s(this)}getColumns(t){let n;for(const i of st){const e=nt(i),s=this[t+i.charAt(0).toUpperCase()+i.slice(1)];e&&void 0!==s&&(n=s)}return n}calculateSize(){const t=this.getColumns("size");if(!t||""===t)return;const n="auto"===t?"auto":et?`calc(calc(${t} / var(--ion-grid-columns, 12)) * 100%)`:t/12*100+"%";return{flex:`0 0 ${n}`,width:`${n}`,"max-width":`${n}`}}calculatePosition(t,n){const i=this.getColumns(t);if(i)return{[n]:et?`calc(calc(${i} / var(--ion-grid-columns, 12)) * 100%)`:i>0&&i<12?i/12*100+"%":"auto"}}calculateOffset(t){return this.calculatePosition("offset",t?"margin-right":"margin-left")}calculatePull(t){return this.calculatePosition("pull",t?"left":"right")}calculatePush(t){return this.calculatePosition("push",t?"right":"left")}render(){const t="rtl"===document.dir,n=c(this);return i(r,{class:{[n]:!0},style:Object.assign(Object.assign(Object.assign(Object.assign({},this.calculateOffset(t)),this.calculatePull(t)),this.calculatePush(t)),this.calculateSize())},i("slot",null))}};rt.style=":host{padding-left:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;box-sizing:border-box;position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:1px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px))}}@media (min-width: 576px){:host{padding-left:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px))}}}@media (min-width: 768px){:host{padding-left:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px))}}}@media (min-width: 992px){:host{padding-left:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px))}}}@media (min-width: 1200px){:host{padding-left:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px))}}}";let ot,lt=class{constructor(n){t(this,n),this.fixed=!1}render(){const t=c(this);return i(r,{class:{[t]:!0,"grid-fixed":this.fixed}},i("slot",null))}};lt.style=":host{padding-left:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));margin-left:auto;margin-right:auto;display:block;flex:1}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px))}}@media (min-width: 576px){:host{padding-left:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px))}}}@media (min-width: 768px){:host{padding-left:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px))}}}@media (min-width: 992px){:host{padding-left:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px))}}}@media (min-width: 1200px){:host{padding-left:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px))}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px))}}}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.grid-fixed){width:var(--ion-grid-width-xs, var(--ion-grid-width, 100%));max-width:100%}@media (min-width: 576px){:host(.grid-fixed){width:var(--ion-grid-width-sm, var(--ion-grid-width, 540px))}}@media (min-width: 768px){:host(.grid-fixed){width:var(--ion-grid-width-md, var(--ion-grid-width, 720px))}}@media (min-width: 992px){:host(.grid-fixed){width:var(--ion-grid-width-lg, var(--ion-grid-width, 960px))}}@media (min-width: 1200px){:host(.grid-fixed){width:var(--ion-grid-width-xl, var(--ion-grid-width, 1140px))}}:host(.ion-no-padding){--ion-grid-column-padding:0;--ion-grid-column-padding-xs:0;--ion-grid-column-padding-sm:0;--ion-grid-column-padding-md:0;--ion-grid-column-padding-lg:0;--ion-grid-column-padding-xl:0}";const at=(t,n,i,e,s)=>(i="ios"===(i&&dt(i))?"ios":"md",e&&"ios"===i?t=dt(e):s&&"md"===i?t=dt(s):(t||!n||ht(n)||(t=n),ct(t)&&(t=dt(t))),ct(t)&&""!==t.trim()?""!==t.replace(/[a-z]|-|\d/gi,"")?null:t:null),ut=t=>ct(t)&&(t=t.trim(),ht(t))?t:null,ht=t=>t.length>0&&/(\/|\.)/.test(t),ct=t=>"string"==typeof t,dt=t=>t.toLowerCase(),ft=t=>{if(1===t.nodeType){if("script"===t.nodeName.toLowerCase())return!1;for(let n=0;n<t.attributes.length;n++){const i=t.attributes[n].value;if(ct(i)&&0===i.toLowerCase().indexOf("on"))return!1}for(let n=0;n<t.childNodes.length;n++)if(!ft(t.childNodes[n]))return!1}return!0},pt=new Map,gt=new Map;let mt=class{constructor(n){t(this,n),this.iconName=null,this.isVisible=!1,this.mode=wt(),this.lazy=!1,this.sanitize=!0}connectedCallback(){this.waitUntilVisible(this.el,"50px",(()=>{this.isVisible=!0,this.loadIcon()}))}disconnectedCallback(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(t,n,i){if(this.lazy&&"undefined"!=typeof window&&window.IntersectionObserver){const e=this.io=new window.IntersectionObserver((t=>{t[0].isIntersecting&&(e.disconnect(),this.io=void 0,i())}),{rootMargin:n});e.observe(t)}else i()}loadIcon(){if(this.isVisible){const t=(t=>{let n=ut(t.src);if(n)return n;if(n=at(t.name,t.icon,t.mode,t.ios,t.md),n)return i=n,(()=>{if("undefined"==typeof window)return new Map;if(!ot){const t=window;t.Ionicons=t.Ionicons||{},ot=t.Ionicons.map=t.Ionicons.map||new Map}return ot})().get(i)||o(`svg/${i}.svg`);var i;if(t.icon){if(n=ut(t.icon),n)return n;if(n=ut(t.icon[t.mode]),n)return n}return null})(this);t&&(pt.has(t)?this.svgContent=pt.get(t):((t,n)=>{let i=gt.get(t);if(!i){if("undefined"==typeof fetch||"undefined"==typeof document)return pt.set(t,""),Promise.resolve();i=fetch(t).then((i=>{if(i.ok)return i.text().then((i=>{i&&!1!==n&&(i=(t=>{const n=document.createElement("div");n.innerHTML=t;for(let t=n.childNodes.length-1;t>=0;t--)"svg"!==n.childNodes[t].nodeName.toLowerCase()&&n.removeChild(n.childNodes[t]);const i=n.firstElementChild;if(i&&"svg"===i.nodeName.toLowerCase()){const t=i.getAttribute("class")||"";if(i.setAttribute("class",(t+" s-ion-icon").trim()),ft(i))return n.innerHTML}return""})(i)),pt.set(t,i||"")}));pt.set(t,"")})),gt.set(t,i)}return i})(t,this.sanitize).then((()=>this.svgContent=pt.get(t))))}const t=this.iconName=at(this.name,this.icon,this.mode,this.ios,this.md);this.ariaLabel||"true"===this.ariaHidden||t&&(this.ariaLabel=t.replace(/\-/g," "))}render(){const{iconName:t}=this,n=this.mode||"md",e=this.flipRtl||t&&(t.indexOf("arrow")>-1||t.indexOf("chevron")>-1)&&!1!==this.flipRtl;return i(r,{role:"img",class:Object.assign(Object.assign({[n]:!0},vt(this.color)),{[`icon-${this.size}`]:!!this.size,"flip-rtl":!!e&&"rtl"===this.el.ownerDocument.dir})},i("div",this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner"}))}static get assetsDirs(){return["svg"]}get el(){return e(this)}static get watchers(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}}};const wt=()=>"undefined"!=typeof document&&document.documentElement.getAttribute("mode")||"md",vt=t=>t?{"ion-color":!0,[`ion-color-${t}`]:!0}:null;mt.style=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";let bt=class{constructor(i){t(this,i),this.ionInput=n(this,"ionInput",7),this.ionChange=n(this,"ionChange",7),this.ionBlur=n(this,"ionBlur",7),this.ionFocus=n(this,"ionFocus",7),this.ionStyle=n(this,"ionStyle",7),this.inputId="ion-input-"+yt++,this.didBlurAfterEdit=!1,this.inheritedAttributes={},this.fireFocusEvents=!0,this.hasFocus=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.clearInput=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.type="text",this.value="",this.onInput=t=>{const n=t.target;n&&(this.value=n.value||""),this.ionInput.emit(t)},this.onBlur=t=>{this.hasFocus=!1,this.focusChanged(),this.emitStyle(),this.fireFocusEvents&&this.ionBlur.emit(t)},this.onFocus=t=>{this.hasFocus=!0,this.focusChanged(),this.emitStyle(),this.fireFocusEvents&&this.ionFocus.emit(t)},this.onKeydown=t=>{this.shouldClearOnEdit()&&(this.didBlurAfterEdit&&this.hasValue()&&"Enter"!==t.key&&this.clearTextInput(),this.didBlurAfterEdit=!1)},this.clearTextOnEnter=t=>{"Enter"===t.key&&this.clearTextInput(t)},this.clearTextInput=t=>{this.clearInput&&!this.readonly&&!this.disabled&&t&&(t.preventDefault(),t.stopPropagation(),this.setFocus()),this.value="",this.nativeInput&&(this.nativeInput.value="")}}debounceChanged(){this.ionChange=p(this.ionChange,this.debounce)}disabledChanged(){this.emitStyle()}placeholderChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.ionChange.emit({value:null==this.value?this.value:this.value.toString()})}componentWillLoad(){this.inheritedAttributes=f(this.el,["aria-label","tabindex","title"])}connectedCallback(){this.emitStyle(),this.debounceChanged(),document.dispatchEvent(new CustomEvent("ionInputDidLoad",{detail:this.el}))}disconnectedCallback(){document.dispatchEvent(new CustomEvent("ionInputDidUnload",{detail:this.el}))}async setFocus(){this.nativeInput&&this.nativeInput.focus()}async setBlur(){this.nativeInput&&this.nativeInput.blur()}getInputElement(){return Promise.resolve(this.nativeInput)}shouldClearOnEdit(){const{type:t,clearOnEdit:n}=this;return void 0===n?"password"===t:n}getValue(){return"number"==typeof this.value?this.value.toString():(this.value||"").toString()}emitStyle(){this.ionStyle.emit({interactive:!0,input:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled})}focusChanged(){!this.hasFocus&&this.shouldClearOnEdit()&&this.hasValue()&&(this.didBlurAfterEdit=!0)}hasValue(){return this.getValue().length>0}render(){const t=c(this),n=this.getValue(),e=this.inputId+"-lbl",s=g(this.el);return s&&(s.id=e),i(r,{"aria-disabled":this.disabled?"true":null,class:y(this.color,{[t]:!0,"has-value":this.hasValue(),"has-focus":this.hasFocus})},i("input",Object.assign({class:"native-input",ref:t=>this.nativeInput=t,"aria-labelledby":s?e:null,disabled:this.disabled,accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,enterKeyHint:this.enterkeyhint,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellcheck:this.spellcheck,step:this.step,size:this.size,type:this.type,value:n,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeydown},this.inheritedAttributes)),this.clearInput&&!this.readonly&&!this.disabled&&i("button",{"aria-label":"reset",type:"button",class:"input-clear-icon",onTouchStart:this.clearTextInput,onMouseDown:this.clearTextInput,onKeyDown:this.clearTextOnEnter}))}get el(){return e(this)}static get watchers(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],placeholder:["placeholderChanged"],value:["valueChanged"]}}},yt=0;bt.style={ios:".sc-ion-input-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:flex;position:relative;flex:1;align-items:center;width:100%;padding:0 !important;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item.sc-ion-input-ios-h:not(.item-label),ion-item:not(.item-label) .sc-ion-input-ios-h{--padding-start:0}.ion-color.sc-ion-input-ios-h{color:var(--ion-color-base)}.native-input.sc-ion-input-ios{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;box-sizing:border-box;appearance:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.native-input.sc-ion-input-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-ios:invalid{box-shadow:none}.native-input.sc-ion-input-ios::-ms-clear{display:none}.native-input[disabled].sc-ion-input-ios{opacity:0.4}.cloned-input.sc-ion-input-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-ios .cloned-input.sc-ion-input-ios,[dir=rtl].sc-ion-input-ios-h .cloned-input.sc-ion-input-ios,[dir=rtl] .sc-ion-input-ios-h .cloned-input.sc-ion-input-ios{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;appearance:none}.input-clear-icon.sc-ion-input-ios:focus{opacity:0.5}.has-value.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{visibility:visible}.has-focus.sc-ion-input-ios-h{pointer-events:none}.has-focus.sc-ion-input-ios-h input.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h a.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h button.sc-ion-input-ios{pointer-events:auto}.item-label-floating.item-has-placeholder.sc-ion-input-ios-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-input-ios-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-input-ios-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-input-ios-h{transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-input-ios-h{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-stacked.sc-ion-input-ios-h,.item-label-stacked .sc-ion-input-ios-h,.item-label-floating.sc-ion-input-ios-h,.item-label-floating .sc-ion-input-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.input-clear-icon.sc-ion-input-ios{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-step-600,%20%23666666)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");width:30px;height:30px;background-size:18px}",md:".sc-ion-input-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:flex;position:relative;flex:1;align-items:center;width:100%;padding:0 !important;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item.sc-ion-input-md-h:not(.item-label),ion-item:not(.item-label) .sc-ion-input-md-h{--padding-start:0}.ion-color.sc-ion-input-md-h{color:var(--ion-color-base)}.native-input.sc-ion-input-md{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;box-sizing:border-box;appearance:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.native-input.sc-ion-input-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-md:invalid{box-shadow:none}.native-input.sc-ion-input-md::-ms-clear{display:none}.native-input[disabled].sc-ion-input-md{opacity:0.4}.cloned-input.sc-ion-input-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-md .cloned-input.sc-ion-input-md,[dir=rtl].sc-ion-input-md-h .cloned-input.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h .cloned-input.sc-ion-input-md{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;appearance:none}.input-clear-icon.sc-ion-input-md:focus{opacity:0.5}.has-value.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{visibility:visible}.has-focus.sc-ion-input-md-h{pointer-events:none}.has-focus.sc-ion-input-md-h input.sc-ion-input-md,.has-focus.sc-ion-input-md-h a.sc-ion-input-md,.has-focus.sc-ion-input-md-h button.sc-ion-input-md{pointer-events:auto}.item-label-floating.item-has-placeholder.sc-ion-input-md-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-input-md-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-input-md-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-input-md-h{transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-input-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:8px;font-size:inherit}.item-label-stacked.sc-ion-input-md-h,.item-label-stacked .sc-ion-input-md-h,.item-label-floating.sc-ion-input-md-h,.item-label-floating .sc-ion-input-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.input-clear-icon.sc-ion-input-md{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='var(--ion-color-step-600,%20%23666666)'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>\");width:30px;height:30px;background-size:22px}"};let xt=class{constructor(n){t(this,n),this.labelColorStyles={},this.itemStyles=new Map,this.multipleInputs=!1,this.focusable=!0,this.button=!1,this.detailIcon="chevron-forward",this.disabled=!1,this.routerDirection="forward",this.type="button"}labelColorChanged(t){const{color:n}=this;void 0===n&&(this.labelColorStyles=t.detail)}itemStyle(t){t.stopPropagation();const n=t.target.tagName,i=t.detail,e={},r=this.itemStyles.get(n)||{};let o=!1;Object.keys(i).forEach((t=>{if(i[t]){const n=`item-${t}`;r[n]||(o=!0),e[n]=!0}})),o||Object.keys(e).length===Object.keys(r).length||(o=!0),o&&(this.itemStyles.set(n,e),s(this))}componentDidUpdate(){const t=this.getFirstInput();t&&!this.clickListener&&(this.clickListener=n=>this.delegateFocus(n,t),this.el.addEventListener("click",this.clickListener))}disconnectedCallback(){this.getFirstInput()&&this.clickListener&&(this.el.removeEventListener("click",this.clickListener),this.clickListener=void 0)}componentDidLoad(){m((()=>{this.setMultipleInputs(),this.focusable=this.isFocusable()}))}setMultipleInputs(){const t=this.el.querySelectorAll("ion-checkbox, ion-datetime, ion-select, ion-radio"),n=this.el.querySelectorAll("ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle"),i=this.el.querySelectorAll("ion-anchor, ion-button, a, button");this.multipleInputs=t.length+n.length>1||t.length+i.length>1||t.length>0&&this.isClickable()}hasCover(){return 1===this.el.querySelectorAll("ion-checkbox, ion-datetime, ion-select, ion-radio").length&&!this.multipleInputs}isClickable(){return void 0!==this.href||this.button}canActivate(){return this.isClickable()||this.hasCover()}isFocusable(){const t=this.el.querySelector(".ion-focusable");return this.canActivate()||null!==t}getFirstInput(){return this.el.querySelectorAll("ion-input, ion-textarea")[0]}delegateFocus(t,n){const i="ION-ITEM"===t.target.tagName;let e=!1;document.activeElement&&(e=n.querySelector("input, textarea")===document.activeElement),i&&e&&(n.fireFocusEvents=!1,n.setBlur(),n.setFocus(),m((()=>{n.fireFocusEvents=!0})))}render(){const{detail:t,detailIcon:n,download:e,labelColorStyles:s,lines:o,disabled:l,href:a,rel:u,target:h,routerAnimation:d,routerDirection:f}=this,p={},g=c(this),m=this.isClickable(),w=this.canActivate(),v=m?void 0===a?"button":"a":"div",k="button"===v?{type:this.type}:{download:e,href:a,rel:u,target:h},_=m?{onClick:t=>{b(a,t,f,d)}}:{},E=void 0!==t?t:"ios"===g&&m;return this.itemStyles.forEach((t=>{Object.assign(p,t)})),i(r,{"aria-disabled":l||p["item-interactive-disabled"]?"true":null,class:Object.assign(Object.assign(Object.assign({},p),s),y(this.color,{item:!0,[g]:!0,[`item-lines-${o}`]:void 0!==o,"item-disabled":l,"in-list":x("ion-list",this.el),"item-multiple-inputs":this.multipleInputs,"ion-activatable":w,"ion-focusable":this.focusable}))},i(v,Object.assign({},k,{class:"item-native",part:"native",disabled:l},_),i("slot",{name:"start"}),i("div",{class:"item-inner"},i("div",{class:"input-wrapper"},i("slot",null)),i("slot",{name:"end"}),E&&i("ion-icon",{icon:n,lazy:!1,class:"item-detail-icon",part:"detail-icon","aria-hidden":"true"}),i("div",{class:"item-inner-highlight"})),w&&"md"===g&&i("ion-ripple-effect",null)),i("div",{class:"item-highlight"}))}static get delegatesFocus(){return!0}get el(){return e(this)}};xt.style={ios:':host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;align-items:center;justify-content:space-between;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:initial;text-decoration:none;overflow:hidden;box-sizing:border-box}:host(.ion-color) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) .item-native,:host(.ion-color) .item-inner{border-color:var(--ion-color-shade)}:host(.ion-activated) .item-native{color:var(--color-activated)}:host(.ion-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-color.ion-activated) .item-native{color:var(--ion-color-contrast)}:host(.ion-focused) .item-native{color:var(--color-focused)}:host(.ion-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-color.ion-focused) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .item-native::after{background:var(--ion-color-contrast)}@media (any-hover: hover){:host(.ion-activatable:hover) .item-native{color:var(--color-hover)}:host(.ion-activatable:hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.ion-color.ion-activatable:hover) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activatable:hover) .item-native::after{background:var(--ion-color-contrast)}}:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){cursor:default;opacity:0.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:flex;position:relative;align-items:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;box-sizing:border-box;z-index:1}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.item-native{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;transition:var(--transition);z-index:-1}button,a{cursor:pointer;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:flex;position:relative;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);box-shadow:var(--inner-box-shadow);overflow:inherit;box-sizing:border-box}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.item-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label:not([slot=end])){flex:1}:host(.item-input){align-items:center}.input-wrapper{display:flex;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;text-overflow:ellipsis;overflow:inherit;box-sizing:border-box}:host(.item-label-stacked),:host(.item-label-floating){align-items:start}:host(.item-label-stacked) .input-wrapper,:host(.item-label-floating) .input-wrapper{flex:1;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;bottom:0;position:absolute;background:var(--highlight-background);z-index:1}.item-highlight{height:var(--full-highlight-height)}.item-inner-highlight{height:var(--inset-highlight-height)}:host(.item-interactive.item-has-focus),:host(.item-interactive.ion-touched.ion-invalid){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(:not(.item-label)) ::slotted(ion-select){--padding-start:0;max-width:none}:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0;align-self:stretch;width:100%;max-width:100%}:host(:not(.item-label)) ::slotted(ion-datetime){--padding-start:0}:host(.item-label-stacked) ::slotted(ion-datetime),:host(.item-label-floating) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host{--min-height:44px;--transition:background-color 200ms linear, opacity 200ms linear;--padding-start:20px;--inner-padding-end:10px;--inner-border-width:0px 0px 0.55px 0px;--background:var(--ion-item-background, var(--ion-background-color, #fff));--background-activated:#000;--background-focused:#000;--background-hover:currentColor;--background-activated-opacity:.12;--background-focused-opacity:.15;--background-hover-opacity:.04;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--color:var(--ion-item-color, var(--ion-text-color, #000));--highlight-height:0;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);font-size:17px}:host(.ion-activated){--transition:none}:host(.ion-color.ion-focused) .item-native::after{background:#000;opacity:0.15}:host(.ion-color.ion-activated) .item-native::after{background:#000;opacity:0.12}:host(.item-interactive){--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-full){--border-width:0px 0px 0.55px 0px;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0px 0px 0.55px 0px;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0px;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0px;--show-inset-highlight:0}::slotted([slot=start]){margin-left:0;margin-right:20px;margin-top:2px;margin-bottom:2px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:20px;margin-inline-end:20px}}::slotted([slot=end]){margin-left:10px;margin-right:10px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}::slotted(ion-icon[slot=start]),::slotted(ion-icon[slot=end]){margin-top:7px;margin-bottom:7px}::slotted(ion-toggle[slot=start]),::slotted(ion-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.item-label-stacked) ::slotted([slot=end]),:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}::slotted(.button-small){--padding-top:0px;--padding-bottom:0px;--padding-start:.5em;--padding-end:.5em;height:24px;font-size:13px}::slotted(ion-avatar){width:36px;height:36px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:0px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:unset;-webkit-margin-start:0px;margin-inline-start:0px}}::slotted(ion-label){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:10px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.item-label-floating),:host(.item-label-stacked){--min-height:68px}:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0px}:host(.item-label-fixed) ::slotted(ion-select),:host(.item-label-fixed) ::slotted(ion-datetime){--padding-start:0}',md:':host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;align-items:center;justify-content:space-between;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:initial;text-decoration:none;overflow:hidden;box-sizing:border-box}:host(.ion-color) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) .item-native,:host(.ion-color) .item-inner{border-color:var(--ion-color-shade)}:host(.ion-activated) .item-native{color:var(--color-activated)}:host(.ion-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-color.ion-activated) .item-native{color:var(--ion-color-contrast)}:host(.ion-focused) .item-native{color:var(--color-focused)}:host(.ion-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-color.ion-focused) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .item-native::after{background:var(--ion-color-contrast)}@media (any-hover: hover){:host(.ion-activatable:hover) .item-native{color:var(--color-hover)}:host(.ion-activatable:hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.ion-color.ion-activatable:hover) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activatable:hover) .item-native::after{background:var(--ion-color-contrast)}}:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){cursor:default;opacity:0.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:flex;position:relative;align-items:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;box-sizing:border-box;z-index:1}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.item-native{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;transition:var(--transition);z-index:-1}button,a{cursor:pointer;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:flex;position:relative;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);box-shadow:var(--inner-box-shadow);overflow:inherit;box-sizing:border-box}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.item-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label:not([slot=end])){flex:1}:host(.item-input){align-items:center}.input-wrapper{display:flex;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;text-overflow:ellipsis;overflow:inherit;box-sizing:border-box}:host(.item-label-stacked),:host(.item-label-floating){align-items:start}:host(.item-label-stacked) .input-wrapper,:host(.item-label-floating) .input-wrapper{flex:1;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;bottom:0;position:absolute;background:var(--highlight-background);z-index:1}.item-highlight{height:var(--full-highlight-height)}.item-inner-highlight{height:var(--inset-highlight-height)}:host(.item-interactive.item-has-focus),:host(.item-interactive.ion-touched.ion-invalid){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(:not(.item-label)) ::slotted(ion-select){--padding-start:0;max-width:none}:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0;align-self:stretch;width:100%;max-width:100%}:host(:not(.item-label)) ::slotted(ion-datetime){--padding-start:0}:host(.item-label-stacked) ::slotted(ion-datetime),:host(.item-label-floating) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host{--min-height:48px;--background:var(--ion-item-background, var(--ion-background-color, #fff));--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--color:var(--ion-item-color, var(--ion-text-color, #000));--transition:opacity 15ms linear, background-color 15ms linear;--padding-start:16px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--inner-padding-end:16px;--inner-border-width:0 0 1px 0;--highlight-height:2px;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);font-size:16px;font-weight:normal;text-transform:none}:host(.ion-color.ion-activated) .item-native::after{background:transparent}:host(.item-interactive){--border-width:0 0 1px 0;--inner-border-width:0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-full){--border-width:0 0 1px 0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0 0 1px 0;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0;--show-inset-highlight:0}:host(.item-multi-line) ::slotted([slot=start]),:host(.item-multi-line) ::slotted([slot=end]){margin-top:16px;margin-bottom:16px;align-self:flex-start}::slotted([slot=start]){margin-right:32px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}::slotted([slot=end]){margin-left:32px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;-webkit-margin-start:32px;margin-inline-start:32px}}::slotted(ion-icon){color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);font-size:24px}:host(.ion-color) ::slotted(ion-icon){color:var(--ion-color-contrast)}::slotted(ion-icon[slot]){margin-top:12px;margin-bottom:12px}::slotted(ion-icon[slot=start]){margin-right:32px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}::slotted(ion-icon[slot=end]){margin-left:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}::slotted(ion-toggle[slot=start]),::slotted(ion-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}::slotted(ion-note){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;align-self:flex-start;font-size:11px}::slotted(ion-note[slot]){padding-left:0;padding-right:0;padding-top:18px;padding-bottom:10px}::slotted(ion-note[slot=start]){padding-right:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-note[slot=start]){padding-right:unset;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-note[slot=end]){padding-left:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-note[slot=end]){padding-left:unset;-webkit-padding-start:16px;padding-inline-start:16px}}::slotted(ion-avatar){width:40px;height:40px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar),::slotted(ion-thumbnail){margin-top:8px;margin-bottom:8px}::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin-right:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin-right:unset;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:11px;margin-bottom:10px}:host(.item-label-stacked) ::slotted([slot=end]),:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}:host(.item-label-fixed) ::slotted(ion-select),:host(.item-label-fixed) ::slotted(ion-datetime){--padding-start:8px}:host(.item-toggle) ::slotted(ion-label),:host(.item-radio) ::slotted(ion-label){margin-left:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.item-toggle) ::slotted(ion-label),:host(.item-radio) ::slotted(ion-label){margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}::slotted(.button-small){--padding-top:0;--padding-bottom:0;--padding-start:.6em;--padding-end:.6em;height:25px;font-size:12px}:host(.item-label-floating),:host(.item-label-stacked){--min-height:55px}:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0}:host(.item-has-focus:not(.ion-color)) ::slotted(.label-stacked),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-floating){color:var(--ion-color-primary, #3880ff)}:host(.ion-color){--highlight-color-focused:var(--ion-color-contrast)}:host(.item-label-color){--highlight-color-focused:var(--ion-color-base)}'};let kt=class{constructor(i){t(this,i),this.ionColor=n(this,"ionColor",7),this.ionStyle=n(this,"ionStyle",7),this.inRange=!1,this.noAnimate=!1}componentWillLoad(){this.inRange=!!this.el.closest("ion-range"),this.noAnimate="floating"===this.position,this.emitStyle(),this.emitColor()}componentDidLoad(){this.noAnimate&&setTimeout((()=>{this.noAnimate=!1}),1e3)}colorChanged(){this.emitColor()}positionChanged(){this.emitStyle()}emitColor(){const{color:t}=this;this.ionColor.emit({"item-label-color":void 0!==t,[`ion-color-${t}`]:void 0!==t})}emitStyle(){const{inRange:t,position:n}=this;t||this.ionStyle.emit({label:!0,[`label-${n}`]:void 0!==n})}render(){const t=this.position,n=c(this);return i(r,{class:y(this.color,{[n]:!0,"in-item-color":x("ion-item.ion-color",this.el),[`label-${t}`]:void 0!==t,"label-no-animate":this.noAnimate})})}get el(){return e(this)}static get watchers(){return{color:["colorChanged"],position:["positionChanged"]}}};kt.style={ios:".item.sc-ion-label-ios-h,.item .sc-ion-label-ios-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;box-sizing:border-box}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-ios-h,[text-wrap].sc-ion-label-ios-h{white-space:normal}.item-interactive-disabled.sc-ion-label-ios-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-ios-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-ios-h,.item-input .sc-ion-label-ios-h{flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-ios-h,.item-textarea .sc-ion-label-ios-h{align-self:baseline}.label-fixed.sc-ion-label-ios-h{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-ios-h,.label-floating.sc-ion-label-ios-h{margin-bottom:0;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-ios-h{transition:none}.sc-ion-label-ios-s h1,.sc-ion-label-ios-s h2,.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-ios-h,[text-wrap].sc-ion-label-ios-h{font-size:14px;line-height:1.5}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:14px}.label-floating.sc-ion-label-ios-h{margin-bottom:0;transform:translate3d(0,  29px,  0);transform-origin:left top;transition:transform 150ms ease-in-out}[dir=rtl].sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl] .sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl].label-floating.sc-ion-label-ios-h,[dir=rtl] .label-floating.sc-ion-label-ios-h{transform-origin:right top}.item-textarea.label-floating.sc-ion-label-ios-h,.item-textarea .label-floating.sc-ion-label-ios-h{transform:translate3d(0,  28px,  0)}.item-has-focus.label-floating.sc-ion-label-ios-h,.item-has-focus .label-floating.sc-ion-label-ios-h,.item-has-placeholder.sc-ion-label-ios-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-ios-h,.item-has-value.label-floating.sc-ion-label-ios-h,.item-has-value .label-floating.sc-ion-label-ios-h{transform:translate3d(0,  0,  0) scale(0.82)}.sc-ion-label-ios-s h1{margin-left:0;margin-right:0;margin-top:3px;margin-bottom:2px;font-size:22px;font-weight:normal}.sc-ion-label-ios-s h2{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:17px;font-weight:normal}.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{margin-left:0;margin-right:0;margin-top:0;margin-bottom:3px;font-size:14px;font-weight:normal;line-height:normal}.sc-ion-label-ios-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s>p{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4)}.sc-ion-label-ios-h.in-item-color.sc-ion-label-ios-s>p{color:inherit}.sc-ion-label-ios-s h2:last-child,.sc-ion-label-ios-s h3:last-child,.sc-ion-label-ios-s h4:last-child,.sc-ion-label-ios-s h5:last-child,.sc-ion-label-ios-s h6:last-child,.sc-ion-label-ios-s p:last-child{margin-bottom:0}",md:".item.sc-ion-label-md-h,.item .sc-ion-label-md-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;box-sizing:border-box}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-md-h,[text-wrap].sc-ion-label-md-h{white-space:normal}.item-interactive-disabled.sc-ion-label-md-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-md-h,.item-input .sc-ion-label-md-h{flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-md-h,.item-textarea .sc-ion-label-md-h{align-self:baseline}.label-fixed.sc-ion-label-md-h{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-bottom:0;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-md-h{transition:none}.sc-ion-label-md-s h1,.sc-ion-label-md-s h2,.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-md-h,[text-wrap].sc-ion-label-md-h{line-height:1.5}.label-stacked.sc-ion-label-md-h{transform-origin:left top;transform:translateY(50%) scale(0.75);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl].sc-ion-label-md-h -no-combinator.label-stacked.sc-ion-label-md-h,[dir=rtl] .sc-ion-label-md-h -no-combinator.label-stacked.sc-ion-label-md-h,[dir=rtl].label-stacked.sc-ion-label-md-h,[dir=rtl] .label-stacked.sc-ion-label-md-h{transform-origin:right top}.label-floating.sc-ion-label-md-h{transform:translateY(96%);transform-origin:left top;transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl].sc-ion-label-md-h -no-combinator.label-floating.sc-ion-label-md-h,[dir=rtl] .sc-ion-label-md-h -no-combinator.label-floating.sc-ion-label-md-h,[dir=rtl].label-floating.sc-ion-label-md-h,[dir=rtl] .label-floating.sc-ion-label-md-h{transform-origin:right top}.item-textarea.label-floating.sc-ion-label-md-h,.item-textarea .label-floating.sc-ion-label-md-h{transform:translateY(185%)}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.item-has-focus.label-floating.sc-ion-label-md-h,.item-has-focus .label-floating.sc-ion-label-md-h,.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-has-value.label-floating.sc-ion-label-md-h,.item-has-value .label-floating.sc-ion-label-md-h{transform:translateY(50%) scale(0.75)}.item-has-focus.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-primary, #3880ff)}.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-contrast)}.sc-ion-label-md-s h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.sc-ion-label-md-s h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal;line-height:normal}.sc-ion-label-md-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:20px;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s>p{color:var(--ion-color-step-600, #666666)}.sc-ion-label-md-h.in-item-color.sc-ion-label-md-s>p{color:inherit}"};let _t=class{constructor(n){t(this,n),this.type="bounded"}async addRipple(t,n){return new Promise((i=>{l((()=>{const e=this.el.getBoundingClientRect(),s=e.width,r=e.height,o=Math.sqrt(s*s+r*r),l=Math.max(r,s),u=this.unbounded?l:o+It,h=Math.floor(l*Tt),c=u/h;let d=t-e.left,f=n-e.top;this.unbounded&&(d=.5*s,f=.5*r);const p=d-.5*h,g=f-.5*h,m=.5*s-d,w=.5*r-f;a((()=>{const t=document.createElement("div");t.classList.add("ripple-effect");const n=t.style;n.top=g+"px",n.left=p+"px",n.width=n.height=h+"px",n.setProperty("--final-scale",`${c}`),n.setProperty("--translate-end",`${m}px, ${w}px`),(this.el.shadowRoot||this.el).appendChild(t),setTimeout((()=>{i((()=>{Et(t)}))}),325)}))}))}))}get unbounded(){return"unbounded"===this.type}render(){const t=c(this);return i(r,{role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return e(this)}};const Et=t=>{t.classList.add("fade-out"),setTimeout((()=>{t.remove()}),200)},It=10,Tt=.5;_t.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{transform:translate(var(--translate-end)) scale(var(--final-scale, 1));animation:150ms fadeOutAnimation forwards}@keyframes rippleAnimation{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(1)}to{transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes fadeInAnimation{from{animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeOutAnimation{from{animation-timing-function:linear;opacity:0.16}to{opacity:0}}";let St=class{constructor(n){t(this,n)}render(){return i(r,{class:c(this)},i("slot",null))}};St.style=":host{display:flex;flex-wrap:wrap}";const Ct=(t,n)=>{if(1===t.nodeType)return(t.tagName===n.toUpperCase()?[t]:Array.from(t.querySelectorAll(n))).find((n=>n.value===t.value))};let At=class{constructor(i){t(this,i),this.ionChange=n(this,"ionChange",7),this.ionCancel=n(this,"ionCancel",7),this.ionFocus=n(this,"ionFocus",7),this.ionBlur=n(this,"ionBlur",7),this.ionStyle=n(this,"ionStyle",7),this.inputId="ion-sel-"+Lt++,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=t=>{this.setFocus(),this.open(t)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}disabledChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}async connectedCallback(){this.updateOverlayOptions(),this.emitStyle(),this.mutationO=((t,n,i)=>{if("undefined"==typeof MutationObserver)return;const e=new MutationObserver((t=>{i(((t,n)=>{let i;t.forEach((t=>{for(let e=0;e<t.addedNodes.length;e++)i=Ct(t.addedNodes[e],n)||i}))})(t,"ion-select-option"))}));return e.observe(t,{childList:!0,subtree:!0}),e})(this.el,0,(async()=>{this.updateOverlayOptions()}))}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentDidLoad(){this.didInit=!0}async open(t){if(this.disabled||this.isExpanded)return;const n=this.overlay=await this.createOverlay(t);return this.isExpanded=!0,n.onDidDismiss().then((()=>{this.overlay=void 0,this.isExpanded=!1,this.setFocus()})),await n.present(),n}createOverlay(t){let n=this.interface;return"action-sheet"!==n&&"popover"!==n||!this.multiple||(console.warn(`Select interface cannot be "${n}" with a multi-value select. Using the "alert" interface instead.`),n="alert"),"popover"!==n||t||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),n="alert"),"popover"===n?this.openPopover(t):"action-sheet"===n?this.openActionSheet():this.openAlert()}updateOverlayOptions(){const t=this.overlay;if(!t)return;const n=this.childOpts,i=this.value;switch(this.interface){case"action-sheet":t.buttons=this.createActionSheetButtons(n,i);break;case"popover":const e=t.querySelector("ion-select-popover");e&&(e.options=this.createPopoverOptions(n,i));break;case"alert":t.inputs=this.createAlertInputs(n,this.multiple?"checkbox":"radio",i)}}createActionSheetButtons(t,n){const i=t.map((t=>{const i=Dt(t),e=Array.from(t.classList).filter((t=>"hydrated"!==t)).join(" "),s=`${jt} ${e}`;return{role:Nt(i,n,this.compareWith)?"selected":"",text:t.textContent,cssClass:s,handler:()=>{this.value=i}}}));return i.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),i}createAlertInputs(t,n,i){return t.map((t=>{const e=Dt(t),s=Array.from(t.classList).filter((t=>"hydrated"!==t)).join(" ");return{type:n,cssClass:`${jt} ${s}`,label:t.textContent||"",value:e,checked:Nt(e,i,this.compareWith),disabled:t.disabled}}))}createPopoverOptions(t,n){return t.map((t=>{const i=Dt(t),e=Array.from(t.classList).filter((t=>"hydrated"!==t)).join(" ");return{text:t.textContent||"",cssClass:`${jt} ${e}`,value:i,checked:Nt(i,n,this.compareWith),disabled:t.disabled,handler:()=>{this.value=i,this.close()}}}))}async openPopover(t){const n=this.interfaceOptions,i=c(this),e=this.value,s=Object.assign(Object.assign({mode:i},n),{component:"ion-select-popover",cssClass:["select-popover",n.cssClass],event:t,componentProps:{header:n.header,subHeader:n.subHeader,message:n.message,value:e,options:this.createPopoverOptions(this.childOpts,e)}});return k.create(s)}async openActionSheet(){const t=c(this),n=this.interfaceOptions,i=Object.assign(Object.assign({mode:t},n),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",n.cssClass]});return _.create(i)}async openAlert(){const t=this.getLabel(),n=t?t.textContent:null,i=this.interfaceOptions,e=this.multiple?"checkbox":"radio",s=c(this),r=Object.assign(Object.assign({mode:s},i),{header:i.header?i.header:n,inputs:this.createAlertInputs(this.childOpts,e,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:t=>{this.value=t}}],cssClass:["select-alert",i.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return E.create(r)}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}getLabel(){return g(this.el)}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}getText(){const t=this.selectedText;return null!=t&&""!==t?t:Pt(this.childOpts,this.value,this.compareWith)}setFocus(){this.focusEl&&this.focusEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}render(){const{disabled:t,el:n,inputId:e,isExpanded:s,name:o,placeholder:l,value:a}=this,u=c(this),{labelText:h,labelId:d}=w(n,e);v(!0,n,o,Ot(a),t);let f=!1,p=this.getText();""===p&&null!=l&&(p=l,f=!0);const g={"select-text":!0,"select-placeholder":f},m=f?"placeholder":"text",b=void 0!==h?""!==p?`${p}, ${h}`:h:p;return i(r,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":t?"true":null,"aria-label":b,class:{[u]:!0,"in-item":x("ion-item",n),"select-disabled":t,"select-expanded":s}},i("div",{"aria-hidden":"true",class:g,part:m},p),i("div",{class:"select-icon",role:"presentation",part:"icon"},i("div",{class:"select-icon-inner"})),i("label",{id:d},b),i("button",{type:"button",disabled:t,id:e,"aria-labelledby":d,"aria-haspopup":"listbox","aria-expanded":`${s}`,onFocus:this.onFocus,onBlur:this.onBlur,ref:t=>this.focusEl=t}))}get el(){return e(this)}static get watchers(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}}};const Nt=(t,n,i)=>void 0!==t&&(Array.isArray(t)?t.some((t=>Rt(t,n,i))):Rt(t,n,i)),Dt=t=>{const n=t.value;return void 0===n?t.textContent||"":n},Ot=t=>{if(null!=t)return Array.isArray(t)?t.join(","):t.toString()},Rt=(t,n,i)=>"function"==typeof i?i(t,n):"string"==typeof i?t[i]===n[i]:Array.isArray(n)?n.includes(t):t===n,Pt=(t,n,i)=>void 0===n?"":Array.isArray(n)?n.map((n=>Mt(t,n,i))).filter((t=>null!==t)).join(", "):Mt(t,n,i)||"",Mt=(t,n,i)=>{const e=t.find((t=>Rt(Dt(t),n,i)));return e?e.textContent:null};let Lt=0;const jt="select-interface-option";At.style={ios:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}",md:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px}:host-context(.item-label-floating) .select-icon{transform:translate3d(0,  -9px,  0)}"};let Ft=class{constructor(n){t(this,n),this.inputId="ion-selopt-"+$t++,this.disabled=!1}render(){return i(r,{role:"option",id:this.inputId,class:c(this)})}get el(){return e(this)}},$t=0;Ft.style=":host{display:none}";let Ut=class{constructor(n){t(this,n)}render(){const t=c(this);return i(r,{class:y(this.color,{[t]:!0})},i("slot",null))}};Ut.style=":host(.ion-color){color:var(--ion-color-base)}";var Vt,Bt=(Vt=function(t,n){return(Vt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])})(t,n)},function(t,n){function i(){this.constructor=t}Vt(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}),zt=new(function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.EVENTS={EVENT_NAME_ACTIVATED_APP:"fb_mobile_activate_app",EVENT_NAME_DEACTIVATED_APP:"fb_mobile_deactivate_app",EVENT_NAME_SESSION_INTERRUPTIONS:"fb_mobile_app_interruptions",EVENT_NAME_TIME_BETWEEN_SESSIONS:"fb_mobile_time_between_sessions",EVENT_NAME_COMPLETED_REGISTRATION:"fb_mobile_complete_registration",EVENT_NAME_VIEWED_CONTENT:"fb_mobile_content_view",EVENT_NAME_SEARCHED:"fb_mobile_search",EVENT_NAME_RATED:"fb_mobile_rate",EVENT_NAME_COMPLETED_TUTORIAL:"fb_mobile_tutorial_completion",EVENT_NAME_PUSH_TOKEN_OBTAINED:"fb_mobile_obtain_push_token",EVENT_NAME_ADDED_TO_CART:"fb_mobile_add_to_cart",EVENT_NAME_ADDED_TO_WISHLIST:"fb_mobile_add_to_wishlist",EVENT_NAME_INITIATED_CHECKOUT:"fb_mobile_initiated_checkout",EVENT_NAME_ADDED_PAYMENT_INFO:"fb_mobile_add_payment_info",EVENT_NAME_PURCHASED:"fb_mobile_purchase",EVENT_NAME_ACHIEVED_LEVEL:"fb_mobile_level_achieved",EVENT_NAME_UNLOCKED_ACHIEVEMENT:"fb_mobile_achievement_unlocked",EVENT_NAME_SPENT_CREDITS:"fb_mobile_spent_credits",EVENT_PARAM_CURRENCY:"fb_currency",EVENT_PARAM_REGISTRATION_METHOD:"fb_registration_method",EVENT_PARAM_CONTENT_TYPE:"fb_content_type",EVENT_PARAM_CONTENT_ID:"fb_content_id",EVENT_PARAM_SEARCH_STRING:"fb_search_string",EVENT_PARAM_SUCCESS:"fb_success",EVENT_PARAM_MAX_RATING_VALUE:"fb_max_rating_value",EVENT_PARAM_PAYMENT_INFO_AVAILABLE:"fb_payment_info_available",EVENT_PARAM_NUM_ITEMS:"fb_num_items",EVENT_PARAM_LEVEL:"fb_level",EVENT_PARAM_DESCRIPTION:"fb_description",EVENT_PARAM_SOURCE_APPLICATION:"fb_mobile_launch_source",EVENT_PARAM_VALUE_YES:"1",EVENT_PARAM_VALUE_NO:"0"},n}return Bt(n,t),n.prototype.getApplicationId=function(){return I(this,"getApplicationId",{},arguments)},n.prototype.setApplicationId=function(t){return I(this,"setApplicationId",{},arguments)},n.prototype.getApplicationName=function(){return I(this,"getApplicationName",{},arguments)},n.prototype.setApplicationName=function(t){return I(this,"setApplicationName",{},arguments)},n.prototype.login=function(t){return I(this,"login",{},arguments)},n.prototype.loginWithLimitedTracking=function(t){return I(this,"loginWithLimitedTracking",{},arguments)},n.prototype.checkHasCorrectPermissions=function(t){return I(this,"checkHasCorrectPermissions",{},arguments)},n.prototype.isDataAccessExpired=function(){return I(this,"isDataAccessExpired",{},arguments)},n.prototype.reauthorizeDataAccess=function(){return I(this,"reauthorizeDataAccess",{},arguments)},n.prototype.logout=function(){return I(this,"logout",{},arguments)},n.prototype.getLoginStatus=function(){return I(this,"getLoginStatus",{},arguments)},n.prototype.getAccessToken=function(){return I(this,"getAccessToken",{},arguments)},n.prototype.getCurrentProfile=function(){return I(this,"getCurrentProfile",{},arguments)},n.prototype.showDialog=function(t){return I(this,"showDialog",{},arguments)},n.prototype.api=function(t,n,i){return I(this,"api",{},arguments)},n.prototype.logEvent=function(t,n,i){return I(this,"logEvent",{successIndex:3,errorIndex:4},arguments)},n.prototype.setAutoLogAppEventsEnabled=function(t){return I(this,"setAutoLogAppEventsEnabled",{successIndex:1,errorIndex:2},arguments)},n.prototype.setAdvertiserIDCollectionEnabled=function(t){return I(this,"setAdvertiserIDCollectionEnabled",{},arguments)},n.prototype.setAdvertiserTrackingEnabled=function(t){return I(this,"setAdvertiserTrackingEnabled",{},arguments)},n.prototype.logPurchase=function(t,n,i){return I(this,"logPurchase",{},arguments)},n.prototype.getDeferredApplink=function(){return I(this,"getDeferredApplink",{},arguments)},n.prototype.activateApp=function(){return I(this,"activateApp",{},arguments)},n.pluginName="Facebook",n.plugin="cordova-plugin-facebook-connect",n.pluginRef="facebookConnectPlugin",n.repo="https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect",n.install='ionic cordova plugin add cordova-plugin-facebook-connect --variable APP_ID="123456789" --variable APP_NAME="myApplication"',n.installVariables=["APP_ID","APP_NAME"],n.platforms=["Android","iOS","Browser"],n}(T)),qt=function(){var t=function(n,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])})(n,i)};return function(n,i){function e(){this.constructor=n}t(n,i),n.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}}(),Kt=new(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return qt(n,t),n.prototype.login=function(t){return I(this,"login",{successIndex:1,errorIndex:2},arguments)},n.prototype.trySilentLogin=function(t){return I(this,"trySilentLogin",{},arguments)},n.prototype.logout=function(){return I(this,"logout",{},arguments)},n.prototype.disconnect=function(){return I(this,"disconnect",{},arguments)},n.prototype.getSigningCertificateFingerprint=function(){return I(this,"getSigningCertificateFingerprint",{},arguments)},n.pluginName="GooglePlus",n.plugin="cordova-plugin-googleplus",n.pluginRef="window.plugins.googleplus",n.repo="https://github.com/EddyVerbruggen/cordova-plugin-googleplus",n.install="ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid",n.installVariables=["REVERSED_CLIENT_ID"],n.platforms=["Android","iOS"],n}(T)),Wt=function(){var t=function(n,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])})(n,i)};return function(n,i){function e(){this.constructor=n}t(n,i),n.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}}(),Gt=new(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Wt(n,t),n.prototype.login=function(){return I(this,"login",{},arguments)},n.prototype.logout=function(){return I(this,"logout",{},arguments)},n.prototype.showUser=function(){return I(this,"showUser",{},arguments)},n.pluginName="TwitterConnect",n.plugin="twitter-connect-plugin",n.pluginRef="TwitterConnect",n.repo="https://github.com/chroa/twitter-connect-plugin",n.install="ionic cordova plugin add https://github.com/chroa/twitter-connect-plugin --variable FABRIC_KEY=<Fabric API Key> --variable TWITTER_KEY=<Twitter Consumer Key> --variable TWITTER_SECRET=<Twitter Consumer Secret>",n.installVariables=["FABRIC_KEY","TWITTER_KEY","TWITTER_SECRET"],n.platforms=["Android","iOS"],n}(T));const Ht={env:"live",functionsHost:"https://us-central1-madness-club.cloudfunctions.net",firebase:{apiKey:"AIzaSyDBBrd_7ADcgZ4oaubnENC_d303MePtYLM",authDomain:"madness-club.firebaseapp.com",projectId:"madness-club",storageBucket:"madness-club.appspot.com",messagingSenderId:"875566401678",appId:"1:875566401678:web:3c68d3af2ab003df01e1df",measurementId:"G-K5X85CQLHL"},messaging:{vapidKey:"MY_VAPID_KEY"},stripe:{key:"pk_live_DDBgXdQrr1tK6U2FBpumxaoZ",clientId:"ca_D5I8vt9bsP7HxtFZT3vzC3mYTQe6uTRE"},url:"https://madness.club",dynamicLinkDomain:"madnessclub.page.link"};function Jt(t,n){const i=t?t&&t.indexOf(".")>=0?t.split(".").reduce(((t,n)=>t&&t[n]||null),Ht):t&&void 0!==Ht[t]?Ht[t]:null:Ht;return n&&(!i&&!1!==i&&0!==i||null==i)?n:i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=function(t,n){if(!t)throw Xt(n)},Xt=function(t){return new Error("Firebase Database (${JSCORE_VERSION}) INTERNAL ASSERT FAILED: "+t)},Qt=function(t){const n=[];let i=0;for(let e=0;e<t.length;e++){let s=t.charCodeAt(e);s<128?n[i++]=s:s<2048?(n[i++]=s>>6|192,n[i++]=63&s|128):55296==(64512&s)&&e+1<t.length&&56320==(64512&t.charCodeAt(e+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++e)),n[i++]=s>>18|240,n[i++]=s>>12&63|128,n[i++]=s>>6&63|128,n[i++]=63&s|128):(n[i++]=s>>12|224,n[i++]=s>>6&63|128,n[i++]=63&s|128)}return n},Zt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,n){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,e=[];for(let n=0;n<t.length;n+=3){const s=t[n],r=n+1<t.length,o=r?t[n+1]:0,l=n+2<t.length,a=l?t[n+2]:0;let u=(15&o)<<2|a>>6,h=63&a;l||(h=64,r||(u=64)),e.push(i[s>>2],i[(3&s)<<4|o>>4],i[u],i[h])}return e.join("")},encodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(t):this.encodeByteArray(Qt(t),n)},decodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(t):function(t){const n=[];let i=0,e=0;for(;i<t.length;){const s=t[i++];if(s<128)n[e++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[i++];n[e++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536;n[e++]=String.fromCharCode(55296+(r>>10)),n[e++]=String.fromCharCode(56320+(1023&r))}else{const r=t[i++],o=t[i++];n[e++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return n.join("")}(this.decodeStringToByteArray(t,n))},decodeStringToByteArray(t,n){this.init_();const i=n?this.charToByteMapWebSafe_:this.charToByteMap_,e=[];for(let n=0;n<t.length;){const s=i[t.charAt(n++)],r=n<t.length?i[t.charAt(n)]:0;++n;const o=n<t.length?i[t.charAt(n)]:64;++n;const l=n<t.length?i[t.charAt(n)]:64;if(++n,null==s||null==r||null==o||null==l)throw Error();e.push(s<<2|r>>4),64!==o&&(e.push(r<<4&240|o>>2),64!==l&&e.push(o<<6&192|l))}return e},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},tn=function(t){const n=Qt(t);return Zt.encodeByteArray(n,!0)},nn=function(t){return tn(t).replace(/\./g,"")},en=function(t){try{return Zt.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sn(t){return rn(void 0,t)}function rn(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(const i in n)n.hasOwnProperty(i)&&"__proto__"!==i&&(t[i]=rn(t[i],n[i]));return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class on{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(n):t(n,i))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ln(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function an(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ln())}function un(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function hn(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function cn(){const t=ln();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dn(){return"object"==typeof indexedDB}class fn extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pn.prototype.create)}}class pn{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},e=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,n){return t.replace(gn,((t,i)=>{const e=n[i];return null!=e?String(e):`<${i}?>`}))}(s,i):"Error";return new fn(e,`${this.serviceName}: ${r} (${e}).`,i)}}const gn=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t){return JSON.parse(t)}function wn(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=function(t){let n={},i={},e={},s="";try{const r=t.split(".");n=mn(en(r[0])||""),i=mn(en(r[1])||""),s=r[2],e=i.d||{},delete i.d}catch(t){}return{header:n,claims:i,data:e,signature:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bn(t,n){return Object.prototype.hasOwnProperty.call(t,n)}function yn(t,n){return Object.prototype.hasOwnProperty.call(t,n)?t[n]:void 0}function xn(t){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n))return!1;return!0}function kn(t,n,i){const e={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=n.call(i,t[s],s,t));return e}function _n(t,n){if(t===n)return!0;const i=Object.keys(t),e=Object.keys(n);for(const s of i){if(!e.includes(s))return!1;const i=t[s],r=n[s];if(En(i)&&En(r)){if(!_n(i,r))return!1}else if(i!==r)return!1}for(const t of e)if(!i.includes(t))return!1;return!0}function En(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t){const n=[];for(const[i,e]of Object.entries(t))Array.isArray(e)?e.forEach((t=>{n.push(encodeURIComponent(i)+"="+encodeURIComponent(t))})):n.push(encodeURIComponent(i)+"="+encodeURIComponent(e));return n.length?"&"+n.join("&"):""}function Tn(t){const n={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[i,e]=t.split("=");n[decodeURIComponent(i)]=decodeURIComponent(e)}})),n}function Sn(t){const n=t.indexOf("?");if(!n)return"";const i=t.indexOf("#",n);return t.substring(n,i>0?i:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if("string"==typeof t)for(let e=0;e<16;e++)i[e]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let e=0;e<16;e++)i[e]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let t=16;t<80;t++){const n=i[t-3]^i[t-8]^i[t-14]^i[t-16];i[t]=4294967295&(n<<1|n>>>31)}let e,s,r=this.chain_[0],o=this.chain_[1],l=this.chain_[2],a=this.chain_[3],u=this.chain_[4];for(let t=0;t<80;t++){t<40?t<20?(e=a^o&(l^a),s=1518500249):(e=o^l^a,s=1859775393):t<60?(e=o&l|a&(o|l),s=2400959708):(e=o^l^a,s=3395469782);const n=(r<<5|r>>>27)+e+u+s+i[t]&4294967295;u=a,a=l,l=4294967295&(o<<30|o>>>2),o=r,r=n}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(t,n){if(null==t)return;void 0===n&&(n=t.length);const i=n-this.blockSize;let e=0;const s=this.buf_;let r=this.inbuf_;for(;e<n;){if(0===r)for(;e<=i;)this.compress_(t,e),e+=this.blockSize;if("string"==typeof t){for(;e<n;)if(s[r]=t.charCodeAt(e),++r,++e,r===this.blockSize){this.compress_(s),r=0;break}}else for(;e<n;)if(s[r]=t[e],++r,++e,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=n}digest(){const t=[];let n=8*this.total_;this.update(this.pad_,this.inbuf_<56?56-this.inbuf_:this.blockSize-(this.inbuf_-56));for(let t=this.blockSize-1;t>=56;t--)this.buf_[t]=255&n,n/=256;this.compress_(this.buf_);let i=0;for(let n=0;n<5;n++)for(let e=24;e>=0;e-=8)t[i]=this.chain_[n]>>e&255,++i;return t}}class An{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((n=>{n.next(t)}))}error(t){this.forEachObserver((n=>{n.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,n,i){let e;if(void 0===t&&void 0===n&&void 0===i)throw new Error("Missing Observer.");e=function(t){if("object"!=typeof t||null===t)return!1;for(const n of["next","error","complete"])if(n in t&&"function"==typeof t[n])return!0;return!1}(t)?t:{next:t,error:n,complete:i},void 0===e.next&&(e.next=Nn),void 0===e.error&&(e.error=Nn),void 0===e.complete&&(e.complete=Nn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?e.error(this.finalError):e.complete()}catch(t){}})),this.observers.push(e),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{n(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Nn(){}function Dn(t,n){return`${t} failed: ${n} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=function(t){let n=0;for(let i=0;i<t.length;i++){const e=t.charCodeAt(i);e<128?n++:e<2048?n+=2:e>=55296&&e<=56319?(n+=4,i++):n+=3}return n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rn(t){return t&&t._delegate?t._delegate:t}class Pn{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mn{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const t=new on;if(this.instancesDeferred.set(n,t),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&t.resolve(i)}catch(t){}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),e=null!==(n=null==t?void 0:t.optional)&&void 0!==n&&n;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(e)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(t){if(e)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const e=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[t,n]of this.instancesDeferred.entries())i===this.normalizeInstanceIdentifier(t)&&n.resolve(e);return e}onInit(t,n){var i;const e=this.normalizeInstanceIdentifier(n),s=null!==(i=this.onInitCallbacks.get(e))&&void 0!==i?i:new Set;s.add(t),this.onInitCallbacks.set(e,s);const r=this.instances.get(e);return r&&t(r,e),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const e of i)try{e(t,n)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(e=t,"[DEFAULT]"===e?void 0:e),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(t){}var e;return i||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Ln{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Mn(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jn;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(jn||(jn={}));const Fn={debug:jn.DEBUG,verbose:jn.VERBOSE,info:jn.INFO,warn:jn.WARN,error:jn.ERROR,silent:jn.SILENT},$n=jn.INFO,Un={[jn.DEBUG]:"log",[jn.VERBOSE]:"log",[jn.INFO]:"info",[jn.WARN]:"warn",[jn.ERROR]:"error"},Vn=(t,n,...i)=>{if(n<t.logLevel)return;const e=(new Date).toISOString(),s=Un[n];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`);console[s](`[${e}]  ${t.name}:`,...i)};class Bn{constructor(t){this.name=t,this._logLevel=$n,this._logHandler=Vn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in jn))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Fn[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,jn.DEBUG,...t),this._logHandler(this,jn.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,jn.VERBOSE,...t),this._logHandler(this,jn.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,jn.INFO,...t),this._logHandler(this,jn.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,jn.WARN,...t),this._logHandler(this,jn.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,jn.ERROR,...t),this._logHandler(this,jn.ERROR,...t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const n=t.getComponent();return"VERSION"===(null==n?void 0:n.type)}(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}return null})).filter((t=>t)).join(" ")}}const qn="@firebase/app",Kn=new Bn("@firebase/app"),Wn={[qn]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Gn=new Map,Hn=new Map;function Jn(t,n){try{t.container.addComponent(n)}catch(i){Kn.debug(`Component ${n.name} failed to register with FirebaseApp ${t.name}`,i)}}function Yn(t){const n=t.name;if(Hn.has(n))return Kn.debug(`There were multiple attempts to register component ${n}.`),!1;Hn.set(n,t);for(const n of Gn.values())Jn(n,t);return!0}function Xn(t,n){return t.container.getProvider(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new pn("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Pn("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t="[DEFAULT]"){const n=Gn.get(t);if(!n)throw Qn.create("no-app",{appName:t});return n}function ni(t,n,i){var e;let s=null!==(e=Wn[t])&&void 0!==e?e:t;i&&(s+=`-${i}`);const r=s.match(/\s|\//),o=n.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${n}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${n}" contains illegal characters (whitespace or "/")`),void Kn.warn(t.join(" "))}Yn(new Pn(`${s}-version`,(()=>({library:s,version:n})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ii(t,n){var i={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(i[e]=t[e]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(i[e[s]]=t[e[s]])}return i}Yn(new Pn("platform-logger",(t=>new zn(t)),"PRIVATE")),ni(qn,"0.7.11",""),ni(qn,"0.7.11","esm2017"),ni("fire-js",""),
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ni("firebase","9.6.1","app");const ei=function(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}},si=new pn("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ri=new Bn("@firebase/auth");function oi(t,...n){ri.logLevel<=jn.ERROR&&ri.error(`Auth (9.6.1): ${t}`,...n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t,...n){throw ci(t,...n)}function ai(t,...n){return ci(t,...n)}function ui(t,n,i){const e=Object.assign(Object.assign({},ei()),{[n]:i});return new pn("auth","Firebase",e).create(n,{appName:t.name})}function hi(t,n,i){if(!(n instanceof i))throw i.name!==n.constructor.name&&li(t,"argument-error"),ui(t,"argument-error",`Type of ${n.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ci(t,...n){if("string"!=typeof t){const i=n[0],e=[...n.slice(1)];return e[0]&&(e[0].appName=t.name),t._errorFactory.create(i,...e)}return si.create(t,...n)}function di(t,n,...i){if(!t)throw ci(n,...i)}function fi(t){const n="INTERNAL ASSERTION FAILED: "+t;throw oi(n),new Error(n)}function pi(t,n){t||fi(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new Map;function mi(t){pi(t instanceof Function,"Expected a class definition");let n=gi.get(t);return n?(pi(n instanceof t,"Instance stored in cache mismatched with class"),n):(n=new t,gi.set(t,n),n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wi(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function vi(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bi{constructor(t,n){this.shortDelay=t,this.longDelay=n,pi(n>t,"Short delay should be less than long delay!"),this.isMobile=an()||hn()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===vi()||"https:"===vi()||un()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t,n){pi(t.emulator,"Emulator should always be set here");const{url:i}=t.emulator;return n?`${i}${n.startsWith("/")?n.slice(1):n}`:i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void fi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void fi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void fi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},_i=new bi(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t,n){return t.tenantId&&!n.tenantId?Object.assign(Object.assign({},n),{tenantId:t.tenantId}):n}async function Ii(t,n,i,e,s={}){return Ti(t,s,(async()=>{let s={},r={};e&&("GET"===n?r=e:s={body:JSON.stringify(e)});const o=In(Object.assign({key:t.config.apiKey},r)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),xi.fetch()(Ci(t,t.config.apiHost,i,o),Object.assign({method:n,headers:l,referrerPolicy:"no-referrer"},s))}))}async function Ti(t,n,i){t._canInitEmulator=!1;const e=Object.assign(Object.assign({},ki),n);try{const n=new Ai(t),s=await Promise.race([i(),n.promise]);n.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw Ni(t,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const n=s.ok?r.errorMessage:r.error.message,[i,o]=n.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw Ni(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===i)throw Ni(t,"email-already-in-use",r);const l=e[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ui(t,l,o);li(t,l)}}catch(n){if(n instanceof fn)throw n;li(t,"network-request-failed")}}async function Si(t,n,i,e,s={}){const r=await Ii(t,n,i,e,s);return"mfaPendingCredential"in r&&li(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Ci(t,n,i,e){const s=`${n}${i}?${e}`;return t.config.emulator?yi(t.config,s):`${t.config.apiScheme}://${s}`}class Ai{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,n)=>{this.timer=setTimeout((()=>n(ai(this.auth,"timeout"))),_i.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ni(t,n,i){const e={appName:t.name};i.email&&(e.email=i.email),i.phoneNumber&&(e.phoneNumber=i.phoneNumber);const s=ai(t,n,e);return s.customData._tokenResponse=i,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Di(t){if(t)try{const n=new Date(Number(t));if(!isNaN(n.getTime()))return n.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t,n=!1){return Rn(t).getIdToken(n)}async function Ri(t,n=!1){const i=Rn(t),e=await i.getIdToken(n),s=Mi(e);di(s&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:e,authTime:Di(Pi(s.auth_time)),issuedAtTime:Di(Pi(s.iat)),expirationTime:Di(Pi(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}function Pi(t){return 1e3*Number(t)}function Mi(t){const[n,i,e]=t.split(".");if(void 0===n||void 0===i||void 0===e)return oi("JWT malformed, contained fewer than 3 sections"),null;try{const t=en(i);return t?JSON.parse(t):(oi("Failed to decode base64 JWT payload"),null)}catch(t){return oi("Caught error parsing JWT payload as JSON",t),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Li(t,n,i=!1){if(i)return n;try{return await n}catch(n){throw n instanceof fn&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}class ji{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(n=this.user.stsTokenManager.expirationTime)&&void 0!==n?n:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Di(this.lastLoginAt),this.creationTime=Di(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(t){var n;const i=t.auth,e=await t.getIdToken(),s=await Li(t,async function(t,n){return Ii(t,"POST","/v1/accounts:lookup",n)}(i,{idToken:e}));di(null==s?void 0:s.users.length,i,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=(null===(n=r.providerUserInfo)||void 0===n?void 0:n.length)?r.providerUserInfo.map((t=>{var{providerId:n}=t,i=ii(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})):[],l=(a=o,[...t.providerData.filter((t=>!a.some((n=>n.providerId===t.providerId)))),...a]);var a;const u=!!t.isAnonymous&&!(t.email&&r.passwordHash||(null==l?void 0:l.length)),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Fi(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){di(t.idToken,"internal-error"),di(void 0!==t.idToken,"internal-error"),di(void 0!==t.refreshToken,"internal-error");const n="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const n=Mi(t);return di(n,"internal-error"),di(void 0!==n.exp,"internal-error"),di(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return di(!this.accessToken||this.refreshToken,t,"user-token-expired"),n||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:e,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,n){const i=await Ti(t,{},(async()=>{const i=In({grant_type:"refresh_token",refresh_token:n}).slice(1),{tokenApiHost:e,apiKey:s}=t.config,r=Ci(t,e,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",xi.fetch()(r,{method:"POST",headers:o,body:i})}));return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}(t,n);this.updateTokensAndExpiration(i,e,Number(s))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(t,n){const{refreshToken:i,accessToken:e,expirationTime:s}=n,r=new Ui;return i&&(di("string"==typeof i,"internal-error",{appName:t}),r.refreshToken=i),e&&(di("string"==typeof e,"internal-error",{appName:t}),r.accessToken=e),s&&(di("number"==typeof s,"internal-error",{appName:t}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return fi("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t,n){di("string"==typeof t||void 0===t,"internal-error",{appName:n})}class Bi{constructor(t){var{uid:n,auth:i,stsTokenManager:e}=t,s=ii(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new ji(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=e,this.accessToken=e.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new Fi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Li(this,this.stsTokenManager.getToken(this.auth,t));return di(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Ri(this,t)}reload(){return async function(t){const n=Rn(t);await $i(n),await n.auth._persistUserIfCurrent(n),n.auth._notifyListenersIfCurrent(n)}(this)}_assign(t){this!==t&&(di(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Bi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){di(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await $i(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Li(this,async function(t,n){return Ii(t,"POST","/v1/accounts:delete",n)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,e,s,r,o,l,a,u;const h=null!==(i=n.displayName)&&void 0!==i?i:void 0,c=null!==(e=n.email)&&void 0!==e?e:void 0,d=null!==(s=n.phoneNumber)&&void 0!==s?s:void 0,f=null!==(r=n.photoURL)&&void 0!==r?r:void 0,p=null!==(o=n.tenantId)&&void 0!==o?o:void 0,g=null!==(l=n._redirectEventId)&&void 0!==l?l:void 0,m=null!==(a=n.createdAt)&&void 0!==a?a:void 0,w=null!==(u=n.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:b,isAnonymous:y,providerData:x,stsTokenManager:k}=n;di(v&&k,t,"internal-error");const _=Ui.fromJSON(this.name,k);di("string"==typeof v,t,"internal-error"),Vi(h,t.name),Vi(c,t.name),di("boolean"==typeof b,t,"internal-error"),di("boolean"==typeof y,t,"internal-error"),Vi(d,t.name),Vi(f,t.name),Vi(p,t.name),Vi(g,t.name),Vi(m,t.name),Vi(w,t.name);const E=new Bi({uid:v,auth:t,email:c,emailVerified:b,displayName:h,isAnonymous:y,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:m,lastLoginAt:w});return x&&Array.isArray(x)&&(E.providerData=x.map((t=>Object.assign({},t)))),g&&(E._redirectEventId=g),E}static async _fromIdTokenResponse(t,n,i=!1){const e=new Ui;e.updateFromServerResponse(n);const s=new Bi({uid:n.localId,auth:t,stsTokenManager:e,isAnonymous:i});return await $i(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return void 0===n?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}zi.type="NONE";const qi=zi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t,n,i){return`firebase:${t}:${n}:${i}`}class Wi{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:e,name:s}=this.auth;this.fullUserKey=Ki(this.userKey,e.apiKey,s),this.fullPersistenceKey=Ki("persistence",e.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Bi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,n?this.setCurrentUser(n):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Wi(mi(qi),t,i);const e=(await Promise.all(n.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let s=e[0]||mi(qi);const r=Ki(i,t.config.apiKey,t.name);let o=null;for(const i of n)try{const n=await i._get(r);if(n){const e=Bi._fromJSON(t,n);i!==s&&(o=e),s=i;break}}catch(t){}const l=e.filter((t=>t._shouldAllowMigration));return s._shouldAllowMigration&&l.length?(s=l[0],o&&await s._set(r,o.toJSON()),await Promise.all(n.map((async t=>{if(t!==s)try{await t._remove(r)}catch(t){}}))),new Wi(s,t,i)):new Wi(s,t,i)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t){const n=t.toLowerCase();if(n.includes("opera/")||n.includes("opr/")||n.includes("opios/"))return"Opera";if(Xi(n))return"IEMobile";if(n.includes("msie")||n.includes("trident/"))return"IE";if(n.includes("edge/"))return"Edge";if(Hi(n))return"Firefox";if(n.includes("silk/"))return"Silk";if(Zi(n))return"Blackberry";if(te(n))return"Webos";if(Ji(n))return"Safari";if((n.includes("chrome/")||Yi(n))&&!n.includes("edge/"))return"Chrome";if(Qi(n))return"Android";{const n=t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Hi(t=ln()){return/firefox\//i.test(t)}function Ji(t=ln()){const n=t.toLowerCase();return n.includes("safari/")&&!n.includes("chrome/")&&!n.includes("crios/")&&!n.includes("android")}function Yi(t=ln()){return/crios\//i.test(t)}function Xi(t=ln()){return/iemobile/i.test(t)}function Qi(t=ln()){return/android/i.test(t)}function Zi(t=ln()){return/blackberry/i.test(t)}function te(t=ln()){return/webos/i.test(t)}function ne(t=ln()){return/iphone|ipad|ipod/i.test(t)}function ie(t=ln()){return ne(t)||Qi(t)||te(t)||Zi(t)||/windows phone/i.test(t)||Xi(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ee(t,n=[]){let i;switch(t){case"Browser":i=Gi(ln());break;case"Worker":i=`${Gi(ln())}-${t}`;break;default:i=t}return`${i}/JsCore/9.6.1/${n.length?n.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,n){this.app=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oe(this),this.idTokenSubscription=new oe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=si,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=mi(n)),this._initializationPromise=this.queue((async()=>{var i,e;if(!this._deleted&&(this.persistenceManager=await Wi.create(this,t),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(n),this.lastNotifiedUid=(null===(e=this.currentUser)||void 0===e?void 0:e.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var n;let i=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const e=null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId,s=null==i?void 0:i._redirectEventId,r=await this.tryRedirectSignIn(t);e&&e!==s||!(null==r?void 0:r.user)||(i=r.user)}return i?i._redirectEventId?(di(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await $i(t)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Rn(t):null;return n&&di(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&di(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(mi(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new pn("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return null===t?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&mi(t)||this._popupRedirectResolver;di(n,this,"argument-error"),this.redirectPersistenceManager=await Wi.create(this,[mi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue((async()=>{})),(null===(n=this._currentUser)||void 0===n?void 0:n._redirectEventId)===t?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(n=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==n?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,e){if(this._deleted)return()=>{};const s="function"==typeof n?n:n.next.bind(n),r=this._isInitialized?Promise.resolve():this._initializationPromise;return di(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof n?t.addObserver(n,i,e):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return di(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),t}}function re(t){return Rn(t)}class oe{constructor(t){this.auth=t,this.observer=null,this.addObserver=function(t){const n=new An(t,void 0);return n.subscribe.bind(n)}((t=>this.observer=t))}get next(){return di(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function le(t){const n=t.indexOf(":");return n<0?"":t.substr(0,n+1)}function ae(t){if(!t)return null;const n=Number(t);return isNaN(n)?null:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return fi("not implemented")}_getIdTokenResponse(t){return fi("not implemented")}_linkToIdToken(t,n){return fi("not implemented")}_getReauthenticationResolver(t){return fi("not implemented")}}async function he(t,n){return Ii(t,"POST","/v1/accounts:update",n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(t,n){return Ii(t,"POST","/v1/accounts:sendOobCode",Ei(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de extends ue{constructor(t,n,i,e=null){super("password",i),this._email=t,this._password=n,this._tenantId=e}static _fromEmailAndPassword(t,n){return new de(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new de(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n="string"==typeof t?JSON.parse(t):t;if((null==n?void 0:n.email)&&(null==n?void 0:n.password)){if("password"===n.signInMethod)return this._fromEmailAndPassword(n.email,n.password);if("emailLink"===n.signInMethod)return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return async function(t,n){return Si(t,"POST","/v1/accounts:signInWithPassword",Ei(t,n))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,n){return Si(t,"POST","/v1/accounts:signInWithEmailLink",Ei(t,n))}(t,{email:this._email,oobCode:this._password});default:li(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return he(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,n){return Si(t,"POST","/v1/accounts:signInWithEmailLink",Ei(t,n))}(t,{idToken:n,email:this._email,oobCode:this._password});default:li(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(t,n){return Si(t,"POST","/v1/accounts:signInWithIdp",Ei(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends ue{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new pe(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):li("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n="string"==typeof t?JSON.parse(t):t,{providerId:i,signInMethod:e}=n,s=ii(n,["providerId","signInMethod"]);if(!i||!e)return null;const r=new pe(i,e);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(t){return fe(t,this.buildRequest())}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,fe(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,fe(t,n)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=In(n)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me extends ue{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,n){return new me({verificationId:t,verificationCode:n})}static _fromTokenResponse(t,n){return new me({phoneNumber:t,temporaryProof:n})}_getIdTokenResponse(t){return async function(t,n){return Si(t,"POST","/v1/accounts:signInWithPhoneNumber",Ei(t,n))}(t,this._makeVerificationRequest())}_linkToIdToken(t,n){return async function(t,n){const i=await Si(t,"POST","/v1/accounts:signInWithPhoneNumber",Ei(t,n));if(i.temporaryProof)throw Ni(t,"account-exists-with-different-credential",i);return i}(t,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,n){return Si(t,"POST","/v1/accounts:signInWithPhoneNumber",Ei(t,Object.assign(Object.assign({},n),{operation:"REAUTH"})),ge)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:n,verificationId:i,verificationCode:e}=this.params;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:i,code:e}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:n,verificationCode:i,phoneNumber:e,temporaryProof:s}=t;return i||n||e||s?new me({verificationId:n,verificationCode:i,phoneNumber:e,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){var n,i,e,s,r,o;const l=Tn(Sn(t)),a=null!==(n=l.apiKey)&&void 0!==n?n:null,u=null!==(i=l.oobCode)&&void 0!==i?i:null,h=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(e=l.mode)&&void 0!==e?e:null);di(a&&u&&h,"argument-error"),this.apiKey=a,this.operation=h,this.code=u,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=l.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=l.tenantId)&&void 0!==o?o:null}static parseLink(t){const n=function(t){const n=Tn(Sn(t)).link,i=n?Tn(Sn(n)).deep_link_id:null,e=Tn(Sn(t)).deep_link_id;return(e?Tn(Sn(e)).link:null)||e||i||n||t}(t);try{return new we(n)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(){this.providerId=ve.PROVIDER_ID}static credential(t,n){return de._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=we.parseLink(n);return di(i,"argument-error"),de._fromEmailAndCode(t,i.code,i.tenantId)}}ve.PROVIDER_ID="password",ve.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ve.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends be{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends ye{constructor(){super("facebook.com")}static credential(t){return pe._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xe.credentialFromTaggedObject(t)}static credentialFromError(t){return xe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return xe.credential(t.oauthAccessToken)}catch(t){return null}}}xe.FACEBOOK_SIGN_IN_METHOD="facebook.com",xe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke extends ye{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return pe._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ke.credentialFromTaggedObject(t)}static credentialFromError(t){return ke.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return ke.credential(n,i)}catch(t){return null}}}ke.GOOGLE_SIGN_IN_METHOD="google.com",ke.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e extends ye{constructor(){super("twitter.com")}static credential(t,n){return pe._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return _e.credentialFromTaggedObject(t)}static credentialFromError(t){return _e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return _e.credential(n,i)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ee(t,n){return Si(t,"POST","/v1/accounts:signUp",Ei(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_e.TWITTER_SIGN_IN_METHOD="twitter.com",_e.PROVIDER_ID="twitter.com";class Ie{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,e=!1){const s=await Bi._fromIdTokenResponse(t,i,e),r=Te(i);return new Ie({user:s,providerId:r,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const e=Te(i);return new Ie({user:t,providerId:e,_tokenResponse:i,operationType:n})}}function Te(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends fn{constructor(t,n,i,e){var s;super(n.code,n.message),this.operationType=i,this.user=e,Object.setPrototypeOf(this,Se.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,e){return new Se(t,n,i,e)}}function Ce(t,n,i,e){return("reauthenticate"===n?i._getReauthenticationResolver(t):i._getIdTokenResponse(t)).catch((i=>{if("auth/multi-factor-auth-required"===i.code)throw Se._fromErrorAndOperation(t,i,n,e);throw i}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ae(t,n,i=!1){const{auth:e}=t,s="reauthenticate";try{const r=await Li(t,Ce(e,s,n,t),i);di(r.idToken,e,"internal-error");const o=Mi(r.idToken);di(o,e,"internal-error");const{sub:l}=o;return di(t.uid===l,e,"user-mismatch"),Ie._forOperation(t,s,r)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&li(e,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(t,n,i=!1){const e="signIn",s=await Ce(t,e,n),r=await Ie._fromIdTokenResponse(t,e,s);return i||await t._updateCurrentUser(r.user),r}async function De(t,n){return Ne(re(t),n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oe(t,n,i){var e;di((null===(e=i.url)||void 0===e?void 0:e.length)>0,t,"invalid-continue-uri"),di(void 0===i.dynamicLinkDomain||i.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),n.continueUrl=i.url,n.dynamicLinkDomain=i.dynamicLinkDomain,n.canHandleCodeInApp=i.handleCodeInApp,i.iOS&&(di(i.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),n.iOSBundleId=i.iOS.bundleId),i.android&&(di(i.android.packageName.length>0,t,"missing-android-pkg-name"),n.androidInstallApp=i.android.installApp,n.androidMinimumVersionCode=i.android.minimumVersion,n.androidPackageName=i.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(t,n,i){const{auth:e}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(s.email=n),i&&(s.password=i);const r=await Li(t,he(e,s));await t._updateTokensIfNecessary(r,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pe{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends Pe{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=ln();return Ji(t)||ne(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=ie(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),e=this.localCache[n];i!==e&&t(n,e,i)}}onStorageEvent(t,n=!1){if(!t.key)return void this.forAllChangedKeys(((t,n,i)=>{this.notifyListeners(t,i)}));const i=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const e=this.storage.getItem(i);if(t.newValue!==e)null!==t.newValue?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!n)return}const e=()=>{const t=this.storage.getItem(i);(n||this.localCache[i]!==t)&&this.notifyListeners(i,t)},s=this.storage.getItem(i);cn()&&10===document.documentMode&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(e,10):e()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const t of Array.from(i))t(n?JSON.parse(n):n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Me.type="LOCAL";const Le=Me;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Pe{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,n){}_removeListener(t,n){}}je.type="SESSION";const Fe=je;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find((n=>n.isListeningto(t)));if(n)return n;const i=new $e(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:e,data:s}=n.data,r=this.handlersMap[e];if(!(null==r?void 0:r.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:e});const o=Array.from(r).map((async t=>t(n.origin,s))),l=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);n.ports[0].postMessage({status:"done",eventId:i,eventType:e,response:l})}_subscribe(t,n){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),n&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ue(t="",n=10){let i="";for(let t=0;t<n;t++)i+=Math.floor(10*Math.random());return t+i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$e.receivers=[];class Ve{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const e="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!e)throw new Error("connection_unavailable");let s,r;return new Promise(((o,l)=>{const a=Ue("",20);e.port1.start();const u=setTimeout((()=>{l(new Error("unsupported_event"))}),i);r={messageChannel:e,onMessage(t){const n=t;if(n.data.eventId===a)switch(n.data.status){case"ack":clearTimeout(u),s=setTimeout((()=>{l(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(n.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"))}}},this.handlers.add(r),e.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:a,data:n},[e.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ze(){return void 0!==Be().WorkerGlobalScope&&"function"==typeof Be().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qe="firebaseLocalStorageDb";class Ke{constructor(t){this.request=t}toPromise(){return new Promise(((t,n)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{n(this.request.error)}))}))}}function We(t,n){return t.transaction(["firebaseLocalStorage"],n?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Ge(){const t=indexedDB.open(qe,1);return new Promise(((n,i)=>{t.addEventListener("error",(()=>{i(t.error)})),t.addEventListener("upgradeneeded",(()=>{const n=t.result;try{n.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){i(t)}})),t.addEventListener("success",(async()=>{const i=t.result;i.objectStoreNames.contains("firebaseLocalStorage")?n(i):(i.close(),await function(){const t=indexedDB.deleteDatabase(qe);return new Ke(t).toPromise()}(),n(await Ge()))}))}))}async function He(t,n,i){const e=We(t,!0).put({fbase_key:n,value:i});return new Ke(e).toPromise()}function Je(t,n){const i=We(t,!0).delete(n);return new Ke(i).toPromise()}class Ye{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ge()),this.db}async _withRetries(t){let n=0;for(;;)try{const n=await this._openDb();return await t(n)}catch(t){if(n++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ze()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$e._getInstance(ze()?self:null),this.receiver._subscribe("keyChanged",(async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)}))),this.receiver._subscribe("ping",(async()=>["keyChanged"]))}async initializeSender(){var t,n;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Ve(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(null===(t=i[0])||void 0===t?void 0:t.fulfilled)&&(null===(n=i[0])||void 0===n?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&function(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ge();return await He(t,"__sak","1"),await Je(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite((async()=>(await this._withRetries((i=>He(i,t,n))),this.localCache[t]=n,this.notifyServiceWorker(t))))}async _get(t){const n=await this._withRetries((n=>async function(t,n){const i=We(t,!1).get(n),e=await new Ke(i).toPromise();return void 0===e?null:e.value}(n,t)));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Je(n,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const n=We(t,!1).getAll();return new Ke(n).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const n=[],i=new Set;for(const{fbase_key:e,value:s}of t)i.add(e),JSON.stringify(this.localCache[e])!==JSON.stringify(s)&&(this.notifyListeners(e,s),n.push(e));for(const t of Object.keys(this.localCache))this.localCache[t]&&!i.has(t)&&(this.notifyListeners(t,null),n.push(t));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const t of Array.from(i))t(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ye.type="LOCAL";const Xe=Ye;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new bi(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{constructor(t,n){this.verificationId=t,this.onConfirmation=n}confirm(t){const n=me._fromVerification(this.verificationId,t);return this.onConfirmation(n)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ze(t,n){return n?mi(n):(di(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends ue{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return fe(t,this._buildIdpRequest())}_linkToIdToken(t,n){return fe(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return fe(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function ns(t){return Ne(t.auth,new ts(t),t.bypassAuthState)}function is(t){const{auth:n,user:i}=t;return di(i,n,"internal-error"),Ae(i,new ts(t),t.bypassAuthState)}async function es(t){const{auth:n,user:i}=t;return di(i,n,"internal-error"),async function(t,n,i=!1){const e=await Li(t,n._linkToIdToken(t.auth,await t.getIdToken()),i);return Ie._forOperation(t,"link",e)}(i,new ts(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t,n,i,e,s=!1){this.auth=t,this.resolver=i,this.user=e,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise((async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:e,tenantId:s,error:r,type:o}=t;if(r)return void this.reject(r);const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:e||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ns;case"linkViaPopup":case"linkViaRedirect":return es;case"reauthViaPopup":case"reauthViaRedirect":return is;default:li(this.auth,"internal-error")}}resolve(t){pi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){pi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new bi(2e3,1e4);class os extends ss{constructor(t,n,i,e,s){super(t,n,e,s),this.provider=i,this.authWindow=null,this.pollId=null,os.currentPopupAction&&os.currentPopupAction.cancel(),os.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return di(t,this.auth,"internal-error"),t}async onExecution(){pi(1===this.filter.length,"Popup operations only handle one event");const t=Ue();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(ai(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(ai(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,os.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;this.pollId=(null===(i=null===(n=this.authWindow)||void 0===n?void 0:n.window)||void 0===i?void 0:i.closed)?window.setTimeout((()=>{this.pollId=null,this.reject(ai(this.auth,"popup-closed-by-user"))}),2e3):window.setTimeout(t,rs.get())};t()}}os.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ls=new Map;class as extends ss{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=ls.get(this.auth._key());if(!t){try{const n=await async function(t,n){const i=hs(n),e=us(t);if(!await e._isAvailable())return!1;const s="true"===await e._get(i);return await e._remove(i),s}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(n)}catch(n){t=()=>Promise.reject(n)}ls.set(this.auth._key(),t)}return this.bypassAuthState||ls.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function us(t){return mi(t._redirectPersistence)}function hs(t){return Ki("pendingRedirect",t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(t,n,i=!1){const e=re(t),s=Ze(e,n),r=new as(e,s,i),o=await r.execute();return o&&!i&&(delete o.user._redirectEventId,await e._persistUserIfCurrent(o.user),await e._setRedirectUser(null,n)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach((i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ps(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!ps(t)){const e=(null===(i=t.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";n.onError(ai(this.auth,e))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=null===n.eventId||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(fs(t))}saveEventToCache(t){this.cachedEventUids.add(fs(t)),this.lastProcessedEventTime=Date.now()}}function fs(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function ps({type:t,error:n}){return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ms=/^https?/;function ws(t){const n=wi(),{protocol:i,hostname:e}=new URL(n);if(t.startsWith("chrome-extension://")){const s=new URL(t);return""===s.hostname&&""===e?"chrome-extension:"===i&&t.replace("chrome-extension://","")===n.replace("chrome-extension://",""):"chrome-extension:"===i&&s.hostname===e}if(!ms.test(i))return!1;if(gs.test(t))return e===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(e)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new bi(3e4,6e4);function bs(){const t=Be().___jsl;if(null==t?void 0:t.H)for(const n of Object.keys(t.H))if(t.H[n].r=t.H[n].r||[],t.H[n].L=t.H[n].L||[],t.H[n].r=[...t.H[n].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function ys(t){return new Promise(((n,i)=>{var e,s,r,o;function l(){bs(),gapi.load("gapi.iframes",{callback:()=>{n(gapi.iframes.getContext())},ontimeout:()=>{bs(),i(ai(t,"network-request-failed"))},timeout:vs.get()})}if(null===(s=null===(e=Be().gapi)||void 0===e?void 0:e.iframes)||void 0===s?void 0:s.Iframe)n(gapi.iframes.getContext());else{if(!(null===(r=Be().gapi)||void 0===r?void 0:r.load)){const n=`__iframefcb${Math.floor(1e6*Math.random())}`;return Be()[n]=()=>{gapi.load?l():i(ai(t,"network-request-failed"))},(o=`https://apis.google.com/js/api.js?onload=${n}`,new Promise(((t,n)=>{const i=document.createElement("script");i.setAttribute("src",o),i.onload=t,i.onerror=t=>{const i=ai("internal-error");i.customData=t,n(i)},i.type="text/javascript",i.charset="UTF-8",
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){var t,n;return null!==(n=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==n?n:document}().appendChild(i)}))).catch((t=>i(t)))}l()}})).catch((t=>{throw xs=null,t}))}let xs=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ks=new bi(5e3,15e3),_s={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Es=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Is(t){const n=t.config;di(n.authDomain,t,"auth-domain-config-required");const i=n.emulator?yi(n,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,e={apiKey:n.apiKey,appName:t.name,v:"9.6.1"},s=Es.get(t.config.apiHost);s&&(e.eid=s);const r=t._getFrameworks();return r.length&&(e.fw=r.join(",")),`${i}?${In(e).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ts={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ss{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Cs(t,n,i,e,s,r){di(t.config.authDomain,t,"auth-domain-config-required"),di(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:i,redirectUrl:e,v:"9.6.1",eventId:s};if(n instanceof be){n.setDefaultLanguage(t.languageCode),o.providerId=n.providerId||"",xn(n.getCustomParameters())||(o.customParameters=JSON.stringify(n.getCustomParameters()));for(const[t,n]of Object.entries(r||{}))o[t]=n}if(n instanceof ye){const t=n.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const t of Object.keys(l))void 0===l[t]&&delete l[t];return`${function({config:t}){return t.emulator?yi(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${In(l).slice(1)}`}const As=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fe,this._completeRedirectFn=cs}async _openPopup(t,n,i,e){var s;return pi(null===(s=this.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),function(t,n,i,e=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-e)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Ts),{width:e.toString(),height:s.toString(),top:r,left:o}),u=ln().toLowerCase();i&&(l=Yi(u)?"_blank":i),Hi(u)&&(n=n||"http://localhost",a.scrollbars="yes");const h=Object.entries(a).reduce(((t,[n,i])=>`${t}${n}=${i},`),"");if(function(t=ln()){var n;return ne(t)&&!!(null===(n=window.navigator)||void 0===n?void 0:n.standalone)}(u)&&"_self"!==l)return function(t,n){const i=document.createElement("a");i.href=t,i.target=n;const e=document.createEvent("MouseEvent");e.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n||"",l),new Ss(null);const c=window.open(n||"",l,h);di(c,t,"popup-blocked");try{c.focus()}catch(t){}return new Ss(c)}(t,Cs(t,n,i,wi(),e),Ue())}async _openRedirect(t,n,i,e){var s;return await this._originValidation(t),s=Cs(t,n,i,wi(),e),Be().location.href=s,new Promise((()=>{}))}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:t,promise:i}=this.eventManagers[n];return t?Promise.resolve(t):(pi(i,"If manager is not set, promise should be"),i)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch((()=>{delete this.eventManagers[n]})),i}async initAndGetManager(t){const n=await async function(t){const n=await function(t){return xs=xs||ys(t),xs}(t),i=Be().gapi;return di(i,t,"internal-error"),n.open({where:document.body,url:Is(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_s,dontclear:!0},(n=>new Promise((async(i,e)=>{await n.restyle({setHideOnLeave:!1});const s=ai(t,"network-request-failed"),r=Be().setTimeout((()=>{e(s)}),ks.get());function o(){Be().clearTimeout(r),i(n)}n.ping(o).then(o,(()=>{e(s)}))}))))}(t),i=new ds(t);return n.register("authEvent",(n=>(di(null==n?void 0:n.authEvent,t,"invalid-auth-event"),{status:i.onEvent(n.authEvent)?"ACK":"ERROR"})),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(i=>{var e;const s=null===(e=null==i?void 0:i[0])||void 0===e?void 0:e.webStorageSupport;void 0!==s&&n(!!s),li(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=async function(t){if(t.config.emulator)return;const{authorizedDomains:n}=await async function(t,n={}){return Ii(t,"GET","/v1/projects",n)}(t);for(const t of n)try{if(ws(t))return}catch(t){}li(t,"unauthorized-domain")}(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ie()||Ji()||ne()}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ns{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged((n=>{var i;t((null===(i=n)||void 0===i?void 0:i.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){di(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn(new Pn("auth",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),{apiKey:e,authDomain:s}=i.options;return(t=>{di(e&&!e.includes(":"),"invalid-api-key",{appName:t.name}),di(!(null==s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:e,authDomain:s,clientPlatform:"Browser",apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ee("Browser")},r=new se(t,i);return function(t,n){const i=(null==n?void 0:n.persistence)||[],e=(Array.isArray(i)?i:[i]).map(mi);(null==n?void 0:n.errorMap)&&t._updateErrorMap(n.errorMap),t._initializeWithPersistence(e,null==n?void 0:n.popupRedirectResolver)}(r,n),r})(i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t=>{t.getProvider("auth-internal").initialize()}))),Yn(new Pn("auth-internal",(t=>{return n=re(t.getProvider("auth").getImmediate()),new Ns(n);var n}),"PRIVATE").setInstantiationMode("EXPLICIT")),ni("@firebase/auth","0.19.4",void 0),ni("@firebase/auth","0.19.4","esm2017");var Ds=h((function(t,n){!function(t){function n(t){return Array.prototype.slice.call(t)}function i(t){return new Promise((function(n,i){t.onsuccess=function(){n(t.result)},t.onerror=function(){i(t.error)}}))}function e(t,n,e){var s,r=new Promise((function(r,o){i(s=t[n].apply(t,e)).then(r,o)}));return r.request=s,r}function s(t,n,i){var s=e(t,n,i);return s.then((function(t){if(t)return new h(t,s.request)}))}function r(t,n,i){i.forEach((function(i){Object.defineProperty(t.prototype,i,{get:function(){return this[n][i]},set:function(t){this[n][i]=t}})}))}function o(t,n,i,s){s.forEach((function(s){s in i.prototype&&(t.prototype[s]=function(){return e(this[n],s,arguments)})}))}function l(t,n,i,e){e.forEach((function(e){e in i.prototype&&(t.prototype[e]=function(){return this[n][e].apply(this[n],arguments)})}))}function a(t,n,i,e){e.forEach((function(e){e in i.prototype&&(t.prototype[e]=function(){return s(this[n],e,arguments)})}))}function u(t){this._index=t}function h(t,n){this._cursor=t,this._request=n}function c(t){this._store=t}function d(t){this._tx=t,this.complete=new Promise((function(n,i){t.oncomplete=function(){n()},t.onerror=function(){i(t.error)},t.onabort=function(){i(t.error)}}))}function f(t,n,i){this._db=t,this.oldVersion=n,this.transaction=new d(i)}function p(t){this._db=t}r(u,"_index",["name","keyPath","multiEntry","unique"]),o(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),a(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),r(h,"_cursor",["direction","key","primaryKey","value"]),o(h,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(h.prototype[t]=function(){var n=this,e=arguments;return Promise.resolve().then((function(){return n._cursor[t].apply(n._cursor,e),i(n._request).then((function(t){if(t)return new h(t,n._request)}))}))})})),c.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},c.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},r(c,"_store",["name","keyPath","indexNames","autoIncrement"]),o(c,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),a(c,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),l(c,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new c(this._tx.objectStore.apply(this._tx,arguments))},r(d,"_tx",["objectStoreNames","mode"]),l(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new c(this._db.createObjectStore.apply(this._db,arguments))},r(f,"_db",["name","version","objectStoreNames"]),l(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},r(p,"_db",["name","version","objectStoreNames"]),l(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[c,u].forEach((function(i){t in i.prototype&&(i.prototype[t.replace("open","iterate")]=function(){var i=n(arguments),e=i[i.length-1],s=this._store||this._index,r=s[t].apply(s,i.slice(0,-1));r.onsuccess=function(){e(r.result)}})}))})),[u,c].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,n){var i=this,e=[];return new Promise((function(s){i.iterateCursor(t,(function(t){t?(e.push(t.value),void 0===n||e.length!=n?t.continue():s(e)):s(e)}))}))})})),t.openDb=function(t,n,i){var s=e(indexedDB,"open",[t,n]),r=s.request;return r&&(r.onupgradeneeded=function(t){i&&i(new f(r.result,t.oldVersion,r.transaction))}),s.then((function(t){return new p(t)}))},t.deleteDb=function(t){return e(indexedDB,"deleteDatabase",[t])},Object.defineProperty(t,"__esModule",{value:!0})}(n)}));const Os="@firebase/installations",Rs=new pn("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Ps(t){return t instanceof fn&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function Ls(t){return{token:t.token,requestStatus:2,expiresIn:(n=t.expiresIn,Number(n.replace("s","000"))),creationTime:Date.now()};var n}async function js(t,n){const i=(await n.json()).error;return Rs.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Fs({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}async function $s(t){const n=await t();return n.status>=500&&n.status<600?t():n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Us(t){return new Promise((n=>{setTimeout(n,t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vs=/^[cdef][\w-]{21}$/;function Bs(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=function(t){return(n=t,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);return Vs.test(n)?n:""}catch(t){return""}}function zs(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new Map;function Ks(t,n){const i=zs(t);Ws(i,n),function(t,n){const i=(!Gs&&"BroadcastChannel"in self&&(Gs=new BroadcastChannel("[Firebase] FID Change"),Gs.onmessage=t=>{Ws(t.data.key,t.data.fid)}),Gs);i&&i.postMessage({key:t,fid:n}),0===qs.size&&Gs&&(Gs.close(),Gs=null)}(i,n)}function Ws(t,n){const i=qs.get(t);if(i)for(const t of i)t(n)}let Gs=null;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hs="firebase-installations-store";let Js=null;function Ys(){return Js||(Js=Ds.openDb("firebase-installations-database",1,(t=>{switch(t.oldVersion){case 0:t.createObjectStore(Hs)}}))),Js}async function Xs(t,n){const i=zs(t),e=(await Ys()).transaction(Hs,"readwrite"),s=e.objectStore(Hs),r=await s.get(i);return await s.put(n,i),await e.complete,r&&r.fid===n.fid||Ks(t,n.fid),n}async function Qs(t){const n=zs(t),i=(await Ys()).transaction(Hs,"readwrite");await i.objectStore(Hs).delete(n),await i.complete}async function Zs(t,n){const i=zs(t),e=(await Ys()).transaction(Hs,"readwrite"),s=e.objectStore(Hs),r=await s.get(i),o=n(r);return void 0===o?await s.delete(i):await s.put(o,i),await e.complete,!o||r&&r.fid===o.fid||Ks(t,o.fid),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(t){let n;const i=await Zs(t,(i=>{const e=function(t){return er(t||{fid:Bs(),registrationStatus:0})}(i),s=function(t,n){if(0===n.registrationStatus){if(!navigator.onLine)return{installationEntry:n,registrationPromise:Promise.reject(Rs.create("app-offline"))};const i={fid:n.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:i,registrationPromise:async function(t,n){try{return Xs(t,await
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,{fid:n}){const i=Ms(t),e={method:"POST",headers:Fs(t),body:JSON.stringify({fid:n,authVersion:"FIS_v2",appId:t.appId,sdkVersion:"w:0.5.4"})},s=await $s((()=>fetch(i,e)));if(s.ok){const t=await s.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:Ls(t.authToken)}}throw await js("Create Installation",s)}(t,n))}catch(i){throw Ps(i)&&409===i.customData.serverCode?await Qs(t):await Xs(t,{fid:n.fid,registrationStatus:0}),i}}(t,i)}}return 1===n.registrationStatus?{installationEntry:n,registrationPromise:nr(t)}:{installationEntry:n}}(t,e);return n=s.registrationPromise,s.installationEntry}));return""===i.fid?{installationEntry:await n}:{installationEntry:i,registrationPromise:n}}async function nr(t){let n=await ir(t);for(;1===n.registrationStatus;)await Us(100),n=await ir(t);if(0===n.registrationStatus){const{installationEntry:n,registrationPromise:i}=await tr(t);return i||n}return n}function ir(t){return Zs(t,(t=>{if(!t)throw Rs.create("installation-not-found");return er(t)}))}function er(t){return 1===(n=t).registrationStatus&&n.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function sr({appConfig:t,platformLoggerProvider:n},i){const e=function(t,{fid:n}){return`${Ms(t)}/${n}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,i),s=function(t,{refreshToken:n}){const i=Fs(t);return i.append("Authorization",function(t){return`FIS_v2 ${t}`}(n)),i}(t,i),r=n.getImmediate({optional:!0});r&&s.append("x-firebase-client",r.getPlatformInfoString());const o={method:"POST",headers:s,body:JSON.stringify({installation:{sdkVersion:"w:0.5.4"}})},l=await $s((()=>fetch(e,o)));if(l.ok)return Ls(await l.json());throw await js("Generate Auth Token",l)}async function rr(t,n=!1){let i;const e=await Zs(t.appConfig,(e=>{if(!lr(e))throw Rs.create("not-registered");const s=e.authToken;if(!n&&(2===(r=s).requestStatus&&!function(t){const n=Date.now();return n<t.creationTime||t.creationTime+t.expiresIn<n+36e5}(r)))return e;var r;if(1===s.requestStatus)return i=async function(t,n){let i=await or(t.appConfig);for(;1===i.authToken.requestStatus;)await Us(100),i=await or(t.appConfig);const e=i.authToken;return 0===e.requestStatus?rr(t,n):e}(t,n),e;{if(!navigator.onLine)throw Rs.create("app-offline");const n=function(t){const n={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:n})}(e);return i=async function(t,n){try{const i=await sr(t,n),e=Object.assign(Object.assign({},n),{authToken:i});return await Xs(t.appConfig,e),i}catch(i){if(!Ps(i)||401!==i.customData.serverCode&&404!==i.customData.serverCode){const i=Object.assign(Object.assign({},n),{authToken:{requestStatus:0}});await Xs(t.appConfig,i)}else await Qs(t.appConfig);throw i}}(t,n),n}}));return i?await i:e.authToken}function or(t){return Zs(t,(t=>{if(!lr(t))throw Rs.create("not-registered");return 1===(n=t.authToken).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function lr(t){return void 0!==t&&2===t.registrationStatus}function ar(t){return Rs.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn(new Pn("installations",(t=>{const n=t.getProvider("app").getImmediate();return{app:n,appConfig:
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){if(!t||!t.options)throw ar("App Configuration");if(!t.name)throw ar("App Name");const n=["projectId","apiKey","appId"];for(const i of n)if(!t.options[i])throw ar(i);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(n),platformLoggerProvider:Xn(n,"platform-logger"),_delete:()=>Promise.resolve()}}),"PUBLIC")),Yn(new Pn("installations-internal",(t=>{const n=Xn(t.getProvider("app").getImmediate(),"installations").getImmediate();return{getId:()=>async function(t){const n=t,{installationEntry:i,registrationPromise:e}=await tr(n.appConfig);return e?e.catch(console.error):rr(n).catch(console.error),i.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n),getToken:t=>async function(t,n=!1){const i=t;return await async function(t){const{registrationPromise:n}=await tr(t);n&&await n}(i.appConfig),(await rr(i,n)).token}(n,t)}}),"PRIVATE")),ni(Os,"0.5.4"),ni(Os,"0.5.4","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ur="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4";var hr,cr;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dr(t){const n=new Uint8Array(t);return btoa(String.fromCharCode(...n)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function fr(t){const n=(t+"=".repeat((4-t.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),e=new Uint8Array(i.length);for(let t=0;t<i.length;++t)e[t]=i.charCodeAt(t);return e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"}(hr||(hr={})),function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"}(cr||(cr={}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pr="firebase-messaging-store";let gr=null;function mr(){return gr||(gr=Ds.openDb("firebase-messaging-database",1,(t=>{switch(t.oldVersion){case 0:t.createObjectStore(pr)}}))),gr}async function wr(t){const n=br(t),i=await mr(),e=await i.transaction(pr).objectStore(pr).get(n);if(e)return e;{const n=await async function(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map((t=>t.name)).includes("fcm_token_details_db"))return null;let n=null;return(await Ds.openDb("fcm_token_details_db",5,(async i=>{var e;if(i.oldVersion<2)return;if(!i.objectStoreNames.contains("fcm_token_object_Store"))return;const s=i.transaction.objectStore("fcm_token_object_Store"),r=await s.index("fcmSenderId").get(t);if(await s.clear(),r)if(2===i.oldVersion){const t=r;if(!t.auth||!t.p256dh||!t.endpoint)return;n={token:t.fcmToken,createTime:null!==(e=t.createTime)&&void 0!==e?e:Date.now(),subscriptionOptions:{auth:t.auth,p256dh:t.p256dh,endpoint:t.endpoint,swScope:t.swScope,vapidKey:"string"==typeof t.vapidKey?t.vapidKey:dr(t.vapidKey)}}}else if(3===i.oldVersion){const t=r;n={token:t.fcmToken,createTime:t.createTime,subscriptionOptions:{auth:dr(t.auth),p256dh:dr(t.p256dh),endpoint:t.endpoint,swScope:t.swScope,vapidKey:dr(t.vapidKey)}}}else if(4===i.oldVersion){const t=r;n={token:t.fcmToken,createTime:t.createTime,subscriptionOptions:{auth:dr(t.auth),p256dh:dr(t.p256dh),endpoint:t.endpoint,swScope:t.swScope,vapidKey:dr(t.vapidKey)}}}}))).close(),await Ds.deleteDb("fcm_token_details_db"),await Ds.deleteDb("fcm_vapid_details_db"),await Ds.deleteDb("undefined"),function(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:n}=t;return"number"==typeof t.createTime&&t.createTime>0&&"string"==typeof t.token&&t.token.length>0&&"string"==typeof n.auth&&n.auth.length>0&&"string"==typeof n.p256dh&&n.p256dh.length>0&&"string"==typeof n.endpoint&&n.endpoint.length>0&&"string"==typeof n.swScope&&n.swScope.length>0&&"string"==typeof n.vapidKey&&n.vapidKey.length>0}(n)?n:null}(t.appConfig.senderId);if(n)return await vr(t,n),n}}async function vr(t,n){const i=br(t),e=(await mr()).transaction(pr,"readwrite");return await e.objectStore(pr).put(n,i),await e.complete,n}function br({appConfig:t}){return t.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new pn("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});async function xr(t,n){const i={method:"DELETE",headers:await _r(t)};try{const e=await fetch(`${kr(t.appConfig)}/${n}`,i),s=await e.json();if(s.error)throw yr.create("token-unsubscribe-failed",{errorInfo:s.error.message})}catch(t){throw yr.create("token-unsubscribe-failed",{errorInfo:t})}}function kr({projectId:t}){return`https://fcmregistrations.googleapis.com/v1/projects/${t}/registrations`}async function _r({appConfig:t,installations:n}){const i=await n.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${i}`})}function Er({p256dh:t,auth:n,endpoint:i,vapidKey:e}){const s={web:{endpoint:i,auth:n,p256dh:t}};return e!==ur&&(s.web.applicationPubKey=e),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(t,n){const i={token:await
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,n){const i=await _r(t),e=Er(n),s={method:"POST",headers:i,body:JSON.stringify(e)};let r;try{const n=await fetch(kr(t.appConfig),s);r=await n.json()}catch(t){throw yr.create("token-subscribe-failed",{errorInfo:t})}if(r.error)throw yr.create("token-subscribe-failed",{errorInfo:r.error.message});if(!r.token)throw yr.create("token-subscribe-no-token");return r.token}(t,n),createTime:Date.now(),subscriptionOptions:n};return await vr(t,i),i.token}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tr(t){const n={from:t.from,collapseKey:t.collapse_key,messageId:t.fcm_message_id};return function(t,n){if(!n.notification)return;t.notification={};const i=n.notification.title;i&&(t.notification.title=i);const e=n.notification.body;e&&(t.notification.body=e);const s=n.notification.image;s&&(t.notification.image=s)}(n,t),function(t,n){n.data&&(t.data=n.data)}(n,t),function(t,n){if(!n.fcmOptions)return;t.fcmOptions={};const i=n.fcmOptions.link;i&&(t.fcmOptions.link=i);const e=n.fcmOptions.analytics_label;e&&(t.fcmOptions.analyticsLabel=e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,t),n}function Sr(t,n){const i=[];for(let e=0;e<t.length;e++)i.push(t.charAt(e)),e<n.length&&i.push(n.charAt(e));return i.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t){return yr.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Sr("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),Sr("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class Ar{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const e=function(t){if(!t||!t.options)throw Cr("App Configuration Object");if(!t.name)throw Cr("App Name");const n=["projectId","apiKey","appId","messagingSenderId"],{options:i}=t;for(const t of n)if(!i[t])throw Cr(t);return{appName:t.name,projectId:i.projectId,apiKey:i.apiKey,appId:i.appId,senderId:i.messagingSenderId}}(t);this.firebaseDependencies={app:t,appConfig:e,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Nr(t,n){if(!navigator)throw yr.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw yr.create("permission-blocked");return await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,n){n?t.vapidKey=n:t.vapidKey||(t.vapidKey=ur)}(t,null==n?void 0:n.vapidKey),await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,n){if(n||t.swRegistration||await async function(t){try{t.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),t.swRegistration.update().catch((()=>{}))}catch(t){throw yr.create("failed-service-worker-registration",{browserErrorMessage:t.message})}}(t),n||!t.swRegistration){if(!(n instanceof ServiceWorkerRegistration))throw yr.create("invalid-sw-registration");t.swRegistration=n}}(t,null==n?void 0:n.serviceWorkerRegistration),async function(t){const n=await async function(t,n){return await t.pushManager.getSubscription()||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:fr(n)})}(t.swRegistration,t.vapidKey),i={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:n.endpoint,auth:dr(n.getKey("auth")),p256dh:dr(n.getKey("p256dh"))},e=await wr(t.firebaseDependencies);if(e){if((r=i).vapidKey===(s=e.subscriptionOptions).vapidKey&&r.endpoint===s.endpoint&&r.auth===s.auth&&r.p256dh===s.p256dh)return Date.now()>=e.createTime+6048e5?async function(t,n){try{const i=await async function(t,n){const i=await _r(t),e=Er(n.subscriptionOptions),s={method:"PATCH",headers:i,body:JSON.stringify(e)};let r;try{const i=await fetch(`${kr(t.appConfig)}/${n.token}`,s);r=await i.json()}catch(t){throw yr.create("token-update-failed",{errorInfo:t})}if(r.error)throw yr.create("token-update-failed",{errorInfo:r.error.message});if(!r.token)throw yr.create("token-update-no-token");return r.token}(t.firebaseDependencies,n),e=Object.assign(Object.assign({},n),{token:i,createTime:Date.now()});return await vr(t.firebaseDependencies,e),i}catch(n){throw await async function(t){const n=await wr(t.firebaseDependencies);n&&(await xr(t.firebaseDependencies,n.token),await async function(t){const n=br(t),i=(await mr()).transaction(pr,"readwrite");await i.objectStore(pr).delete(n),await i.complete}(t.firebaseDependencies));const i=await t.swRegistration.pushManager.getSubscription();return!i||i.unsubscribe()}(t),n}}(t,{token:e.token,createTime:Date.now(),subscriptionOptions:i}):e.token;try{await xr(t.firebaseDependencies,e.token)}catch(t){console.warn(t)}return Ir(t.firebaseDependencies,i)}var s,r;return Ir(t.firebaseDependencies,i)}(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="@firebase/messaging";async function Or(t,n){return Nr(t=Rn(t),n)}Yn(new Pn("messaging",(t=>{const n=new Ar(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(t=>
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,n){const i=n.data;if(!i.isFirebaseMessaging)return;t.onMessageHandler&&i.messageType===cr.PUSH_RECEIVED&&("function"==typeof t.onMessageHandler?t.onMessageHandler(Tr(i)):t.onMessageHandler.next(Tr(i)));const e=i.data;var s;"object"==typeof(s=e)&&s&&"google.c.a.c_id"in s&&"1"===e["google.c.a.e"]&&await async function(t,n,i){const e=function(t){switch(t){case cr.NOTIFICATION_CLICKED:return"notification_open";case cr.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(n);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(e,{message_id:i["google.c.a.c_id"],message_name:i["google.c.a.c_l"],message_time:i["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}(t,i.messageType,e)}(n,t))),n}),"PUBLIC")),Yn(new Pn("messaging-internal",(t=>{const n=t.getProvider("messaging").getImmediate();return{getToken:t=>Nr(n,t)}}),"PRIVATE")),ni(Dr,"0.9.4"),ni(Dr,"0.9.4","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Rr="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pr{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){null==n?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),wn(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return null==n?null:mn(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){null==n?delete this.cache_[t]:this.cache_[t]=n}get(t){return bn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=function(t){try{if("undefined"!=typeof window&&void 0!==window[t]){const n=window[t];return n.setItem("firebase:sentinel","cache"),n.removeItem("firebase:sentinel"),new Pr(n)}}catch(t){}return new Mr},jr=Lr("localStorage"),Fr=Lr("sessionStorage"),$r=new Bn("@firebase/database"),Ur=function(){let t=1;return function(){return t++}}(),Vr=function(t){const n=function(t){const n=[];let i=0;for(let e=0;e<t.length;e++){let s=t.charCodeAt(e);if(s>=55296&&s<=56319){const n=s-55296;e++,Yt(e<t.length,"Surrogate pair missing trail surrogate."),s=65536+(n<<10)+(t.charCodeAt(e)-56320)}s<128?n[i++]=s:s<2048?(n[i++]=s>>6|192,n[i++]=63&s|128):s<65536?(n[i++]=s>>12|224,n[i++]=s>>6&63|128,n[i++]=63&s|128):(n[i++]=s>>18|240,n[i++]=s>>12&63|128,n[i++]=s>>6&63|128,n[i++]=63&s|128)}return n}(t),i=new Cn;i.update(n);const e=i.digest();return Zt.encodeByteArray(e)},Br=function(...t){let n="";for(let i=0;i<t.length;i++){const e=t[i];Array.isArray(e)||e&&"object"==typeof e&&"number"==typeof e.length?n+=Br.apply(null,e):n+="object"==typeof e?wn(e):e,n+=" "}return n};let zr=null,qr=!0;const Kr=function(...t){if(!0===qr&&(qr=!1,null===zr&&!0===Fr.get("logging_enabled")&&(!0,Yt(!0,"Can't turn on custom loggers persistently."),$r.logLevel=jn.VERBOSE,zr=$r.log.bind($r))),zr){const n=Br.apply(null,t);zr(n)}},Wr=function(t){return function(...n){Kr(t,...n)}},Gr=function(...t){const n="FIREBASE INTERNAL ERROR: "+Br(...t);$r.error(n)},Hr=function(...t){const n=`FIREBASE FATAL ERROR: ${Br(...t)}`;throw $r.error(n),new Error(n)},Jr=function(...t){const n="FIREBASE WARNING: "+Br(...t);$r.warn(n)},Yr=function(t){return"number"==typeof t&&(t!=t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Xr="[MIN_NAME]",Qr="[MAX_NAME]",Zr=function(t,n){if(t===n)return 0;if(t===Xr||n===Qr)return-1;if(n===Xr||t===Qr)return 1;{const i=lo(t),e=lo(n);return null!==i?null!==e?i-e==0?t.length-n.length:i-e:-1:null!==e?1:t<n?-1:1}},to=function(t,n){return t===n?0:t<n?-1:1},no=function(t,n){if(n&&t in n)return n[t];throw new Error("Missing required key ("+t+") in object: "+wn(n))},io=function(t){if("object"!=typeof t||null===t)return wn(t);const n=[];for(const i in t)n.push(i);n.sort();let i="{";for(let e=0;e<n.length;e++)0!==e&&(i+=","),i+=wn(n[e]),i+=":",i+=io(t[n[e]]);return i+="}",i},eo=function(t,n){const i=t.length;if(i<=n)return[t];const e=[];for(let s=0;s<i;s+=n)e.push(t.substring(s,s+n>i?i:s+n));return e};function so(t,n){for(const i in t)t.hasOwnProperty(i)&&n(i,t[i])}const ro=function(t){Yt(!Yr(t),"Invalid JSON number");let n,i,e,s,r;0===t?(i=0,e=0,n=1/t==-1/0?1:0):(n=t<0,(t=Math.abs(t))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(t)/Math.LN2),1023),i=s+1023,e=Math.round(t*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,e=Math.round(t/Math.pow(2,-1074))));const o=[];for(r=52;r;r-=1)o.push(e%2?1:0),e=Math.floor(e/2);for(r=11;r;r-=1)o.push(i%2?1:0),i=Math.floor(i/2);o.push(n?1:0),o.reverse();const l=o.join("");let a="";for(r=0;r<64;r+=8){let t=parseInt(l.substr(r,8),2).toString(16);1===t.length&&(t="0"+t),a+=t}return a.toLowerCase()},oo=new RegExp("^-?(0*)\\d{1,10}$"),lo=function(t){if(oo.test(t)){const n=Number(t);if(n>=-2147483648&&n<=2147483647)return n}return null},ao=function(t){try{t()}catch(t){setTimeout((()=>{throw Jr("Exception was thrown by user callback.",t.stack||""),t}),Math.floor(0))}},uo=function(t,n){const i=setTimeout(t,n);return"object"==typeof i&&i.unref&&i.unref(),i};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ho{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=null==n?void 0:n.getImmediate({optional:!0}),this.appCheck||null==n||n.get().then((t=>this.appCheck=t))}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise(((n,i)=>{setTimeout((()=>{this.appCheck?this.getToken(t).then(n,i):n(null)}),0)}))}addTokenChangeListener(t){var n;null===(n=this.appCheckProvider)||void 0===n||n.get().then((n=>n.addTokenListener(t)))}notifyForInvalidToken(){Jr(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((t=>this.auth_=t))}getToken(t){return this.auth_?this.auth_.getToken(t).catch((t=>t&&"auth/token-not-initialized"===t.code?(Kr("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t))):new Promise(((n,i)=>{setTimeout((()=>{this.auth_?this.getToken(t).then(n,i):n(null)}),0)}))}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then((n=>n.addAuthTokenListener(t)))}removeTokenChangeListener(t){this.authProvider_.get().then((n=>n.removeAuthTokenListener(t)))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';t+="credential"in this.firebaseOptions_?'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Jr(t)}}class fo{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}fo.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const po=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class go{constructor(t,n,i,e,s=!1,r="",o=!1){this.secure=n,this.namespace=i,this.webSocketOnly=e,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=jr.get("host:"+t)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&jr.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){return`${this.secure?"https://":"http://"}${this.host}/${this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:""}`}}function mo(t,n,i){let e;if(Yt("string"==typeof n,"typeof type must == string"),Yt("object"==typeof i,"typeof params must == object"),"websocket"===n)e=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if("long_polling"!==n)throw new Error("Unknown connection type: "+n);e=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}(function(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams})(t)&&(i.ns=t.namespace);const s=[];return so(i,((t,n)=>{s.push(t+"="+n)})),e+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.counters_={}}incrementCounter(t,n=1){bn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return sn(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo={},bo={};function yo(t){const n=t.toString();return vo[n]||(vo[n]=new wo),vo[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xo{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let n=0;n<t.length;++n)t[n]&&ao((()=>{this.onMessage_(t[n])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,n,i,e,s,r,o){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=e,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Wr(t),this.stats_=yo(n),this.urlFn=t=>(this.appCheckToken&&(t.ac=this.appCheckToken),mo(n,"long_polling",t))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new xo(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(t){if("complete"===document.readyState)t();else{let n=!1;const i=function(){document.body?n||(n=!0,t()):setTimeout(i,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&i()})),window.attachEvent("onload",i))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new _o(((...t)=>{const[n,i,e,s,r]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===n)this.id=i,this.password=e;else{if("close"!==n)throw new Error("Unrecognized command received: "+n);i?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(i,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...t)=>{const[n,i]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(n,i)}),(()=>{this.onClosed_()}),this.urlFn);const t={start:"t"};t.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t.cb=this.scriptTagHolder.uniqueCallbackIdentifier),t.v="5",this.transportSessionId&&(t.s=this.transportSessionId),this.lastSessionId&&(t.ls=this.lastSessionId),this.applicationId&&(t.p=this.applicationId),this.appCheckToken&&(t.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&po.test(location.hostname)&&(t.r="f");const n=this.urlFn(t);this.log_("Connecting via long-poll to "+n),this.scriptTagHolder.addTag(n,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ko.forceAllow_=!0}static forceDisallow(){ko.forceDisallow_=!0}static isAvailable(){return!!ko.forceAllow_||!(ko.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=wn(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=tn(n),e=eo(i,1840);for(let t=0;t<e.length;t++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,e.length,e[t]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={dframe:"t"};i.id=t,i.pw=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=wn(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class _o{constructor(t,n,i,e){this.onDisconnect=i,this.urlFn=e,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ur(),window["pLPCommand"+this.uniqueCallbackIdentifier]=t,window["pRTLPCB"+this.uniqueCallbackIdentifier]=n,this.myIFrame=_o.createIFrame_();let i="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)&&(i='<script>document.domain="'+document.domain+'";<\/script>');const e="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(e),this.myIFrame.doc.close()}catch(t){Kr("frame writing exception"),t.stack&&Kr(t.stack),Kr(t)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{t.contentWindow.document||Kr("No IE domain setting required")}catch(n){const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t.id=this.myID,t.pw=this.myPW,t.ser=this.currentSerial;let n=this.urlFn(t),i="",e=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+30+i.length<=1870;){const t=this.pendingSegs.shift();i=i+"&seg"+e+"="+t.seg+"&ts"+e+"="+t.ts+"&d"+e+"="+t.d,e++}return n+=i,this.addLongPollTag_(n,this.currentSerial),!0}return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},e=setTimeout(i,Math.floor(25e3));this.addTag(t,(()=>{clearTimeout(e),i()}))}addTag(t,n){setTimeout((()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const t=i.readyState;t&&"loaded"!==t&&"complete"!==t||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Kr("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch(t){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo,Io=null;"undefined"!=typeof MozWebSocket?Io=MozWebSocket:"undefined"!=typeof WebSocket&&(Io=WebSocket);class To{constructor(t,n,i,e,s,r,o){this.connId=t,this.applicationId=i,this.appCheckToken=e,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Wr(this.connId),this.stats_=yo(n),this.connURL=To.connectionURL_(n,r,o,e),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,e){const s={v:"5"};return"undefined"!=typeof location&&location.hostname&&po.test(location.hostname)&&(s.r="f"),n&&(s.s=n),i&&(s.ls=i),e&&(s.ac=e),mo(t,"websocket",s)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,jr.set("previous_websocket_failure",!0);try{this.mySock=new Io(this.connURL,[],{headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}})}catch(t){this.log_("Error instantiating WebSocket.");const n=t.message||t.data;return n&&this.log_(n),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const n=t.message||t.data;n&&this.log_(n),this.onClosed_()}}start(){}static forceDisallow(){To.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==Io&&!To.forceDisallow_}static previouslyFailed(){return jr.isInMemoryStorage||!0===jr.get("previous_websocket_failure")}markConnectionHealthy(){jr.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=mn(t);this.onMessage(n)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(Yt(null===this.frames,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(n);else{const t=this.extractFrameCount_(n);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const n=wn(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=eo(n,16384);i.length>1&&this.sendString_(String(i.length));for(let t=0;t<i.length;t++)this.sendString_(i[t])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(t){try{this.mySock.send(t)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}To.responsesRequiredToBeHealthy=2,To.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[ko,To]}initTransports_(t){const n=To&&To.isAvailable();let i=n&&!To.previouslyFailed();if(t.webSocketOnly&&(n||Jr("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[To];else{const t=this.transports_=[];for(const n of So.ALL_TRANSPORTS)n&&n.isAvailable()&&t.push(n)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t,n,i,e,s,r,o,l,a,u){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=e,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=l,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Wr("c:"+this.id+":"),this.transportManager_=new So(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(n,i)}),Math.floor(0));const e=t.healthyTimeout||0;e>0&&(this.healthyTimeout_=uo((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(e)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){this.sendData_({t:"d",d:t})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if("t"in t){const n=t.t;"a"===n?this.upgradeIfSecondaryHealthy_():"r"===n?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===n&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=no("t",t),i=no("d",t);if("c"===n)this.onSecondaryControl_(i);else{if("d"!==n)throw new Error("Unknown protocol layer: "+n);this.pendingDataMessages.push(i)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=no("t",t),i=no("d",t);"c"===n?this.onControl_(i):"d"===n&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=no("t",t);if("d"in t){const i=t.d;if("h"===n)this.onHandshake_(i);else if("n"===n){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===n?this.onConnectionShutdown_(i):"r"===n?this.onReset_(i):"e"===n?Gr("Server Error: "+i):"o"===n?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gr("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,e=t.h;this.sessionId=t.s,this.repoInfo_.host=e,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),"5"!==i&&Jr("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),uo((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):uo((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(jr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{put(t,n,i,e){}merge(t,n,i,e){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(t){this.allowedEvents_=t,this.listeners_={},Yt(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let t=0;t<i.length;t++)i[t].callback.apply(i[t].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const e=this.getInitialEvent(t);e&&n.apply(i,e)}off(t,n,i){this.validateEventType_(t);const e=this.listeners_[t]||[];for(let t=0;t<e.length;t++)if(e[t].callback===n&&(!i||i===e[t].context))return void e.splice(t,1)}validateEventType_(t){Yt(this.allowedEvents_.find((n=>n===t)),"Unknown event: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends No{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||an()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Do}getInitialEvent(t){return Yt("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t,n){if(void 0===n){this.pieces_=t.split("/");let n=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[n]=this.pieces_[t],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)""!==this.pieces_[n]&&(t+="/"+this.pieces_[n]);return t||"/"}}function Ro(){return new Oo("")}function Po(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mo(t){return t.pieces_.length-t.pieceNum_}function Lo(t){let n=t.pieceNum_;return n<t.pieces_.length&&n++,new Oo(t.pieces_,n)}function jo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Fo(t,n=0){return t.pieces_.slice(t.pieceNum_+n)}function $o(t){if(t.pieceNum_>=t.pieces_.length)return null;const n=[];for(let i=t.pieceNum_;i<t.pieces_.length-1;i++)n.push(t.pieces_[i]);return new Oo(n,0)}function Uo(t,n){const i=[];for(let n=t.pieceNum_;n<t.pieces_.length;n++)i.push(t.pieces_[n]);if(n instanceof Oo)for(let t=n.pieceNum_;t<n.pieces_.length;t++)i.push(n.pieces_[t]);else{const t=n.split("/");for(let n=0;n<t.length;n++)t[n].length>0&&i.push(t[n])}return new Oo(i,0)}function Vo(t){return t.pieceNum_>=t.pieces_.length}function Bo(t,n){const i=Po(t),e=Po(n);if(null===i)return n;if(i===e)return Bo(Lo(t),Lo(n));throw new Error("INTERNAL ERROR: innerPath ("+n+") is not within outerPath ("+t+")")}function zo(t,n){const i=Fo(t,0),e=Fo(n,0);for(let t=0;t<i.length&&t<e.length;t++){const n=Zr(i[t],e[t]);if(0!==n)return n}return i.length===e.length?0:i.length<e.length?-1:1}function qo(t,n){if(Mo(t)!==Mo(n))return!1;for(let i=t.pieceNum_,e=n.pieceNum_;i<=t.pieces_.length;i++,e++)if(t.pieces_[i]!==n.pieces_[e])return!1;return!0}function Ko(t,n){let i=t.pieceNum_,e=n.pieceNum_;if(Mo(t)>Mo(n))return!1;for(;i<t.pieces_.length;){if(t.pieces_[i]!==n.pieces_[e])return!1;++i,++e}return!0}class Wo{constructor(t,n){this.errorPrefix_=n,this.parts_=Fo(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let t=0;t<this.parts_.length;t++)this.byteLength_+=On(this.parts_[t]);Go(this)}}function Go(t){if(t.byteLength_>768)throw new Error(t.errorPrefix_+"has a key path longer than 768 bytes ("+t.byteLength_+").");if(t.parts_.length>32)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Ho(t))}function Ho(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends No{constructor(){let t,n;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(n="visibilitychange",t="hidden"):void 0!==document.mozHidden?(n="mozvisibilitychange",t="mozHidden"):void 0!==document.msHidden?(n="msvisibilitychange",t="msHidden"):void 0!==document.webkitHidden&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,(()=>{const n=!document[t];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))}),!1)}static getInstance(){return new Jo}getInitialEvent(t){return Yt("visible"===t,"Unknown event type: "+t),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends Ao{constructor(t,n,i,e,s,r,o,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=e,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=l,this.id=Yo.nextPersistentConnectionId_++,this.log_=Wr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Jo.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&Do.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const e=++this.requestNumber_,s={r:e,a:t,b:n};this.log_(wn(s)),Yt(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[e]=i)}get(t){this.initConnection_();const n=new on,i={p:t._path.toString(),q:t._queryObject},e={action:"g",request:i,onComplete:t=>{const e=t.d;"ok"===t.s?(this.onDataUpdate_(i.p,e,!1,null),n.resolve(e)):n.reject(e)}};this.outstandingGets_.push(e),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const t=this.outstandingGets_[s];void 0!==t&&e===t&&(delete this.outstandingGets_[s],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(s),n.promise}listen(t,n,i,e){this.initConnection_();const s=t._queryIdentifier,r=t._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),Yt(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Yt(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:e,hashFn:n,query:t,tag:i};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,(i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)}))}sendListen_(t){const n=t.query,i=n._path.toString(),e=n._queryIdentifier;this.log_("Listen on "+i+" for "+e);const s={p:i};t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;Yo.warnOnListenWarnings_(r,n),(this.listens.get(i)&&this.listens.get(i).get(e))===t&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(i,e),t.onComplete&&t.onComplete(o,r))}))}static warnOnListenWarnings_(t,n){if(t&&"object"==typeof t&&bn(t,"w")){const i=yn(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const t='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Jr(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&40===t.length||function(t){const n=vn(t).claims;return"object"==typeof n&&!0===n.admin}(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=function(t){const n=vn(t).claims;return!!n&&"object"==typeof n&&n.hasOwnProperty("iat")}(t)?"auth":"gauth",i={cred:t};null===this.authOverride_?i.noauth=!0:"object"==typeof this.authOverride_&&(i.authvar=this.authOverride_),this.sendRequest(n,i,(n=>{const i=n.s,e=n.d||"error";this.authToken_===t&&("ok"===i?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,e))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(t=>{const n=t.s,i=t.d||"error";"ok"===n?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)}))}unlisten(t,n){const i=t._path.toString(),e=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+e),Yt(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,e)&&this.connected_&&this.sendUnlisten_(i,e,t._queryObject,n)}sendUnlisten_(t,n,i,e){this.log_("Unlisten on "+t+" for "+n);const s={p:t};e&&(s.q=i,s.t=e),this.sendRequest("n",s)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,e){const s={p:n,d:i};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,(t=>{e&&setTimeout((()=>{e(t.s,t.d)}),Math.floor(0))}))}put(t,n,i,e){this.putInternal("p",t,n,i,e)}merge(t,n,i,e){this.putInternal("m",t,n,i,e)}putInternal(t,n,i,e,s){this.initConnection_();const r={p:n,d:i};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:t,request:r,onComplete:e}),this.outstandingPutCount_++,this.connected_?this.sendPut_(this.outstandingPuts_.length-1):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,e=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,(i=>{this.log_(n+" response",i),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),e&&e(i.s,i.d)}))}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,(t=>{"ok"!==t.s&&this.log_("reportStats","Error sending stats: "+t.d)}))}}onDataMessage_(t){if("r"in t){this.log_("from server: "+wn(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),"d"===t?this.onDataUpdate_(n.p,n.d,!1,n.t):"m"===t?this.onDataUpdate_(n.p,n.d,!0,n.t):"c"===t?this.onListenRevoked_(n.p,n.q):"ac"===t?this.onAuthRevoked_(n.s,n.d):"apc"===t?this.onAppCheckRevoked_(n.s,n.d):"sd"===t?this.onSecurityDebugPacket_(n):Gr("Unrecognized action received from server: "+wn(t)+"\nAre you using the latest client?")}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){Yt(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&((new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime());const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),e=this.id+":"+Yo.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const l=function(){o?o.close():(r=!0,i())};this.realtime_={close:l,sendRequest:function(t){Yt(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(t)}};const a=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[l,u]=await Promise.all([this.authTokenProvider_.getToken(a),this.appCheckTokenProvider_.getToken(a)]);r?Kr("getToken() completed but was canceled"):(Kr("getToken() completed. Creating connection."),this.authToken_=l&&l.accessToken,this.appCheckToken_=u&&u.token,o=new Co(e,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,(t=>{Jr(t+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(t){this.log_("Failed to get token: "+t),r||(this.repoInfo_.nodeAdmin&&Jr(t),l())}}}interrupt(t){Kr("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Kr("Resuming connection for reason: "+t),delete this.interruptReasons_[t],xn(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;i=n?n.map((t=>io(t))).join("$"):"default";const e=this.removeListen_(t,i);e&&e.onComplete&&e.onComplete("permission_denied")}removeListen_(t,n){const i=new Oo(t).toString();let e;if(this.listens.has(i)){const t=this.listens.get(i);e=t.get(n),t.delete(n),0===t.size&&this.listens.delete(i)}else e=void 0;return e}onAuthRevoked_(t,n){Kr("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Kr("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};t["sdk.js."+Rr.replace(/\./g,"-")]=1,an()?t["framework.cordova"]=1:hn()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Do.getInstance().currentlyOnline();return xn(this.interruptReasons_)&&t}}Yo.nextPersistentConnectionId_=0,Yo.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xo{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new Xo(t,n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new Xo(Xr,t),e=new Xo(Xr,n);return 0!==this.compare(i,e)}minPost(){return Xo.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends Qo{static get __EMPTY_NODE(){return Eo}static set __EMPTY_NODE(t){Eo=t}compare(t,n){return Zr(t.name,n.name)}isDefinedOn(t){throw Xt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return Xo.MIN}maxPost(){return new Xo(Qr,Eo)}makePost(t,n){return Yt("string"==typeof t,"KeyIndex indexValue must always be a string."),new Xo(t,Eo)}toString(){return".key"}}const tl=new Zo;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t,n,i,e,s=null){this.isReverse_=e,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!t.isEmpty();)if(t=t,r=n?i(t.key,n):1,e&&(r*=-1),r<0)t=this.isReverse_?t.left:t.right;else{if(0===r){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}getNext(){if(0===this.nodeStack_.length)return null;let t,n=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(n.key,n.value):{key:n.key,value:n.value},this.isReverse_)for(n=n.left;!n.isEmpty();)this.nodeStack_.push(n),n=n.right;else for(n=n.right;!n.isEmpty();)this.nodeStack_.push(n),n=n.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class il{constructor(t,n,i,e,s){this.key=t,this.value=n,this.color=null!=i?i:il.RED,this.left=null!=e?e:el.EMPTY_NODE,this.right=null!=s?s:el.EMPTY_NODE}copy(t,n,i,e,s){return new il(null!=t?t:this.key,null!=n?n:this.value,null!=i?i:this.color,null!=e?e:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let e=this;const s=i(t,e.key);return e=s<0?e.copy(null,null,null,e.left.insert(t,n,i),null):0===s?e.copy(null,n,null,null,null):e.copy(null,null,null,null,e.right.insert(t,n,i)),e.fixUp_()}removeMin_(){if(this.left.isEmpty())return el.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,e;if(i=this,n(t,i.key)<0)i.left.isEmpty()||i.left.isRed_()||i.left.left.isRed_()||(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),i.right.isEmpty()||i.right.isRed_()||i.right.left.isRed_()||(i=i.moveRedRight_()),0===n(t,i.key)){if(i.right.isEmpty())return el.EMPTY_NODE;e=i.right.min_(),i=i.copy(e.key,e.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,il.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,il.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}il.RED=!0,il.BLACK=!1;class el{constructor(t,n=el.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new el(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,il.BLACK,null,null))}remove(t){return new el(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,il.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),0===n)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,e=null;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),0===n){if(i.left.isEmpty())return e?e.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}n<0?i=i.left:n>0&&(e=i,i=i.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new nl(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new nl(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new nl(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new nl(this.root_,null,this.comparator_,!0,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sl(t,n){return Zr(t.name,n.name)}function rl(t,n){return Zr(t,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ol;el.EMPTY_NODE=new class{copy(t,n,i,e,s){return this}insert(t,n,i){return new il(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const ll=function(t){return"number"==typeof t?"number:"+ro(t):"string:"+t},al=function(t){if(t.isLeafNode()){const n=t.val();Yt("string"==typeof n||"number"==typeof n||"object"==typeof n&&bn(n,".sv"),"Priority must be a string or number.")}else Yt(t===ol||t.isEmpty(),"priority of unexpected type.");Yt(t===ol||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ul,hl,cl;class dl{constructor(t,n=dl.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,Yt(null!=this.value_,"LeafNode shouldn't be created with null/undefined value."),al(this.priorityNode_)}static set __childrenNodeConstructor(t){ul=t}static get __childrenNodeConstructor(){return ul}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new dl(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:dl.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Vo(t)?this:".priority"===Po(t)?this.priorityNode_:dl.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return".priority"===t?this.updatePriority(n):n.isEmpty()&&".priority"!==t?this:dl.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=Po(t);return null===i?n:n.isEmpty()&&".priority"!==i?this:(Yt(".priority"!==i||1===Mo(t),".priority must be the last token in a path"),this.updateImmediateChild(i,dl.__childrenNodeConstructor.EMPTY_NODE.updateChild(Lo(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+ll(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",t+="number"===n?ro(this.value_):this.value_,this.lazyHash_=Vr(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===dl.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof dl.__childrenNodeConstructor?-1:(Yt(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,e=dl.VALUE_TYPE_ORDER.indexOf(n),s=dl.VALUE_TYPE_ORDER.indexOf(i);return Yt(e>=0,"Unknown leaf type: "+n),Yt(s>=0,"Unknown leaf type: "+i),e===s?"object"===i?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-e}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}return!1}}dl.VALUE_TYPE_ORDER=["object","boolean","number","string"];const fl=new class extends Qo{compare(t,n){const i=t.node.getPriority(),e=n.node.getPriority(),s=i.compareTo(e);return 0===s?Zr(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return Xo.MIN}maxPost(){return new Xo(Qr,new dl("[PRIORITY-POST]",cl))}makePost(t,n){const i=hl(t);return new Xo(n,new dl("[PRIORITY-POST]",i))}toString(){return".priority"}},pl=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t){this.count=parseInt(Math.log(t+1)/pl,10),this.current_=this.count-1;const n=parseInt(Array(this.count+1).join("1"),2);this.bits_=t+1&n}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const ml=function(t,n,i,e){t.sort(n);const s=function(n,e){const r=e-n;let o,l;if(0===r)return null;if(1===r)return o=t[n],l=i?i(o):o,new il(l,o.node,il.BLACK,null,null);{const a=parseInt(r/2,10)+n,u=s(n,a),h=s(a+1,e);return o=t[a],l=i?i(o):o,new il(l,o.node,il.BLACK,u,h)}},r=function(n){let e=null,r=null,o=t.length;const l=function(n,e){const r=o-n,l=o;o-=n;const u=s(r+1,l),h=t[r],c=i?i(h):h;a(new il(c,h.node,e,null,u))},a=function(t){e?(e.left=t,e=t):(r=t,e=t)};for(let t=0;t<n.count;++t){const i=n.nextBitIsOne(),e=Math.pow(2,n.count-(t+1));i?l(e,il.BLACK):(l(e,il.BLACK),l(e,il.RED))}return r}(new gl(t.length));return new el(e||n,r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl;const vl={};class bl{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return Yt(vl&&fl,"ChildrenNode.ts has not been loaded"),wl=wl||new bl({".priority":vl},{".priority":fl}),wl}get(t){const n=yn(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof el?n:null}hasIndex(t){return bn(this.indexSet_,t.toString())}addIndex(t,n){Yt(t!==tl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let e=!1;const s=n.getIterator(Xo.Wrap);let r,o=s.getNext();for(;o;)e=e||t.isDefinedOn(o.node),i.push(o),o=s.getNext();r=e?ml(i,t.getCompare()):vl;const l=t.toString(),a=Object.assign({},this.indexSet_);a[l]=t;const u=Object.assign({},this.indexes_);return u[l]=r,new bl(u,a)}addToIndexes(t,n){const i=kn(this.indexes_,((i,e)=>{const s=yn(this.indexSet_,e);if(Yt(s,"Missing index implementation for "+e),i===vl){if(s.isDefinedOn(t.node)){const i=[],e=n.getIterator(Xo.Wrap);let r=e.getNext();for(;r;)r.name!==t.name&&i.push(r),r=e.getNext();return i.push(t),ml(i,s.getCompare())}return vl}{const e=n.get(t.name);let s=i;return e&&(s=s.remove(new Xo(t.name,e))),s.insert(t,t.node)}}));return new bl(i,this.indexSet_)}removeFromIndexes(t,n){const i=kn(this.indexes_,(i=>{if(i===vl)return i;{const e=n.get(t.name);return e?i.remove(new Xo(t.name,e)):i}}));return new bl(i,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;class xl{constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&al(this.priorityNode_),this.children_.isEmpty()&&Yt(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return yl||(yl=new xl(new el(rl),null,bl.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yl}updatePriority(t){return this.children_.isEmpty()?this:new xl(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const n=this.children_.get(t);return null===n?yl:n}}getChild(t){const n=Po(t);return null===n?this:this.getImmediateChild(n).getChild(Lo(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,n){if(Yt(n,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(n);{const i=new Xo(t,n);let e,s;n.isEmpty()?(e=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(i,this.children_)):(e=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(i,this.children_));const r=e.isEmpty()?yl:this.priorityNode_;return new xl(e,r,s)}}updateChild(t,n){const i=Po(t);if(null===i)return n;{Yt(".priority"!==Po(t)||1===Mo(t),".priority must be the last token in a path");const e=this.getImmediateChild(i).updateChild(Lo(t),n);return this.updateImmediateChild(i,e)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,e=0,s=!0;if(this.forEachChild(fl,((r,o)=>{n[r]=o.val(t),i++,s&&xl.INTEGER_REGEXP_.test(r)?e=Math.max(e,Number(r)):s=!1})),!t&&s&&e<2*i){const t=[];for(const i in n)t[i]=n[i];return t}return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+ll(this.getPriority().val())+":"),this.forEachChild(fl,((n,i)=>{const e=i.hash();""!==e&&(t+=":"+n+":"+e)})),this.lazyHash_=""===t?"":Vr(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const e=this.resolveIndex_(i);if(e){const i=e.getPredecessorKey(new Xo(t,n));return i?i.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const t=n.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new Xo(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const t=n.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new Xo(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal((t=>n(t.name,t.node))):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,(t=>t));{const i=this.children_.getIteratorFrom(t.name,Xo.Wrap);let e=i.peek();for(;null!=e&&n.compare(e,t)<0;)i.getNext(),e=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,(t=>t));{const i=this.children_.getReverseIteratorFrom(t.name,Xo.Wrap);let e=i.peek();for(;null!=e&&n.compare(e,t)>0;)i.getNext(),e=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===kl?-1:0}withIndex(t){if(t===tl||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new xl(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===tl||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority())){if(this.children_.count()===n.children_.count()){const t=this.getIterator(fl),i=n.getIterator(fl);let e=t.getNext(),s=i.getNext();for(;e&&s;){if(e.name!==s.name||!e.node.equals(s.node))return!1;e=t.getNext(),s=i.getNext()}return null===e&&null===s}return!1}return!1}}resolveIndex_(t){return t===tl?null:this.indexMap_.get(t.toString())}}xl.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const kl=new class extends xl{constructor(){super(new el(rl),xl.EMPTY_NODE,bl.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return xl.EMPTY_NODE}isEmpty(){return!1}};function _l(t,n=null){if(null===t)return xl.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(n=t[".priority"]),Yt(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+typeof n),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t)return new dl(t,_l(n));if(t instanceof Array){let i=xl.EMPTY_NODE;return so(t,((n,e)=>{if(bn(t,n)&&"."!==n.substring(0,1)){const t=_l(e);!t.isLeafNode()&&t.isEmpty()||(i=i.updateImmediateChild(n,t))}})),i.updatePriority(_l(n))}{const i=[];let e=!1;if(so(t,((t,n)=>{if("."!==t.substring(0,1)){const s=_l(n);s.isEmpty()||(e=e||!s.getPriority().isEmpty(),i.push(new Xo(t,s)))}})),0===i.length)return xl.EMPTY_NODE;const s=ml(i,sl,(t=>t.name),rl);if(e){const t=ml(i,fl.getCompare());return new xl(s,_l(n),new bl({".priority":t},{".priority":fl}))}return new xl(s,_l(n),bl.Default)}}Object.defineProperties(Xo,{MIN:{value:new Xo(Xr,xl.EMPTY_NODE)},MAX:{value:new Xo(Qr,kl)}}),Zo.__EMPTY_NODE=xl.EMPTY_NODE,dl.__childrenNodeConstructor=xl,ol=kl,cl=kl,hl=_l;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class El extends Qo{constructor(t){super(),this.indexPath_=t,Yt(!Vo(t)&&".priority"!==Po(t),"Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),e=this.extractChild(n.node),s=i.compareTo(e);return 0===s?Zr(t.name,n.name):s}makePost(t,n){const i=_l(t),e=xl.EMPTY_NODE.updateChild(this.indexPath_,i);return new Xo(n,e)}maxPost(){const t=xl.EMPTY_NODE.updateChild(this.indexPath_,kl);return new Xo(Qr,t)}toString(){return Fo(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=new class extends Qo{compare(t,n){const i=t.node.compareTo(n.node);return 0===i?Zr(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return Xo.MIN}maxPost(){return Xo.MAX}makePost(t,n){const i=_l(t);return new Xo(n,i)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t){return{type:"value",snapshotNode:t}}function Sl(t,n){return{type:"child_added",snapshotNode:n,childName:t}}function Cl(t,n){return{type:"child_removed",snapshotNode:n,childName:t}}function Al(t,n,i){return{type:"child_changed",snapshotNode:n,childName:t,oldSnap:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nl{constructor(t){this.index_=t}updateChild(t,n,i,e,s,r){Yt(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=t.getImmediateChild(n);return o.getChild(e).equals(i.getChild(e))&&o.isEmpty()===i.isEmpty()?t:(null!=r&&(i.isEmpty()?t.hasChild(n)?r.trackChildChange(Cl(n,o)):Yt(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?r.trackChildChange(Sl(n,i)):r.trackChildChange(Al(n,i,o))),t.isLeafNode()&&i.isEmpty()?t:t.updateImmediateChild(n,i).withIndex(this.index_))}updateFullNode(t,n,i){return null!=i&&(t.isLeafNode()||t.forEachChild(fl,((t,e)=>{n.hasChild(t)||i.trackChildChange(Cl(t,e))})),n.isLeafNode()||n.forEachChild(fl,((n,e)=>{if(t.hasChild(n)){const s=t.getImmediateChild(n);s.equals(e)||i.trackChildChange(Al(n,e,s))}else i.trackChildChange(Sl(n,e))}))),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?xl.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t){this.indexedFilter_=new Nl(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Dl.getStartPost_(t),this.endPost_=Dl.getEndPost_(t)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0}updateChild(t,n,i,e,s,r){return this.matches(new Xo(n,i))||(i=xl.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,i,e,s,r)}updateFullNode(t,n,i){n.isLeafNode()&&(n=xl.EMPTY_NODE);let e=n.withIndex(this.index_);e=e.updatePriority(xl.EMPTY_NODE);const s=this;return n.forEachChild(fl,((t,n)=>{s.matches(new Xo(t,n))||(e=e.updateImmediateChild(t,xl.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(t,e,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}return t.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t){this.rangedFilter_=new Dl(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}updateChild(t,n,i,e,s,r){return this.rangedFilter_.matches(new Xo(n,i))||(i=xl.EMPTY_NODE),t.getImmediateChild(n).equals(i)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,i,e,s,r):this.fullLimitUpdateChild_(t,n,i,s,r)}updateFullNode(t,n,i){let e;if(n.isLeafNode()||n.isEmpty())e=xl.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<n.numChildren()&&n.isIndexed(this.index_)){let t;e=xl.EMPTY_NODE.withIndex(this.index_),t=this.reverse_?n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let i=0;for(;t.hasNext()&&i<this.limit_;){const n=t.getNext();let s;if(s=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),n)<=0:this.index_.compare(n,this.rangedFilter_.getEndPost())<=0,!s)break;e=e.updateImmediateChild(n.name,n.node),i++}}else{let t,i,s,r;if(e=n.withIndex(this.index_),e=e.updatePriority(xl.EMPTY_NODE),this.reverse_){r=e.getReverseIterator(this.index_),t=this.rangedFilter_.getEndPost(),i=this.rangedFilter_.getStartPost();const n=this.index_.getCompare();s=(t,i)=>n(i,t)}else r=e.getIterator(this.index_),t=this.rangedFilter_.getStartPost(),i=this.rangedFilter_.getEndPost(),s=this.index_.getCompare();let o=0,l=!1;for(;r.hasNext();){const n=r.getNext();!l&&s(t,n)<=0&&(l=!0),l&&o<this.limit_&&s(n,i)<=0?o++:e=e.updateImmediateChild(n.name,xl.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,e,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,i,e,s){let r;if(this.reverse_){const t=this.index_.getCompare();r=(n,i)=>t(i,n)}else r=this.index_.getCompare();const o=t;Yt(o.numChildren()===this.limit_,"");const l=new Xo(n,i),a=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(o.hasChild(n)){const t=o.getImmediateChild(n);let h=e.getChildAfterChild(this.index_,a,this.reverse_);for(;null!=h&&(h.name===n||o.hasChild(h.name));)h=e.getChildAfterChild(this.index_,h,this.reverse_);const c=null==h?1:r(h,l);if(u&&!i.isEmpty()&&c>=0)return null!=s&&s.trackChildChange(Al(n,i,t)),o.updateImmediateChild(n,i);{null!=s&&s.trackChildChange(Cl(n,t));const i=o.updateImmediateChild(n,xl.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=s&&s.trackChildChange(Sl(h.name,h.node)),i.updateImmediateChild(h.name,h.node)):i}}return i.isEmpty()?t:u&&r(a,l)>=0?(null!=s&&(s.trackChildChange(Cl(a.name,a.node)),s.trackChildChange(Sl(n,i))),o.updateImmediateChild(n,i).updateImmediateChild(a.name,xl.EMPTY_NODE)):t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fl}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Yt(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Yt(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Xr}hasEnd(){return this.endSet_}getIndexEndValue(){return Yt(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Yt(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Yt(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fl}copy(){const t=new Rl;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Pl(t){const n={};if(t.isDefault())return n;let i;return t.index_===fl?i="$priority":t.index_===Il?i="$value":t.index_===tl?i="$key":(Yt(t.index_ instanceof El,"Unrecognized index type!"),i=t.index_.toString()),n.orderBy=wn(i),t.startSet_&&(n.startAt=wn(t.indexStartValue_),t.startNameSet_&&(n.startAt+=","+wn(t.indexStartName_))),t.endSet_&&(n.endAt=wn(t.indexEndValue_),t.endNameSet_&&(n.endAt+=","+wn(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?n.limitToFirst=t.limit_:n.limitToLast=t.limit_),n}function Ml(t){const n={};if(t.startSet_&&(n.sp=t.indexStartValue_,t.startNameSet_&&(n.sn=t.indexStartName_)),t.endSet_&&(n.ep=t.indexEndValue_,t.endNameSet_&&(n.en=t.indexEndName_)),t.limitSet_){n.l=t.limit_;let i=t.viewFrom_;""===i&&(i=t.isViewFromLeft()?"l":"r"),n.vf=i}return t.index_!==fl&&(n.i=t.index_.toString()),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends Ao{constructor(t,n,i,e){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=e,this.log_=Wr("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return void 0!==n?"tag$"+n:(Yt(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,i,e){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const r=Ll.getListenId_(t,i),o={};this.listens_[r]=o;const l=Pl(t._queryParams);this.restRequest_(s+".json",l,((t,n)=>{let l=n;if(404===t&&(l=null,t=null),null===t&&this.onDataUpdate_(s,l,!1,i),yn(this.listens_,r)===o){let n;n=t?401===t?"permission_denied":"rest_error:"+t:"ok",e(n,null)}}))}unlisten(t,n){const i=Ll.getListenId_(t,n);delete this.listens_[i]}get(t){const n=Pl(t._queryParams),i=t._path.toString(),e=new on;return this.restRequest_(i+".json",n,((t,n)=>{let s=n;404===t&&(s=null,t=null),null===t?(this.onDataUpdate_(i,s,!1,null),e.resolve(s)):e.reject(new Error(s))})),e.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([e,s])=>{e&&e.accessToken&&(n.auth=e.accessToken),s&&s.token&&(n.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+In(n);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(i&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=mn(o.responseText)}catch(t){Jr("Failed to parse JSON response for "+r+": "+o.responseText)}i(null,t)}else 401!==o.status&&404!==o.status&&Jr("Got unsuccessful REST response for "+r+" Status: "+o.status),i(o.status);i=null}},o.open("GET",r,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(){this.rootNode_=xl.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(){return{value:null,children:new Map}}function $l(t,n,i){if(Vo(n))t.value=i,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(n,i);else{const e=Po(n);t.children.has(e)||t.children.set(e,Fl()),$l(t.children.get(e),n=Lo(n),i)}}function Ul(t,n){if(Vo(n))return t.value=null,t.children.clear(),!0;if(null!==t.value){if(t.value.isLeafNode())return!1;{const i=t.value;return t.value=null,i.forEachChild(fl,((n,i)=>{$l(t,new Oo(n),i)})),Ul(t,n)}}if(t.children.size>0){const i=Po(n);return n=Lo(n),t.children.has(i)&&Ul(t.children.get(i),n)&&t.children.delete(i),0===t.children.size}return!0}function Vl(t,n,i){null!==t.value?i(n,t.value):function(t,n){t.children.forEach(((t,i)=>{n(i,t)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,((t,e)=>{Vl(e,new Oo(n.toString()+"/"+t),i)}))}class Bl{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&so(this.last_,((t,i)=>{n[t]=n[t]-i})),this.last_=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Bl(t);const i=1e4+2e4*Math.random();uo(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;so(t,((t,e)=>{e>0&&bn(this.statsToReport_,t)&&(n[t]=e,i=!0)})),i&&this.server_.reportStats(n),uo(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ql;function Kl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(ql||(ql={}));class Wl{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=ql.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(t){if(Vo(this.path)){if(null!=this.affectedTree.value)return Yt(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Oo(t));return new Wl(Ro(),n,this.revert)}}return Yt(Po(this.path)===t,"operationForChild called for unrelated child."),new Wl(Lo(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t,n){this.source=t,this.path=n,this.type=ql.LISTEN_COMPLETE}operationForChild(t){return Vo(this.path)?new Gl(this.source,Ro()):new Gl(this.source,Lo(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=ql.OVERWRITE}operationForChild(t){return Vo(this.path)?new Hl(this.source,Ro(),this.snap.getImmediateChild(t)):new Hl(this.source,Lo(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=ql.MERGE}operationForChild(t){if(Vo(this.path)){const n=this.children.subtree(new Oo(t));return n.isEmpty()?null:n.value?new Hl(this.source,Ro(),n.value):new Jl(this.source,Ro(),n)}return Yt(Po(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Jl(this.source,Lo(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Vo(t))return this.isFullyInitialized()&&!this.filtered_;const n=Po(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function Ql(t,n,i,e,s,r){const o=e.filter((t=>t.type===i));o.sort(((n,i)=>function(t,n,i){if(null==n.childName||null==i.childName)throw Xt("Should only compare child_ events.");const e=new Xo(n.childName,n.snapshotNode),s=new Xo(i.childName,i.snapshotNode);return t.index_.compare(e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,n,i))),o.forEach((i=>{const e=function(t,n,i){return"value"===n.type||"child_removed"===n.type||(n.prevName=i.getPredecessorChildName(n.childName,n.snapshotNode,t.index_)),n}(t,i,r);s.forEach((s=>{s.respondsTo(i.type)&&n.push(s.createEvent(e,t.query_))}))}))}function Zl(t,n){return{eventCache:t,serverCache:n}}function ta(t,n,i,e){return Zl(new Yl(n,i,e),t.serverCache)}function na(t,n,i,e){return Zl(t.eventCache,new Yl(n,i,e))}function ia(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ea(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa;class ra{constructor(t,n=(()=>(sa||(sa=new el(to)),sa))()){this.value=t,this.children=n}static fromObject(t){let n=new ra(null);return so(t,((t,i)=>{n=n.set(new Oo(t),i)})),n}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(null!=this.value&&n(this.value))return{path:Ro(),value:this.value};if(Vo(t))return null;{const i=Po(t),e=this.children.get(i);if(null!==e){const s=e.findRootMostMatchingPathAndValue(Lo(t),n);return null!=s?{path:Uo(new Oo(i),s.path),value:s.value}:null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,(()=>!0))}subtree(t){if(Vo(t))return this;{const n=Po(t),i=this.children.get(n);return null!==i?i.subtree(Lo(t)):new ra(null)}}set(t,n){if(Vo(t))return new ra(n,this.children);{const i=Po(t),e=(this.children.get(i)||new ra(null)).set(Lo(t),n),s=this.children.insert(i,e);return new ra(this.value,s)}}remove(t){if(Vo(t))return this.children.isEmpty()?new ra(null):new ra(null,this.children);{const n=Po(t),i=this.children.get(n);if(i){const e=i.remove(Lo(t));let s;return s=e.isEmpty()?this.children.remove(n):this.children.insert(n,e),null===this.value&&s.isEmpty()?new ra(null):new ra(this.value,s)}return this}}get(t){if(Vo(t))return this.value;{const n=Po(t),i=this.children.get(n);return i?i.get(Lo(t)):null}}setTree(t,n){if(Vo(t))return n;{const i=Po(t),e=(this.children.get(i)||new ra(null)).setTree(Lo(t),n);let s;return s=e.isEmpty()?this.children.remove(i):this.children.insert(i,e),new ra(this.value,s)}}fold(t){return this.fold_(Ro(),t)}fold_(t,n){const i={};return this.children.inorderTraversal(((e,s)=>{i[e]=s.fold_(Uo(t,e),n)})),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,Ro(),n)}findOnPath_(t,n,i){const e=!!this.value&&i(n,this.value);if(e)return e;if(Vo(t))return null;{const e=Po(t),s=this.children.get(e);return s?s.findOnPath_(Lo(t),Uo(n,e),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,Ro(),n)}foreachOnPath_(t,n,i){if(Vo(t))return this;{this.value&&i(n,this.value);const e=Po(t),s=this.children.get(e);return s?s.foreachOnPath_(Lo(t),Uo(n,e),i):new ra(null)}}foreach(t){this.foreach_(Ro(),t)}foreach_(t,n){this.children.inorderTraversal(((i,e)=>{e.foreach_(Uo(t,i),n)})),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal(((n,i)=>{i.value&&t(n,i.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(t){this.writeTree_=t}static empty(){return new oa(new ra(null))}}function la(t,n,i){if(Vo(n))return new oa(new ra(i));{const e=t.writeTree_.findRootMostValueAndPath(n);if(null!=e){const s=e.path;let r=e.value;const o=Bo(s,n);return r=r.updateChild(o,i),new oa(t.writeTree_.set(s,r))}{const e=new ra(i),s=t.writeTree_.setTree(n,e);return new oa(s)}}}function aa(t,n,i){let e=t;return so(i,((t,i)=>{e=la(e,Uo(n,t),i)})),e}function ua(t,n){if(Vo(n))return oa.empty();{const i=t.writeTree_.setTree(n,new ra(null));return new oa(i)}}function ha(t,n){return null!=ca(t,n)}function ca(t,n){const i=t.writeTree_.findRootMostValueAndPath(n);return null!=i?t.writeTree_.get(i.path).getChild(Bo(i.path,n)):null}function da(t){const n=[],i=t.writeTree_.value;return null!=i?i.isLeafNode()||i.forEachChild(fl,((t,i)=>{n.push(new Xo(t,i))})):t.writeTree_.children.inorderTraversal(((t,i)=>{null!=i.value&&n.push(new Xo(t,i.value))})),n}function fa(t,n){if(Vo(n))return t;{const i=ca(t,n);return new oa(null!=i?new ra(i):t.writeTree_.subtree(n))}}function pa(t){return t.writeTree_.isEmpty()}function ga(t,n){return ma(Ro(),t.writeTree_,n)}function ma(t,n,i){if(null!=n.value)return i.updateChild(t,n.value);{let e=null;return n.children.inorderTraversal(((n,s)=>{".priority"===n?(Yt(null!==s.value,"Priority writes must always be leaf nodes"),e=s.value):i=ma(Uo(t,n),s,i)})),i.getChild(t).isEmpty()||null===e||(i=i.updateChild(Uo(t,".priority"),e)),i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t,n){return Ca(n,t)}function va(t,n){if(t.snap)return Ko(t.path,n);for(const i in t.children)if(t.children.hasOwnProperty(i)&&Ko(Uo(t.path,i),n))return!0;return!1}function ba(t){return t.visible}function ya(t,n,i){let e=oa.empty();for(let s=0;s<t.length;++s){const r=t[s];if(n(r)){const t=r.path;let n;if(r.snap)Ko(i,t)?(n=Bo(i,t),e=la(e,n,r.snap)):Ko(t,i)&&(n=Bo(t,i),e=la(e,Ro(),r.snap.getChild(n)));else{if(!r.children)throw Xt("WriteRecord should have .snap or .children");if(Ko(i,t))n=Bo(i,t),e=aa(e,n,r.children);else if(Ko(t,i))if(n=Bo(t,i),Vo(n))e=aa(e,Ro(),r.children);else{const t=yn(r.children,Po(n));if(t){const i=t.getChild(Lo(n));e=la(e,Ro(),i)}}}}}return e}function xa(t,n,i,e,s){if(e||s){const r=fa(t.visibleWrites,n);return!s&&pa(r)?i:s||null!=i||ha(r,Ro())?ga(ya(t.allWrites,(function(t){return(t.visible||s)&&(!e||!~e.indexOf(t.writeId))&&(Ko(t.path,n)||Ko(n,t.path))}),n),i||xl.EMPTY_NODE):null}{const e=ca(t.visibleWrites,n);if(null!=e)return e;{const e=fa(t.visibleWrites,n);return pa(e)?i:null!=i||ha(e,Ro())?ga(e,i||xl.EMPTY_NODE):null}}}function ka(t,n,i,e){return xa(t.writeTree,t.treePath,n,i,e)}function _a(t,n){return function(t,n,i){let e=xl.EMPTY_NODE;const s=ca(t.visibleWrites,n);if(s)return s.isLeafNode()||s.forEachChild(fl,((t,n)=>{e=e.updateImmediateChild(t,n)})),e;if(i){const s=fa(t.visibleWrites,n);return i.forEachChild(fl,((t,n)=>{const i=ga(fa(s,new Oo(t)),n);e=e.updateImmediateChild(t,i)})),da(s).forEach((t=>{e=e.updateImmediateChild(t.name,t.node)})),e}return da(fa(t.visibleWrites,n)).forEach((t=>{e=e.updateImmediateChild(t.name,t.node)})),e}(t.writeTree,t.treePath,n)}function Ea(t,n,i,e){return function(t,n,i,e,s){Yt(e||s,"Either existingEventSnap or existingServerSnap must exist");const r=Uo(n,i);if(ha(t.visibleWrites,r))return null;{const n=fa(t.visibleWrites,r);return pa(n)?s.getChild(i):ga(n,s.getChild(i))}}(t.writeTree,t.treePath,n,i,e)}function Ia(t,n){return function(t,n){return ca(t.visibleWrites,n)}(t.writeTree,Uo(t.treePath,n))}function Ta(t,n,i){return function(t,n,i,e){const s=Uo(n,i),r=ca(t.visibleWrites,s);return null!=r?r:e.isCompleteForChild(i)?ga(fa(t.visibleWrites,s),e.getNode().getImmediateChild(i)):null}(t.writeTree,t.treePath,n,i)}function Sa(t,n){return Ca(Uo(t.treePath,n),t.writeTree)}function Ca(t,n){return{treePath:t,writeTree:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;Yt("child_added"===n||"child_changed"===n||"child_removed"===n,"Only child changes supported for tracking"),Yt(".priority"!==i,"Only non-priority child changes can be tracked.");const e=this.changeMap.get(i);if(e){const s=e.type;if("child_added"===n&&"child_removed"===s)this.changeMap.set(i,Al(i,t.snapshotNode,e.snapshotNode));else if("child_removed"===n&&"child_added"===s)this.changeMap.delete(i);else if("child_removed"===n&&"child_changed"===s)this.changeMap.set(i,Cl(i,e.oldSnap));else if("child_changed"===n&&"child_added"===s)this.changeMap.set(i,Sl(i,t.snapshotNode));else{if("child_changed"!==n||"child_changed"!==s)throw Xt("Illegal combination of changes: "+t+" occurred after "+e);this.changeMap.set(i,Al(i,t.snapshotNode,e.oldSnap))}}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=new class{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}};class Da{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const n=null!=this.optCompleteServerCache_?new Yl(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ta(this.writes_,t,n)}}getChildAfterChild(t,n,i){const e=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ea(this.viewCache_),s=function(t,n,i,e,s,r){return function(t,n,i,e,s,r,o){let l;const a=fa(t.visibleWrites,n),u=ca(a,Ro());if(null!=u)l=u;else{if(null==i)return[];l=ga(a,i)}if(l=l.withIndex(o),l.isEmpty()||l.isLeafNode())return[];{const t=[],n=o.getCompare(),i=r?l.getReverseIteratorFrom(e,o):l.getIteratorFrom(e,o);let a=i.getNext();for(;a&&t.length<s;)0!==n(a,e)&&t.push(a),a=i.getNext();return t}}(t.writeTree,t.treePath,n,i,e,s,r)}(this.writes_,e,n,1,i,t);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t,n,i,e,s,r){const o=n.eventCache;if(null!=Ia(e,i))return n;{let l,a;if(Vo(i))if(Yt(n.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),n.serverCache.isFiltered()){const i=ea(n),s=_a(e,i instanceof xl?i:xl.EMPTY_NODE);l=t.filter.updateFullNode(n.eventCache.getNode(),s,r)}else{const i=ka(e,ea(n));l=t.filter.updateFullNode(n.eventCache.getNode(),i,r)}else{const u=Po(i);if(".priority"===u){Yt(1===Mo(i),"Can't have a priority with additional path components");const s=o.getNode();a=n.serverCache.getNode();const r=Ea(e,i,s,a);l=null!=r?t.filter.updatePriority(s,r):o.getNode()}else{const h=Lo(i);let c;if(o.isCompleteForChild(u)){a=n.serverCache.getNode();const t=Ea(e,i,o.getNode(),a);c=null!=t?o.getNode().getImmediateChild(u).updateChild(h,t):o.getNode().getImmediateChild(u)}else c=Ta(e,u,n.serverCache);l=null!=c?t.filter.updateChild(o.getNode(),u,c,h,s,r):o.getNode()}}return ta(n,l,o.isFullyInitialized()||Vo(i),t.filter.filtersNodes())}}function Ra(t,n,i,e,s,r,o,l){const a=n.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Vo(i))u=h.updateFullNode(a.getNode(),e,null);else if(h.filtersNodes()&&!a.isFiltered()){const t=a.getNode().updateChild(i,e);u=h.updateFullNode(a.getNode(),t,null)}else{const t=Po(i);if(!a.isCompleteForPath(i)&&Mo(i)>1)return n;const s=Lo(i),r=a.getNode().getImmediateChild(t).updateChild(s,e);u=".priority"===t?h.updatePriority(a.getNode(),r):h.updateChild(a.getNode(),t,r,s,Na,null)}const c=na(n,u,a.isFullyInitialized()||Vo(i),h.filtersNodes());return Oa(t,c,i,s,new Da(s,c,r),l)}function Pa(t,n,i,e,s,r,o){const l=n.eventCache;let a,u;const h=new Da(s,n,r);if(Vo(i))u=t.filter.updateFullNode(n.eventCache.getNode(),e,o),a=ta(n,u,!0,t.filter.filtersNodes());else{const s=Po(i);if(".priority"===s)u=t.filter.updatePriority(n.eventCache.getNode(),e),a=ta(n,u,l.isFullyInitialized(),l.isFiltered());else{const r=Lo(i),u=l.getNode().getImmediateChild(s);let c;if(Vo(r))c=e;else{const t=h.getCompleteChild(s);c=null!=t?".priority"===jo(r)&&t.getChild($o(r)).isEmpty()?t:t.updateChild(r,e):xl.EMPTY_NODE}a=u.equals(c)?n:ta(n,t.filter.updateChild(l.getNode(),s,c,r,h,o),l.isFullyInitialized(),t.filter.filtersNodes())}}return a}function Ma(t,n){return t.eventCache.isCompleteForChild(n)}function La(t,n,i){return i.foreach(((t,i)=>{n=n.updateChild(t,i)})),n}function ja(t,n,i,e,s,r,o,l){if(n.serverCache.getNode().isEmpty()&&!n.serverCache.isFullyInitialized())return n;let a,u=n;a=Vo(i)?e:new ra(null).setTree(i,e);const h=n.serverCache.getNode();return a.children.inorderTraversal(((i,e)=>{if(h.hasChild(i)){const a=La(0,n.serverCache.getNode().getImmediateChild(i),e);u=Ra(t,u,new Oo(i),a,s,r,o,l)}})),a.children.inorderTraversal(((i,e)=>{const a=!n.serverCache.isCompleteForChild(i)&&void 0===e.value;if(!h.hasChild(i)&&!a){const a=La(0,n.serverCache.getNode().getImmediateChild(i),e);u=Ra(t,u,new Oo(i),a,s,r,o,l)}})),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fa{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const i=this.query_._queryParams,e=new Nl(i.getIndex()),s=(r=i).loadsAllData()?new Nl(r.getIndex()):r.hasLimit()?new Ol(r):new Dl(r);var r;this.processor_=function(t){return{filter:t}}(s);const o=n.serverCache,l=n.eventCache,a=e.updateFullNode(xl.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(xl.EMPTY_NODE,l.getNode(),null),h=new Yl(a,o.isFullyInitialized(),e.filtersNodes()),c=new Yl(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Zl(c,h),this.eventGenerator_=new Xl(this.query_)}get query(){return this.query_}}function $a(t,n){const i=ea(t.viewCache_);return i&&(t.query._queryParams.loadsAllData()||!Vo(n)&&!i.getImmediateChild(Po(n)).isEmpty())?i.getChild(n):null}function Ua(t){return 0===t.eventRegistrations_.length}function Va(t,n,i){const e=[];if(i){Yt(null==n,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach((t=>{const n=t.createCancelEvent(i,s);n&&e.push(n)}))}if(n){let i=[];for(let e=0;e<t.eventRegistrations_.length;++e){const s=t.eventRegistrations_[e];if(s.matches(n)){if(n.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(e+1));break}}else i.push(s)}t.eventRegistrations_=i}else t.eventRegistrations_=[];return e}function Ba(t,n,i,e){n.type===ql.MERGE&&null!==n.source.queryId&&(Yt(ea(t.viewCache_),"We should always have a full cache before handling merges"),Yt(ia(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=function(t,n,i,e,s){const r=new Aa;let o,l;if(i.type===ql.OVERWRITE){const a=i;a.source.fromUser?o=Pa(t,n,a.path,a.snap,e,s,r):(Yt(a.source.fromServer,"Unknown source."),l=a.source.tagged||n.serverCache.isFiltered()&&!Vo(a.path),o=Ra(t,n,a.path,a.snap,e,s,l,r))}else if(i.type===ql.MERGE){const a=i;a.source.fromUser?o=function(t,n,i,e,s,r,o){let l=n;return e.foreach(((e,a)=>{const u=Uo(i,e);Ma(n,Po(u))&&(l=Pa(t,l,u,a,s,r,o))})),e.foreach(((e,a)=>{const u=Uo(i,e);Ma(n,Po(u))||(l=Pa(t,l,u,a,s,r,o))})),l}(t,n,a.path,a.children,e,s,r):(Yt(a.source.fromServer,"Unknown source."),l=a.source.tagged||n.serverCache.isFiltered(),o=ja(t,n,a.path,a.children,e,s,l,r))}else if(i.type===ql.ACK_USER_WRITE){const l=i;o=l.revert?function(t,n,i,e,s,r){let o;if(null!=Ia(e,i))return n;{const l=new Da(e,n,s),a=n.eventCache.getNode();let u;if(Vo(i)||".priority"===Po(i)){let i;if(n.serverCache.isFullyInitialized())i=ka(e,ea(n));else{const t=n.serverCache.getNode();Yt(t instanceof xl,"serverChildren would be complete if leaf node"),i=_a(e,t)}i=i,u=t.filter.updateFullNode(a,i,r)}else{const s=Po(i);let h=Ta(e,s,n.serverCache);null==h&&n.serverCache.isCompleteForChild(s)&&(h=a.getImmediateChild(s)),u=null!=h?t.filter.updateChild(a,s,h,Lo(i),l,r):n.eventCache.getNode().hasChild(s)?t.filter.updateChild(a,s,xl.EMPTY_NODE,Lo(i),l,r):a,u.isEmpty()&&n.serverCache.isFullyInitialized()&&(o=ka(e,ea(n)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=n.serverCache.isFullyInitialized()||null!=Ia(e,Ro()),ta(n,u,o,t.filter.filtersNodes())}}(t,n,l.path,e,s,r):function(t,n,i,e,s,r,o){if(null!=Ia(s,i))return n;const l=n.serverCache.isFiltered(),a=n.serverCache;if(null!=e.value){if(Vo(i)&&a.isFullyInitialized()||a.isCompleteForPath(i))return Ra(t,n,i,a.getNode().getChild(i),s,r,l,o);if(Vo(i)){let e=new ra(null);return a.getNode().forEachChild(tl,((t,n)=>{e=e.set(new Oo(t),n)})),ja(t,n,i,e,s,r,l,o)}return n}{let u=new ra(null);return e.foreach((t=>{const n=Uo(i,t);a.isCompleteForPath(n)&&(u=u.set(t,a.getNode().getChild(n)))})),ja(t,n,i,u,s,r,l,o)}}(t,n,l.path,l.affectedTree,e,s,r)}else{if(i.type!==ql.LISTEN_COMPLETE)throw Xt("Unknown operation type: "+i.type);o=function(t,n,i,e,s){const r=n.serverCache;return Oa(t,na(n,r.getNode(),r.isFullyInitialized()||Vo(i),r.isFiltered()),i,e,Na,s)}(t,n,i.path,e,r)}const a=r.getChanges();return function(t,n,i){const e=n.eventCache;if(e.isFullyInitialized()){const s=e.getNode().isLeafNode()||e.getNode().isEmpty(),r=ia(t);(i.length>0||!t.eventCache.isFullyInitialized()||s&&!e.getNode().equals(r)||!e.getNode().getPriority().equals(r.getPriority()))&&i.push(Tl(ia(n)))}}(n,o,a),{viewCache:o,changes:a}}(t.processor_,s,n,i,e);var o,l;return o=t.processor_,Yt((l=r.viewCache).eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),Yt(l.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),Yt(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,za(t,r.changes,r.viewCache.eventCache.getNode(),null)}function za(t,n,i,e){return function(t,n,i,e){const s=[],r=[];return n.forEach((n=>{"child_changed"===n.type&&t.index_.indexedValueChanged(n.oldSnap,n.snapshotNode)&&r.push({type:"child_moved",snapshotNode:n.snapshotNode,childName:n.childName})})),Ql(t,s,"child_removed",n,e,i),Ql(t,s,"child_added",n,e,i),Ql(t,s,"child_moved",r,e,i),Ql(t,s,"child_changed",n,e,i),Ql(t,s,"value",n,e,i),s}(t.eventGenerator_,n,i,e?[e]:t.eventRegistrations_)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa,Ka;class Wa{constructor(){this.views=new Map}}function Ga(t,n,i,e){const s=n.source.queryId;if(null!==s){const r=t.views.get(s);return Yt(null!=r,"SyncTree gave us an op for an invalid query."),Ba(r,n,i,e)}{let s=[];for(const r of t.views.values())s=s.concat(Ba(r,n,i,e));return s}}function Ha(t){const n=[];for(const i of t.views.values())i.query._queryParams.loadsAllData()||n.push(i);return n}function Ja(t,n){let i=null;for(const e of t.views.values())i=i||$a(e,n);return i}function Ya(t,n){return n._queryParams.loadsAllData()?Za(t):t.views.get(n._queryIdentifier)}function Xa(t,n){return null!=Ya(t,n)}function Qa(t){return null!=Za(t)}function Za(t){for(const n of t.views.values())if(n.query._queryParams.loadsAllData())return n;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tu=1;class nu{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ra(null),this.pendingWriteTree_={visibleWrites:oa.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function iu(t,n,i,e,s){return function(t,n,i,e,s){Yt(e>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),t.allWrites.push({path:n,snap:i,writeId:e,visible:s}),s&&(t.visibleWrites=la(t.visibleWrites,n,i)),t.lastWriteId=e}(t.pendingWriteTree_,n,i,e,s),s?au(t,new Hl({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},n,i)):[]}function eu(t,n,i=!1){const e=function(t,n){for(let i=0;i<t.allWrites.length;i++){const e=t.allWrites[i];if(e.writeId===n)return e}return null}(t.pendingWriteTree_,n);if(function(t,n){const i=t.allWrites.findIndex((t=>t.writeId===n));Yt(i>=0,"removeWrite called with nonexistent writeId.");const e=t.allWrites[i];t.allWrites.splice(i,1);let s=e.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const n=t.allWrites[o];n.visible&&(o>=i&&va(n,e.path)?s=!1:Ko(e.path,n.path)&&(r=!0)),o--}return!!s&&(r?(function(t){t.visibleWrites=ya(t.allWrites,ba,Ro()),t.lastWriteId=t.allWrites.length>0?t.allWrites[t.allWrites.length-1].writeId:-1}(t),!0):(e.snap?t.visibleWrites=ua(t.visibleWrites,e.path):so(e.children,(n=>{t.visibleWrites=ua(t.visibleWrites,Uo(e.path,n))})),!0))}(t.pendingWriteTree_,n)){let n=new ra(null);return null!=e.snap?n=n.set(Ro(),!0):so(e.children,(t=>{n=n.set(new Oo(t),!0)})),au(t,new Wl(e.path,n,i))}return[]}function su(t,n,i){return au(t,new Hl({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},n,i))}function ru(t,n,i,e){const s=n._path,r=t.syncPointTree_.get(s);let o=[];if(r&&("default"===n._queryIdentifier||Xa(r,n))){const l=function(t,n,i,e){const s=n._queryIdentifier,r=[];let o=[];const l=Qa(t);if("default"===s)for(const[n,s]of t.views.entries())o=o.concat(Va(s,i,e)),Ua(s)&&(t.views.delete(n),s.query._queryParams.loadsAllData()||r.push(s.query));else{const n=t.views.get(s);n&&(o=o.concat(Va(n,i,e)),Ua(n)&&(t.views.delete(s),n.query._queryParams.loadsAllData()||r.push(n.query)))}return l&&!Qa(t)&&r.push(new(Yt(qa,"Reference.ts has not been loaded"),qa)(n._repo,n._path)),{removed:r,events:o}}(r,n,i,e);0===r.views.size&&(t.syncPointTree_=t.syncPointTree_.remove(s));const a=l.removed;o=l.events;const u=-1!==a.findIndex((t=>t._queryParams.loadsAllData())),h=t.syncPointTree_.findOnPath(s,((t,n)=>Qa(n)));if(u&&!h){const n=t.syncPointTree_.subtree(s);if(!n.isEmpty()){const i=function(t){return t.fold(((t,n,i)=>{if(n&&Qa(n))return[Za(n)];{let t=[];return n&&(t=Ha(n)),so(i,((n,i)=>{t=t.concat(i)})),t}}))}(n);for(let n=0;n<i.length;++n){const e=i[n],s=e.query,r=cu(t,e);t.listenProvider_.startListening(wu(s),du(t,s),r.hashFn,r.onComplete)}}}if(!h&&a.length>0&&!e)if(u){const i=null;t.listenProvider_.stopListening(wu(n),i)}else a.forEach((n=>{const i=t.queryToTagMap.get(fu(n));t.listenProvider_.stopListening(wu(n),i)}));!function(t,n){for(let i=0;i<n.length;++i){const e=n[i];if(!e._queryParams.loadsAllData()){const n=fu(e),i=t.queryToTagMap.get(n);t.queryToTagMap.delete(n),t.tagToQueryMap.delete(i)}}}(t,a)}return o}function ou(t,n,i){const e=n._path;let s=null,r=!1;t.syncPointTree_.foreachOnPath(e,((t,n)=>{const i=Bo(t,e);s=s||Ja(n,i),r=r||Qa(n)}));let o,l=t.syncPointTree_.get(e);l?(r=r||Qa(l),s=s||Ja(l,Ro())):(l=new Wa,t.syncPointTree_=t.syncPointTree_.set(e,l)),null!=s?o=!0:(o=!1,s=xl.EMPTY_NODE,t.syncPointTree_.subtree(e).foreachChild(((t,n)=>{const i=Ja(n,Ro());i&&(s=s.updateImmediateChild(t,i))})));const a=Xa(l,n);if(!a&&!n._queryParams.loadsAllData()){const i=fu(n);Yt(!t.queryToTagMap.has(i),"View does not exist, but we have a tag");const e=tu++;t.queryToTagMap.set(i,e),t.tagToQueryMap.set(e,i)}let u=function(t,n,i,e,s,r){const o=function(t,n,i,e,s){const r=t.views.get(n._queryIdentifier);if(!r){let t=ka(i,s?e:null),r=!1;t?r=!0:e instanceof xl?(t=_a(i,e),r=!1):(t=xl.EMPTY_NODE,r=!1);const o=Zl(new Yl(t,r,!1),new Yl(e,s,!1));return new Fa(n,o)}return r}(t,n,e,s,r);return t.views.has(n._queryIdentifier)||t.views.set(n._queryIdentifier,o),function(t,n){t.eventRegistrations_.push(n)}(o,i),function(t,n){const i=t.viewCache_.eventCache,e=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(fl,((t,n)=>{e.push(Sl(t,n))})),i.isFullyInitialized()&&e.push(Tl(i.getNode())),za(t,e,i.getNode(),n)}(o,i)}(l,n,i,wa(t.pendingWriteTree_,e),s,o);if(!a&&!r){const i=Ya(l,n);u=u.concat(function(t,n,i){const e=n._path,s=du(t,n),r=cu(t,i),o=t.listenProvider_.startListening(wu(n),s,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(e);if(s)Yt(!Qa(l.value),"If we're adding a query, it shouldn't be shadowed");else{const n=l.fold(((t,n,i)=>{if(!Vo(t)&&n&&Qa(n))return[Za(n).query];{let t=[];return n&&(t=t.concat(Ha(n).map((t=>t.query)))),so(i,((n,i)=>{t=t.concat(i)})),t}}));for(let i=0;i<n.length;++i){const e=n[i];t.listenProvider_.stopListening(wu(e),du(t,e))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,n,i))}return u}function lu(t,n,i){const e=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(n,((t,i)=>{const e=Ja(i,Bo(t,n));if(e)return e}));return xa(e,n,s,i,!0)}function au(t,n){return uu(n,t.syncPointTree_,null,wa(t.pendingWriteTree_,Ro()))}function uu(t,n,i,e){if(Vo(t.path))return hu(t,n,i,e);{const s=n.get(Ro());null==i&&null!=s&&(i=Ja(s,Ro()));let r=[];const o=Po(t.path),l=t.operationForChild(o),a=n.children.get(o);if(a&&l){const t=i?i.getImmediateChild(o):null,n=Sa(e,o);r=r.concat(uu(l,a,t,n))}return s&&(r=r.concat(Ga(s,t,e,i))),r}}function hu(t,n,i,e){const s=n.get(Ro());null==i&&null!=s&&(i=Ja(s,Ro()));let r=[];return n.children.inorderTraversal(((n,s)=>{const o=i?i.getImmediateChild(n):null,l=Sa(e,n),a=t.operationForChild(n);a&&(r=r.concat(hu(a,s,o,l)))})),s&&(r=r.concat(Ga(s,t,e,i))),r}function cu(t,n){const i=n.query,e=du(t,i);return{hashFn:()=>(function(t){return t.viewCache_.serverCache.getNode()}(n)||xl.EMPTY_NODE).hash(),onComplete:n=>{if("ok"===n)return e?function(t,n,i){const e=pu(t,i);if(e){const i=gu(e),s=i.path,r=i.queryId,o=Bo(s,n);return mu(t,s,new Gl(Kl(r),o))}return[]}(t,i._path,e):function(t,n){return au(t,new Gl({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},n))}(t,i._path);{const e=function(t,n){let i="Unknown Error";"too_big"===t?i="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===t?i="Client doesn't have permission to access the desired data.":"unavailable"===t&&(i="The service is unavailable");const e=new Error(t+" at "+n._path.toString()+": "+i);return e.code=t.toUpperCase(),e}(n,i);return ru(t,i,null,e)}}}}function du(t,n){const i=fu(n);return t.queryToTagMap.get(i)}function fu(t){return t._path.toString()+"$"+t._queryIdentifier}function pu(t,n){return t.tagToQueryMap.get(n)}function gu(t){const n=t.indexOf("$");return Yt(-1!==n&&n<t.length-1,"Bad queryKey."),{queryId:t.substr(n+1),path:new Oo(t.substr(0,n))}}function mu(t,n,i){const e=t.syncPointTree_.get(n);return Yt(e,"Missing sync point for query tag that we're tracking"),Ga(e,i,wa(t.pendingWriteTree_,n),null)}function wu(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Yt(Ka,"Reference.ts has not been loaded"),Ka)(t._repo,t._path):t}class vu{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new vu(n)}node(){return this.node_}}class bu{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Uo(this.path_,t);return new bu(this.syncTree_,n)}node(){return lu(this.syncTree_,this.path_)}}const yu=function(t,n,i){return t&&"object"==typeof t?(Yt(".sv"in t,"Unexpected leaf node or priority contents"),"string"==typeof t[".sv"]?xu(t[".sv"],n,i):"object"==typeof t[".sv"]?ku(t[".sv"],n):void Yt(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},xu=function(t,n,i){switch(t){case"timestamp":return i.timestamp;default:Yt(!1,"Unexpected server value: "+t)}},ku=function(t,n){t.hasOwnProperty("increment")||Yt(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;"number"!=typeof i&&Yt(!1,"Unexpected increment value: "+i);const e=n.node();if(Yt(null!=e,"Expected ChildrenNode.EMPTY_NODE for nulls"),!e.isLeafNode())return i;const s=e.getValue();return"number"!=typeof s?i:s+i},_u=function(t,n,i){return Eu(t,new vu(n),i)};function Eu(t,n,i){const e=t.getPriority().val(),s=yu(e,n.getImmediateChild(".priority"),i);let r;if(t.isLeafNode()){const e=t,r=yu(e.getValue(),n,i);return r!==e.getValue()||s!==e.getPriority().val()?new dl(r,_l(s)):t}{const e=t;return r=e,s!==e.getPriority().val()&&(r=r.updatePriority(new dl(s))),e.forEachChild(fl,((t,e)=>{const s=Eu(e,n.getImmediateChild(t),i);s!==e&&(r=r.updateImmediateChild(t,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function Tu(t,n){let i=n instanceof Oo?n:new Oo(n),e=t,s=Po(i);for(;null!==s;){const t=yn(e.node.children,s)||{children:{},childCount:0};e=new Iu(s,e,t),i=Lo(i),s=Po(i)}return e}function Su(t){return t.node.value}function Cu(t,n){t.node.value=n,Ru(t)}function Au(t){return t.node.childCount>0}function Nu(t,n){so(t.node.children,((i,e)=>{n(new Iu(i,t,e))}))}function Du(t,n,i,e){i&&!e&&n(t),Nu(t,(t=>{Du(t,n,!0,e)})),i&&e&&n(t)}function Ou(t){return new Oo(null===t.parent?t.name:Ou(t.parent)+"/"+t.name)}function Ru(t){null!==t.parent&&function(t,n,i){const e=function(t){return void 0===Su(t)&&!Au(t)}(i),s=bn(t.node.children,n);e&&s?(delete t.node.children[n],t.node.childCount--,Ru(t)):e||s||(t.node.children[n]=i.node,t.node.childCount++,Ru(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.parent,t.name,t)}const Pu=/[\[\].#$\/\u0000-\u001F\u007F]/,Mu=/[\[\].#$\u0000-\u001F\u007F]/,Lu=function(t){return"string"==typeof t&&0!==t.length&&!Pu.test(t)},ju=function(t){return"string"==typeof t&&0!==t.length&&!Mu.test(t)},Fu=function(t){return null===t||"string"==typeof t||"number"==typeof t&&!Yr(t)||t&&"object"==typeof t&&bn(t,".sv")},$u=function(t,n,i,e){e&&void 0===n||Uu(Dn(t,"value"),n,i)},Uu=function(t,n,i){const e=i instanceof Oo?new Wo(i,t):i;if(void 0===n)throw new Error(t+"contains undefined "+Ho(e));if("function"==typeof n)throw new Error(t+"contains a function "+Ho(e)+" with contents = "+n.toString());if(Yr(n))throw new Error(t+"contains "+n.toString()+" "+Ho(e));if("string"==typeof n&&n.length>10485760/3&&On(n)>10485760)throw new Error(t+"contains a string greater than 10485760 utf8 bytes "+Ho(e)+" ('"+n.substring(0,50)+"...')");if(n&&"object"==typeof n){let i=!1,s=!1;if(so(n,((n,r)=>{if(".value"===n)i=!0;else if(".priority"!==n&&".sv"!==n&&(s=!0,!Lu(n)))throw new Error(t+" contains an invalid key ("+n+") "+Ho(e)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(t,n){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(n),t.byteLength_+=On(n),Go(t)}(e,n),Uu(t,r,e),function(t){const n=t.parts_.pop();t.byteLength_-=On(n),t.parts_.length>0&&(t.byteLength_-=1)}(e)})),i&&s)throw new Error(t+' contains ".value" child '+Ho(e)+" in addition to actual children.")}},Vu=function(t,n,i,e){if(!(e&&void 0===i||ju(i)))throw new Error(Dn(t,n)+'was an invalid path = "'+i+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Bu=function(t,n){if(".info"===Po(n))throw new Error(t+" failed = Can't modify data under /.info/")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zu{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qu(t,n){let i=null;for(let e=0;e<n.length;e++){const s=n[e],r=s.getPath();null===i||qo(r,i.path)||(t.eventLists_.push(i),i=null),null===i&&(i={events:[],path:r}),i.events.push(s)}i&&t.eventLists_.push(i)}function Ku(t,n,i){qu(t,i),Gu(t,(t=>qo(t,n)))}function Wu(t,n,i){qu(t,i),Gu(t,(t=>Ko(t,n)||Ko(n,t)))}function Gu(t,n){t.recursionDepth_++;let i=!0;for(let e=0;e<t.eventLists_.length;e++){const s=t.eventLists_[e];s&&(n(s.path)?(Hu(t.eventLists_[e]),t.eventLists_[e]=null):i=!1)}i&&(t.eventLists_=[]),t.recursionDepth_--}function Hu(t){for(let n=0;n<t.events.length;n++){const i=t.events[n];if(null!==i){t.events[n]=null;const e=i.getEventRunner();zr&&Kr("event: "+i.toString()),ao(e)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t,n,i,e){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=e,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zu,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fl(),this.transactionQueueTree_=new Iu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Yu(t,n,i){if(t.stats_=yo(t.repoInfo_),t.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)t.server_=new Ll(t.repoInfo_,((n,i,e,s)=>{Zu(t,n,i,e,s)}),t.authTokenProvider_,t.appCheckProvider_),setTimeout((()=>th(t,!0)),0);else{if(null!=i){if("object"!=typeof i)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{wn(i)}catch(t){throw new Error("Invalid authOverride provided: "+t)}}t.persistentConnection_=new Yo(t.repoInfo_,n,((n,i,e,s)=>{Zu(t,n,i,e,s)}),(n=>{th(t,n)}),(n=>{!function(t,n){so(n,((n,i)=>{nh(t,n,i)}))}(t,n)}),t.authTokenProvider_,t.appCheckProvider_,i),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener((n=>{t.server_.refreshAuthToken(n)})),t.appCheckProvider_.addTokenChangeListener((n=>{t.server_.refreshAppCheckToken(n.token)})),t.statsReporter_=function(n){const i=n.toString();return bo[i]||(bo[i]=new zl(t.stats_,t.server_)),bo[i]}(t.repoInfo_),t.infoData_=new jl,t.infoSyncTree_=new nu({startListening:(n,i,e,s)=>{let r=[];const o=t.infoData_.getNode(n._path);return o.isEmpty()||(r=su(t.infoSyncTree_,n._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),nh(t,"connected",!1),t.serverSyncTree_=new nu({startListening:(n,i,e,s)=>(t.server_.listen(n,e,i,((i,e)=>{const r=s(i,e);Wu(t.eventQueue_,n._path,r)})),[]),stopListening:(n,i)=>{t.server_.unlisten(n,i)}})}function Xu(t){const n=t.infoData_.getNode(new Oo(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+n}function Qu(t){return(n=(n={timestamp:Xu(t)})||{}).timestamp=n.timestamp||(new Date).getTime(),n;var n}function Zu(t,n,i,e,s){t.dataUpdateCount++;const r=new Oo(n);i=t.interceptServerDataCallback_?t.interceptServerDataCallback_(n,i):i;let o=[];if(s)if(e){const n=kn(i,(t=>_l(t)));o=function(t,n,i,e){const s=pu(t,e);if(s){const e=gu(s),r=e.path,o=e.queryId,l=Bo(r,n),a=ra.fromObject(i);return mu(t,r,new Jl(Kl(o),l,a))}return[]}(t.serverSyncTree_,r,n,s)}else{const n=_l(i);o=function(t,n,i,e){const s=pu(t,e);if(null!=s){const e=gu(s),r=e.path,o=e.queryId,l=Bo(r,n);return mu(t,r,new Hl(Kl(o),l,i))}return[]}(t.serverSyncTree_,r,n,s)}else if(e){const n=kn(i,(t=>_l(t)));o=function(t,n,i){const e=ra.fromObject(i);return au(t,new Jl({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},n,e))}(t.serverSyncTree_,r,n)}else{const n=_l(i);o=su(t.serverSyncTree_,r,n)}let l=r;o.length>0&&(l=hh(t,r)),Wu(t.eventQueue_,l,o)}function th(t,n){nh(t,"connected",n),!1===n&&function(t){oh(t,"onDisconnectEvents");const n=Qu(t),i=Fl();Vl(t.onDisconnect_,Ro(),((e,s)=>{const r=function(t,n,i,e){return Eu(n,new bu(i,t),e)}(e,s,t.serverSyncTree_,n);$l(i,e,r)}));let e=[];Vl(i,Ro(),((n,i)=>{e=e.concat(su(t.serverSyncTree_,n,i));const s=gh(t,n);hh(t,s)})),t.onDisconnect_=Fl(),Wu(t.eventQueue_,Ro(),e)}(t)}function nh(t,n,i){const e=new Oo("/.info/"+n),s=_l(i);t.infoData_.updateSnapshot(e,s);const r=su(t.infoSyncTree_,e,s);Wu(t.eventQueue_,e,r)}function ih(t){return t.nextWriteId_++}function eh(t,n,i){t.server_.onDisconnectCancel(n.toString(),((e,s)=>{"ok"===e&&Ul(t.onDisconnect_,n),lh(0,i,e,s)}))}function sh(t,n,i,e){const s=_l(i);t.server_.onDisconnectPut(n.toString(),s.val(!0),((i,r)=>{"ok"===i&&$l(t.onDisconnect_,n,s),lh(0,e,i,r)}))}function rh(t,n,i){let e;e=".info"===Po(n._path)?ru(t.infoSyncTree_,n,i):ru(t.serverSyncTree_,n,i),Ku(t.eventQueue_,n._path,e)}function oh(t,...n){let i="";t.persistentConnection_&&(i=t.persistentConnection_.id+":"),Kr(i,...n)}function lh(t,n,i,e){n&&ao((()=>{if("ok"===i)n(null);else{const t=(i||"error").toUpperCase();let s=t;e&&(s+=": "+e);const r=new Error(s);r.code=t,n(r)}}))}function ah(t,n,i){return lu(t.serverSyncTree_,n,i)||xl.EMPTY_NODE}function uh(t,n=t.transactionQueueTree_){if(n||ph(t,n),Su(n)){const i=dh(t,n);Yt(i.length>0,"Sending zero length transaction queue"),i.every((t=>0===t.status))&&function(t,n,i){const e=i.map((t=>t.currentWriteId)),s=ah(t,n,e);let r=s;const o=s.hash();for(let t=0;t<i.length;t++){const e=i[t];Yt(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const s=Bo(n,e.path);r=r.updateChild(s,e.currentOutputSnapshotRaw)}const l=r.val(!0),a=n;t.server_.put(a.toString(),l,(e=>{oh(t,"transaction put response",{path:a.toString(),status:e});let s=[];if("ok"===e){const e=[];for(let n=0;n<i.length;n++)i[n].status=2,s=s.concat(eu(t.serverSyncTree_,i[n].currentWriteId)),i[n].onComplete&&e.push((()=>i[n].onComplete(null,!0,i[n].currentOutputSnapshotResolved))),i[n].unwatcher();ph(t,Tu(t.transactionQueueTree_,n)),uh(t,t.transactionQueueTree_),Wu(t.eventQueue_,n,s);for(let t=0;t<e.length;t++)ao(e[t])}else{if("datastale"===e)for(let t=0;t<i.length;t++)i[t].status=3===i[t].status?4:0;else{Jr("transaction at "+a.toString()+" failed: "+e);for(let t=0;t<i.length;t++)i[t].status=4,i[t].abortReason=e}hh(t,n)}}),o)}(t,Ou(n),i)}else Au(n)&&Nu(n,(n=>{uh(t,n)}))}function hh(t,n){const i=ch(t,n),e=Ou(i);return function(t,n,i){if(0===n.length)return;const e=[];let s=[];const r=n.filter((t=>0===t.status)).map((t=>t.currentWriteId));for(let o=0;o<n.length;o++){const l=n[o],a=Bo(i,l.path);let u,h=!1;if(Yt(null!==a,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,s=s.concat(eu(t.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)h=!0,u="maxretry",s=s.concat(eu(t.serverSyncTree_,l.currentWriteId,!0));else{const i=ah(t,l.path,r);l.currentInputSnapshot=i;const e=n[o].update(i.val());if(void 0!==e){Uu("transaction failed: Data returned ",e,l.path);let n=_l(e);"object"==typeof e&&null!=e&&bn(e,".priority")||(n=n.updatePriority(i.getPriority()));const o=l.currentWriteId,a=Qu(t),u=_u(n,i,a);l.currentOutputSnapshotRaw=n,l.currentOutputSnapshotResolved=u,l.currentWriteId=ih(t),r.splice(r.indexOf(o),1),s=s.concat(iu(t.serverSyncTree_,l.path,u,l.currentWriteId,l.applyLocally)),s=s.concat(eu(t.serverSyncTree_,o,!0))}else h=!0,u="nodata",s=s.concat(eu(t.serverSyncTree_,l.currentWriteId,!0))}Wu(t.eventQueue_,i,s),s=[],h&&(n[o].status=2,setTimeout(n[o].unwatcher,Math.floor(0)),n[o].onComplete&&e.push("nodata"===u?()=>n[o].onComplete(null,!1,n[o].currentInputSnapshot):()=>n[o].onComplete(new Error(u),!1,null)))}ph(t,t.transactionQueueTree_);for(let t=0;t<e.length;t++)ao(e[t]);uh(t,t.transactionQueueTree_)}(t,dh(t,i),e),e}function ch(t,n){let i,e=t.transactionQueueTree_;for(i=Po(n);null!==i&&void 0===Su(e);)e=Tu(e,i),i=Po(n=Lo(n));return e}function dh(t,n){const i=[];return fh(t,n,i),i.sort(((t,n)=>t.order-n.order)),i}function fh(t,n,i){const e=Su(n);if(e)for(let t=0;t<e.length;t++)i.push(e[t]);Nu(n,(n=>{fh(t,n,i)}))}function ph(t,n){const i=Su(n);if(i){let t=0;for(let n=0;n<i.length;n++)2!==i[n].status&&(i[t]=i[n],t++);i.length=t,Cu(n,i.length>0?i:void 0)}Nu(n,(n=>{ph(t,n)}))}function gh(t,n){const i=Ou(ch(t,n)),e=Tu(t.transactionQueueTree_,n);return function(t,n){let i=t.parent;for(;null!==i;){if(n(i))return!0;i=i.parent}}(e,(n=>{mh(t,n)})),mh(t,e),Du(e,(n=>{mh(t,n)})),i}function mh(t,n){const i=Su(n);if(i){const e=[];let s=[],r=-1;for(let n=0;n<i.length;n++)3===i[n].status||(1===i[n].status?(Yt(r===n-1,"All SENT items should be at beginning of queue."),r=n,i[n].status=3,i[n].abortReason="set"):(Yt(0===i[n].status,"Unexpected transaction status in abort"),i[n].unwatcher(),s=s.concat(eu(t.serverSyncTree_,i[n].currentWriteId,!0)),i[n].onComplete&&e.push(i[n].onComplete.bind(null,new Error("set"),!1,null))));-1===r?Cu(n,void 0):i.length=r+1,Wu(t.eventQueue_,Ou(n),s);for(let t=0;t<e.length;t++)ao(e[t])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=function(t,n){const i=vh(t),e=i.namespace;return"firebase.com"===i.domain&&Hr(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),e&&"undefined"!==e||"localhost"===i.domain||Hr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Jr("Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."),{repoInfo:new go(i.host,i.secure,e,n,"ws"===i.scheme||"wss"===i.scheme,"",e!==i.subdomain),path:new Oo(i.pathString)}},vh=function(t){let n="",i="",e="",s="",r="",o=!0,l="https",a=443;if("string"==typeof t){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");-1===h&&(h=t.length);let c=t.indexOf("?");-1===c&&(c=t.length),n=t.substring(0,Math.min(h,c)),h<c&&(s=function(t){let n="";const i=t.split("/");for(let t=0;t<i.length;t++)if(i[t].length>0){let e=i[t];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(t){}n+="/"+e}return n}(t.substring(h,c)));const d=function(t){const n={};"?"===t.charAt(0)&&(t=t.substring(1));for(const i of t.split("&")){if(0===i.length)continue;const e=i.split("=");2===e.length?n[decodeURIComponent(e[0])]=decodeURIComponent(e[1]):Jr(`Invalid query segment '${i}' in query '${t}'`)}return n}(t.substring(Math.min(t.length,c)));u=n.indexOf(":"),u>=0?(o="https"===l||"wss"===l,a=parseInt(n.substring(u+1),10)):u=n.length;const f=n.slice(0,u);if("localhost"===f.toLowerCase())i="localhost";else if(f.split(".").length<=2)i=f;else{const t=n.indexOf(".");e=n.substring(0,t).toLowerCase(),i=n.substring(t+1),r=e}"ns"in d&&(r=d.ns)}return{host:n,port:a,domain:i,subdomain:e,secure:o,scheme:l,pathString:s,namespace:r}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bh{constructor(t,n,i,e){this.eventType=t,this.eventRegistration=n,this.snapshot=i,this.prevName=e}getPath(){const t=this.snapshot.ref;return"value"===this.eventType?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+wn(this.snapshot.exportVal())}}class yh{constructor(t,n,i){this.eventRegistration=t,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return Yt(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t,n){this._repo=t,this._path=n}cancel(){const t=new on;return eh(this._repo,this._path,t.wrapCallback((()=>{}))),t.promise}remove(){Bu("OnDisconnect.remove",this._path);const t=new on;return sh(this._repo,this._path,null,t.wrapCallback((()=>{}))),t.promise}set(t){Bu("OnDisconnect.set",this._path),$u("OnDisconnect.set",t,this._path,!1);const n=new on;return sh(this._repo,this._path,t,n.wrapCallback((()=>{}))),n.promise}setWithPriority(t,n){Bu("OnDisconnect.setWithPriority",this._path),$u("OnDisconnect.setWithPriority",t,this._path,!1),function(t,n){if(Yr(n))throw new Error(Dn(t,"priority")+"is "+n.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Fu(n))throw new Error(Dn(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}("OnDisconnect.setWithPriority",n);const i=new on;return function(t,n,i,e,s){const r=_l(i,e);t.server_.onDisconnectPut(n.toString(),r.val(!0),((i,e)=>{"ok"===i&&$l(t.onDisconnect_,n,r),lh(0,s,i,e)}))}(this._repo,this._path,t,n,i.wrapCallback((()=>{}))),i.promise}update(t){Bu("OnDisconnect.update",this._path),function(t,n,i,e){if(e&&void 0===n)return;const s=Dn(t,"values");if(!n||"object"!=typeof n||Array.isArray(n))throw new Error(s+" must be an object containing the children to replace.");const r=[];so(n,((t,n)=>{const e=new Oo(t);if(Uu(s,n,Uo(i,e)),".priority"===jo(e)&&!Fu(n))throw new Error(s+"contains an invalid value for '"+e.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(e)})),function(t,n){let i,e;for(i=0;i<n.length;i++){e=n[i];const s=Fo(e);for(let n=0;n<s.length;n++)if(".priority"===s[n]&&n===s.length-1);else if(!Lu(s[n]))throw new Error(t+"contains an invalid key ("+s[n]+") in path "+e.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}n.sort(zo);let s=null;for(i=0;i<n.length;i++){if(e=n[i],null!==s&&Ko(s,e))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+e.toString());s=e}}(s,r)}("OnDisconnect.update",t,this._path,!1);const n=new on;return function(t,n,i,e){if(xn(i))return Kr("onDisconnect().update() called with empty data.  Don't do anything."),void lh(0,e,"ok",void 0);t.server_.onDisconnectMerge(n.toString(),i,((s,r)=>{"ok"===s&&so(i,((i,e)=>{const s=_l(e);$l(t.onDisconnect_,Uo(n,i),s)})),lh(0,e,s,r)}))}(this._repo,this._path,t,n.wrapCallback((()=>{}))),n.promise}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,n,i,e){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=e}get key(){return Vo(this._path)?null:jo(this._path)}get ref(){return new Eh(this._repo,this._path)}get _queryIdentifier(){const t=Ml(this._queryParams),n=io(t);return"{}"===n?"default":n}get _queryObject(){return Ml(this._queryParams)}isEqual(t){if(!((t=Rn(t))instanceof _h))return!1;const n=this._repo===t._repo,i=qo(this._path,t._path);return n&&i&&this._queryIdentifier===t._queryIdentifier}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(t){let n="";for(let i=t.pieceNum_;i<t.pieces_.length;i++)""!==t.pieces_[i]&&(n+="/"+encodeURIComponent(String(t.pieces_[i])));return n||"/"}(this._path)}}class Eh extends _h{constructor(t,n){super(t,n,new Rl,!1)}get parent(){const t=$o(this._path);return null===t?null:new Eh(this._repo,t)}get root(){let t=this;for(;null!==t.parent;)t=t.parent;return t}}class Ih{constructor(t,n,i){this._node=t,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new Oo(t),i=Sh(this.ref,t);return new Ih(this._node.getChild(n),i,fl)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,((n,i)=>t(new Ih(i,Sh(this.ref,n),fl))))}hasChild(t){const n=new Oo(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Th(t,n){return(t=Rn(t))._checkNotDeleted("ref"),void 0!==n?Sh(t._root,n):t._root}function Sh(t,n){var i;return null===Po((t=Rn(t))._path)?("child","path",!1,(i=n)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Vu("child","path",i,false)):Vu("child","path",n,!1),new Eh(t._repo,Uo(t._path,n))}function Ch(t){return t=Rn(t),new kh(t._repo,t._path)}function Ah(t,n){t=Rn(t),Bu("set",t._path),$u("set",n,t._path,!1);const i=new on;return function(t,n,i,e,s){oh(t,"set",{path:n.toString(),value:i,priority:null});const r=Qu(t),o=_l(i,null),l=lu(t.serverSyncTree_,n),a=_u(o,l,r),u=ih(t),h=iu(t.serverSyncTree_,n,a,u,!0);qu(t.eventQueue_,h),t.server_.put(n.toString(),o.val(!0),((i,e)=>{const r="ok"===i;r||Jr("set at "+n+" failed: "+i);const o=eu(t.serverSyncTree_,u,!r);Wu(t.eventQueue_,n,o),lh(0,s,i,e)}));const c=gh(t,n);hh(t,c),Wu(t.eventQueue_,c,[])}(t._repo,t._path,n,0,i.wrapCallback((()=>{}))),i.promise}class Nh{constructor(t){this.callbackContext=t}respondsTo(t){return"value"===t}createEvent(t,n){const i=n._queryParams.getIndex();return new bh("value",this,new Ih(t.snapshotNode,new Eh(n._repo,n._path),i))}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new yh(this,t,n):null}matches(t){return t instanceof Nh&&(!t.callbackContext||!this.callbackContext||t.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Dh{constructor(t,n){this.eventType=t,this.callbackContext=n}respondsTo(t){let n="children_added"===t?"child_added":t;return n="children_removed"===n?"child_removed":n,this.eventType===n}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new yh(this,t,n):null}createEvent(t,n){Yt(null!=t.childName,"Child events should have a childName.");const i=Sh(new Eh(n._repo,n._path),t.childName),e=n._queryParams.getIndex();return new bh(t.type,this,new Ih(t.snapshotNode,i,e),t.prevName)}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof Dh&&this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext))}hasAnyCallback(){return!!this.callbackContext}}var Oh;Oh=Eh,Yt(!qa,"__referenceConstructor has already been defined"),qa=Oh,function(t){Yt(!Ka,"__referenceConstructor has already been defined"),Ka=t}(Eh);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rh={};function Ph(t,n,i,e,s){let r=e||t.options.databaseURL;void 0===r&&(t.options.projectId||Hr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Kr("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o,l,a=wh(r,s),u=a.repoInfo;"undefined"!=typeof process&&(l=process.env.FIREBASE_DATABASE_EMULATOR_HOST),l?(o=!0,r=`http://${l}?ns=${u.namespace}`,a=wh(r,s),u=a.repoInfo):o=!a.repoInfo.secure;const h=s&&o?new fo(fo.OWNER):new co(t.name,t.options,n);(function(t,n){const i=n.path.toString();if("string"!=typeof n.repoInfo.host||0===n.repoInfo.host.length||!Lu(n.repoInfo.namespace)&&"localhost"!==n.repoInfo.host.split(":")[0]||0!==i.length&&!function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ju(t)}(i))throw new Error(Dn(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')})("Invalid Firebase Database URL",a),Vo(a.path)||Hr("Database URL must point to the root of a Firebase Database (not including a child path).");const c=function(t,n,i,e){let s=Rh[n.name];s||(s={},Rh[n.name]=s);let r=s[t.toURLString()];return r&&Hr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ju(t,!1,i,e),s[t.toURLString()]=r,r}(u,t,h,new ho(t.name,i));return new Mh(c,t)}class Mh{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Yu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Eh(this._repo,Ro())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(t,n){const i=Rh[n];i&&i[t.key]===t||Hr(`Database ${n}(${t.repoInfo_}) has already been deleted.`),function(t){t.persistentConnection_&&t.persistentConnection_.interrupt("repo_interrupt")}(t),delete i[t.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&Hr("Cannot call "+t+" on a deleted database.")}}Yo.prototype.simpleListen=function(t,n){this.sendRequest("q",{p:t},n)},Yo.prototype.echo=function(t,n){this.sendRequest("echo",{d:t},n)},Rr="9.6.1",Yn(new Pn("database",((t,{instanceIdentifier:n})=>Ph(t.getProvider("app").getImmediate(),t.getProvider("auth-internal"),t.getProvider("app-check-internal"),n)),"PUBLIC").setMultipleInstances(!0)),ni("@firebase/database","0.12.4",void 0),ni("@firebase/database","0.12.4","esm2017");class Lh{constructor(t,n,i){this.ref=null,this.metadata=null,this.onError=null,this.setMetadataPromise=null,this.ref=t,this.metadata=n,this.onError=i,Ch(this.ref).remove().then((()=>{this.setMetadataPromise=Ah(this.ref,n),this.setMetadataPromise.catch(i)}),i)}updateMetadata(t){this.metadata=t,this.setMetadataPromise&&(this.setMetadataPromise=this.setMetadataPromise.then((()=>{var t=Ah(this.ref,this.metadata);return t.catch(this.onError),t})))}end(){return this.setMetadataPromise?this.setMetadataPromise.then((()=>function(t){return Bu("remove",t._path),Ah(t,null)}(this.ref).then((()=>(this.setMetadataPromise=null,this.end())),this.onError)),(function(){})):Ch(this.ref).cancel().catch(this.onError)}}class jh{constructor(t,n){this.metadata=!0,this.session=null,this.user=null,this.forceOffline=!0,this.auth=null,this.ref=null,this.databaseConnected=null,this.isOnline=!1,this.auth=n,this.user=null==n?void 0:n.currentUser,this.ref=Th(t,"_firebase_extensions/presence"),function(t,n,i,e,s){let r;if("object"==typeof e&&(r=void 0,s=e),"function"==typeof e&&(r=e),s&&s.onlyOnce){const n=i,e=(i,e)=>{rh(t._repo,t,l),n(i,e)};e.userCallback=i.userCallback,e.context=i.context,i=e}const o=new xh(i,r||void 0),l="value"===n?new Nh(o):new Dh(n,o);(function(t,n,i){let e;e=".info"===Po(n._path)?ou(t.infoSyncTree_,n,i):ou(t.serverSyncTree_,n,i),Ku(t.eventQueue_,n._path,e)})(t._repo,t,l)}(Th(t,".info/connected"),"value",(t=>{this.databaseConnected=t.val(),this.session&&!this.databaseConnected&&(this.session.end(),this.session=null),this.createSessionIfNeeded()}),undefined,undefined),this.auth.onAuthStateChanged((t=>{!this.session||t&&t.uid===this.user.uid||(this.session=null),this.user=t,this.createSessionIfNeeded()}))}randomId(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n="",i=0;i<20;i++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}setMetadata(t){this.metadata=null==t||t,this.session&&this.session.updateMetadata(this.metadata)}goOffline(){if(this.forceOffline=!0,this.session){var t=this.session.end();return this.session=null,this.isOnline=!1,t}return Promise.resolve()}goOnline(){return this.forceOffline=!1,this.createSessionIfNeeded(),this.isOnline=!0,Promise.resolve()}createSessionIfNeeded(){if(!this.session&&!this.forceOffline&&this.databaseConnected&&this.user){var t=this.randomId(),n=Sh(this.ref,`${this.user.uid}/sessions/${t}`);this.session=new Lh(n,this.metadata,this.onSessionError)}}onSessionError(t){console.warn("Error updating presence",t),this.session.end(),this.session=null,"PERMISSION_DENIED"!==t.code&&setTimeout(this.createSessionIfNeeded,1e3)}}class Fh{constructor(t){var n;if(this.config={authLocalStorageKey:"enjin:session",tokenLocalStorageKey:"enjin:token",facebook:{permissions:["email","public_profile","user_friends"]}},this.facebook=zt,this.googlePlus=Kt,this.twitter=Gt,this.isOnline=!1,this.config=Object.assign(Object.assign({},this.config),t),!this.app)try{this.app=function(t,n={}){"object"!=typeof n&&(n={name:n});const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},n),e=i.name;if("string"!=typeof e||!e)throw Qn.create("bad-app-name",{appName:String(e)});const s=Gn.get(e);if(s){if(_n(t,s.options)&&_n(i,s.config))return s;throw Qn.create("duplicate-app",{appName:e})}const r=new Ln(e);for(const t of Hn.values())r.addComponent(t);const o=new Zn(t,i,r);return Gn.set(e,o),o}(t.firebase),console.log("Initializing Firebase App...",this.app)}catch(t){console.log(t)}this.service=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t=ti()){const n=Xn(t,"auth");return n.isInitialized()?n.getImmediate():function(t,n){const i=Xn(t,"auth");if(i.isInitialized()){const t=i.getImmediate();if(_n(i.getOptions(),null!=n?n:{}))return t;li(t,"already-initialized")}return i.initialize({options:n})}(t,{popupRedirectResolver:As,persistence:[Xe,Le,Fe]})}(this.app),this.config.googlePlus&&this.config.googlePlus.options&&this.config.googlePlus.options.webClientId||console.log("googlePlus.options.webClientId is required for Google Native Auth See Here: https://github.com/EddyVerbruggen/cordova-plugin-googleplus#6-usage"),(null===(n=this.config)||void 0===n?void 0:n.emulate)&&function(t,n,i){const e=re(t);di(e._canInitEmulator,e,"emulator-config-failed"),di(/^https?:\/\//.test(n),e,"invalid-emulator-scheme");const s=!!(null==i?void 0:i.disableWarnings),r=le(n),{host:o,port:l}=function(t){const n=le(t),i=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!i)return{host:"",port:null};const e=i[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(e);if(s){const t=s[1];return{host:t,port:ae(e.substr(t.length+1))}}{const[t,n]=e.split(":");return{host:t,port:ae(n)}}}(n);e.config.emulator={url:`${r}//${o}${null===l?"":`:${l}`}/`},e.settings.appVerificationDisabledForTesting=!0,e.emulatorConfig=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function t(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}()}(this.service,"http://localhost:9099"),this.onEmailLink(window.location.href)}async initializePushNotifications(t){try{const n=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t=ti()){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(){return"undefined"!=typeof window&&dn()&&await new Promise(((t,n)=>{try{let i=!0;const e="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(e);s.onsuccess=()=>{s.result.close(),i||self.indexedDB.deleteDatabase(e),t(!0)},s.onupgradeneeded=()=>{i=!1},s.onerror=()=>{var t;n((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){n(t)}}))&&!("undefined"==typeof navigator||!navigator.cookieEnabled)&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */().then((t=>{if(!t)throw yr.create("unsupported-browser")}),(()=>{throw yr.create("indexed-db-unsupported")})),Xn(Rn(t),"messaging").getImmediate()}(this.app);t&&"function"==typeof t&&function(t,n){(function(t,n){if(!navigator)throw yr.create("only-available-in-window");t.onMessageHandler=n})(t=Rn(t),n)}(n,t);const i=Jt("messaging.vapidKey");let e=await Or(n,{vapidKey:i,serviceWorkerRegistration:await navigator.serviceWorker.getRegistration()});return e||("granted"===await Notification.requestPermission()?(console.log("Notification permission granted."),e=await Or(n,{vapidKey:i,serviceWorkerRegistration:await navigator.serviceWorker.getRegistration()})):console.log("Unable to get permission to notify.")),e}catch(t){console.log("Service worker not enabled, push notifications will not work!",t)}}async getClaims(){var t;try{const{claims:n}=await Ri(null===(t=this.service)||void 0===t?void 0:t.currentUser);return n}catch(t){return{}}}async getToken(){var t;const n=(null===(t=this.service)||void 0===t?void 0:t.currentUser)?await Oi(this.service.currentUser):localStorage.getItem(this.config.tokenLocalStorageKey);return await this.setToken(n),n}async setToken(t){return localStorage.setItem(this.config.tokenLocalStorageKey,t),t}async onEmailLink(t){if(function(t,n){const i=we.parseLink(n);return"EMAIL_SIGNIN"===(null==i?void 0:i.operation)}(0,t)){let n=window.localStorage.getItem("emailForSignIn");n||(n=window.prompt("Please provide your email for confirmation"));const i=await async function(t,n,i){const e=Rn(t),s=ve.credentialWithLink(n,i||wi());return di(s._tenantId===(e.tenantId||null),e,"tenant-id-mismatch"),De(e,s)}(this.service,n,t);return window.localStorage.removeItem("emailForSignIn"),this.emitLoggedInEvent(i),i}}withGoogleCredential(t){return ke.credential(t)}withCredential(t){return De(this.service,t)}withToken(t){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,n){const i=re(t),e=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,n){return Si(t,"POST","/v1/accounts:signInWithCustomToken",Ei(t,n))}(i,{token:n,returnSecureToken:!0}),s=await Ie._fromIdTokenResponse(i,"signIn",e);return await i._updateCurrentUser(s.user),s}(this.service,t)}withPhoneNumber(t,n){return t="+"+t,window.localStorage.setItem("phoneForSignIn",t),async function(t,n,i){const e=re(t),s=await async function(t,n,i){var e;const s=await i.verify();try{let r;if(di("string"==typeof s,t,"argument-error"),di("recaptcha"===i.type,t,"argument-error"),r="string"==typeof n?{phoneNumber:n}:n,"session"in r){const n=r.session;if("phoneNumber"in r)return di("enroll"===n.type,t,"internal-error"),(await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,n){return Ii(t,"POST","/v2/accounts/mfaEnrollment:start",Ei(t,n))}(t,{idToken:n.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{di("signin"===n.type,t,"internal-error");const i=(null===(e=r.multiFactorHint)||void 0===e?void 0:e.uid)||r.multiFactorUid;return di(i,t,"missing-multi-factor-info"),(await function(t,n){return Ii(t,"POST","/v2/accounts/mfaSignIn:start",Ei(t,n))}(t,{mfaPendingCredential:n.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:n}=await async function(t,n){return Ii(t,"POST","/v1/accounts:sendVerificationCode",Ei(t,n))}(t,{phoneNumber:r.phoneNumber,recaptchaToken:s});return n}}finally{i._reset()}}(e,n,Rn(i));return new Qe(s,(t=>De(e,t)))}(this.service,t,n)}withEmailLink(t,n){return window.localStorage.setItem("emailForSignIn",t),
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,n,i){const e=Rn(t),s={requestType:"EMAIL_SIGNIN",email:n};di(i.handleCodeInApp,e,"argument-error"),i&&Oe(e,s,i),await async function(t,n){return ce(t,n)}(e,s)}(this.service,t,n)}anonymously(){return async function(t){var n;const i=re(t);if(await i._initializationPromise,null===(n=i.currentUser)||void 0===n?void 0:n.isAnonymous)return new Ie({user:i.currentUser,providerId:null,operationType:"signIn"});const e=await Ee(i,{returnSecureToken:!0}),s=await Ie._fromIdTokenResponse(i,"signIn",e,!0);return await i._updateCurrentUser(s.user),s}(this.service)}onAuthChanged(t){var n;n=async n=>{var i;if(!n||!n.emailVerified&&n.providerData&&"password"===n.providerData[0].providerId)return!1;n&&(localStorage.setItem(this.config.authLocalStorageKey,JSON.stringify(n)),localStorage.setItem(this.config.tokenLocalStorageKey,await Oi(null===(i=this.service)||void 0===i?void 0:i.currentUser,!0))),t&&"function"==typeof t&&t(n)},Rn(this.service).onAuthStateChanged(n,void 0,void 0),localStorage.getItem(this.config.authLocalStorageKey)||t(null)}getFromStorage(){return localStorage.getItem(this.config.authLocalStorageKey)?JSON.parse(localStorage.getItem(this.config.authLocalStorageKey)):null}isLoggedIn(){return this.service||this.getFromStorage()}emitLoggedInEvent(t){document.body.dispatchEvent(new CustomEvent("authLoggedIn",{detail:{data:t}}))}emitLoggedOutEvent(){document.body.dispatchEvent(new CustomEvent("authLoggedOut",{detail:{}}))}createUser(t,n){return async function(t,n,i){const e=re(t),s=await Ee(e,{returnSecureToken:!0,email:n,password:i}),r=await Ie._fromIdTokenResponse(e,"signIn",s);return await e._updateCurrentUser(r.user),r}(this.service,t,n)}sendEmailVerification(t){return async function(t,n){const i=Rn(t),e={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};n&&Oe(i.auth,e,n);const{email:s}=await async function(t,n){return ce(t,n)}(i.auth,e);s!==t.email&&await t.reload()}(this.service.currentUser,t||null)}sendPasswordReset(t,n){return async function(t,n,i){const e=Rn(t),s={requestType:"PASSWORD_RESET",email:n};i&&Oe(e,s,i),await async function(t,n){return ce(t,n)}(e,s)}(this.service,t,n||null)}withEmail(t,n){return new Promise(((i,e)=>{try{(function(t,n,i){return De(Rn(t),ve.credential(n,i))})(this.service,t,n).then((t=>{this.emitLoggedInEvent({user:t}),i({data:{user:t}})})).catch((t=>{e(t)}))}catch(t){e(t)}}))}updateEmail(t,n){return new Promise(((i,e)=>{var s;try{(function(t,n){return Re(Rn(t),n,null)})(null===(s=this.service)||void 0===s?void 0:s.currentUser,t).then((t=>{i({data:{user:t}}),this.sendEmailVerification(n)})).catch((t=>{e(t)}))}catch(t){e(t)}}))}async facebookNative(){const t=await this.facebook.login(this.config.facebook.permissions);return this.withCredential(xe.credential(t.authResponse.accessToken))}async googleNative(){let t;try{t=await this.googlePlus.login(this.config.googlePlus.options)}catch(t){console.log("Error with Google Native Login..."),console.log(t)}return this.withCredential(ke.credential(t.idToken))}async twitterNative(){const t=await this.twitter.login();return this.withCredential(_e.credential(t.token,t.secret))}async withSocial(t,n=!1){let i,e=n;return window.matchMedia("(display-mode: standalone)").matches&&(console.log("Running in PWA mode..."),e=!0),new Promise((async(n,s)=>{if(window.cordova)"google"===t?this.googleNative().then((t=>{this.emitLoggedInEvent(t),n(t)})).catch((t=>{console.log(t),s(t)})):"facebook"===t?this.facebookNative().then((t=>{this.emitLoggedInEvent(t),n(t)})).catch((t=>{console.log(t),s(t)})):"twitter"===t&&this.twitterNative().then((t=>{this.emitLoggedInEvent(t),n(t)})).catch((t=>{console.log(t),s(t)}));else{"facebook"===t?i=new xe:"google"===t?i=new ke:"twitter"===t?i=new _e:s({message:"A social network is required or the one provided is not yet supported."});try{e?await function(t,n,i){return async function(t,n,i){const e=re(t);hi(t,n,be);const s=Ze(e,i);return await async function(t,n){return us(t)._set(hs(n),"true")}(s,e),s._openRedirect(e,n,"signInViaRedirect")}(t,n,i)}(this.service,i):await async function(t,n){const i=re(t);hi(t,n,be);const e=Ze(i,void 0);return new os(i,"signInViaPopup",n,e).executeNotNull()}(this.service,i),this.emitLoggedInEvent({currentUser:this.service.currentUser})}catch(t){console.log(t)}}}))}logout(){return this.emitLoggedOutEvent(),Rn(this.service).signOut()}async updatePassword(t,n){return n&&await async function(t,n){return Ae(Rn(t),n)}(this.service.currentUser,n),function(t,n){return Re(Rn(t),null,n)}(this.service.currentUser,t)}async storeRoles(t){return localStorage.setItem("roles",JSON.stringify(t)),t}async checkRolePermission(t,n,i){let e=[];const s=await this.getClaims();if(!i&&(null==s?void 0:s.admin))return!0;try{e=JSON.parse(localStorage.getItem("roles"))}catch(t){console.log("Error getting roles from local storage")}for(const i of e)if(i.id===t&&i.permissions&&i.permissions.includes(n))return!0;return!1}async goOnline(){if(!this.sessionManager){const t=function(t=ti(),n){return Xn(t,"database").getImmediate({identifier:n})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.app);this.sessionManager=new jh(t,this.service)}return this.isOnline=!0,document.body.dispatchEvent(new CustomEvent("fireenjin:online",{detail:{sessionManager:this.sessionManager}})),this.sessionManager.goOnline()}async goOffline(){return this.sessionManager?(this.isOnline=!1,document.body.dispatchEvent(new CustomEvent("fireenjin:offline",{detail:{sessionManager:this.sessionManager}})),this.sessionManager.goOffline()):null}async getSessionManager(){return this.sessionManager}}var $h,Uh="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Vh=Vh||{},Bh=Uh||self;function zh(){}function qh(t){var n=typeof t;return"array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length}function Kh(t){var n=typeof t;return"object"==n&&null!=t||"function"==n}var Wh="closure_uid_"+(1e9*Math.random()>>>0),Gh=0;function Hh(t,n,i){return t.call.apply(t.bind,arguments)}function Jh(t,n,i){if(!t)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,e),t.apply(n,i)}}return function(){return t.apply(n,arguments)}}function Yh(t,n,i){return(Yh=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Hh:Jh).apply(null,arguments)}function Xh(t,n){var i=Array.prototype.slice.call(arguments,1);return function(){var n=i.slice();return n.push.apply(n,arguments),t.apply(this,n)}}function Qh(t,n){function i(){}i.prototype=n.prototype,t.Z=n.prototype,t.prototype=new i,t.prototype.constructor=t,t.Vb=function(t,i,e){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return n.prototype[i].apply(t,s)}}function Zh(){this.s=this.s,this.o=this.o}Zh.prototype.s=!1,Zh.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,Wh)&&t[Wh]||(t[Wh]=++Gh))},Zh.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const tc=Array.prototype.indexOf?function(t,n){return Array.prototype.indexOf.call(t,n,void 0)}:function(t,n){if("string"==typeof t)return"string"!=typeof n||1!=n.length?-1:t.indexOf(n,0);for(let i=0;i<t.length;i++)if(i in t&&t[i]===n)return i;return-1},nc=Array.prototype.forEach?function(t,n,i){Array.prototype.forEach.call(t,n,i)}:function(t,n,i){const e=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<e;r++)r in s&&n.call(i,s[r],r,t)};function ic(t){return Array.prototype.concat.apply([],arguments)}function ec(t){const n=t.length;if(0<n){const i=Array(n);for(let e=0;e<n;e++)i[e]=t[e];return i}return[]}function sc(t){return/^[\s\xa0]*$/.test(t)}var rc,oc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function lc(t,n){return-1!=t.indexOf(n)}function ac(t,n){return t<n?-1:t>n?1:0}t:{var uc=Bh.navigator;if(uc){var hc=uc.userAgent;if(hc){rc=hc;break t}}rc=""}function cc(t,n,i){for(const e in t)n.call(i,t[e],e,t)}function dc(t){const n={};for(const i in t)n[i]=t[i];return n}var fc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pc(t,n){let i,e;for(let n=1;n<arguments.length;n++){for(i in e=arguments[n],e)t[i]=e[i];for(let n=0;n<fc.length;n++)i=fc[n],Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}}function gc(t){return gc[" "](t),t}gc[" "]=zh;var mc,wc,vc=lc(rc,"Opera"),bc=lc(rc,"Trident")||lc(rc,"MSIE"),yc=lc(rc,"Edge"),xc=yc||bc,kc=lc(rc,"Gecko")&&!(lc(rc.toLowerCase(),"webkit")&&!lc(rc,"Edge"))&&!(lc(rc,"Trident")||lc(rc,"MSIE"))&&!lc(rc,"Edge"),_c=lc(rc.toLowerCase(),"webkit")&&!lc(rc,"Edge");function Ec(){var t=Bh.document;return t?t.documentMode:void 0}t:{var Ic="",Tc=(wc=rc,kc?/rv:([^\);]+)(\)|;)/.exec(wc):yc?/Edge\/([\d\.]+)/.exec(wc):bc?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(wc):_c?/WebKit\/(\S+)/.exec(wc):vc?/(?:Version)[ \/]?(\S+)/.exec(wc):void 0);if(Tc&&(Ic=Tc?Tc[1]:""),bc){var Sc=Ec();if(null!=Sc&&Sc>parseFloat(Ic)){mc=String(Sc);break t}}mc=Ic}var Cc,Ac={};function Nc(){return t=Ac,Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=function(){let t=0;const n=oc(String(mc)).split("."),i=oc("9").split("."),e=Math.max(n.length,i.length);for(let o=0;0==t&&o<e;o++){var s=n[o]||"",r=i[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=ac(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||ac(0==s[2].length,0==r[2].length)||ac(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}();var t}Bh.document&&bc?Cc=Ec()||parseInt(mc,10)||void 0:Cc=void 0;var Dc=Cc,Oc=function(){if(!Bh.addEventListener||!Object.defineProperty)return!1;var t=!1,n=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Bh.addEventListener("test",zh,n),Bh.removeEventListener("test",zh,n)}catch(t){}return t}();function Rc(t,n){this.type=t,this.g=this.target=n,this.defaultPrevented=!1}function Pc(t,n){if(Rc.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var i=this.type=t.type,e=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=n,n=t.relatedTarget){if(kc){t:{try{gc(n.nodeName);var s=!0;break t}catch(t){}s=!1}s||(n=null)}}else"mouseover"==i?n=t.fromElement:"mouseout"==i&&(n=t.toElement);this.relatedTarget=n,e?(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Mc[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Pc.Z.h.call(this)}}Rc.prototype.h=function(){this.defaultPrevented=!0},Qh(Pc,Rc);var Mc={2:"touch",3:"pen",4:"mouse"};Pc.prototype.h=function(){Pc.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Lc="closure_listenable_"+(1e6*Math.random()|0),jc=0;function Fc(t,n,i,e,s){this.listener=t,this.proxy=null,this.src=n,this.type=i,this.capture=!!e,this.ia=s,this.key=++jc,this.ca=this.fa=!1}function $c(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Uc(t){this.src=t,this.g={},this.h=0}function Vc(t,n){var i=n.type;if(i in t.g){var e,s=t.g[i],r=tc(s,n);(e=0<=r)&&Array.prototype.splice.call(s,r,1),e&&($c(n),0==t.g[i].length&&(delete t.g[i],t.h--))}}function Bc(t,n,i,e){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==n&&r.capture==!!i&&r.ia==e)return s}return-1}Uc.prototype.add=function(t,n,i,e,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=Bc(t,n,e,s);return-1<o?(n=t[o],i||(n.fa=!1)):((n=new Fc(n,this.src,r,!!e,s)).fa=i,t.push(n)),n};var zc="closure_lm_"+(1e6*Math.random()|0),qc={};function Kc(t,n,i,e,s){if(e&&e.once)return Gc(t,n,i,e,s);if(Array.isArray(n)){for(var r=0;r<n.length;r++)Kc(t,n[r],i,e,s);return null}return i=td(i),t&&t[Lc]?t.N(n,i,Kh(e)?!!e.capture:!!e,s):Wc(t,n,i,!1,e,s)}function Wc(t,n,i,e,s,r){if(!n)throw Error("Invalid event type");var o=Kh(s)?!!s.capture:!!s,l=Qc(t);if(l||(t[zc]=l=new Uc(t)),(i=l.add(n,i,e,o,r)).proxy)return i;if(e=function(){var t=Xc;return function n(i){return t.call(n.src,n.listener,i)}}(),i.proxy=e,e.src=t,e.listener=i,t.addEventListener)Oc||(s=o),void 0===s&&(s=!1),t.addEventListener(n.toString(),e,s);else if(t.attachEvent)t.attachEvent(Yc(n.toString()),e);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(e)}return i}function Gc(t,n,i,e,s){if(Array.isArray(n)){for(var r=0;r<n.length;r++)Gc(t,n[r],i,e,s);return null}return i=td(i),t&&t[Lc]?t.O(n,i,Kh(e)?!!e.capture:!!e,s):Wc(t,n,i,!0,e,s)}function Hc(t,n,i,e,s){if(Array.isArray(n))for(var r=0;r<n.length;r++)Hc(t,n[r],i,e,s);else e=Kh(e)?!!e.capture:!!e,i=td(i),t&&t[Lc]?(t=t.i,(n=String(n).toString())in t.g&&-1<(i=Bc(r=t.g[n],i,e,s))&&($c(r[i]),Array.prototype.splice.call(r,i,1),0==r.length&&(delete t.g[n],t.h--))):t&&(t=Qc(t))&&(n=t.g[n.toString()],t=-1,n&&(t=Bc(n,i,e,s)),(i=-1<t?n[t]:null)&&Jc(i))}function Jc(t){if("number"!=typeof t&&t&&!t.ca){var n=t.src;if(n&&n[Lc])Vc(n.i,t);else{var i=t.type,e=t.proxy;n.removeEventListener?n.removeEventListener(i,e,t.capture):n.detachEvent?n.detachEvent(Yc(i),e):n.addListener&&n.removeListener&&n.removeListener(e),(i=Qc(n))?(Vc(i,t),0==i.h&&(i.src=null,n[zc]=null)):$c(t)}}}function Yc(t){return t in qc?qc[t]:qc[t]="on"+t}function Xc(t,n){if(t.ca)t=!0;else{n=new Pc(n,this);var i=t.listener,e=t.ia||t.src;t.fa&&Jc(t),t=i.call(e,n)}return t}function Qc(t){return(t=t[zc])instanceof Uc?t:null}var Zc="__closure_events_fn_"+(1e9*Math.random()>>>0);function td(t){return"function"==typeof t?t:(t[Zc]||(t[Zc]=function(n){return t.handleEvent(n)}),t[Zc])}function nd(){Zh.call(this),this.i=new Uc(this),this.P=this,this.I=null}function id(t,n){var i,e=t.I;if(e)for(i=[];e;e=e.I)i.push(e);if(t=t.P,e=n.type||n,"string"==typeof n)n=new Rc(n,t);else if(n instanceof Rc)n.target=n.target||t;else{var s=n;pc(n=new Rc(e,t),s)}if(s=!0,i)for(var r=i.length-1;0<=r;r--){var o=n.g=i[r];s=ed(o,e,!0,n)&&s}if(s=ed(o=n.g=t,e,!0,n)&&s,s=ed(o,e,!1,n)&&s,i)for(r=0;r<i.length;r++)s=ed(o=n.g=i[r],e,!1,n)&&s}function ed(t,n,i,e){if(!(n=t.i.g[String(n)]))return!0;n=n.concat();for(var s=!0,r=0;r<n.length;++r){var o=n[r];if(o&&!o.ca&&o.capture==i){var l=o.listener,a=o.ia||o.src;o.fa&&Vc(t.i,o),s=!1!==l.call(a,e)&&s}}return s&&!e.defaultPrevented}Qh(nd,Zh),nd.prototype[Lc]=!0,nd.prototype.removeEventListener=function(t,n,i,e){Hc(this,t,n,i,e)},nd.prototype.M=function(){if(nd.Z.M.call(this),this.i){var t,n=this.i;for(t in n.g){for(var i=n.g[t],e=0;e<i.length;e++)$c(i[e]);delete n.g[t],n.h--}}this.I=null},nd.prototype.N=function(t,n,i,e){return this.i.add(String(t),n,!1,i,e)},nd.prototype.O=function(t,n,i,e){return this.i.add(String(t),n,!0,i,e)};var sd=Bh.JSON.stringify;function rd(){var t=dd;let n=null;return t.g&&(n=t.g,t.g=t.g.next,t.g||(t.h=null),n.next=null),n}var od,ld=new class{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new ad),(t=>t.reset()));class ad{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ud(t){Bh.setTimeout((()=>{throw t}),0)}function hd(t,n){od||function(){var t=Bh.Promise.resolve(void 0);od=function(){t.then(fd)}}(),cd||(od(),cd=!0),dd.add(t,n)}var cd=!1,dd=new class{constructor(){this.h=this.g=null}add(t,n){const i=ld.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}};function fd(){for(var t;t=rd();){try{t.h.call(t.g)}catch(t){ud(t)}var n=ld;n.j(t),100>n.h&&(n.h++,t.next=n.g,n.g=t)}cd=!1}function pd(t,n){nd.call(this),this.h=t||1,this.g=n||Bh,this.j=Yh(this.kb,this),this.l=Date.now()}function gd(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function md(t,n,i){if("function"==typeof t)i&&(t=Yh(t,i));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Yh(t.handleEvent,t)}return 2147483647<Number(n)?-1:Bh.setTimeout(t,n||0)}function wd(t){t.g=md((()=>{t.g=null,t.i&&(t.i=!1,wd(t))}),t.j);const n=t.h;t.h=null,t.m.apply(null,n)}Qh(pd,nd),($h=pd.prototype).da=!1,$h.S=null,$h.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),id(this,"tick"),this.da&&(gd(this),this.start()))}},$h.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},$h.M=function(){pd.Z.M.call(this),gd(this),delete this.g};class vd extends Zh{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:wd(this)}M(){super.M(),this.g&&(Bh.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bd(t){Zh.call(this),this.h=t,this.g={}}Qh(bd,Zh);var yd=[];function xd(t,n,i,e){Array.isArray(i)||(i&&(yd[0]=i.toString()),i=yd);for(var s=0;s<i.length;s++){var r=Kc(n,i[s],e||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function kd(t){cc(t.g,(function(t,n){this.g.hasOwnProperty(n)&&Jc(t)}),t),t.g={}}function _d(){this.g=!0}function Ed(t,n,i,e){t.info((function(){return"XMLHTTP TEXT ("+n+"): "+function(t,n){if(!t.g)return n;if(!n)return null;try{var i=JSON.parse(n);if(i)for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var e=i[t];if(!(2>e.length)){var s=e[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return sd(i)}catch(t){return n}}(t,i)+(e?" "+e:"")}))}bd.prototype.M=function(){bd.Z.M.call(this),kd(this)},bd.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},_d.prototype.Aa=function(){this.g=!1},_d.prototype.info=function(){};var Id={},Td=null;function Sd(){return Td=Td||new nd}function Cd(t){Rc.call(this,Id.Ma,t)}function Ad(t){const n=Sd();id(n,new Cd(n,t))}function Nd(t,n){Rc.call(this,Id.STAT_EVENT,t),this.stat=n}function Dd(t){const n=Sd();id(n,new Nd(n,t))}function Od(t,n){Rc.call(this,Id.Na,t),this.size=n}function Rd(t,n){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Bh.setTimeout((function(){t()}),n)}Id.Ma="serverreachability",Qh(Cd,Rc),Id.STAT_EVENT="statevent",Qh(Nd,Rc),Id.Na="timingevent",Qh(Od,Rc);var Pd={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Md={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ld(){}function jd(){}Ld.prototype.h=null;var Fd,$d={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ud(){Rc.call(this,"d")}function Vd(){Rc.call(this,"c")}function Bd(){}function zd(t,n,i,e){this.l=t,this.j=n,this.m=i,this.X=e||1,this.V=new bd(this),this.P=Kd,this.W=new pd(t=xc?125:void 0),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new qd}function qd(){this.i=null,this.g="",this.h=!1}Qh(Ud,Rc),Qh(Vd,Rc),Qh(Bd,Ld),Bd.prototype.g=function(){return new XMLHttpRequest},Bd.prototype.i=function(){return{}},Fd=new Bd;var Kd=45e3,Wd={},Gd={};function Hd(t,n,i){t.K=1,t.v=vf(df(n)),t.s=i,t.U=!0,Jd(t,null)}function Jd(t,n){t.F=Date.now(),Zd(t),t.A=df(t.v);var i=t.A,e=t.X;Array.isArray(e)||(e=[String(e)]),Df(i.h,"t",e),t.C=0,i=t.l.H,t.h=new qd,t.g=Dp(t.l,i?n:null,!t.s),0<t.O&&(t.L=new vd(Yh(t.Ia,t,t.g),t.O)),xd(t.V,t.g,"readystatechange",t.gb),n=t.H?dc(t.H):{},t.s?(t.u||(t.u="POST"),n["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,n)):(t.u="GET",t.g.ea(t.A,t.u,null,n)),Ad(1),function(t,n,i,e,s,r){t.info((function(){if(t.g)if(r)for(var o="",l=r.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");o=2<=c.length&&"type"==c[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+e+") [attempt "+s+"]: "+n+"\n"+i+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Yd(t){return!!t.g&&"GET"==t.u&&2!=t.K&&t.l.Ba}function Xd(t,n,i){let e,s=!0;for(;!t.I&&t.C<i.length;){if(e=Qd(t,i),e==Gd){4==n&&(t.o=4,Dd(14),s=!1),Ed(t.j,t.m,null,"[Incomplete Response]");break}if(e==Wd){t.o=4,Dd(15),Ed(t.j,t.m,i,"[Invalid Chunk]"),s=!1;break}Ed(t.j,t.m,e,null),rf(t,e)}Yd(t)&&e!=Gd&&e!=Wd&&(t.h.g="",t.C=0),4!=n||0!=i.length||t.h.h||(t.o=1,Dd(16),s=!1),t.i=t.i&&s,s?0<i.length&&!t.aa&&(t.aa=!0,(n=t.l).g==t&&n.$&&!n.L&&(n.h.info("Great, no buffering proxy detected. Bytes received: "+i.length),_p(n),n.L=!0,Dd(11))):(Ed(t.j,t.m,i,"[Invalid Chunked Response]"),sf(t),ef(t))}function Qd(t,n){var i=t.C,e=n.indexOf("\n",i);return-1==e?Gd:(i=Number(n.substring(i,e)),isNaN(i)?Wd:(e+=1)+i>n.length?Gd:(n=n.substr(e,i),t.C=e+i,n))}function Zd(t){t.Y=Date.now()+t.P,tf(t,t.P)}function tf(t,n){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Rd(Yh(t.eb,t),n)}function nf(t){t.B&&(Bh.clearTimeout(t.B),t.B=null)}function ef(t){0==t.l.G||t.I||Tp(t.l,t)}function sf(t){nf(t);var n=t.L;n&&"function"==typeof n.na&&n.na(),t.L=null,gd(t.W),kd(t.V),t.g&&(n=t.g,t.g=null,n.abort(),n.na())}function rf(t,n){try{var i=t.l;if(0!=i.G&&(i.g==t||jf(i.i,t)))if(i.I=t.N,!t.J&&jf(i.i,t)&&3==i.G){try{var e=i.Ca.g.parse(n)}catch(t){e=null}if(Array.isArray(e)&&3==e.length){var s=e;if(0==s[0]){t:if(!i.u){if(i.g){if(!(i.g.F+3e3<t.F))break t;Ip(i),pp(i)}kp(i),Dd(18)}}else i.ta=s[1],0<i.ta-i.U&&37500>s[2]&&i.N&&0==i.A&&!i.v&&(i.v=Rd(Yh(i.ab,i),6e3));if(1>=Lf(i.i)&&i.ka){try{i.ka()}catch(t){}i.ka=void 0}}else Cp(i,11)}else if((t.J||i.g==t)&&Ip(i),!sc(n))for(s=i.Ca.g.parse(n),n=0;n<s.length;n++){let u=s[n];if(i.U=u[0],u=u[1],2==i.G)if("c"==u[0]){i.J=u[1],i.la=u[2];const n=u[3];null!=n&&(i.ma=n,i.h.info("VER="+i.ma));const s=u[4];null!=s&&(i.za=s,i.h.info("SVER="+i.za));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(i.K=e=1.5*h,i.h.info("backChannelRequestTimeoutMs_="+e)),e=i;const c=t.g;if(c){const t=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=e.i;!r.g&&(lc(t,"spdy")||lc(t,"quic")||lc(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Ff(r,r.h),r.h=null))}if(e.D){const t=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(e.sa=t,wf(e.F,e.D,t))}}i.G=3,i.j&&i.j.xa(),i.$&&(i.O=Date.now()-t.F,i.h.info("Handshake RTT: "+i.O+"ms"));var o=t;if((e=i).oa=Np(e,e.H?e.la:null,e.W),o.J){$f(e.i,o);var l=o,a=e.K;a&&l.setTimeout(a),l.B&&(nf(l),Zd(l)),e.g=o}else xp(e);0<i.l.length&&wp(i)}else"stop"!=u[0]&&"close"!=u[0]||Cp(i,7);else 3==i.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Cp(i,7):fp(i):"noop"!=u[0]&&i.j&&i.j.wa(u),i.A=0)}Ad(4)}catch(t){}}function of(t,n){if(t.forEach&&"function"==typeof t.forEach)t.forEach(n,void 0);else if(qh(t)||"string"==typeof t)nc(t,n,void 0);else{if(t.T&&"function"==typeof t.T)var i=t.T();else if(t.R&&"function"==typeof t.R)i=void 0;else if(qh(t)||"string"==typeof t){i=[];for(var e=t.length,s=0;s<e;s++)i.push(s)}else for(s in i=[],e=0,t)i[e++]=s;s=(e=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(qh(t)){for(var n=[],i=t.length,e=0;e<i;e++)n.push(t[e]);return n}for(e in n=[],i=0,t)n[i++]=t[e];return n}(t)).length;for(var r=0;r<s;r++)n.call(void 0,e[r],i&&i[r],t)}}function lf(t,n){this.h={},this.g=[],this.i=0;var i=arguments.length;if(1<i){if(i%2)throw Error("Uneven number of arguments");for(var e=0;e<i;e+=2)this.set(arguments[e],arguments[e+1])}else if(t)if(t instanceof lf)for(i=t.T(),e=0;e<i.length;e++)this.set(i[e],t.get(i[e]));else for(e in t)this.set(e,t[e])}function af(t){if(t.i!=t.g.length){for(var n=0,i=0;n<t.g.length;){var e=t.g[n];uf(t.h,e)&&(t.g[i++]=e),n++}t.g.length=i}if(t.i!=t.g.length){var s={};for(i=n=0;n<t.g.length;)uf(s,e=t.g[n])||(t.g[i++]=e,s[e]=1),n++;t.g.length=i}}function uf(t,n){return Object.prototype.hasOwnProperty.call(t,n)}($h=zd.prototype).setTimeout=function(t){this.P=t},$h.gb=function(t){t=t.target;const n=this.L;n&&3==ap(t)?n.l():this.Ia(t)},$h.Ia=function(t){try{if(t==this.g)t:{const h=ap(this.g);var n=this.g.Da();const c=this.g.ba();if(!(3>h)&&(3!=h||xc||this.g&&(this.h.h||this.g.ga()||up(this.g)))){this.I||4!=h||7==n||Ad(8==n||0>=c?3:2),nf(this);var i=this.g.ba();this.N=i;n:if(Yd(this)){var e=up(this.g);t="";var s=e.length,r=4==ap(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){sf(this),ef(this);var o="";break n}this.h.i=new Bh.TextDecoder}for(n=0;n<s;n++)this.h.h=!0,t+=this.h.i.decode(e[n],{stream:r&&n==s-1});e.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==i,function(t,n,i,e,s,r,o){t.info((function(){return"XMLHTTP RESP ("+e+") [ attempt "+s+"]: "+n+"\n"+i+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,h,i),this.i){if(this.$&&!this.J){n:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sc(l)){var u=l;break n}}u=null}if(!(i=u)){this.i=!1,this.o=3,Dd(12),sf(this),ef(this);break t}Ed(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,rf(this,i)}this.U?(Xd(this,h,o),xc&&this.i&&3==h&&(xd(this.V,this.W,"tick",this.fb),this.W.start())):(Ed(this.j,this.m,o,null),rf(this,o)),4==h&&sf(this),this.i&&!this.I&&(4==h?Tp(this.l,this):(this.i=!1,Zd(this)))}else 400==i&&0<o.indexOf("Unknown SID")?(this.o=3,Dd(12)):(this.o=0,Dd(13)),sf(this),ef(this)}}}catch(t){}},$h.fb=function(){if(this.g){var t=ap(this.g),n=this.g.ga();this.C<n.length&&(nf(this),Xd(this,t,n),this.i&&4!=t&&Zd(this))}},$h.cancel=function(){this.I=!0,sf(this)},$h.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,n){t.info((function(){return"TIMEOUT: "+n}))}(this.j,this.A),2!=this.K&&(Ad(3),Dd(17)),sf(this),this.o=2,ef(this)):tf(this,this.Y-t)},($h=lf.prototype).R=function(){af(this);for(var t=[],n=0;n<this.g.length;n++)t.push(this.h[this.g[n]]);return t},$h.T=function(){return af(this),this.g.concat()},$h.get=function(t,n){return uf(this.h,t)?this.h[t]:n},$h.set=function(t,n){uf(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=n},$h.forEach=function(t,n){for(var i=this.T(),e=0;e<i.length;e++){var s=i[e],r=this.get(s);t.call(n,r,s,this)}};var hf=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function cf(t,n){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof cf){this.g=void 0!==n?n:t.g,ff(this,t.j),this.s=t.s,pf(this,t.i),gf(this,t.m),this.l=t.l,n=t.h;var i=new Sf;i.i=n.i,n.g&&(i.g=new lf(n.g),i.h=n.h),mf(this,i),this.o=t.o}else t&&(i=String(t).match(hf))?(this.g=!!n,ff(this,i[1]||"",!0),this.s=bf(i[2]||""),pf(this,i[3]||"",!0),gf(this,i[4]),this.l=bf(i[5]||"",!0),mf(this,i[6]||"",!0),this.o=bf(i[7]||"")):(this.g=!!n,this.h=new Sf(null,this.g))}function df(t){return new cf(t)}function ff(t,n,i){t.j=i?bf(n,!0):n,t.j&&(t.j=t.j.replace(/:$/,""))}function pf(t,n,i){t.i=i?bf(n,!0):n}function gf(t,n){if(n){if(n=Number(n),isNaN(n)||0>n)throw Error("Bad port number "+n);t.m=n}else t.m=null}function mf(t,n,i){n instanceof Sf?(t.h=n,function(t,n){n&&!t.j&&(Cf(t),t.i=null,t.g.forEach((function(t,n){var i=n.toLowerCase();n!=i&&(Af(this,n),Df(this,i,t))}),t)),t.j=n}(t.h,t.g)):(i||(n=yf(n,If)),t.h=new Sf(n,t.g))}function wf(t,n,i){t.h.set(n,i)}function vf(t){return wf(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bf(t,n){return t?n?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function yf(t,n,i){return"string"==typeof t?(t=encodeURI(t).replace(n,xf),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xf(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}cf.prototype.toString=function(){var t=[],n=this.j;n&&t.push(yf(n,kf,!0),":");var i=this.i;return(i||"file"==n)&&(t.push("//"),(n=this.s)&&t.push(yf(n,kf,!0),"@"),t.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&t.push(":",String(i))),(i=this.l)&&(this.i&&"/"!=i.charAt(0)&&t.push("/"),t.push(yf(i,"/"==i.charAt(0)?Ef:_f,!0))),(i=this.h.toString())&&t.push("?",i),(i=this.o)&&t.push("#",yf(i,Tf)),t.join("")};var kf=/[#\/\?@]/g,_f=/[#\?:]/g,Ef=/[#\?]/g,If=/[#\?@]/g,Tf=/#/g;function Sf(t,n){this.h=this.g=null,this.i=t||null,this.j=!!n}function Cf(t){t.g||(t.g=new lf,t.h=0,t.i&&function(t,n){if(t){t=t.split("&");for(var i=0;i<t.length;i++){var e=t[i].indexOf("="),s=null;if(0<=e){var r=t[i].substring(0,e);s=t[i].substring(e+1)}else r=t[i];n(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(n,i){t.add(decodeURIComponent(n.replace(/\+/g," ")),i)})))}function Af(t,n){Cf(t),n=Of(t,n),uf(t.g.h,n)&&(t.i=null,t.h-=t.g.get(n).length,uf((t=t.g).h,n)&&(delete t.h[n],t.i--,t.g.length>2*t.i&&af(t)))}function Nf(t,n){return Cf(t),n=Of(t,n),uf(t.g.h,n)}function Df(t,n,i){Af(t,n),0<i.length&&(t.i=null,t.g.set(Of(t,n),ec(i)),t.h+=i.length)}function Of(t,n){return n=String(n),t.j&&(n=n.toLowerCase()),n}function Rf(t){this.l=t||Pf,t=Bh.PerformanceNavigationTiming?0<(t=Bh.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(Bh.g&&Bh.g.Ea&&Bh.g.Ea()&&Bh.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}($h=Sf.prototype).add=function(t,n){Cf(this),this.i=null,t=Of(this,t);var i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(n),this.h+=1,this},$h.forEach=function(t,n){Cf(this),this.g.forEach((function(i,e){nc(i,(function(i){t.call(n,i,e,this)}),this)}),this)},$h.T=function(){Cf(this);for(var t=this.g.R(),n=this.g.T(),i=[],e=0;e<n.length;e++)for(var s=t[e],r=0;r<s.length;r++)i.push(n[e]);return i},$h.R=function(t){Cf(this);var n=[];if("string"==typeof t)Nf(this,t)&&(n=ic(n,this.g.get(Of(this,t))));else{t=this.g.R();for(var i=0;i<t.length;i++)n=ic(n,t[i])}return n},$h.set=function(t,n){return Cf(this),this.i=null,Nf(this,t=Of(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[n]),this.h+=1,this},$h.get=function(t,n){return t&&0<(t=this.R(t)).length?String(t[0]):n},$h.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],n=this.g.T(),i=0;i<n.length;i++){var e=n[i],s=encodeURIComponent(String(e));e=this.R(e);for(var r=0;r<e.length;r++){var o=s;""!==e[r]&&(o+="="+encodeURIComponent(String(e[r]))),t.push(o)}}return this.i=t.join("&")};var Pf=10;function Mf(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Lf(t){return t.h?1:t.g?t.g.size:0}function jf(t,n){return t.h?t.h==n:!!t.g&&t.g.has(n)}function Ff(t,n){t.g?t.g.add(n):t.h=n}function $f(t,n){t.h&&t.h==n?t.h=null:t.g&&t.g.has(n)&&t.g.delete(n)}function Uf(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let n=t.i;for(const i of t.g.values())n=n.concat(i.D);return n}return ec(t.i)}function Vf(){}function Bf(){this.g=new Vf}function zf(t,n,i){const e=i||"";try{of(t,(function(t,i){let s=t;Kh(t)&&(s=sd(t)),n.push(e+i+"="+encodeURIComponent(s))}))}catch(t){throw n.push(e+"type="+encodeURIComponent("_badmap")),t}}function qf(t,n,i,e,s){try{n.onload=null,n.onerror=null,n.onabort=null,n.ontimeout=null,s(e)}catch(t){}}function Kf(t){this.l=t.$b||null,this.j=t.ib||!1}function Wf(t,n){nd.call(this),this.D=t,this.u=n,this.m=void 0,this.readyState=Gf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Rf.prototype.cancel=function(){if(this.i=Uf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Vf.prototype.stringify=function(t){return Bh.JSON.stringify(t,void 0)},Vf.prototype.parse=function(t){return Bh.JSON.parse(t,void 0)},Qh(Kf,Ld),Kf.prototype.g=function(){return new Wf(this.l,this.j)},Kf.prototype.i=function(t){return function(){return t}}({}),Qh(Wf,nd);var Gf=0;function Hf(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Jf(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Yf(t)}function Yf(t){t.onreadystatechange&&t.onreadystatechange.call(t)}($h=Wf.prototype).open=function(t,n){if(this.readyState!=Gf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=n,this.readyState=1,Yf(this)},$h.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const n={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(n.body=t),(this.D||Bh).fetch(new Request(this.B,n)).then(this.Va.bind(this),this.ha.bind(this))},$h.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Jf(this)),this.readyState=Gf},$h.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Yf(this)),this.g&&(this.readyState=3,Yf(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Bh.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Hf(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},$h.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var n=t.value?t.value:new Uint8Array(0);(n=this.A.decode(n,{stream:!t.done}))&&(this.response=this.responseText+=n)}t.done?Jf(this):Yf(this),3==this.readyState&&Hf(this)}},$h.Ua=function(t){this.g&&(this.response=this.responseText=t,Jf(this))},$h.Ta=function(t){this.g&&(this.response=t,Jf(this))},$h.ha=function(){this.g&&Jf(this)},$h.setRequestHeader=function(t,n){this.v.append(t,n)},$h.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},$h.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],n=this.h.entries();for(var i=n.next();!i.done;)t.push((i=i.value)[0]+": "+i[1]),i=n.next();return t.join("\r\n")},Object.defineProperty(Wf.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Xf=Bh.JSON.parse;function Qf(t){nd.call(this),this.headers=new lf,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Zf,this.K=this.L=!1}Qh(Qf,nd);var Zf="",tp=/^https?$/i,np=["POST","PUT"];function ip(t){return"content-type"==t.toLowerCase()}function ep(t,n){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=n,t.m=5,sp(t),op(t)}function sp(t){t.D||(t.D=!0,id(t,"complete"),id(t,"error"))}function rp(t){if(t.h&&void 0!==Vh&&(!t.C[1]||4!=ap(t)||2!=t.ba()))if(t.v&&4==ap(t))md(t.Fa,0,t);else if(id(t,"readystatechange"),4==ap(t)){t.h=!1;try{const l=t.ba();t:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n=!0;break t;default:n=!1}var i;if(!(i=n)){var e;if(e=0===l){var s=String(t.H).match(hf)[1]||null;if(!s&&Bh.self&&Bh.self.location){var r=Bh.self.location.protocol;s=r.substr(0,r.length-1)}e=!tp.test(s?s.toLowerCase():"")}i=e}if(i)id(t,"complete"),id(t,"success");else{t.m=6;try{var o=2<ap(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",sp(t)}}finally{op(t)}}}function op(t,n){if(t.g){lp(t);const i=t.g,e=t.C[0]?zh:null;t.g=null,t.C=null,n||id(t,"ready");try{i.onreadystatechange=e}catch(t){}}}function lp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Bh.clearTimeout(t.A),t.A=null)}function ap(t){return t.g?t.g.readyState:0}function up(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Zf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function hp(t,n,i){t:{for(e in i){var e=!1;break t}e=!0}e||(i=function(t){let n="";return cc(t,(function(t,i){n+=i,n+=":",n+=t,n+="\r\n"})),n}(i),"string"==typeof t?null!=i&&encodeURIComponent(String(i)):wf(t,n,i))}function cp(t,n,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||n}function dp(t){this.za=0,this.l=[],this.h=new _d,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=cp("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=cp("baseRetryDelayMs",5e3,t),this.$a=cp("retryDelaySeedMs",1e4,t),this.Ya=cp("forwardChannelMaxRetries",2,t),this.ra=cp("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Rf(t&&t.concurrentRequestLimit),this.Ca=new Bf,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function fp(t){if(gp(t),3==t.G){var n=t.V++,i=df(t.F);wf(i,"SID",t.J),wf(i,"RID",n),wf(i,"TYPE","terminate"),bp(t,i),(n=new zd(t,t.h,n,void 0)).K=2,n.v=vf(df(i)),i=!1,Bh.navigator&&Bh.navigator.sendBeacon&&(i=Bh.navigator.sendBeacon(n.v.toString(),"")),!i&&Bh.Image&&((new Image).src=n.v,i=!0),i||(n.g=Dp(n.l,null),n.g.ea(n.v)),n.F=Date.now(),Zd(n)}Ap(t)}function pp(t){t.g&&(_p(t),t.g.cancel(),t.g=null)}function gp(t){pp(t),t.u&&(Bh.clearTimeout(t.u),t.u=null),Ip(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Bh.clearTimeout(t.m),t.m=null)}function mp(t,n){t.l.push(new class{constructor(t,n){this.h=t,this.g=n}}(t.Za++,n)),3==t.G&&wp(t)}function wp(t){Mf(t.i)||t.m||(t.m=!0,hd(t.Ha,t),t.C=0)}function vp(t,n){var i;i=n?n.m:t.V++;const e=df(t.F);wf(e,"SID",t.J),wf(e,"RID",i),wf(e,"AID",t.U),bp(t,e),t.o&&t.s&&hp(e,t.o,t.s),i=new zd(t,t.h,i,t.C+1),null===t.o&&(i.H=t.s),n&&(t.l=n.D.concat(t.l)),n=yp(t,i,1e3),i.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ff(t.i,i),Hd(i,e,n)}function bp(t,n){t.j&&of({},(function(t,i){wf(n,i,t)}))}function yp(t,n,i){i=Math.min(t.l.length,i);var e=t.j?Yh(t.j.Oa,t.j,t):null;t:{var s=t.l;let n=-1;for(;;){const t=["count="+i];-1==n?0<i?(n=s[0].h,t.push("ofs="+n)):n=0:t.push("ofs="+n);let r=!0;for(let o=0;o<i;o++){let i=s[o].h;const l=s[o].g;if(i-=n,0>i)n=Math.max(0,s[o].h-100),r=!1;else try{zf(l,t,"req"+i+"_")}catch(t){e&&e(l)}}if(r){e=t.join("&");break t}}}return t=t.l.splice(0,i),n.D=t,e}function xp(t){t.g||t.u||(t.Y=1,hd(t.Ga,t),t.A=0)}function kp(t){return!(t.g||t.u||3<=t.A||(t.Y++,t.u=Rd(Yh(t.Ga,t),Sp(t,t.A)),t.A++,0))}function _p(t){null!=t.B&&(Bh.clearTimeout(t.B),t.B=null)}function Ep(t){t.g=new zd(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var n=df(t.oa);wf(n,"RID","rpc"),wf(n,"SID",t.J),wf(n,"CI",t.N?"0":"1"),wf(n,"AID",t.U),bp(t,n),wf(n,"TYPE","xmlhttp"),t.o&&t.s&&hp(n,t.o,t.s),t.K&&t.g.setTimeout(t.K);var i=t.g;t=t.la,i.K=1,i.v=vf(df(n)),i.s=null,i.U=!0,Jd(i,t)}function Ip(t){null!=t.v&&(Bh.clearTimeout(t.v),t.v=null)}function Tp(t,n){var i=null;if(t.g==n){Ip(t),_p(t),t.g=null;var e=2}else{if(!jf(t.i,n))return;i=n.D,$f(t.i,n),e=1}if(t.I=n.N,0!=t.G)if(n.i)if(1==e){i=n.s?n.s.length:0,n=Date.now()-n.F;var s=t.C;id(e=Sd(),new Od(e,i,n,s)),wp(t)}else xp(t);else if(3==(s=n.o)||0==s&&0<t.I||!(1==e&&function(t,n){return!(Lf(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=n.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Rd(Yh(t.Ha,t,n),Sp(t,t.C)),t.C++,0)))}(t,n)||2==e&&kp(t)))switch(i&&0<i.length&&(n=t.i,n.i=n.i.concat(i)),s){case 1:Cp(t,5);break;case 4:Cp(t,10);break;case 3:Cp(t,6);break;default:Cp(t,2)}}function Sp(t,n){let i=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(i*=2),i*n}function Cp(t,n){if(t.h.info("Error code "+n),2==n){var i=null;t.j&&(i=null);var e=Yh(t.jb,t);i||(i=new cf("//www.google.com/images/cleardot.gif"),Bh.location&&"http"==Bh.location.protocol||ff(i,"https"),vf(i)),function(t,n){const i=new _d;if(Bh.Image){const e=new Image;e.onload=Xh(qf,i,e,"TestLoadImage: loaded",!0,n),e.onerror=Xh(qf,i,e,"TestLoadImage: error",!1,n),e.onabort=Xh(qf,i,e,"TestLoadImage: abort",!1,n),e.ontimeout=Xh(qf,i,e,"TestLoadImage: timeout",!1,n),Bh.setTimeout((function(){e.ontimeout&&e.ontimeout()}),1e4),e.src=t}else n(!1)}(i.toString(),e)}else Dd(2);t.G=0,t.j&&t.j.va(n),Ap(t),gp(t)}function Ap(t){t.G=0,t.I=-1,t.j&&(0==Uf(t.i).length&&0==t.l.length||(t.i.i.length=0,ec(t.l),t.l.length=0),t.j.ua())}function Np(t,n,i){let e=function(t){return t instanceof cf?df(t):new cf(t,void 0)}(i);if(""!=e.i)n&&pf(e,n+"."+e.i),gf(e,e.m);else{const t=Bh.location;e=function(t,n,i,e){var s=new cf(null,void 0);return t&&ff(s,t),n&&pf(s,n),i&&gf(s,i),e&&(s.l=e),s}(t.protocol,n?n+"."+t.hostname:t.hostname,+t.port,i)}return t.aa&&cc(t.aa,(function(t,n){wf(e,n,t)})),i=t.sa,(n=t.D)&&i&&wf(e,n,i),wf(e,"VER",t.ma),bp(t,e),e}function Dp(t,n,i){if(n&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(n=new Qf(i&&t.Ba&&!t.qa?new Kf({ib:!0}):t.qa)).L=t.H,n}function Op(){}function Rp(){if(bc&&!(10<=Number(Dc)))throw Error("Environmental error: no available transport.")}function Pp(t,n){nd.call(this),this.g=new dp(n),this.l=t,this.h=n&&n.messageUrlParams||null,t=n&&n.messageHeaders||null,n&&n.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=n&&n.initMessageHeaders||null,n&&n.messageContentType&&(t?t["X-WebChannel-Content-Type"]=n.messageContentType:t={"X-WebChannel-Content-Type":n.messageContentType}),n&&n.ya&&(t?t["X-WebChannel-Client-Profile"]=n.ya:t={"X-WebChannel-Client-Profile":n.ya}),this.g.P=t,(t=n&&n.httpHeadersOverwriteParam)&&!sc(t)&&(this.g.o=t),this.A=n&&n.supportsCrossDomainXhr||!1,this.v=n&&n.sendRawJson||!1,(n=n&&n.httpSessionIdParam)&&!sc(n)&&(this.g.D=n,null!==(t=this.h)&&n in t&&n in(t=this.h)&&delete t[n]),this.j=new jp(this)}function Mp(t){Ud.call(this);var n=t.__sm__;if(n){t:{for(const i in n){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,n=null!==n&&t in n?n[t]:void 0),this.data=n}else this.data=t}function Lp(){Vd.call(this),this.status=1}function jp(t){this.g=t}($h=Qf.prototype).ea=function(t,n,i,e){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);n=n?n.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Fd.g(),this.C=function(t){return t.h||(t.h=t.i())}(this.u?this.u:Fd),this.g.onreadystatechange=Yh(this.Fa,this);try{this.F=!0,this.g.open(n,String(t),!0),this.F=!1}catch(t){return void ep(this,t)}t=i||"";const s=new lf(this.headers);e&&of(e,(function(t,n){s.set(n,t)})),e=function(t){t:{var n=ip;const i=t.length,e="string"==typeof t?t.split(""):t;for(let s=0;s<i;s++)if(s in e&&n.call(void 0,e[s],s,t)){n=s;break t}n=-1}return 0>n?null:"string"==typeof t?t.charAt(n):t[n]}(s.T()),i=Bh.FormData&&t instanceof Bh.FormData,!(0<=tc(np,n))||e||i||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,n){this.g.setRequestHeader(n,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{lp(this),0<this.B&&((this.K=function(t){return bc&&Nc()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Yh(this.pa,this)):this.A=md(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){ep(this,t)}},$h.pa=function(){void 0!==Vh&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,id(this,"timeout"),this.abort(8))},$h.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,id(this,"complete"),id(this,"abort"),op(this))},$h.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),op(this,!0)),Qf.Z.M.call(this)},$h.Fa=function(){this.s||(this.F||this.v||this.l?rp(this):this.cb())},$h.cb=function(){rp(this)},$h.ba=function(){try{return 2<ap(this)?this.g.status:-1}catch(t){return-1}},$h.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},$h.Qa=function(t){if(this.g){var n=this.g.responseText;return t&&0==n.indexOf(t)&&(n=n.substring(t.length)),Xf(n)}},$h.Da=function(){return this.m},$h.La=function(){return"string"==typeof this.j?this.j:String(this.j)},($h=dp.prototype).ma=8,$h.G=1,$h.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},$h.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new zd(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=dc(r),pc(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var n=0,i=0;i<this.l.length;i++){var e=this.l[i];if(void 0===(e="__data__"in e.g&&"string"==typeof(e=e.g.__data__)?e.length:void 0))break;if(4096<(n+=e)){n=i;break t}if(4096===n||i===this.l.length-1){n=i+1;break t}}n=1e3}else n=1e3;n=yp(this,s,n),wf(i=df(this.F),"RID",t),wf(i,"CVER",22),this.D&&wf(i,"X-HTTP-Session-Id",this.D),bp(this,i),this.o&&r&&hp(i,this.o,r),Ff(this.i,s),this.Ra&&wf(i,"TYPE","init"),this.ja?(wf(i,"$req",n),wf(i,"SID","null"),s.$=!0,Hd(s,i,null)):Hd(s,i,n),this.G=2}}else 3==this.G&&(t?vp(this,t):0==this.l.length||Mf(this.i)||vp(this))},$h.Ga=function(){if(this.u=null,Ep(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Rd(Yh(this.bb,this),t)}},$h.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Dd(10),pp(this),Ep(this))},$h.ab=function(){null!=this.v&&(this.v=null,pp(this),kp(this),Dd(19))},$h.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Dd(2)):(this.h.info("Failed to ping google.com"),Dd(1))},($h=Op.prototype).xa=function(){},$h.wa=function(){},$h.va=function(){},$h.ua=function(){},$h.Oa=function(){},Rp.prototype.g=function(t,n){return new Pp(t,n)},Qh(Pp,nd),Pp.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,n=this.l,i=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),hd(Yh(t.hb,t,n))),Dd(0),t.W=n,t.aa=i||{},t.N=t.X,t.F=Np(t,null,t.W),wp(t)},Pp.prototype.close=function(){fp(this.g)},Pp.prototype.u=function(t){if("string"==typeof t){var n={};n.__data__=t,mp(this.g,n)}else this.v?((n={}).__data__=sd(t),mp(this.g,n)):mp(this.g,t)},Pp.prototype.M=function(){this.g.j=null,delete this.j,fp(this.g),delete this.g,Pp.Z.M.call(this)},Qh(Mp,Ud),Qh(Lp,Vd),Qh(jp,Op),jp.prototype.xa=function(){id(this.g,"a")},jp.prototype.wa=function(t){id(this.g,new Mp(t))},jp.prototype.va=function(t){id(this.g,new Lp(t))},jp.prototype.ua=function(){id(this.g,"b")},Rp.prototype.createWebChannel=Rp.prototype.g,Pp.prototype.send=Pp.prototype.u,Pp.prototype.open=Pp.prototype.m,Pp.prototype.close=Pp.prototype.close,Pd.NO_ERROR=0,Pd.TIMEOUT=8,Pd.HTTP_ERROR=6,Md.COMPLETE="complete",jd.EventType=$d,$d.OPEN="a",$d.CLOSE="b",$d.ERROR="c",$d.MESSAGE="d",nd.prototype.listen=nd.prototype.N,Qf.prototype.listenOnce=Qf.prototype.O,Qf.prototype.getLastError=Qf.prototype.La,Qf.prototype.getLastErrorCode=Qf.prototype.Da,Qf.prototype.getStatus=Qf.prototype.ba,Qf.prototype.getResponseJson=Qf.prototype.Qa,Qf.prototype.getResponseText=Qf.prototype.ga,Qf.prototype.send=Qf.prototype.ea;var Fp=Pd,$p=Md,Up=Id,Vp=Kf,Bp=jd,zp=Qf;const qp="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Kp.UNAUTHENTICATED=new Kp(null),Kp.GOOGLE_CREDENTIALS=new Kp("google-credentials-uid"),Kp.FIRST_PARTY=new Kp("first-party-uid"),Kp.MOCK_USER=new Kp("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Wp="9.6.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=new Bn("@firebase/firestore");function Hp(){return Gp.logLevel}function Jp(t,...n){if(Gp.logLevel<=jn.DEBUG){const i=n.map(Qp);Gp.debug(`Firestore (${Wp}): ${t}`,...i)}}function Yp(t,...n){if(Gp.logLevel<=jn.ERROR){const i=n.map(Qp);Gp.error(`Firestore (${Wp}): ${t}`,...i)}}function Xp(t,...n){if(Gp.logLevel<=jn.WARN){const i=n.map(Qp);Gp.warn(`Firestore (${Wp}): ${t}`,...i)}}function Qp(t){if("string"==typeof t)return t;try{return JSON.stringify(t)}catch(n){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t="Unexpected state"){const n=`FIRESTORE (${Wp}) INTERNAL ASSERTION FAILED: `+t;throw Yp(n),new Error(n)}function tg(t){t||Zp()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ng={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ig extends Error{constructor(t,n){super(n),this.code=t,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class rg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(Kp.UNAUTHENTICATED)))}shutdown(){}}class og{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class lg{constructor(t){this.t=t,this.currentUser=Kp.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const e=t=>this.i!==i?(i=this.i,n(t)):Promise.resolve();let s=new eg;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new eg,t.enqueueRetryable((()=>e(this.currentUser)))};const r=()=>{const n=s;t.enqueueRetryable((async()=>{await n.promise,await e(this.currentUser)}))},o=t=>{Jp("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Jp("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new eg)}}),0),r()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((n=>this.i!==t?(Jp("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(tg("string"==typeof n.accessToken),new sg(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return tg(null===t||"string"==typeof t),new Kp(t)}}class ag{constructor(t,n,i){this.type="FirstParty",this.user=Kp.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const e=t.auth.getAuthHeaderValueForFirstParty([]);e&&this.headers.set("Authorization",e),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class ug{constructor(t,n,i){this.h=t,this.l=n,this.m=i}getToken(){return Promise.resolve(new ag(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable((()=>n(Kp.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class hg{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cg{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,n){this.o=i=>{t.enqueueRetryable((()=>(t=>(null!=t.error&&Jp("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`),n(t.token)))(i)))};const i=t=>{Jp("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):Jp("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(tg("string"==typeof t.token),new hg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=t=>this.p(t),this.T=t=>n.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){const n="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(t);if(n&&"function"==typeof n.getRandomValues)n.getRandomValues(i);else for(let n=0;n<t;n++)i[n]=Math.floor(256*Math.random());return i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dg.I=-1;class pg{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const e=fg(40);for(let s=0;s<e.length;++s)i.length<20&&e[s]<n&&(i+=t.charAt(e[s]%t.length))}return i}}function gg(t,n){return t<n?-1:t>n?1:0}function mg(t,n,i){return t.length===n.length&&t.every(((t,e)=>i(t,n[e])))}function wg(t){return t+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ig(ng.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ig(ng.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new ig(ng.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ig(ng.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return vg.fromMillis(Date.now())}static fromDate(t){return vg.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new vg(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?gg(this.nanoseconds,t.nanoseconds):gg(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(t){this.timestamp=t}static fromTimestamp(t){return new bg(t)}static min(){return new bg(new vg(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t){let n=0;for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&n++;return n}function xg(t,n){for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&n(i,t[i])}function kg(t){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(t,n,i){void 0===n?n=0:n>t.length&&Zp(),void 0===i?i=t.length-n:i>t.length-n&&Zp(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return 0===_g.comparator(this,t)}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof _g?t.forEach((t=>{n.push(t)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return this.construct(this.segments,this.offset+(t=void 0===t?1:t),this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let e=0;e<i;e++){const i=t.get(e),s=n.get(e);if(i<s)return-1;if(i>s)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Eg extends _g{construct(t,n,i){return new Eg(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new ig(ng.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter((t=>t.length>0)))}return new Eg(n)}static emptyPath(){return new Eg([])}}const Ig=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tg extends _g{construct(t,n,i){return new Tg(t,n,i)}static isValidIdentifier(t){return Ig.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tg.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Tg(["__name__"])}static fromServerFormat(t){const n=[];let i="",e=0;const s=()=>{if(0===i.length)throw new ig(ng.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let r=!1;for(;e<t.length;){const n=t[e];if("\\"===n){if(e+1===t.length)throw new ig(ng.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const n=t[e+1];if("\\"!==n&&"."!==n&&"`"!==n)throw new ig(ng.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=n,e+=2}else"`"===n?(r=!r,e++):"."!==n||r?(i+=n,e++):(s(),e++)}if(s(),r)throw new ig(ng.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Tg(n)}static emptyPath(){return new Tg([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(t){this.fields=t,t.sort(Tg.comparator)}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return mg(this.fields,t.fields,((t,n)=>t.isEqual(n)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new Cg(n)}static fromUint8Array(t){const n=function(t){let n="";for(let i=0;i<t.length;++i)n+=String.fromCharCode(t[i]);return n}(t);return new Cg(n)}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return gg(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Cg.EMPTY_BYTE_STRING=new Cg("");const Ag=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ng(t){if(tg(!!t),"string"==typeof t){let n=0;const i=Ag.exec(t);if(tg(!!i),i[1]){let t=i[1];t=(t+"000000000").substr(0,9),n=Number(t)}const e=new Date(t);return{seconds:Math.floor(e.getTime()/1e3),nanos:n}}return{seconds:Dg(t.seconds),nanos:Dg(t.nanos)}}function Dg(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Og(t){return"string"==typeof t?Cg.fromBase64String(t):Cg.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t){var n,i;return"server_timestamp"===(null===(i=((null===(n=null==t?void 0:t.mapValue)||void 0===n?void 0:n.fields)||{}).__type__)||void 0===i?void 0:i.stringValue)}function Pg(t){const n=t.mapValue.fields.__previous_value__;return Rg(n)?Pg(n):n}function Mg(t){const n=Ng(t.mapValue.fields.__local_write_time__.timestampValue);return new vg(n.seconds,n.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t){return null==t}function jg(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fg{constructor(t){this.path=t}static fromPath(t){return new Fg(Eg.fromString(t))}static fromName(t){return new Fg(Eg.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Eg.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,n){return Eg.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Fg(new Eg(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rg(t)?4:10:Zp()}function Ug(t,n){const i=$g(t);if(i!==$g(n))return!1;switch(i){case 0:return!0;case 1:return t.booleanValue===n.booleanValue;case 4:return Mg(t).isEqual(Mg(n));case 3:return function(t,n){if("string"==typeof t.timestampValue&&"string"==typeof n.timestampValue&&t.timestampValue.length===n.timestampValue.length)return t.timestampValue===n.timestampValue;const i=Ng(t.timestampValue),e=Ng(n.timestampValue);return i.seconds===e.seconds&&i.nanos===e.nanos}(t,n);case 5:return t.stringValue===n.stringValue;case 6:return function(t,n){return Og(t.bytesValue).isEqual(Og(n.bytesValue))}(t,n);case 7:return t.referenceValue===n.referenceValue;case 8:return function(t,n){return Dg(t.geoPointValue.latitude)===Dg(n.geoPointValue.latitude)&&Dg(t.geoPointValue.longitude)===Dg(n.geoPointValue.longitude)}(t,n);case 2:return function(t,n){if("integerValue"in t&&"integerValue"in n)return Dg(t.integerValue)===Dg(n.integerValue);if("doubleValue"in t&&"doubleValue"in n){const i=Dg(t.doubleValue),e=Dg(n.doubleValue);return i===e?jg(i)===jg(e):isNaN(i)&&isNaN(e)}return!1}(t,n);case 9:return mg(t.arrayValue.values||[],n.arrayValue.values||[],Ug);case 10:return function(t,n){const i=t.mapValue.fields||{},e=n.mapValue.fields||{};if(yg(i)!==yg(e))return!1;for(const t in i)if(i.hasOwnProperty(t)&&(void 0===e[t]||!Ug(i[t],e[t])))return!1;return!0}(t,n);default:return Zp()}}function Vg(t,n){return void 0!==(t.values||[]).find((t=>Ug(t,n)))}function Bg(t,n){const i=$g(t),e=$g(n);if(i!==e)return gg(i,e);switch(i){case 0:return 0;case 1:return gg(t.booleanValue,n.booleanValue);case 2:return function(t,n){const i=Dg(t.integerValue||t.doubleValue),e=Dg(n.integerValue||n.doubleValue);return i<e?-1:i>e?1:i===e?0:isNaN(i)?isNaN(e)?0:-1:1}(t,n);case 3:return zg(t.timestampValue,n.timestampValue);case 4:return zg(Mg(t),Mg(n));case 5:return gg(t.stringValue,n.stringValue);case 6:return function(t,n){const i=Og(t),e=Og(n);return i.compareTo(e)}(t.bytesValue,n.bytesValue);case 7:return function(t,n){const i=t.split("/"),e=n.split("/");for(let t=0;t<i.length&&t<e.length;t++){const n=gg(i[t],e[t]);if(0!==n)return n}return gg(i.length,e.length)}(t.referenceValue,n.referenceValue);case 8:return function(t,n){const i=gg(Dg(t.latitude),Dg(n.latitude));return 0!==i?i:gg(Dg(t.longitude),Dg(n.longitude))}(t.geoPointValue,n.geoPointValue);case 9:return function(t,n){const i=t.values||[],e=n.values||[];for(let t=0;t<i.length&&t<e.length;++t){const n=Bg(i[t],e[t]);if(n)return n}return gg(i.length,e.length)}(t.arrayValue,n.arrayValue);case 10:return function(t,n){const i=t.fields||{},e=Object.keys(i),s=n.fields||{},r=Object.keys(s);e.sort(),r.sort();for(let t=0;t<e.length&&t<r.length;++t){const n=gg(e[t],r[t]);if(0!==n)return n;const o=Bg(i[e[t]],s[r[t]]);if(0!==o)return o}return gg(e.length,r.length)}(t.mapValue,n.mapValue);default:throw Zp()}}function zg(t,n){if("string"==typeof t&&"string"==typeof n&&t.length===n.length)return gg(t,n);const i=Ng(t),e=Ng(n),s=gg(i.seconds,e.seconds);return 0!==s?s:gg(i.nanos,e.nanos)}function qg(t){return Kg(t)}function Kg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const n=Ng(t);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Og(t.bytesValue).toBase64():"referenceValue"in t?Fg.fromName(t.referenceValue).toString():"geoPointValue"in t?`geo(${(n=t.geoPointValue).latitude},${n.longitude})`:"arrayValue"in t?function(t){let n="[",i=!0;for(const e of t.values||[])i?i=!1:n+=",",n+=Kg(e);return n+"]"}(t.arrayValue):"mapValue"in t?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",e=!0;for(const s of n)e?e=!1:i+=",",i+=`${s}:${Kg(t.fields[s])}`;return i+"}"}(t.mapValue):Zp();var n}function Wg(t,n){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${n.path.canonicalString()}`}}function Gg(t){return!!t&&"integerValue"in t}function Hg(t){return!!t&&"arrayValue"in t}function Jg(t){return!!t&&"nullValue"in t}function Yg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xg(t){return!!t&&"mapValue"in t}function Qg(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const n={mapValue:{fields:{}}};return xg(t.mapValue.fields,((t,i)=>n.mapValue.fields[t]=Qg(i))),n}if(t.arrayValue){const n={arrayValue:{values:[]}};for(let i=0;i<(t.arrayValue.values||[]).length;++i)n.arrayValue.values[i]=Qg(t.arrayValue.values[i]);return n}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(t){this.value=t}static empty(){return new Zg({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!Xg(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qg(n)}setAll(t){let n=Tg.emptyPath(),i={},e=[];t.forEach(((t,s)=>{if(!n.isImmediateParentOf(s)){const t=this.getFieldsMap(n);this.applyChanges(t,i,e),i={},e=[],n=s.popLast()}t?i[s.lastSegment()]=Qg(t):e.push(s.lastSegment())}));const s=this.getFieldsMap(n);this.applyChanges(s,i,e)}delete(t){const n=this.field(t.popLast());Xg(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ug(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let e=n.mapValue.fields[t.get(i)];Xg(e)&&e.mapValue.fields||(e={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=e),n=e}return n.mapValue.fields}applyChanges(t,n,i){xg(n,((n,i)=>t[n]=i));for(const n of i)delete t[n]}clone(){return new Zg(Qg(this.value))}}function tm(t){const n=[];return xg(t.fields,((t,i)=>{const e=new Tg([t]);if(Xg(i)){const t=tm(i.mapValue).fields;if(0===t.length)n.push(e);else for(const i of t)n.push(e.child(i))}else n.push(e)})),new Sg(n)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class nm{constructor(t,n,i,e,s){this.key=t,this.documentType=n,this.version=i,this.data=e,this.documentState=s}static newInvalidDocument(t){return new nm(t,0,bg.min(),Zg.empty(),0)}static newFoundDocument(t,n,i){return new nm(t,1,n,i,0)}static newNoDocument(t,n){return new nm(t,2,n,Zg.empty(),0)}static newUnknownDocument(t,n){return new nm(t,3,n,Zg.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Zg.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Zg.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof nm&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new nm(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(t,n=null,i=[],e=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=e,this.limit=s,this.startAt=r,this.endAt=o,this.R=null}}function em(t,n=null,i=[],e=[],s=null,r=null,o=null){return new im(t,n,i,e,s,r,o)}function sm(t){const n=t;if(null===n.R){let t=n.path.canonicalString();null!==n.collectionGroup&&(t+="|cg:"+n.collectionGroup),t+="|f:",t+=n.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+qg(t.value)}(t))).join(","),t+="|ob:",t+=n.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Lg(n.limit)||(t+="|l:",t+=n.limit),n.startAt&&(t+="|lb:",t+=wm(n.startAt)),n.endAt&&(t+="|ub:",t+=wm(n.endAt)),n.R=t}return n.R}function rm(t,n){if(t.limit!==n.limit)return!1;if(t.orderBy.length!==n.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!bm(t.orderBy[i],n.orderBy[i]))return!1;if(t.filters.length!==n.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if((i=t.filters[s]).op!==(e=n.filters[s]).op||!i.field.isEqual(e.field)||!Ug(i.value,e.value))return!1;var i,e;return t.collectionGroup===n.collectionGroup&&!!t.path.isEqual(n.path)&&!!xm(t.startAt,n.startAt)&&xm(t.endAt,n.endAt)}function om(t){return Fg.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class lm extends class{}{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?"in"===n||"not-in"===n?this.P(t,n,i):new am(t,n,i):"array-contains"===n?new dm(t,i):"in"===n?new fm(t,i):"not-in"===n?new pm(t,i):"array-contains-any"===n?new gm(t,i):new lm(t,n,i)}static P(t,n,i){return"in"===n?new um(t,i):new hm(t,i)}matches(t){const n=t.data.field(this.field);return"!="===this.op?null!==n&&this.v(Bg(n,this.value)):null!==n&&$g(this.value)===$g(n)&&this.v(Bg(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Zp()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class am extends lm{constructor(t,n,i){super(t,n,i),this.key=Fg.fromName(i.referenceValue)}matches(t){const n=Fg.comparator(t.key,this.key);return this.v(n)}}class um extends lm{constructor(t,n){super(t,"in",n),this.keys=cm(0,n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class hm extends lm{constructor(t,n){super(t,"not-in",n),this.keys=cm(0,n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function cm(t,n){var i;return((null===(i=n.arrayValue)||void 0===i?void 0:i.values)||[]).map((t=>Fg.fromName(t.referenceValue)))}class dm extends lm{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Hg(n)&&Vg(n.arrayValue,this.value)}}class fm extends lm{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return null!==n&&Vg(this.value.arrayValue,n)}}class pm extends lm{constructor(t,n){super(t,"not-in",n)}matches(t){if(Vg(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return null!==n&&!Vg(this.value.arrayValue,n)}}class gm extends lm{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Hg(n)||!n.arrayValue.values)&&n.arrayValue.values.some((t=>Vg(this.value.arrayValue,t)))}}class mm{constructor(t,n){this.position=t,this.before=n}}function wm(t){return`${t.before?"b":"a"}:${t.position.map((t=>qg(t))).join(",")}`}class vm{constructor(t,n="asc"){this.field=t,this.dir=n}}function bm(t,n){return t.dir===n.dir&&t.field.isEqual(n.field)}function ym(t,n,i){let e=0;for(let s=0;s<t.position.length;s++){const r=n[s],o=t.position[s];if(e=r.field.isKeyField()?Fg.comparator(Fg.fromName(o.referenceValue),i.key):Bg(o,i.data.field(r.field)),"desc"===r.dir&&(e*=-1),0!==e)break}return t.before?e<=0:e<0}function xm(t,n){if(null===t)return null===n;if(null===n)return!1;if(t.before!==n.before||t.position.length!==n.position.length)return!1;for(let i=0;i<t.position.length;i++)if(!Ug(t.position[i],n.position[i]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(t,n=null,i=[],e=[],s=null,r="F",o=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=e,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=l,this.S=null,this.D=null}}function _m(t){return new km(t)}function Em(t){return!Lg(t.limit)&&"F"===t.limitType}function Im(t){return!Lg(t.limit)&&"L"===t.limitType}function Tm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Sm(t){for(const n of t.filters)if(n.V())return n.field;return null}function Cm(t){return null!==t.collectionGroup}function Am(t){const n=t;if(null===n.S){n.S=[];const t=Sm(n),i=Tm(n);if(null!==t&&null===i)t.isKeyField()||n.S.push(new vm(t)),n.S.push(new vm(Tg.keyField(),"asc"));else{let t=!1;for(const i of n.explicitOrderBy)n.S.push(i),i.field.isKeyField()&&(t=!0);if(!t){const t=n.explicitOrderBy.length>0?n.explicitOrderBy[n.explicitOrderBy.length-1].dir:"asc";n.S.push(new vm(Tg.keyField(),t))}}}return n.S}function Nm(t){const n=t;if(!n.D)if("F"===n.limitType)n.D=em(n.path,n.collectionGroup,Am(n),n.filters,n.limit,n.startAt,n.endAt);else{const t=[];for(const i of Am(n))t.push(new vm(i.field,"desc"===i.dir?"asc":"desc"));const i=n.endAt?new mm(n.endAt.position,!n.endAt.before):null,e=n.startAt?new mm(n.startAt.position,!n.startAt.before):null;n.D=em(n.path,n.collectionGroup,t,n.filters,n.limit,i,e)}return n.D}function Dm(t,n,i){return new km(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),n,i,t.startAt,t.endAt)}function Om(t,n){return rm(Nm(t),Nm(n))&&t.limitType===n.limitType}function Rm(t){return`${sm(Nm(t))}|lt:${t.limitType}`}function Pm(t){return`Query(target=${function(t){let n=t.path.canonicalString();return null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((t=>{return`${(n=t).field.canonicalString()} ${n.op} ${qg(n.value)}`;var n})).join(", ")}]`),Lg(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(n+=", startAt: "+wm(t.startAt)),t.endAt&&(n+=", endAt: "+wm(t.endAt)),`Target(${n})`}(Nm(t))}; limitType=${t.limitType})`}function Mm(t,n){return n.isFoundDocument()&&function(t,n){const i=n.key.path;return null!==t.collectionGroup?n.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):Fg.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(t,n)&&function(t,n){for(const i of t.explicitOrderBy)if(!i.field.isKeyField()&&null===n.data.field(i.field))return!1;return!0}(t,n)&&function(t,n){for(const i of t.filters)if(!i.matches(n))return!1;return!0}(t,n)&&function(t,n){return!(t.startAt&&!ym(t.startAt,Am(t),n)||t.endAt&&ym(t.endAt,Am(t),n))}(t,n)}function Lm(t){return(n,i)=>{let e=!1;for(const s of Am(t)){const t=jm(s,n,i);if(0!==t)return t;e=e||s.field.isKeyField()}return 0}}function jm(t,n,i){const e=t.field.isKeyField()?Fg.comparator(n.key,i.key):function(t,n,i){const e=n.data.field(t),s=i.data.field(t);return null!==e&&null!==s?Bg(e,s):Zp()}(t.field,n,i);switch(t.dir){case"asc":return e;case"desc":return-1*e;default:return Zp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t,n){if(t.C){if(isNaN(n))return{doubleValue:"NaN"};if(n===1/0)return{doubleValue:"Infinity"};if(n===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jg(n)?"-0":n}}function $m(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this._=void 0}}function Vm(t,n,i){return t instanceof qm?function(t,n){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return n&&(i.fields.__previous_value__=n),{mapValue:i}}(i,n):t instanceof Km?Wm(t,n):t instanceof Gm?Hm(t,n):function(t,n){const i=zm(t,n),e=Ym(i)+Ym(t.N);return Gg(i)&&Gg(t.N)?$m(e):Fm(t.k,e)}(t,n)}function Bm(t,n,i){return t instanceof Km?Wm(t,n):t instanceof Gm?Hm(t,n):i}function zm(t,n){return t instanceof Jm?Gg(i=n)||function(t){return!!t&&"doubleValue"in t}(i)?n:{integerValue:0}:null;var i}class qm extends Um{}class Km extends Um{constructor(t){super(),this.elements=t}}function Wm(t,n){const i=Xm(n);for(const n of t.elements)i.some((t=>Ug(t,n)))||i.push(n);return{arrayValue:{values:i}}}class Gm extends Um{constructor(t){super(),this.elements=t}}function Hm(t,n){let i=Xm(n);for(const n of t.elements)i=i.filter((t=>!Ug(t,n)));return{arrayValue:{values:i}}}class Jm extends Um{constructor(t,n){super(),this.k=t,this.N=n}}function Ym(t){return Dg(t.integerValue||t.doubleValue)}function Xm(t){return Hg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(t,n){this.field=t,this.transform=n}}class Zm{constructor(t,n){this.version=t,this.transformResults=n}}class tw{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new tw}static exists(t){return new tw(void 0,t)}static updateTime(t){return new tw(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function nw(t,n){return void 0!==t.updateTime?n.isFoundDocument()&&n.version.isEqual(t.updateTime):void 0===t.exists||t.exists===n.isFoundDocument()}class iw{}function ew(t,n,i){t instanceof aw?function(t,n,i){const e=t.value.clone(),s=cw(t.fieldTransforms,n,i.transformResults);e.setAll(s),n.convertToFoundDocument(i.version,e).setHasCommittedMutations()}(t,n,i):t instanceof uw?function(t,n,i){if(!nw(t.precondition,n))return void n.convertToUnknownDocument(i.version);const e=cw(t.fieldTransforms,n,i.transformResults),s=n.data;s.setAll(hw(t)),s.setAll(e),n.convertToFoundDocument(i.version,s).setHasCommittedMutations()}(t,n,i):function(t,n,i){n.convertToNoDocument(i.version).setHasCommittedMutations()}(0,n,i)}function sw(t,n,i){t instanceof aw?function(t,n,i){if(!nw(t.precondition,n))return;const e=t.value.clone(),s=dw(t.fieldTransforms,i,n);e.setAll(s),n.convertToFoundDocument(lw(n),e).setHasLocalMutations()}(t,n,i):t instanceof uw?function(t,n,i){if(!nw(t.precondition,n))return;const e=dw(t.fieldTransforms,i,n),s=n.data;s.setAll(hw(t)),s.setAll(e),n.convertToFoundDocument(lw(n),s).setHasLocalMutations()}(t,n,i):function(t,n){nw(t.precondition,n)&&n.convertToNoDocument(bg.min())}(t,n)}function rw(t,n){let i=null;for(const e of t.fieldTransforms){const t=n.data.field(e.field),s=zm(e.transform,t||null);null!=s&&(null==i&&(i=Zg.empty()),i.set(e.field,s))}return i||null}function ow(t,n){return t.type===n.type&&!!t.key.isEqual(n.key)&&!!t.precondition.isEqual(n.precondition)&&!!function(t,n){return void 0===t&&void 0===n||!(!t||!n)&&mg(t,n,((t,n)=>function(t,n){return t.field.isEqual(n.field)&&function(t,n){return t instanceof Km&&n instanceof Km||t instanceof Gm&&n instanceof Gm?mg(t.elements,n.elements,Ug):t instanceof Jm&&n instanceof Jm?Ug(t.N,n.N):t instanceof qm&&n instanceof qm}(t.transform,n.transform)}(t,n)))}(t.fieldTransforms,n.fieldTransforms)&&(0===t.type?t.value.isEqual(n.value):1!==t.type||t.data.isEqual(n.data)&&t.fieldMask.isEqual(n.fieldMask))}function lw(t){return t.isFoundDocument()?t.version:bg.min()}class aw extends iw{constructor(t,n,i,e=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=e,this.type=0}}class uw extends iw{constructor(t,n,i,e,s=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=e,this.fieldTransforms=s,this.type=1}}function hw(t){const n=new Map;return t.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const e=t.data.field(i);n.set(i,e)}})),n}function cw(t,n,i){const e=new Map;tg(t.length===i.length);for(let s=0;s<i.length;s++){const r=t[s],o=r.transform,l=n.data.field(r.field);e.set(r.field,Bm(o,l,i[s]))}return e}function dw(t,n,i){const e=new Map;for(const s of t){const t=s.transform,r=i.data.field(s.field);e.set(s.field,Vm(t,r,n))}return e}class fw extends iw{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class pw extends iw{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mw,ww;function vw(t){if(void 0===t)return Yp("GRPC error has no .code"),ng.UNKNOWN;switch(t){case mw.OK:return ng.OK;case mw.CANCELLED:return ng.CANCELLED;case mw.UNKNOWN:return ng.UNKNOWN;case mw.DEADLINE_EXCEEDED:return ng.DEADLINE_EXCEEDED;case mw.RESOURCE_EXHAUSTED:return ng.RESOURCE_EXHAUSTED;case mw.INTERNAL:return ng.INTERNAL;case mw.UNAVAILABLE:return ng.UNAVAILABLE;case mw.UNAUTHENTICATED:return ng.UNAUTHENTICATED;case mw.INVALID_ARGUMENT:return ng.INVALID_ARGUMENT;case mw.NOT_FOUND:return ng.NOT_FOUND;case mw.ALREADY_EXISTS:return ng.ALREADY_EXISTS;case mw.PERMISSION_DENIED:return ng.PERMISSION_DENIED;case mw.FAILED_PRECONDITION:return ng.FAILED_PRECONDITION;case mw.ABORTED:return ng.ABORTED;case mw.OUT_OF_RANGE:return ng.OUT_OF_RANGE;case mw.UNIMPLEMENTED:return ng.UNIMPLEMENTED;case mw.DATA_LOSS:return ng.DATA_LOSS;default:return Zp()}}(ww=mw||(mw={}))[ww.OK=0]="OK",ww[ww.CANCELLED=1]="CANCELLED",ww[ww.UNKNOWN=2]="UNKNOWN",ww[ww.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ww[ww.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ww[ww.NOT_FOUND=5]="NOT_FOUND",ww[ww.ALREADY_EXISTS=6]="ALREADY_EXISTS",ww[ww.PERMISSION_DENIED=7]="PERMISSION_DENIED",ww[ww.UNAUTHENTICATED=16]="UNAUTHENTICATED",ww[ww.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ww[ww.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ww[ww.ABORTED=10]="ABORTED",ww[ww.OUT_OF_RANGE=11]="OUT_OF_RANGE",ww[ww.UNIMPLEMENTED=12]="UNIMPLEMENTED",ww[ww.INTERNAL=13]="INTERNAL",ww[ww.UNAVAILABLE=14]="UNAVAILABLE",ww[ww.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bw{constructor(t,n){this.comparator=t,this.root=n||xw.EMPTY}insert(t,n){return new bw(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,xw.BLACK,null,null))}remove(t){return new bw(this.comparator,this.root.remove(t,this.comparator).copy(null,null,xw.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const e=this.comparator(t,i.key);if(0===e)return n+i.left.size;e<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,i)=>(t(n,i),!1)))}toString(){const t=[];return this.inorderTraversal(((n,i)=>(t.push(`${n}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yw(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yw(this.root,t,this.comparator,!1)}getReverseIterator(){return new yw(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yw(this.root,t,this.comparator,!0)}}class yw{constructor(t,n,i,e){this.isReverse=e,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?i(t.key,n):1,e&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class xw{constructor(t,n,i,e,s){this.key=t,this.value=n,this.color=null!=i?i:xw.RED,this.left=null!=e?e:xw.EMPTY,this.right=null!=s?s:xw.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,e,s){return new xw(null!=t?t:this.key,null!=n?n:this.value,null!=i?i:this.color,null!=e?e:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let e=this;const s=i(t,e.key);return e=s<0?e.copy(null,null,null,e.left.insert(t,n,i),null):0===s?e.copy(null,n,null,null,null):e.copy(null,null,null,null,e.right.insert(t,n,i)),e.fixUp()}removeMin(){if(this.left.isEmpty())return xw.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,e=this;if(n(t,e.key)<0)e.left.isEmpty()||e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.remove(t,n),null);else{if(e.left.isRed()&&(e=e.rotateRight()),e.right.isEmpty()||e.right.isRed()||e.right.left.isRed()||(e=e.moveRedRight()),0===n(t,e.key)){if(e.right.isEmpty())return xw.EMPTY;i=e.right.min(),e=e.copy(i.key,i.value,null,null,e.right.removeMin())}e=e.copy(null,null,null,null,e.right.remove(t,n))}return e.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,xw.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,xw.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Zp();if(this.right.isRed())throw Zp();const t=this.left.check();if(t!==this.right.check())throw Zp();return t+(this.isRed()?0:1)}}xw.EMPTY=null,xw.RED=!0,xw.BLACK=!1,xw.EMPTY=new class{constructor(){this.size=0}get key(){throw Zp()}get value(){throw Zp()}get color(){throw Zp()}get left(){throw Zp()}get right(){throw Zp()}copy(t,n,i,e,s){return this}insert(t,n,i){return new xw(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kw{constructor(t){this.comparator=t,this.data=new bw(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n=>(t(n),!1)))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const e=i.getNext();if(this.comparator(e.key,t[1])>=0)return;n(e.key)}}forEachWhile(t,n){let i;for(i=void 0!==n?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new _w(this.data.getIterator())}getIteratorFrom(t){return new _w(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((t=>{n=n.add(t)})),n}isEqual(t){if(!(t instanceof kw))return!1;if(this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const t=n.getNext().key,e=i.getNext().key;if(0!==this.comparator(t,e))return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new kw(this.comparator);return n.data=t,n}}class _w{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=new bw(Fg.comparator);function Iw(){return Ew}const Tw=new bw(Fg.comparator);function Sw(){return Tw}const Cw=new bw(Fg.comparator),Aw=new kw(Fg.comparator);function Nw(...t){let n=Aw;for(const i of t)n=n.add(i);return n}const Dw=new kw(gg);function Ow(){return Dw}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(t,n,i,e,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=e,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n){const i=new Map;return i.set(t,Pw.createSynthesizedTargetChangeForCurrentChange(t,n)),new Rw(bg.min(),i,Ow(),Iw(),Nw())}}class Pw{constructor(t,n,i,e,s){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=e,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Pw(Cg.EMPTY_BYTE_STRING,n,Nw(),Nw(),Nw())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(t,n,i,e){this.$=t,this.removedTargetIds=n,this.key=i,this.F=e}}class Lw{constructor(t,n){this.targetId=t,this.O=n}}class jw{constructor(t,n,i=Cg.EMPTY_BYTE_STRING,e=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=e}}class Fw{constructor(){this.M=0,this.L=Vw(),this.B=Cg.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=Nw(),n=Nw(),i=Nw();return this.L.forEach(((e,s)=>{switch(s){case 0:t=t.add(e);break;case 2:n=n.add(e);break;case 1:i=i.add(e);break;default:Zp()}})),new Pw(this.B,this.U,t,n,i)}H(){this.q=!1,this.L=Vw()}J(t,n){this.q=!0,this.L=this.L.insert(t,n)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class $w{constructor(t){this.et=t,this.nt=new Map,this.st=Iw(),this.it=Uw(),this.rt=new kw(gg)}ot(t){for(const n of t.$)t.F&&t.F.isFoundDocument()?this.at(n,t.F):this.ct(n,t.key,t.F);for(const n of t.removedTargetIds)this.ct(n,t.key,t.F)}ut(t){this.forEachTarget(t,(n=>{const i=this.ht(n);switch(t.state){case 0:this.lt(n)&&i.W(t.resumeToken);break;case 1:i.Z(),i.K||i.H(),i.W(t.resumeToken);break;case 2:i.Z(),i.K||this.removeTarget(n);break;case 3:this.lt(n)&&(i.tt(),i.W(t.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),i.W(t.resumeToken));break;default:Zp()}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.nt.forEach(((t,i)=>{this.lt(i)&&n(i)}))}dt(t){const n=t.targetId,i=t.O.count,e=this.wt(n);if(e){const t=e.target;if(om(t))if(0===i){const i=new Fg(t.path);this.ct(n,i,nm.newNoDocument(i,bg.min()))}else tg(1===i);else this._t(n)!==i&&(this.ft(n),this.rt=this.rt.add(n))}}gt(t){const n=new Map;this.nt.forEach(((i,e)=>{const s=this.wt(e);if(s){if(i.current&&om(s.target)){const n=new Fg(s.target.path);null!==this.st.get(n)||this.yt(e,n)||this.ct(e,n,nm.newNoDocument(n,t))}i.j&&(n.set(e,i.G()),i.H())}}));let i=Nw();this.it.forEach(((t,n)=>{let e=!0;n.forEachWhile((t=>{const n=this.wt(t);return!n||2===n.purpose||(e=!1,!1)})),e&&(i=i.add(t))}));const e=new Rw(t,n,this.rt,this.st,i);return this.st=Iw(),this.it=Uw(),this.rt=new kw(gg),e}at(t,n){if(!this.lt(t))return;const i=this.yt(t,n.key)?2:0;this.ht(t).J(n.key,i),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(t))}ct(t,n,i){if(!this.lt(t))return;const e=this.ht(t);this.yt(t,n)?e.J(n,1):e.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(t)),i&&(this.st=this.st.insert(n,i))}removeTarget(t){this.nt.delete(t)}_t(t){const n=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let n=this.nt.get(t);return n||(n=new Fw,this.nt.set(t,n)),n}Tt(t){let n=this.it.get(t);return n||(n=new kw(gg),this.it=this.it.insert(t,n)),n}lt(t){const n=null!==this.wt(t);return n||Jp("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.nt.get(t);return n&&n.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new Fw),this.et.getRemoteKeysForTarget(t).forEach((n=>{this.ct(t,n,null)}))}yt(t,n){return this.et.getRemoteKeysForTarget(t).has(n)}}function Uw(){return new bw(Fg.comparator)}function Vw(){return new bw(Fg.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw={asc:"ASCENDING",desc:"DESCENDING"},zw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class qw{constructor(t,n){this.databaseId=t,this.C=n}}function Kw(t,n){return t.C?`${new Date(1e3*n.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+n.nanoseconds).slice(-9)}Z`:{seconds:""+n.seconds,nanos:n.nanoseconds}}function Ww(t,n){return t.C?n.toBase64():n.toUint8Array()}function Gw(t,n){return Kw(t,n.toTimestamp())}function Hw(t){return tg(!!t),bg.fromTimestamp(function(t){const n=Ng(t);return new vg(n.seconds,n.nanos)}(t))}function Jw(t,n){return function(t){return new Eg(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(n).canonicalString()}function Yw(t){const n=Eg.fromString(t);return tg(bv(n)),n}function Xw(t,n){return Jw(t.databaseId,n.path)}function Qw(t,n){const i=Yw(n);if(i.get(1)!==t.databaseId.projectId)throw new ig(ng.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+t.databaseId.projectId);if(i.get(3)!==t.databaseId.database)throw new ig(ng.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+t.databaseId.database);return new Fg(iv(i))}function Zw(t,n){return Jw(t.databaseId,n)}function tv(t){const n=Yw(t);return 4===n.length?Eg.emptyPath():iv(n)}function nv(t){return new Eg(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function iv(t){return tg(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ev(t,n,i){return{name:Xw(t,n),fields:i.value.mapValue.fields}}function sv(t,n){let i;if(n instanceof aw)i={update:ev(t,n.key,n.value)};else if(n instanceof fw)i={delete:Xw(t,n.key)};else if(n instanceof uw)i={update:ev(t,n.key,n.data),updateMask:vv(n.fieldMask)};else{if(!(n instanceof pw))return Zp();i={verify:Xw(t,n.key)}}return n.fieldTransforms.length>0&&(i.updateTransforms=n.fieldTransforms.map((t=>function(t,n){const i=n.transform;if(i instanceof qm)return{fieldPath:n.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(i instanceof Km)return{fieldPath:n.field.canonicalString(),appendMissingElements:{values:i.elements}};if(i instanceof Gm)return{fieldPath:n.field.canonicalString(),removeAllFromArray:{values:i.elements}};if(i instanceof Jm)return{fieldPath:n.field.canonicalString(),increment:i.N};throw Zp()}(0,t)))),n.precondition.isNone||(i.currentDocument=function(t,n){return void 0!==n.updateTime?{updateTime:Gw(t,n.updateTime)}:void 0!==n.exists?{exists:n.exists}:Zp()}(t,n.precondition)),i}function rv(t,n){const i=n.currentDocument?function(t){return void 0!==t.updateTime?tw.updateTime(Hw(t.updateTime)):void 0!==t.exists?tw.exists(t.exists):tw.none()}(n.currentDocument):tw.none(),e=n.updateTransforms?n.updateTransforms.map((n=>function(t,n){let i=null;"setToServerValue"in n?(tg("REQUEST_TIME"===n.setToServerValue),i=new qm):"appendMissingElements"in n?i=new Km(n.appendMissingElements.values||[]):"removeAllFromArray"in n?i=new Gm(n.removeAllFromArray.values||[]):"increment"in n?i=new Jm(t,n.increment):Zp();const e=Tg.fromServerFormat(n.fieldPath);return new Qm(e,i)}(t,n))):[];if(n.update){const s=Qw(t,n.update.name),r=new Zg({mapValue:{fields:n.update.fields}});if(n.updateMask){const t=function(t){return new Sg((t.fieldPaths||[]).map((t=>Tg.fromServerFormat(t))))}(n.updateMask);return new uw(s,r,t,i,e)}return new aw(s,r,i,e)}if(n.delete){const e=Qw(t,n.delete);return new fw(e,i)}if(n.verify){const e=Qw(t,n.verify);return new pw(e,i)}return Zp()}function ov(t,n){return{documents:[Zw(t,n.path)]}}function lv(t,n){const i={structuredQuery:{}},e=n.path;null!==n.collectionGroup?(i.parent=Zw(t,e),i.structuredQuery.from=[{collectionId:n.collectionGroup,allDescendants:!0}]):(i.parent=Zw(t,e.popLast()),i.structuredQuery.from=[{collectionId:e.lastSegment()}]);const s=function(t){if(0===t.length)return;const n=t.map((t=>function(t){if("=="===t.op){if(Yg(t.value))return{unaryFilter:{field:pv(t.field),op:"IS_NAN"}};if(Jg(t.value))return{unaryFilter:{field:pv(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Yg(t.value))return{unaryFilter:{field:pv(t.field),op:"IS_NOT_NAN"}};if(Jg(t.value))return{unaryFilter:{field:pv(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pv(t.field),op:fv(t.op),value:t.value}}}(t)));return 1===n.length?n[0]:{compositeFilter:{op:"AND",filters:n}}}(n.filters);s&&(i.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:pv(t.field),direction:dv(t.dir)}}(t)))}(n.orderBy);r&&(i.structuredQuery.orderBy=r);const o=function(t,n){return t.C||Lg(n)?n:{value:n}}(t,n.limit);return null!==o&&(i.structuredQuery.limit=o),n.startAt&&(i.structuredQuery.startAt=hv(n.startAt)),n.endAt&&(i.structuredQuery.endAt=hv(n.endAt)),i}function av(t){let n=tv(t.parent);const i=t.structuredQuery,e=i.from?i.from.length:0;let s=null;if(e>0){tg(1===e);const t=i.from[0];t.allDescendants?s=t.collectionId:n=n.child(t.collectionId)}let r=[];i.where&&(r=uv(i.where));let o=[];i.orderBy&&(o=i.orderBy.map((t=>function(t){return new vm(gv(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let l=null;i.limit&&(l=function(t){let n;return n="object"==typeof t?t.value:t,Lg(n)?null:n}(i.limit));let a=null;i.startAt&&(a=cv(i.startAt));let u=null;return i.endAt&&(u=cv(i.endAt)),function(t,n,i,e,s,r,o,l){return new km(t,n,i,e,s,"F",o,l)}(n,s,o,r,l,0,a,u)}function uv(t){return t?void 0!==t.unaryFilter?[wv(t)]:void 0!==t.fieldFilter?[mv(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>uv(t))).reduce(((t,n)=>t.concat(n))):Zp():[]}function hv(t){return{before:t.before,values:t.position}}function cv(t){return new mm(t.values||[],!!t.before)}function dv(t){return Bw[t]}function fv(t){return zw[t]}function pv(t){return{fieldPath:t.canonicalString()}}function gv(t){return Tg.fromServerFormat(t.fieldPath)}function mv(t){return lm.create(gv(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Zp()}}(t.fieldFilter.op),t.fieldFilter.value)}function wv(t){switch(t.unaryFilter.op){case"IS_NAN":const n=gv(t.unaryFilter.field);return lm.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=gv(t.unaryFilter.field);return lm.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const e=gv(t.unaryFilter.field);return lm.create(e,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=gv(t.unaryFilter.field);return lm.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Zp()}}function vv(t){const n=[];return t.fields.forEach((t=>n.push(t.canonicalString()))),{fieldPaths:n}}function bv(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t){let n="";for(let i=0;i<t.length;i++)n.length>0&&(n=kv(n)),n=xv(t.get(i),n);return kv(n)}function xv(t,n){let i=n;const e=t.length;for(let n=0;n<e;n++){const e=t.charAt(n);switch(e){case"\0":i+="";break;case"":i+="";break;default:i+=e}}return i}function kv(t){return t+""}function _v(t){const n=t.length;if(tg(n>=2),2===n)return tg(""===t.charAt(0)&&""===t.charAt(1)),Eg.emptyPath();const i=n-2,e=[];let s="";for(let r=0;r<n;){const n=t.indexOf("",r);switch((n<0||n>i)&&Zp(),t.charAt(n+1)){case"":const i=t.substring(r,n);let o;0===s.length?o=i:(s+=i,o=s,s=""),e.push(o);break;case"":s+=t.substring(r,n),s+="\0";break;case"":s+=t.substring(r,n+1);break;default:Zp()}r=n+2}return new Eg(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(t,n){this.seconds=t,this.nanoseconds=n}}class Iv{constructor(t,n,i){this.ownerId=t,this.allowTabSynchronization=n,this.leaseTimestampMs=i}}Iv.store="owner",Iv.key="owner";class Tv{constructor(t,n,i){this.userId=t,this.lastAcknowledgedBatchId=n,this.lastStreamToken=i}}Tv.store="mutationQueues",Tv.keyPath="userId";class Sv{constructor(t,n,i,e,s){this.userId=t,this.batchId=n,this.localWriteTimeMs=i,this.baseMutations=e,this.mutations=s}}Sv.store="mutations",Sv.keyPath="batchId",Sv.userMutationsIndex="userMutationsIndex",Sv.userMutationsKeyPath=["userId","batchId"];class Cv{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,n){return[t,yv(n)]}static key(t,n,i){return[t,yv(n),i]}}Cv.store="documentMutations",Cv.PLACEHOLDER=new Cv;class Av{constructor(t,n){this.path=t,this.readTime=n}}class Nv{constructor(t,n){this.path=t,this.version=n}}class Dv{constructor(t,n,i,e,s,r){this.unknownDocument=t,this.noDocument=n,this.document=i,this.hasCommittedMutations=e,this.readTime=s,this.parentPath=r}}Dv.store="remoteDocuments",Dv.readTimeIndex="readTimeIndex",Dv.readTimeIndexPath="readTime",Dv.collectionReadTimeIndex="collectionReadTimeIndex",Dv.collectionReadTimeIndexPath=["parentPath","readTime"];class Ov{constructor(t){this.byteSize=t}}Ov.store="remoteDocumentGlobal",Ov.key="remoteDocumentGlobalKey";class Rv{constructor(t,n,i,e,s,r,o){this.targetId=t,this.canonicalId=n,this.readTime=i,this.resumeToken=e,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=r,this.query=o}}Rv.store="targets",Rv.keyPath="targetId",Rv.queryTargetsIndexName="queryTargetsIndex",Rv.queryTargetsKeyPath=["canonicalId","targetId"];class Pv{constructor(t,n,i){this.targetId=t,this.path=n,this.sequenceNumber=i}}Pv.store="targetDocuments",Pv.keyPath=["targetId","path"],Pv.documentTargetsIndex="documentTargetsIndex",Pv.documentTargetsKeyPath=["path","targetId"];class Mv{constructor(t,n,i,e){this.highestTargetId=t,this.highestListenSequenceNumber=n,this.lastRemoteSnapshotVersion=i,this.targetCount=e}}Mv.key="targetGlobalKey",Mv.store="targetGlobal";class Lv{constructor(t,n){this.collectionId=t,this.parent=n}}Lv.store="collectionParents",Lv.keyPath=["collectionId","parent"];class jv{constructor(t,n,i,e){this.clientId=t,this.updateTimeMs=n,this.networkEnabled=i,this.inForeground=e}}jv.store="clientMetadata",jv.keyPath="clientId";class Fv{constructor(t,n,i){this.bundleId=t,this.createTime=n,this.version=i}}Fv.store="bundles",Fv.keyPath="bundleId";class $v{constructor(t,n,i){this.name=t,this.readTime=n,this.bundledQuery=i}}$v.store="namedQueries",$v.keyPath="name";const Uv=[Tv.store,Sv.store,Cv.store,Dv.store,Rv.store,Iv.store,Mv.store,Pv.store,jv.store,Ov.store,Lv.store,Fv.store,$v.store],Vv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Zp(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new zv(((i,e)=>{this.nextCallback=n=>{this.wrapSuccess(t,n).next(i,e)},this.catchCallback=t=>{this.wrapFailure(n,t).next(i,e)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof zv?n:zv.resolve(n)}catch(t){return zv.reject(t)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):zv.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):zv.reject(n)}static resolve(t){return new zv((n=>{n(t)}))}static reject(t){return new zv(((n,i)=>{i(t)}))}static waitFor(t){return new zv(((n,i)=>{let e=0,s=0,r=!1;t.forEach((t=>{++e,t.next((()=>{++s,r&&s===e&&n()}),(t=>i(t)))})),r=!0,s===e&&n()}))}static or(t){let n=zv.resolve(!1);for(const i of t)n=n.next((t=>t?zv.resolve(t):i()));return n}static forEach(t,n){const i=[];return t.forEach(((t,e)=>{i.push(n.call(this,t,e))})),this.waitFor(i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.It=new eg,this.transaction.oncomplete=()=>{this.It.resolve()},this.transaction.onabort=()=>{n.error?this.It.reject(new Gv(t,n.error)):this.It.resolve()},this.transaction.onerror=n=>{const i=Qv(n.target.error);this.It.reject(new Gv(t,i))}}static open(t,n,i,e){try{return new qv(n,t.transaction(e,i))}catch(t){throw new Gv(n,t)}}get At(){return this.It.promise}abort(t){t&&this.It.reject(t),this.aborted||(Jp("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(t){const n=this.transaction.objectStore(t);return new Jv(n)}}class Kv{constructor(t,n,i){this.name=t,this.version=n,this.Rt=i,12.2===Kv.Pt(ln())&&Yp("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return Jp("SimpleDb","Removing database:",t),Yv(window.indexedDB.deleteDatabase(t)).toPromise()}static bt(){if(!dn())return!1;if(Kv.vt())return!0;const t=ln(),n=Kv.Pt(t),i=0<n&&n<10,e=Kv.Vt(t),s=0<e&&e<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||i||s)}static vt(){var t;return"undefined"!=typeof process&&"YES"===(null===(t=process.env)||void 0===t?void 0:t.St)}static Dt(t,n){return t.store(n)}static Pt(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),i=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(i)}static Vt(t){const n=t.match(/Android ([\d.]+)/i),i=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(i)}async Ct(t){return this.db||(Jp("SimpleDb","Opening database:",this.name),this.db=await new Promise(((n,i)=>{const e=indexedDB.open(this.name,this.version);e.onsuccess=t=>{n(t.target.result)},e.onblocked=()=>{i(new Gv(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},e.onerror=n=>{const e=n.target.error;i("VersionError"===e.name?new ig(ng.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh."):"InvalidStateError"===e.name?new ig(ng.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+e):new Gv(t,e))},e.onupgradeneeded=t=>{Jp("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion),this.Rt.Nt(t.target.result,e.transaction,t.oldVersion,this.version).next((()=>{Jp("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.kt&&(this.db.onversionchange=t=>this.kt(t)),this.db}xt(t){this.kt=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,i,e){const s="readonly"===n;let r=0;for(;;){++r;try{this.db=await this.Ct(t);const n=qv.open(this.db,t,s?"readonly":"readwrite",i),r=e(n).catch((t=>(n.abort(t),zv.reject(t)))).toPromise();return r.catch((()=>{})),await n.At,r}catch(t){const n="FirebaseError"!==t.name&&r<3;if(Jp("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Wv{constructor(t){this.$t=t,this.Ft=!1,this.Ot=null}get isDone(){return this.Ft}get Mt(){return this.Ot}set cursor(t){this.$t=t}done(){this.Ft=!0}Lt(t){this.Ot=t}delete(){return Yv(this.$t.delete())}}class Gv extends ig{constructor(t,n){super(ng.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Hv(t){return"IndexedDbTransactionError"===t.name}class Jv{constructor(t){this.store=t}put(t,n){let i;return void 0!==n?(Jp("SimpleDb","PUT",this.store.name,t,n),i=this.store.put(n,t)):(Jp("SimpleDb","PUT",this.store.name,"<auto-key>",t),i=this.store.put(t)),Yv(i)}add(t){return Jp("SimpleDb","ADD",this.store.name,t,t),Yv(this.store.add(t))}get(t){return Yv(this.store.get(t)).next((n=>(void 0===n&&(n=null),Jp("SimpleDb","GET",this.store.name,t,n),n)))}delete(t){return Jp("SimpleDb","DELETE",this.store.name,t),Yv(this.store.delete(t))}count(){return Jp("SimpleDb","COUNT",this.store.name),Yv(this.store.count())}Bt(t,n){const i=this.cursor(this.options(t,n)),e=[];return this.Ut(i,((t,n)=>{e.push(n)})).next((()=>e))}qt(t,n){Jp("SimpleDb","DELETE ALL",this.store.name);const i=this.options(t,n);i.Kt=!1;const e=this.cursor(i);return this.Ut(e,((t,n,i)=>i.delete()))}jt(t,n){let i;n?i=t:(i={},n=t);const e=this.cursor(i);return this.Ut(e,n)}Qt(t){const n=this.cursor({});return new zv(((i,e)=>{n.onerror=t=>{const n=Qv(t.target.error);e(n)},n.onsuccess=n=>{const e=n.target.result;e?t(e.primaryKey,e.value).next((t=>{t?e.continue():i()})):i()}}))}Ut(t,n){const i=[];return new zv(((e,s)=>{t.onerror=t=>{s(t.target.error)},t.onsuccess=t=>{const s=t.target.result;if(!s)return void e();const r=new Wv(s),o=n(s.primaryKey,s.value,r);if(o instanceof zv){const t=o.catch((t=>(r.done(),zv.reject(t))));i.push(t)}r.isDone?e():null===r.Mt?s.continue():s.continue(r.Mt)}})).next((()=>zv.waitFor(i)))}options(t,n){let i;return void 0!==t&&("string"==typeof t?i=t:n=t),{index:i,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const i=this.store.index(t.index);return t.Kt?i.openKeyCursor(t.range,n):i.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function Yv(t){return new zv(((n,i)=>{t.onsuccess=t=>{n(t.target.result)},t.onerror=t=>{const n=Qv(t.target.error);i(n)}}))}let Xv=!1;function Qv(t){const n=Kv.Pt(ln());if(n>=12.2&&n<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const t=new ig("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Xv||(Xv=!0,setTimeout((()=>{throw t}),0)),t}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv extends Bv{constructor(t,n){super(),this.Wt=t,this.currentSequenceNumber=n}}function tb(t,n){return Kv.Dt(t.Wt,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(t,n,i,e){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=e}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let n=0;n<this.mutations.length;n++){const e=this.mutations[n];e.key.isEqual(t.key)&&ew(e,t,i[n])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&sw(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&sw(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((n=>{const i=t.get(n.key),e=i;this.applyToLocalView(e),i.isValidDocument()||e.convertToNoDocument(bg.min())}))}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),Nw())}isEqual(t){return this.batchId===t.batchId&&mg(this.mutations,t.mutations,((t,n)=>ow(t,n)))&&mg(this.baseMutations,t.baseMutations,((t,n)=>ow(t,n)))}}class ib{constructor(t,n,i,e){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=e}static from(t,n,i){tg(t.mutations.length===i.length);let e=Cw;const s=t.mutations;for(let t=0;t<s.length;t++)e=e.insert(s[t].key,i[t].version);return new ib(t,n,i,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(t,n,i,e,s=bg.min(),r=bg.min(),o=Cg.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=e,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new eb(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new eb(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new eb(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(t){this.Gt=t}}function rb(t,n){if(n.document)return function(t,n,i){const e=Qw(t,n.name),s=Hw(n.updateTime),r=new Zg({mapValue:{fields:n.fields}}),o=nm.newFoundDocument(e,s,r);return i&&o.setHasCommittedMutations(),i?o.setHasCommittedMutations():o}(t.Gt,n.document,!!n.hasCommittedMutations);if(n.noDocument){const t=Fg.fromSegments(n.noDocument.path),i=ub(n.noDocument.readTime),e=nm.newNoDocument(t,i);return n.hasCommittedMutations?e.setHasCommittedMutations():e}if(n.unknownDocument){const t=Fg.fromSegments(n.unknownDocument.path),i=ub(n.unknownDocument.version);return nm.newUnknownDocument(t,i)}return Zp()}function ob(t,n,i){const e=lb(i),s=n.key.path.popLast().toArray();if(n.isFoundDocument()){const i=function(t,n){return{name:Xw(t,n.key),fields:n.data.value.mapValue.fields,updateTime:Kw(t,n.version.toTimestamp())}}(t.Gt,n);return new Dv(null,null,i,n.hasCommittedMutations,e,s)}if(n.isNoDocument()){const t=n.key.path.toArray(),i=ab(n.version),r=n.hasCommittedMutations;return new Dv(null,new Av(t,i),null,r,e,s)}if(n.isUnknownDocument()){const t=n.key.path.toArray(),i=ab(n.version);return new Dv(new Nv(t,i),null,null,!0,e,s)}return Zp()}function lb(t){const n=t.toTimestamp();return[n.seconds,n.nanoseconds]}function ab(t){const n=t.toTimestamp();return new Ev(n.seconds,n.nanoseconds)}function ub(t){const n=new vg(t.seconds,t.nanoseconds);return bg.fromTimestamp(n)}function hb(t,n){const i=(n.baseMutations||[]).map((n=>rv(t.Gt,n)));for(let t=0;t<n.mutations.length-1;++t){const i=n.mutations[t];t+1<n.mutations.length&&void 0!==n.mutations[t+1].transform&&(i.updateTransforms=n.mutations[t+1].transform.fieldTransforms,n.mutations.splice(t+1,1),++t)}const e=n.mutations.map((n=>rv(t.Gt,n))),s=vg.fromMillis(n.localWriteTimeMs);return new nb(n.batchId,s,i,e)}function cb(t){const n=ub(t.readTime),i=void 0!==t.lastLimboFreeSnapshotVersion?ub(t.lastLimboFreeSnapshotVersion):bg.min();let e;var s;return void 0!==t.query.documents?(tg(1===(s=t.query).documents.length),e=Nm(_m(tv(s.documents[0])))):e=function(t){return Nm(av(t))}(t.query),new eb(e,t.targetId,0,t.lastListenSequenceNumber,n,i,Cg.fromBase64String(t.resumeToken))}function db(t,n){const i=ab(n.snapshotVersion),e=ab(n.lastLimboFreeSnapshotVersion);let s;s=om(n.target)?ov(t.Gt,n.target):lv(t.Gt,n.target);const r=n.resumeToken.toBase64();return new Rv(n.targetId,sm(n.target),i,r,n.sequenceNumber,e,s)}function fb(t){const n=av({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Dm(n,n.limit,"L"):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{getBundleMetadata(t,n){return gb(t).get(n).next((t=>{if(t)return{id:(n=t).bundleId,createTime:ub(n.createTime),version:n.version};var n}))}saveBundleMetadata(t,n){return gb(t).put({bundleId:(i=n).id,createTime:ab(Hw(i.createTime)),version:i.version});var i}getNamedQuery(t,n){return mb(t).get(n).next((t=>{if(t)return{name:(n=t).name,query:fb(n.bundledQuery),readTime:ub(n.readTime)};var n}))}saveNamedQuery(t,n){return mb(t).put(function(t){return{name:t.name,readTime:ab(Hw(t.readTime)),bundledQuery:t.bundledQuery}}(n))}}function gb(t){return tb(t,Fv.store)}function mb(t){return tb(t,$v.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(){this.zt=new vb}addToCollectionParentIndex(t,n){return this.zt.add(n),zv.resolve()}getCollectionParents(t,n){return zv.resolve(this.zt.getEntries(n))}}class vb{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),e=this.index[n]||new kw(Eg.comparator),s=!e.has(i);return this.index[n]=e.add(i),s}has(t){const n=t.lastSegment(),i=t.popLast(),e=this.index[n];return e&&e.has(i)}getEntries(t){return(this.index[t]||new kw(Eg.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(){this.Ht=new vb}addToCollectionParentIndex(t,n){if(!this.Ht.has(n)){const i=n.lastSegment(),e=n.popLast();t.addOnCommittedListener((()=>{this.Ht.add(n)}));const s={collectionId:i,parent:yv(e)};return yb(t).put(s)}return zv.resolve()}getCollectionParents(t,n){const i=[],e=IDBKeyRange.bound([n,""],[wg(n),""],!1,!0);return yb(t).Bt(e).next((t=>{for(const e of t){if(e.collectionId!==n)break;i.push(_v(e.parent))}return i}))}}function yb(t){return tb(t,Lv.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class kb{constructor(t,n,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}static withCacheSize(t){return new kb(t,kb.DEFAULT_COLLECTION_PERCENTILE,kb.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t,n,i){const e=t.store(Sv.store),s=t.store(Cv.store),r=[],o=IDBKeyRange.only(i.batchId);let l=0;const a=e.jt({range:o},((t,n,i)=>(l++,i.delete())));r.push(a.next((()=>{tg(1===l)})));const u=[];for(const t of i.mutations){const e=Cv.key(n,t.key.path,i.batchId);r.push(s.delete(e)),u.push(t.key)}return zv.waitFor(r).next((()=>u))}function Eb(t){if(!t)return 0;let n;if(t.document)n=t.document;else if(t.unknownDocument)n=t.unknownDocument;else{if(!t.noDocument)throw Zp();n=t.noDocument}return JSON.stringify(n).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kb.DEFAULT_COLLECTION_PERCENTILE=10,kb.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kb.DEFAULT=new kb(41943040,kb.DEFAULT_COLLECTION_PERCENTILE,kb.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kb.DISABLED=new kb(-1,0,0);class Ib{constructor(t,n,i,e){this.userId=t,this.k=n,this.Jt=i,this.referenceDelegate=e,this.Yt={}}static Xt(t,n,i,e){tg(""!==t.uid);const s=t.isAuthenticated()?t.uid:"";return new Ib(s,n,i,e)}checkEmpty(t){let n=!0;const i=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Sb(t).jt({index:Sv.userMutationsIndex,range:i},((t,i,e)=>{n=!1,e.done()})).next((()=>n))}addMutationBatch(t,n,i,e){const s=Cb(t),r=Sb(t);return r.add({}).next((o=>{tg("number"==typeof o);const l=new nb(o,n,i,e),a=function(t,n,i){const e=i.baseMutations.map((n=>sv(t.Gt,n))),s=i.mutations.map((n=>sv(t.Gt,n)));return new Sv(n,i.batchId,i.localWriteTime.toMillis(),e,s)}(this.k,this.userId,l),u=[];let h=new kw(((t,n)=>gg(t.canonicalString(),n.canonicalString())));for(const t of e){const n=Cv.key(this.userId,t.key.path,o);h=h.add(t.key.path.popLast()),u.push(r.put(a)),u.push(s.put(n,Cv.PLACEHOLDER))}return h.forEach((n=>{u.push(this.Jt.addToCollectionParentIndex(t,n))})),t.addOnCommittedListener((()=>{this.Yt[o]=l.keys()})),zv.waitFor(u).next((()=>l))}))}lookupMutationBatch(t,n){return Sb(t).get(n).next((t=>t?(tg(t.userId===this.userId),hb(this.k,t)):null))}Zt(t,n){return this.Yt[n]?zv.resolve(this.Yt[n]):this.lookupMutationBatch(t,n).next((t=>{if(t){const i=t.keys();return this.Yt[n]=i,i}return null}))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,e=IDBKeyRange.lowerBound([this.userId,i]);let s=null;return Sb(t).jt({index:Sv.userMutationsIndex,range:e},((t,n,e)=>{n.userId===this.userId&&(tg(n.batchId>=i),s=hb(this.k,n)),e.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(t){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let i=-1;return Sb(t).jt({index:Sv.userMutationsIndex,range:n,reverse:!0},((t,n,e)=>{i=n.batchId,e.done()})).next((()=>i))}getAllMutationBatches(t){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Sb(t).Bt(Sv.userMutationsIndex,n).next((t=>t.map((t=>hb(this.k,t)))))}getAllMutationBatchesAffectingDocumentKey(t,n){const i=Cv.prefixForPath(this.userId,n.path),e=IDBKeyRange.lowerBound(i),s=[];return Cb(t).jt({range:e},((i,e,r)=>{const[o,l,a]=i,u=_v(l);if(o===this.userId&&n.path.isEqual(u))return Sb(t).get(a).next((t=>{if(!t)throw Zp();tg(t.userId===this.userId),s.push(hb(this.k,t))}));r.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new kw(gg);const e=[];return n.forEach((n=>{const s=Cv.prefixForPath(this.userId,n.path),r=IDBKeyRange.lowerBound(s),o=Cb(t).jt({range:r},((t,e,s)=>{const[r,o,l]=t,a=_v(o);r===this.userId&&n.path.isEqual(a)?i=i.add(l):s.done()}));e.push(o)})),zv.waitFor(e).next((()=>this.te(t,i)))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,e=i.length+1,s=Cv.prefixForPath(this.userId,i),r=IDBKeyRange.lowerBound(s);let o=new kw(gg);return Cb(t).jt({range:r},((t,n,s)=>{const[r,l,a]=t,u=_v(l);r===this.userId&&i.isPrefixOf(u)?u.length===e&&(o=o.add(a)):s.done()})).next((()=>this.te(t,o)))}te(t,n){const i=[],e=[];return n.forEach((n=>{e.push(Sb(t).get(n).next((t=>{if(null===t)throw Zp();tg(t.userId===this.userId),i.push(hb(this.k,t))})))})),zv.waitFor(e).next((()=>i))}removeMutationBatch(t,n){return _b(t.Wt,this.userId,n).next((i=>(t.addOnCommittedListener((()=>{this.ee(n.batchId)})),zv.forEach(i,(n=>this.referenceDelegate.markPotentiallyOrphaned(t,n))))))}ee(t){delete this.Yt[t]}performConsistencyCheck(t){return this.checkEmpty(t).next((n=>{if(!n)return zv.resolve();const i=IDBKeyRange.lowerBound(Cv.prefixForUser(this.userId)),e=[];return Cb(t).jt({range:i},((t,n,i)=>{if(t[0]===this.userId){const n=_v(t[1]);e.push(n)}else i.done()})).next((()=>{tg(0===e.length)}))}))}containsKey(t,n){return Tb(t,this.userId,n)}ne(t){return Ab(t).get(this.userId).next((t=>t||new Tv(this.userId,-1,"")))}}function Tb(t,n,i){const e=Cv.prefixForPath(n,i.path),s=e[1],r=IDBKeyRange.lowerBound(e);let o=!1;return Cb(t).jt({range:r,Kt:!0},((t,i,e)=>{const[r,l,a]=t;r===n&&l===s&&(o=!0),e.done()})).next((()=>o))}function Sb(t){return tb(t,Sv.store)}function Cb(t){return tb(t,Cv.store)}function Ab(t){return tb(t,Tv.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new Nb(0)}static re(){return new Nb(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(t,n){this.referenceDelegate=t,this.k=n}allocateTargetId(t){return this.oe(t).next((n=>{const i=new Nb(n.highestTargetId);return n.highestTargetId=i.next(),this.ae(t,n).next((()=>n.highestTargetId))}))}getLastRemoteSnapshotVersion(t){return this.oe(t).next((t=>bg.fromTimestamp(new vg(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(t){return this.oe(t).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(t,n,i){return this.oe(t).next((e=>(e.highestListenSequenceNumber=n,i&&(e.lastRemoteSnapshotVersion=i.toTimestamp()),n>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=n),this.ae(t,e))))}addTargetData(t,n){return this.ce(t,n).next((()=>this.oe(t).next((i=>(i.targetCount+=1,this.ue(n,i),this.ae(t,i))))))}updateTargetData(t,n){return this.ce(t,n)}removeTargetData(t,n){return this.removeMatchingKeysForTargetId(t,n.targetId).next((()=>Ob(t).delete(n.targetId))).next((()=>this.oe(t))).next((n=>(tg(n.targetCount>0),n.targetCount-=1,this.ae(t,n))))}removeTargets(t,n,i){let e=0;const s=[];return Ob(t).jt(((r,o)=>{const l=cb(o);l.sequenceNumber<=n&&null===i.get(l.targetId)&&(e++,s.push(this.removeTargetData(t,l)))})).next((()=>zv.waitFor(s))).next((()=>e))}forEachTarget(t,n){return Ob(t).jt(((t,i)=>{const e=cb(i);n(e)}))}oe(t){return Rb(t).get(Mv.key).next((t=>(tg(null!==t),t)))}ae(t,n){return Rb(t).put(Mv.key,n)}ce(t,n){return Ob(t).put(db(this.k,n))}ue(t,n){let i=!1;return t.targetId>n.highestTargetId&&(n.highestTargetId=t.targetId,i=!0),t.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=t.sequenceNumber,i=!0),i}getTargetCount(t){return this.oe(t).next((t=>t.targetCount))}getTargetData(t,n){const i=sm(n),e=IDBKeyRange.bound([i,Number.NEGATIVE_INFINITY],[i,Number.POSITIVE_INFINITY]);let s=null;return Ob(t).jt({range:e,index:Rv.queryTargetsIndexName},((t,i,e)=>{const r=cb(i);rm(n,r.target)&&(s=r,e.done())})).next((()=>s))}addMatchingKeys(t,n,i){const e=[],s=Pb(t);return n.forEach((n=>{const r=yv(n.path);e.push(s.put(new Pv(i,r))),e.push(this.referenceDelegate.addReference(t,i,n))})),zv.waitFor(e)}removeMatchingKeys(t,n,i){const e=Pb(t);return zv.forEach(n,(n=>{const s=yv(n.path);return zv.waitFor([e.delete([i,s]),this.referenceDelegate.removeReference(t,i,n)])}))}removeMatchingKeysForTargetId(t,n){const i=Pb(t),e=IDBKeyRange.bound([n],[n+1],!1,!0);return i.delete(e)}getMatchingKeysForTargetId(t,n){const i=IDBKeyRange.bound([n],[n+1],!1,!0),e=Pb(t);let s=Nw();return e.jt({range:i,Kt:!0},(t=>{const n=_v(t[1]),i=new Fg(n);s=s.add(i)})).next((()=>s))}containsKey(t,n){const i=yv(n.path),e=IDBKeyRange.bound([i],[wg(i)],!1,!0);let s=0;return Pb(t).jt({index:Pv.documentTargetsIndex,Kt:!0,range:e},(([t,n],i,e)=>{0!==t&&(s++,e.done())})).next((()=>s>0))}Et(t,n){return Ob(t).get(n).next((t=>t?cb(t):null))}}function Ob(t){return tb(t,Rv.store)}function Rb(t){return tb(t,Mv.store)}function Pb(t){return tb(t,Pv.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mb(t){if(t.code!==ng.FAILED_PRECONDITION||t.message!==Vv)throw t;Jp("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb([t,n],[i,e]){const s=gg(t,i);return 0===s?gg(n,e):s}class jb{constructor(t){this.he=t,this.buffer=new kw(Lb),this.le=0}fe(){return++this.le}de(t){const n=[t,this.fe()];if(this.buffer.size<this.he)this.buffer=this.buffer.add(n);else{const t=this.buffer.last();Lb(n,t)<0&&(this.buffer=this.buffer.delete(t).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Fb{constructor(t,n){this.garbageCollector=t,this.asyncQueue=n,this.we=!1,this._e=null}start(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.me(t)}stop(){this._e&&(this._e.cancel(),this._e=null)}get started(){return null!==this._e}me(t){const n=this.we?3e5:6e4;Jp("LruGarbageCollector",`Garbage collection scheduled in ${n}ms`),this._e=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",n,(async()=>{this._e=null,this.we=!0;try{await t.collectGarbage(this.garbageCollector)}catch(t){Hv(t)?Jp("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Mb(t)}await this.me(t)}))}}class $b{constructor(t,n){this.ge=t,this.params=n}calculateTargetCount(t,n){return this.ge.ye(t).next((t=>Math.floor(n/100*t)))}nthSequenceNumber(t,n){if(0===n)return zv.resolve(dg.I);const i=new jb(n);return this.ge.forEachTarget(t,(t=>i.de(t.sequenceNumber))).next((()=>this.ge.pe(t,(t=>i.de(t))))).next((()=>i.maxValue))}removeTargets(t,n,i){return this.ge.removeTargets(t,n,i)}removeOrphanedDocuments(t,n){return this.ge.removeOrphanedDocuments(t,n)}collect(t,n){return-1===this.params.cacheSizeCollectionThreshold?(Jp("LruGarbageCollector","Garbage collection skipped; disabled"),zv.resolve(xb)):this.getCacheSize(t).next((i=>i<this.params.cacheSizeCollectionThreshold?(Jp("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xb):this.Te(t,n)))}getCacheSize(t){return this.ge.getCacheSize(t)}Te(t,n){let i,e,s,r,o,l,a;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((n=>(n>this.params.maximumSequenceNumbersToCollect?(Jp("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${n}`),e=this.params.maximumSequenceNumbersToCollect):e=n,r=Date.now(),this.nthSequenceNumber(t,e)))).next((e=>(i=e,o=Date.now(),this.removeTargets(t,i,n)))).next((n=>(s=n,l=Date.now(),this.removeOrphanedDocuments(t,i)))).next((t=>(a=Date.now(),Hp()<=jn.DEBUG&&Jp("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${r-u}ms\n\tDetermined least recently used ${e} in `+(o-r)+"ms\n"+`\tRemoved ${s} targets in `+(l-o)+"ms\n"+`\tRemoved ${t} documents in `+(a-l)+"ms\n"+`Total Duration: ${a-u}ms`),zv.resolve({didRun:!0,sequenceNumbersCollected:e,targetsRemoved:s,documentsRemoved:t}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(t,n){this.db=t,this.garbageCollector=function(t,n){return new $b(t,n)}(this,n)}ye(t){const n=this.Ee(t);return this.db.getTargetCache().getTargetCount(t).next((t=>n.next((n=>t+n))))}Ee(t){let n=0;return this.pe(t,(()=>{n++})).next((()=>n))}forEachTarget(t,n){return this.db.getTargetCache().forEachTarget(t,n)}pe(t,n){return this.Ie(t,((t,i)=>n(i)))}addReference(t,n,i){return Vb(t,i)}removeReference(t,n,i){return Vb(t,i)}removeTargets(t,n,i){return this.db.getTargetCache().removeTargets(t,n,i)}markPotentiallyOrphaned(t,n){return Vb(t,n)}Ae(t,n){return function(t,n){let i=!1;return Ab(t).Qt((e=>Tb(t,e,n).next((t=>(t&&(i=!0),zv.resolve(!t)))))).next((()=>i))}(t,n)}removeOrphanedDocuments(t,n){const i=this.db.getRemoteDocumentCache().newChangeBuffer(),e=[];let s=0;return this.Ie(t,((r,o)=>{if(o<=n){const n=this.Ae(t,r).next((n=>{if(!n)return s++,i.getEntry(t,r).next((()=>(i.removeEntry(r),Pb(t).delete([0,yv(r.path)]))))}));e.push(n)}})).next((()=>zv.waitFor(e))).next((()=>i.apply(t))).next((()=>s))}removeTarget(t,n){const i=n.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,i)}updateLimboDocument(t,n){return Vb(t,n)}Ie(t,n){const i=Pb(t);let e,s=dg.I;return i.jt({index:Pv.documentTargetsIndex},(([t,i],{path:r,sequenceNumber:o})=>{0===t?(s!==dg.I&&n(new Fg(_v(e)),s),s=o,e=r):s=dg.I})).next((()=>{s!==dg.I&&n(new Fg(_v(e)),s)}))}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Vb(t,n){return Pb(t).put(function(t,n){return new Pv(0,yv(t.path),n)}(n,t.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={}}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0!==i)for(const[n,e]of i)if(this.equalsFn(n,t))return e}has(t){return void 0!==this.get(t)}set(t,n){const i=this.mapKeyFn(t),e=this.inner[i];if(void 0!==e){for(let i=0;i<e.length;i++)if(this.equalsFn(e[i][0],t))return void(e[i]=[t,n]);e.push([t,n])}else this.inner[i]=[[t,n]]}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return!1;for(let e=0;e<i.length;e++)if(this.equalsFn(i[e][0],t))return 1===i.length?delete this.inner[n]:i.splice(e,1),!0;return!1}forEach(t){xg(this.inner,((n,i)=>{for(const[n,e]of i)t(n,e)}))}isEmpty(){return kg(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(){this.changes=new Bb((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}getReadTime(t){const n=this.changes.get(t);return n?n.readTime:bg.min()}addEntry(t,n){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:n})}removeEntry(t,n=null){this.assertNotApplied(),this.changes.set(t,{document:nm.newInvalidDocument(t),readTime:n})}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return void 0!==i?zv.resolve(i.document):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(t,n){this.k=t,this.Jt=n}addEntry(t,n,i){return Gb(t).put(Hb(n),i)}removeEntry(t,n){const i=Gb(t),e=Hb(n);return i.delete(e)}updateMetadata(t,n){return this.getMetadata(t).next((i=>(i.byteSize+=n,this.Re(t,i))))}getEntry(t,n){return Gb(t).get(Hb(n)).next((t=>this.Pe(n,t)))}be(t,n){return Gb(t).get(Hb(n)).next((t=>({document:this.Pe(n,t),size:Eb(t)})))}getEntries(t,n){let i=Iw();return this.ve(t,n,((t,n)=>{const e=this.Pe(t,n);i=i.insert(t,e)})).next((()=>i))}Ve(t,n){let i=Iw(),e=new bw(Fg.comparator);return this.ve(t,n,((t,n)=>{const s=this.Pe(t,n);i=i.insert(t,s),e=e.insert(t,Eb(n))})).next((()=>({documents:i,Se:e})))}ve(t,n,i){if(n.isEmpty())return zv.resolve();const e=IDBKeyRange.bound(n.first().path.toArray(),n.last().path.toArray()),s=n.getIterator();let r=s.getNext();return Gb(t).jt({range:e},((t,n,e)=>{const o=Fg.fromSegments(t);for(;r&&Fg.comparator(r,o)<0;)i(r,null),r=s.getNext();r&&r.isEqual(o)&&(i(r,n),r=s.hasNext()?s.getNext():null),r?e.Lt(r.path.toArray()):e.done()})).next((()=>{for(;r;)i(r,null),r=s.hasNext()?s.getNext():null}))}getDocumentsMatchingQuery(t,n,i){let e=Iw();const s=n.path.length+1,r={};if(i.isEqual(bg.min())){const t=n.path.toArray();r.range=IDBKeyRange.lowerBound(t)}else{const t=n.path.toArray(),e=lb(i);r.range=IDBKeyRange.lowerBound([t,e],!0),r.index=Dv.collectionReadTimeIndex}return Gb(t).jt(r,((t,i,r)=>{if(t.length!==s)return;const o=rb(this.k,i);n.path.isPrefixOf(o.key.path)?Mm(n,o)&&(e=e.insert(o.key,o)):r.done()})).next((()=>e))}newChangeBuffer(t){return new Kb(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next((t=>t.byteSize))}getMetadata(t){return Wb(t).get(Ov.key).next((t=>(tg(!!t),t)))}Re(t,n){return Wb(t).put(Ov.key,n)}Pe(t,n){if(n){const t=rb(this.k,n);if(!t.isNoDocument()||!t.version.isEqual(bg.min()))return t}return nm.newInvalidDocument(t)}}class Kb extends zb{constructor(t,n){super(),this.De=t,this.trackRemovals=n,this.Ce=new Bb((t=>t.toString()),((t,n)=>t.isEqual(n)))}applyChanges(t){const n=[];let i=0,e=new kw(((t,n)=>gg(t.canonicalString(),n.canonicalString())));return this.changes.forEach(((s,r)=>{const o=this.Ce.get(s);if(r.document.isValidDocument()){const l=ob(this.De.k,r.document,this.getReadTime(s));e=e.add(s.path.popLast());const a=Eb(l);i+=a-o,n.push(this.De.addEntry(t,s,l))}else if(i-=o,this.trackRemovals){const i=ob(this.De.k,nm.newNoDocument(s,bg.min()),this.getReadTime(s));n.push(this.De.addEntry(t,s,i))}else n.push(this.De.removeEntry(t,s))})),e.forEach((i=>{n.push(this.De.Jt.addToCollectionParentIndex(t,i))})),n.push(this.De.updateMetadata(t,i)),zv.waitFor(n)}getFromCache(t,n){return this.De.be(t,n).next((t=>(this.Ce.set(n,t.size),t.document)))}getAllFromCache(t,n){return this.De.Ve(t,n).next((({documents:t,Se:n})=>(n.forEach(((t,n)=>{this.Ce.set(t,n)})),t)))}}function Wb(t){return tb(t,Ov.store)}function Gb(t){return tb(t,Dv.store)}function Hb(t){return t.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(t){this.k=t}Nt(t,n,i,e){tg(i<e&&i>=0&&e<=11);const s=new qv("createOrUpgrade",n);i<1&&e>=1&&(function(t){t.createObjectStore(Iv.store)}(t),function(t){t.createObjectStore(Tv.store,{keyPath:Tv.keyPath}),t.createObjectStore(Sv.store,{keyPath:Sv.keyPath,autoIncrement:!0}).createIndex(Sv.userMutationsIndex,Sv.userMutationsKeyPath,{unique:!0}),t.createObjectStore(Cv.store)}(t),Yb(t),function(t){t.createObjectStore(Dv.store)}(t));let r=zv.resolve();return i<3&&e>=3&&(0!==i&&(function(t){t.deleteObjectStore(Pv.store),t.deleteObjectStore(Rv.store),t.deleteObjectStore(Mv.store)}(t),Yb(t)),r=r.next((()=>function(t){const n=t.store(Mv.store),i=new Mv(0,0,bg.min().toTimestamp(),0);return n.put(Mv.key,i)}(s)))),i<4&&e>=4&&(0!==i&&(r=r.next((()=>function(t,n){return n.store(Sv.store).Bt().next((i=>{t.deleteObjectStore(Sv.store),t.createObjectStore(Sv.store,{keyPath:Sv.keyPath,autoIncrement:!0}).createIndex(Sv.userMutationsIndex,Sv.userMutationsKeyPath,{unique:!0});const e=n.store(Sv.store),s=i.map((t=>e.put(t)));return zv.waitFor(s)}))}(t,s)))),r=r.next((()=>{!function(t){t.createObjectStore(jv.store,{keyPath:jv.keyPath})}(t)}))),i<5&&e>=5&&(r=r.next((()=>this.Ne(s)))),i<6&&e>=6&&(r=r.next((()=>(function(t){t.createObjectStore(Ov.store)}(t),this.ke(s))))),i<7&&e>=7&&(r=r.next((()=>this.xe(s)))),i<8&&e>=8&&(r=r.next((()=>this.$e(t,s)))),i<9&&e>=9&&(r=r.next((()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t),function(t){const n=t.objectStore(Dv.store);n.createIndex(Dv.readTimeIndex,Dv.readTimeIndexPath,{unique:!1}),n.createIndex(Dv.collectionReadTimeIndex,Dv.collectionReadTimeIndexPath,{unique:!1})}(n)}))),i<10&&e>=10&&(r=r.next((()=>this.Fe(s)))),i<11&&e>=11&&(r=r.next((()=>{!function(t){t.createObjectStore(Fv.store,{keyPath:Fv.keyPath})}(t),function(t){t.createObjectStore($v.store,{keyPath:$v.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}))),r}ke(t){let n=0;return t.store(Dv.store).jt(((t,i)=>{n+=Eb(i)})).next((()=>{const i=new Ov(n);return t.store(Ov.store).put(Ov.key,i)}))}Ne(t){const n=t.store(Tv.store),i=t.store(Sv.store);return n.Bt().next((n=>zv.forEach(n,(n=>{const e=IDBKeyRange.bound([n.userId,-1],[n.userId,n.lastAcknowledgedBatchId]);return i.Bt(Sv.userMutationsIndex,e).next((i=>zv.forEach(i,(i=>{tg(i.userId===n.userId);const e=hb(this.k,i);return _b(t,n.userId,e).next((()=>{}))}))))}))))}xe(t){const n=t.store(Pv.store),i=t.store(Dv.store);return t.store(Mv.store).get(Mv.key).next((t=>{const e=[];return i.jt((i=>{const s=new Eg(i),r=function(t){return[0,yv(t)]}(s);e.push(n.get(r).next((i=>i?zv.resolve():(i=>n.put(new Pv(0,yv(i),t.highestListenSequenceNumber)))(s))))})).next((()=>zv.waitFor(e)))}))}$e(t,n){t.createObjectStore(Lv.store,{keyPath:Lv.keyPath});const i=n.store(Lv.store),e=new vb,s=t=>{if(e.add(t)){const n=t.lastSegment(),e=t.popLast();return i.put({collectionId:n,parent:yv(e)})}};return n.store(Dv.store).jt({Kt:!0},(t=>{const n=new Eg(t);return s(n.popLast())})).next((()=>n.store(Cv.store).jt({Kt:!0},(([t,n,i])=>{const e=_v(n);return s(e.popLast())}))))}Fe(t){const n=t.store(Rv.store);return n.jt(((t,i)=>{const e=cb(i),s=db(this.k,e);return n.put(s)}))}}function Yb(t){t.createObjectStore(Pv.store,{keyPath:Pv.keyPath}).createIndex(Pv.documentTargetsIndex,Pv.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(Rv.store,{keyPath:Rv.keyPath}).createIndex(Rv.queryTargetsIndexName,Rv.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(Mv.store)}const Xb="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Qb{constructor(t,n,i,e,s,r,o,l,a,u){if(this.allowTabSynchronization=t,this.persistenceKey=n,this.clientId=i,this.Oe=s,this.window=r,this.document=o,this.Me=a,this.Le=u,this.Be=null,this.Ue=!1,this.isPrimary=!1,this.networkEnabled=!0,this.qe=null,this.inForeground=!1,this.Ke=null,this.je=null,this.Qe=Number.NEGATIVE_INFINITY,this.We=()=>Promise.resolve(),!Qb.bt())throw new ig(ng.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ub(this,e),this.Ge=n+"main",this.k=new sb(l),this.ze=new Kv(this.Ge,11,new Jb(this.k)),this.He=new Db(this.referenceDelegate,this.k),this.Jt=new bb,this.Je=function(t,n){return new qb(t,n)}(this.k,this.Jt),this.Ye=new pb,this.window&&this.window.localStorage?this.Xe=this.window.localStorage:(this.Xe=null,!1===u&&Yp("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ze().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ig(ng.FAILED_PRECONDITION,Xb);return this.tn(),this.en(),this.nn(),this.runTransaction("getHighestListenSequenceNumber","readonly",(t=>this.He.getHighestSequenceNumber(t)))})).then((t=>{this.Be=new dg(t,this.Me)})).then((()=>{this.Ue=!0})).catch((t=>(this.ze&&this.ze.close(),Promise.reject(t))))}sn(t){return this.We=async n=>{if(this.started)return t(n)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.ze.xt((async n=>{null===n.newVersion&&await t()}))}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Oe.enqueueAndForget((async()=>{this.started&&await this.Ze()})))}Ze(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(t=>ty(t).put(new jv(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next((()=>{if(this.isPrimary)return this.rn(t).next((t=>{t||(this.isPrimary=!1,this.Oe.enqueueRetryable((()=>this.We(!1))))}))})).next((()=>this.on(t))).next((n=>this.isPrimary&&!n?this.an(t).next((()=>!1)):!!n&&this.cn(t).next((()=>!0)))))).catch((t=>{if(Hv(t))return Jp("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return Jp("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1})).then((t=>{this.isPrimary!==t&&this.Oe.enqueueRetryable((()=>this.We(t))),this.isPrimary=t}))}rn(t){return Zb(t).get(Iv.key).next((t=>zv.resolve(this.un(t))))}hn(t){return ty(t).delete(this.clientId)}async ln(){if(this.isPrimary&&!this.fn(this.Qe,18e5)){this.Qe=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=tb(t,jv.store);return n.Bt().next((t=>{const i=this.dn(t,18e5),e=t.filter((t=>-1===i.indexOf(t)));return zv.forEach(e,(t=>n.delete(t.clientId))).next((()=>e))}))})).catch((()=>[]));if(this.Xe)for(const n of t)this.Xe.removeItem(this.wn(n.clientId))}}nn(){this.je=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ze().then((()=>this.ln())).then((()=>this.nn()))))}un(t){return!!t&&t.ownerId===this.clientId}on(t){return this.Le?zv.resolve(!0):Zb(t).get(Iv.key).next((n=>{if(null!==n&&this.fn(n.leaseTimestampMs,5e3)&&!this._n(n.ownerId)){if(this.un(n)&&this.networkEnabled)return!0;if(!this.un(n)){if(!n.allowTabSynchronization)throw new ig(ng.FAILED_PRECONDITION,Xb);return!1}}return!(!this.networkEnabled||!this.inForeground)||ty(t).Bt().next((t=>void 0===this.dn(t,5e3).find((t=>{if(this.clientId!==t.clientId){const n=!this.inForeground&&t.inForeground,i=this.networkEnabled===t.networkEnabled;if(!this.networkEnabled&&t.networkEnabled||n&&i)return!0}return!1}))))})).next((t=>(this.isPrimary!==t&&Jp("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.Ue=!1,this.mn(),this.je&&(this.je.cancel(),this.je=null),this.gn(),this.yn(),await this.ze.runTransaction("shutdown","readwrite",[Iv.store,jv.store],(t=>{const n=new Zv(t,dg.I);return this.an(n).next((()=>this.hn(n)))})),this.ze.close(),this.pn()}dn(t,n){return t.filter((t=>this.fn(t.updateTimeMs,n)&&!this._n(t.clientId)))}Tn(){return this.runTransaction("getActiveClients","readonly",(t=>ty(t).Bt().next((t=>this.dn(t,18e5).map((t=>t.clientId))))))}get started(){return this.Ue}getMutationQueue(t){return Ib.Xt(t,this.k,this.Jt,this.referenceDelegate)}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getIndexManager(){return this.Jt}getBundleCache(){return this.Ye}runTransaction(t,n,i){let e;return Jp("IndexedDbPersistence","Starting transaction:",t),this.ze.runTransaction(t,"readonly"===n?"readonly":"readwrite",Uv,(s=>(e=new Zv(s,this.Be?this.Be.next():dg.I),"readwrite-primary"===n?this.rn(e).next((t=>!!t||this.on(e))).next((n=>{if(!n)throw Yp(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable((()=>this.We(!1))),new ig(ng.FAILED_PRECONDITION,Vv);return i(e)})).next((t=>this.cn(e).next((()=>t)))):this.En(e).next((()=>i(e)))))).then((t=>(e.raiseOnCommittedEvent(),t)))}En(t){return Zb(t).get(Iv.key).next((t=>{if(null!==t&&this.fn(t.leaseTimestampMs,5e3)&&!this._n(t.ownerId)&&!this.un(t)&&!(this.Le||this.allowTabSynchronization&&t.allowTabSynchronization))throw new ig(ng.FAILED_PRECONDITION,Xb)}))}cn(t){const n=new Iv(this.clientId,this.allowTabSynchronization,Date.now());return Zb(t).put(Iv.key,n)}static bt(){return Kv.bt()}an(t){const n=Zb(t);return n.get(Iv.key).next((t=>this.un(t)?(Jp("IndexedDbPersistence","Releasing primary lease."),n.delete(Iv.key)):zv.resolve()))}fn(t,n){const i=Date.now();return!(t<i-n||t>i&&(Yp(`Detected an update time that is in the future: ${t} > ${i}`),1))}tn(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ke=()=>{this.Oe.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.Ze())))},this.document.addEventListener("visibilitychange",this.Ke),this.inForeground="visible"===this.document.visibilityState)}gn(){this.Ke&&(this.document.removeEventListener("visibilitychange",this.Ke),this.Ke=null)}en(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.qe=()=>{this.mn(),!function(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&navigator.appVersion.match(/Version\/1[45]/)&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.qe))}yn(){this.qe&&(this.window.removeEventListener("pagehide",this.qe),this.qe=null)}_n(t){var n;try{const i=null!==(null===(n=this.Xe)||void 0===n?void 0:n.getItem(this.wn(t)));return Jp("IndexedDbPersistence",`Client '${t}' ${i?"is":"is not"} zombied in LocalStorage`),i}catch(t){return Yp("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}mn(){if(this.Xe)try{this.Xe.setItem(this.wn(this.clientId),String(Date.now()))}catch(t){Yp("Failed to set zombie client id.",t)}}pn(){if(this.Xe)try{this.Xe.removeItem(this.wn(this.clientId))}catch(t){}}wn(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Zb(t){return tb(t,Iv.store)}function ty(t){return tb(t,jv.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ny{constructor(t,n,i){this.Je=t,this.An=n,this.Jt=i}Rn(t,n){return this.An.getAllMutationBatchesAffectingDocumentKey(t,n).next((i=>this.Pn(t,n,i)))}Pn(t,n,i){return this.Je.getEntry(t,n).next((t=>{for(const n of i)n.applyToLocalView(t);return t}))}bn(t,n){t.forEach(((t,i)=>{for(const t of n)t.applyToLocalView(i)}))}vn(t,n){return this.Je.getEntries(t,n).next((n=>this.Vn(t,n).next((()=>n))))}Vn(t,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,n).next((t=>this.bn(n,t)))}getDocumentsMatchingQuery(t,n,i){return function(t){return Fg.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(n)?this.Sn(t,n.path):Cm(n)?this.Dn(t,n,i):this.Cn(t,n,i)}Sn(t,n){return this.Rn(t,new Fg(n)).next((t=>{let n=Sw();return t.isFoundDocument()&&(n=n.insert(t.key,t)),n}))}Dn(t,n,i){const e=n.collectionGroup;let s=Sw();return this.Jt.getCollectionParents(t,e).next((r=>zv.forEach(r,(r=>{const o=function(t,n){return new km(n,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(n,r.child(e));return this.Cn(t,o,i).next((t=>{t.forEach(((t,n)=>{s=s.insert(t,n)}))}))})).next((()=>s))))}Cn(t,n,i){let e,s;return this.Je.getDocumentsMatchingQuery(t,n,i).next((i=>(e=i,this.An.getAllMutationBatchesAffectingQuery(t,n)))).next((n=>(s=n,this.Nn(t,s,e).next((t=>{e=t;for(const t of s)for(const n of t.mutations){const i=n.key;let s=e.get(i);null==s&&(s=nm.newInvalidDocument(i),e=e.insert(i,s)),sw(n,s,t.localWriteTime),s.isFoundDocument()||(e=e.remove(i))}}))))).next((()=>(e.forEach(((t,i)=>{Mm(n,i)||(e=e.remove(t))})),e)))}Nn(t,n,i){let e=Nw();for(const t of n)for(const n of t.mutations)n instanceof uw&&null===i.get(n.key)&&(e=e.add(n.key));let s=i;return this.Je.getEntries(t,e).next((t=>(t.forEach(((t,n)=>{n.isFoundDocument()&&(s=s.insert(t,n))})),s)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(t,n,i,e){this.targetId=t,this.fromCache=n,this.kn=i,this.xn=e}static $n(t,n){let i=Nw(),e=Nw();for(const t of n.docChanges)switch(t.type){case 0:i=i.add(t.doc.key);break;case 1:e=e.add(t.doc.key)}return new iy(t,n.fromCache,i,e)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{Fn(t){this.On=t}getDocumentsMatchingQuery(t,n,i,e){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(bg.min())?this.Mn(t,n):this.On.vn(t,e).next((s=>{const r=this.Ln(n,s);return(Em(n)||Im(n))&&this.Bn(n.limitType,r,e,i)?this.Mn(t,n):(Hp()<=jn.DEBUG&&Jp("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Pm(n)),this.On.getDocumentsMatchingQuery(t,n,i).next((t=>(r.forEach((n=>{t=t.insert(n.key,n)})),t))))}))}Ln(t,n){let i=new kw(Lm(t));return n.forEach(((n,e)=>{Mm(t,e)&&(i=i.add(e))})),i}Bn(t,n,i,e){if(i.size!==n.size)return!0;const s="F"===t?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(e)>0)}Mn(t,n){return Hp()<=jn.DEBUG&&Jp("QueryEngine","Using full collection scan to execute query:",Pm(n)),this.On.getDocumentsMatchingQuery(t,n,bg.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(t,n,i,e){this.persistence=t,this.Un=n,this.k=e,this.qn=new bw(gg),this.Kn=new Bb((t=>sm(t)),rm),this.jn=bg.min(),this.An=t.getMutationQueue(i),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new ny(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.qn)))}}function ry(t,n,i,e){return new sy(t,n,i,e)}async function oy(t,n){const i=t;let e=i.An,s=i.Wn;const r=await i.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return i.An.getAllMutationBatches(t).next((o=>(r=o,e=i.persistence.getMutationQueue(n),s=new ny(i.Qn,e,i.persistence.getIndexManager()),e.getAllMutationBatches(t)))).next((n=>{const i=[],e=[];let o=Nw();for(const t of r){i.push(t.batchId);for(const n of t.mutations)o=o.add(n.key)}for(const t of n){e.push(t.batchId);for(const n of t.mutations)o=o.add(n.key)}return s.vn(t,o).next((t=>({Gn:t,removedBatchIds:i,addedBatchIds:e})))}))}));return i.An=e,i.Wn=s,i.Un.Fn(i.Wn),r}function ly(t){const n=t;return n.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>n.He.getLastRemoteSnapshotVersion(t)))}function ay(t,n){const i=t;return i.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===n&&(n=-1),i.An.getNextMutationBatchAfterBatchId(t,n))))}async function uy(t,n,i){const e=t,s=e.qn.get(n),r=i?"readwrite":"readwrite-primary";try{i||await e.persistence.runTransaction("Release target",r,(t=>e.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!Hv(t))throw t;Jp("LocalStore",`Failed to update sequence numbers for target ${n}: ${t}`)}e.qn=e.qn.remove(n),e.Kn.delete(s.target)}function hy(t,n,i){const e=t;let s=bg.min(),r=Nw();return e.persistence.runTransaction("Execute query","readonly",(t=>function(t,n,i){const e=t,s=e.Kn.get(i);return void 0!==s?zv.resolve(e.qn.get(s)):e.He.getTargetData(n,i)}(e,t,Nm(n)).next((n=>{if(n)return s=n.lastLimboFreeSnapshotVersion,e.He.getMatchingKeysForTargetId(t,n.targetId).next((t=>{r=t}))})).next((()=>e.Un.getDocumentsMatchingQuery(t,n,i?s:bg.min(),i?r:Nw()))).next((t=>({documents:t,zn:r})))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cy{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,n){return zv.resolve(this.Xn.get(n))}saveBundleMetadata(t,n){var i;return this.Xn.set(n.id,{id:(i=n).id,version:i.version,createTime:Hw(i.createTime)}),zv.resolve()}getNamedQuery(t,n){return zv.resolve(this.Zn.get(n))}saveNamedQuery(t,n){return this.Zn.set(n.name,function(t){return{name:t.name,query:fb(t.bundledQuery),readTime:Hw(t.readTime)}}(n)),zv.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(){this.ts=new kw(fy.es),this.ns=new kw(fy.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,n){const i=new fy(t,n);this.ts=this.ts.add(i),this.ns=this.ns.add(i)}rs(t,n){t.forEach((t=>this.addReference(t,n)))}removeReference(t,n){this.os(new fy(t,n))}cs(t,n){t.forEach((t=>this.removeReference(t,n)))}us(t){const n=new Fg(new Eg([])),i=new fy(n,t),e=new fy(n,t+1),s=[];return this.ns.forEachInRange([i,e],(t=>{this.os(t),s.push(t.key)})),s}hs(){this.ts.forEach((t=>this.os(t)))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const n=new Fg(new Eg([])),i=new fy(n,t),e=new fy(n,t+1);let s=Nw();return this.ns.forEachInRange([i,e],(t=>{s=s.add(t.key)})),s}containsKey(t){const n=new fy(t,0),i=this.ts.firstAfterOrEqual(n);return null!==i&&t.isEqual(i.key)}}class fy{constructor(t,n){this.key=t,this.fs=n}static es(t,n){return Fg.comparator(t.key,n.key)||gg(t.fs,n.fs)}static ss(t,n){return gg(t.fs,n.fs)||Fg.comparator(t.key,n.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(t,n){this.Jt=t,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new kw(fy.es)}checkEmpty(t){return zv.resolve(0===this.An.length)}addMutationBatch(t,n,i,e){const s=this.ds;this.ds++;const r=new nb(s,n,i,e);this.An.push(r);for(const n of e)this.ws=this.ws.add(new fy(n.key,s)),this.Jt.addToCollectionParentIndex(t,n.key.path.popLast());return zv.resolve(r)}lookupMutationBatch(t,n){return zv.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const i=this.gs(n+1),e=i<0?0:i;return zv.resolve(this.An.length>e?this.An[e]:null)}getHighestUnacknowledgedBatchId(){return zv.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return zv.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new fy(n,0),e=new fy(n,Number.POSITIVE_INFINITY),s=[];return this.ws.forEachInRange([i,e],(t=>{const n=this._s(t.fs);s.push(n)})),zv.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new kw(gg);return n.forEach((t=>{const n=new fy(t,0),e=new fy(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([n,e],(t=>{i=i.add(t.fs)}))})),zv.resolve(this.ys(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,e=i.length+1;let s=i;Fg.isDocumentKey(s)||(s=s.child(""));const r=new fy(new Fg(s),0);let o=new kw(gg);return this.ws.forEachWhile((t=>{const n=t.key.path;return!!i.isPrefixOf(n)&&(n.length===e&&(o=o.add(t.fs)),!0)}),r),zv.resolve(this.ys(o))}ys(t){const n=[];return t.forEach((t=>{const i=this._s(t);null!==i&&n.push(i)})),n}removeMutationBatch(t,n){tg(0===this.ps(n.batchId,"removed")),this.An.shift();let i=this.ws;return zv.forEach(n.mutations,(e=>{const s=new fy(e.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,e.key)})).next((()=>{this.ws=i}))}ee(t){}containsKey(t,n){const i=new fy(n,0),e=this.ws.firstAfterOrEqual(i);return zv.resolve(n.isEqual(e&&e.key))}performConsistencyCheck(t){return zv.resolve()}ps(t,n){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const n=this.gs(t);return n<0||n>=this.An.length?null:this.An[n]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(t,n){this.Jt=t,this.Ts=n,this.docs=new bw(Fg.comparator),this.size=0}addEntry(t,n,i){const e=n.key,s=this.docs.get(e),r=s?s.size:0,o=this.Ts(n);return this.docs=this.docs.insert(e,{document:n.clone(),size:o,readTime:i}),this.size+=o-r,this.Jt.addToCollectionParentIndex(t,e.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return zv.resolve(i?i.document.clone():nm.newInvalidDocument(n))}getEntries(t,n){let i=Iw();return n.forEach((t=>{const n=this.docs.get(t);i=i.insert(t,n?n.document.clone():nm.newInvalidDocument(t))})),zv.resolve(i)}getDocumentsMatchingQuery(t,n,i){let e=Iw();const s=new Fg(n.path.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s,readTime:o}}=r.getNext();if(!n.path.isPrefixOf(t.path))break;o.compareTo(i)<=0||Mm(n,s)&&(e=e.insert(s.key,s.clone()))}return zv.resolve(e)}Es(t,n){return zv.forEach(this.docs,(t=>n(t)))}newChangeBuffer(t){return new my(this)}getSize(t){return zv.resolve(this.size)}}class my extends zb{constructor(t){super(),this.De=t}applyChanges(t){const n=[];return this.changes.forEach(((i,e)=>{e.document.isValidDocument()?n.push(this.De.addEntry(t,e.document,this.getReadTime(i))):this.De.removeEntry(i)})),zv.waitFor(n)}getFromCache(t,n){return this.De.getEntry(t,n)}getAllFromCache(t,n){return this.De.getEntries(t,n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(t){this.persistence=t,this.Is=new Bb((t=>sm(t)),rm),this.lastRemoteSnapshotVersion=bg.min(),this.highestTargetId=0,this.As=0,this.Rs=new dy,this.targetCount=0,this.Ps=Nb.ie()}forEachTarget(t,n){return this.Is.forEach(((t,i)=>n(i))),zv.resolve()}getLastRemoteSnapshotVersion(t){return zv.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return zv.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.Ps.next(),zv.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.As&&(this.As=n),zv.resolve()}ce(t){this.Is.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ps=new Nb(n),this.highestTargetId=n),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,n){return this.ce(n),this.targetCount+=1,zv.resolve()}updateTargetData(t,n){return this.ce(n),zv.resolve()}removeTargetData(t,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,zv.resolve()}removeTargets(t,n,i){let e=0;const s=[];return this.Is.forEach(((r,o)=>{o.sequenceNumber<=n&&null===i.get(o.targetId)&&(this.Is.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),e++)})),zv.waitFor(s).next((()=>e))}getTargetCount(t){return zv.resolve(this.targetCount)}getTargetData(t,n){const i=this.Is.get(n)||null;return zv.resolve(i)}addMatchingKeys(t,n,i){return this.Rs.rs(n,i),zv.resolve()}removeMatchingKeys(t,n,i){this.Rs.cs(n,i);const e=this.persistence.referenceDelegate,s=[];return e&&n.forEach((n=>{s.push(e.markPotentiallyOrphaned(t,n))})),zv.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Rs.us(n),zv.resolve()}getMatchingKeysForTargetId(t,n){const i=this.Rs.ls(n);return zv.resolve(i)}containsKey(t,n){return zv.resolve(this.Rs.containsKey(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(t,n){this.bs={},this.Be=new dg(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new wy(this),this.Jt=new wb,this.Je=function(t,n){return new gy(t,n)}(this.Jt,(t=>this.referenceDelegate.vs(t))),this.k=new sb(n),this.Ye=new cy(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let n=this.bs[t.toKey()];return n||(n=new py(this.Jt,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,n,i){Jp("MemoryPersistence","Starting transaction:",t);const e=new by(this.Be.next());return this.referenceDelegate.Vs(),i(e).next((t=>this.referenceDelegate.Ss(e).next((()=>t)))).toPromise().then((t=>(e.raiseOnCommittedEvent(),t)))}Ds(t,n){return zv.or(Object.values(this.bs).map((i=>()=>i.containsKey(t,n))))}}class by extends Bv{constructor(t){super(),this.currentSequenceNumber=t}}class yy{constructor(t){this.persistence=t,this.Cs=new dy,this.Ns=null}static ks(t){return new yy(t)}get xs(){if(this.Ns)return this.Ns;throw Zp()}addReference(t,n,i){return this.Cs.addReference(i,n),this.xs.delete(i.toString()),zv.resolve()}removeReference(t,n,i){return this.Cs.removeReference(i,n),this.xs.add(i.toString()),zv.resolve()}markPotentiallyOrphaned(t,n){return this.xs.add(n.toString()),zv.resolve()}removeTarget(t,n){this.Cs.us(n.targetId).forEach((t=>this.xs.add(t.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>i.removeTargetData(t,n)))}Vs(){this.Ns=new Set}Ss(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return zv.forEach(this.xs,(i=>{const e=Fg.fromPath(i);return this.$s(t,e).next((t=>{t||n.removeEntry(e)}))})).next((()=>(this.Ns=null,n.apply(t))))}updateLimboDocument(t,n){return this.$s(t,n).next((t=>{t?this.xs.delete(n.toString()):this.xs.add(n.toString())}))}vs(t){return 0}$s(t,n){return zv.or([()=>zv.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ds(t,n)])}}class xy{constructor(){this.activeTargetIds=Ow()}Ms(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ky{constructor(){this.pi=new xy,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t){return this.pi.Ms(t),this.Ti[t]||"not-current"}updateQueryState(t,n,i){this.Ti[t]=n}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new xy,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){Jp("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Pi(){Jp("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Fi(t){this.ki(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId,this.Mi=(t.ssl?"https":"http")+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,n,i,e,s){const r=this.Ui(t,n);Jp("RestConnection","Sending: ",r,i);const o={};return this.qi(o,e,s),this.Ki(t,r,o,i).then((t=>(Jp("RestConnection","Received: ",t),t)),(n=>{throw Xp("RestConnection",`${t} failed with error: `,n,"url: ",r,"request:",i),n}))}ji(t,n,i,e,s){return this.Bi(t,n,i,e,s)}qi(t,n,i){t["X-Goog-Api-Client"]="gl-js/ fire/"+Wp,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((n,i)=>t[i]=n)),i&&i.headers.forEach(((n,i)=>t[i]=n))}Ui(t,n){return`${this.Mi}/v1/${n}:${Iy[t]}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,n,i,e){return new Promise(((s,r)=>{const o=new zp;o.listenOnce($p.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Fp.NO_ERROR:const n=o.getResponseJson();Jp("Connection","XHR received:",JSON.stringify(n)),s(n);break;case Fp.TIMEOUT:Jp("Connection",'RPC "'+t+'" timed out'),r(new ig(ng.DEADLINE_EXCEEDED,"Request time out"));break;case Fp.HTTP_ERROR:const i=o.getStatus();if(Jp("Connection",'RPC "'+t+'" failed with status:',i,"response text:",o.getResponseText()),i>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const n=function(t){const n=t.toLowerCase().replace(/_/g,"-");return Object.values(ng).indexOf(n)>=0?n:ng.UNKNOWN}(t.status);r(new ig(n,t.message))}else r(new ig(ng.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new ig(ng.UNAVAILABLE,"Connection failed."));break;default:Zp()}}finally{Jp("Connection",'RPC "'+t+'" completed.')}}));const l=JSON.stringify(e);o.send(n,"POST",l,i,15)}))}Qi(t,n,i){const e=[this.Mi,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=new Rp,r=Sd(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Vp({})),this.qi(o.initMessageHeaders,n,i),an()||hn()||ln().indexOf("Electron/")>=0||cn()||ln().indexOf("MSAppHost/")>=0||un()||(o.httpHeadersOverwriteParam="$httpHeaders");const l=e.join("");Jp("Connection","Creating WebChannel: "+l,o);const a=s.createWebChannel(l,o);let u=!1,h=!1;const c=new Ty({Vi:t=>{h?Jp("Connection","Not sending because WebChannel is closed:",t):(u||(Jp("Connection","Opening WebChannel transport."),a.open(),u=!0),Jp("Connection","WebChannel sending:",t),a.send(t))},Si:()=>a.close()}),d=(t,n,i)=>{t.listen(n,(t=>{try{i(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(a,Bp.EventType.OPEN,(()=>{h||Jp("Connection","WebChannel transport opened.")})),d(a,Bp.EventType.CLOSE,(()=>{h||(h=!0,Jp("Connection","WebChannel transport closed"),c.Fi())})),d(a,Bp.EventType.ERROR,(t=>{h||(h=!0,Xp("Connection","WebChannel transport errored:",t),c.Fi(new ig(ng.UNAVAILABLE,"The operation could not be completed")))})),d(a,Bp.EventType.MESSAGE,(t=>{var n;if(!h){const i=t.data[0];tg(!!i);const e=i,s=e.error||(null===(n=e[0])||void 0===n?void 0:n.error);if(s){Jp("Connection","WebChannel received error:",s);const t=s.status;let n=function(t){const n=mw[t];if(void 0!==n)return vw(n)}(t),i=s.message;void 0===n&&(n=ng.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),h=!0,c.Fi(new ig(n,i)),a.close()}else Jp("Connection","WebChannel received:",i),c.Oi(i)}})),d(r,Up.STAT_EVENT,(t=>{10===t.stat?Jp("Connection","Detected buffering proxy"):11===t.stat&&Jp("Connection","Detected no buffering proxy")})),setTimeout((()=>{c.$i()}),0),c}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t){return new qw(t,!0)}class Ny{constructor(t,n,i=1e3,e=1.5,s=6e4){this.Oe=t,this.timerId=n,this.Wi=i,this.Gi=e,this.zi=s,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const n=Math.floor(this.Hi+this.tr()),i=Math.max(0,Date.now()-this.Yi),e=Math.max(0,n-i);e>0&&Jp("ExponentialBackoff",`Backing off for ${e} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,e,(()=>(this.Yi=Date.now(),t()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(t,n,i,e,s,r,o,l){this.Oe=t,this.nr=i,this.sr=e,this.ir=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=l,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Ny(t,n)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():n&&n.code===ng.RESOURCE_EXHAUSTED?(Yp(n.toString()),Yp("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===ng.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,i])=>{this.rr===n&&this.Ir(t,i)}),(n=>{t((()=>{const t=new ig(ng.UNKNOWN,"Fetching auth token failed: "+n.message);return this.Ar(t)}))}))}Ir(t,n){const i=this.Er(this.rr);this.stream=this.Rr(t,n),this.stream.Di((()=>{i((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((t=>{i((()=>this.Ar(t)))})),this.stream.onMessage((t=>{i((()=>this.onMessage(t)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(t){return Jp("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Er(t){return n=>{this.Oe.enqueueAndForget((()=>this.rr===t?n():(Jp("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Oy extends Dy{constructor(t,n,i,e,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,e,r),this.k=s}Rr(t,n){return this.ir.Qi("Listen",t,n)}onMessage(t){this.ur.reset();const n=function(t,n){let i;if("targetChange"in n){const e=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Zp()}(n.targetChange.targetChangeType||"NO_CHANGE"),s=n.targetChange.targetIds||[],r=function(t,n){return t.C?(tg(void 0===n||"string"==typeof n),Cg.fromBase64String(n||"")):(tg(void 0===n||n instanceof Uint8Array),Cg.fromUint8Array(n||new Uint8Array))}(t,n.targetChange.resumeToken),o=n.targetChange.cause,l=o&&function(t){const n=void 0===t.code?ng.UNKNOWN:vw(t.code);return new ig(n,t.message||"")}(o);i=new jw(e,s,r,l||null)}else if("documentChange"in n){const e=n.documentChange,s=Qw(t,e.document.name),r=Hw(e.document.updateTime),o=new Zg({mapValue:{fields:e.document.fields}}),l=nm.newFoundDocument(s,r,o);i=new Mw(e.targetIds||[],e.removedTargetIds||[],l.key,l)}else if("documentDelete"in n){const e=n.documentDelete,s=Qw(t,e.document),r=e.readTime?Hw(e.readTime):bg.min(),o=nm.newNoDocument(s,r);i=new Mw([],e.removedTargetIds||[],o.key,o)}else if("documentRemove"in n){const e=n.documentRemove,s=Qw(t,e.document);i=new Mw([],e.removedTargetIds||[],s,null)}else{if(!("filter"in n))return Zp();{const t=n.filter,e=new gw(t.count||0);i=new Lw(t.targetId,e)}}return i}(this.k,t),i=function(t){if(!("targetChange"in t))return bg.min();const n=t.targetChange;return n.targetIds&&n.targetIds.length?bg.min():n.readTime?Hw(n.readTime):bg.min()}(t);return this.listener.Pr(n,i)}br(t){const n={};n.database=nv(this.k),n.addTarget=function(t,n){let i;const e=n.target;return i=om(e)?{documents:ov(t,e)}:{query:lv(t,e)},i.targetId=n.targetId,n.resumeToken.approximateByteSize()>0?i.resumeToken=Ww(t,n.resumeToken):n.snapshotVersion.compareTo(bg.min())>0&&(i.readTime=Kw(t,n.snapshotVersion.toTimestamp())),i}(this.k,t);const i=function(t,n){const i=function(t,n){switch(n){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Zp()}}(0,n.purpose);return null==i?null:{"goog-listen-tags":i}}(0,t);i&&(n.labels=i),this.gr(n)}vr(t){const n={};n.database=nv(this.k),n.removeTarget=t,this.gr(n)}}class Ry extends Dy{constructor(t,n,i,e,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,e,r),this.k=s,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(t,n){return this.ir.Qi("Write",t,n)}onMessage(t){if(tg(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Vr){this.ur.reset();const n=function(t,n){return t&&t.length>0?(tg(void 0!==n),t.map((t=>function(t,n){let i=Hw(t.updateTime?t.updateTime:n);return i.isEqual(bg.min())&&(i=Hw(n)),new Zm(i,t.transformResults||[])}(t,n)))):[]}(t.writeResults,t.commitTime),i=Hw(t.commitTime);return this.listener.Cr(i,n)}return tg(!t.writeResults||0===t.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const t={};t.database=nv(this.k),this.gr(t)}Dr(t){const n={streamToken:this.lastStreamToken,writes:t.map((t=>sv(this.k,t)))};this.gr(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py extends class{}{constructor(t,n,i,e){super(),this.authCredentials=t,this.appCheckCredentials=n,this.ir=i,this.k=e,this.$r=!1}Fr(){if(this.$r)throw new ig(ng.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,n,i){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([e,s])=>this.ir.Bi(t,n,i,e,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ng.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ig(ng.UNKNOWN,t.toString())}))}ji(t,n,i){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([e,s])=>this.ir.ji(t,n,i,e,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ng.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ig(ng.UNKNOWN,t.toString())}))}terminate(){this.$r=!0}}class My{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Ur("Offline")))}set(t){this.jr(),this.Or=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const n=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Yp(n),this.Lr=!1):Jp("OnlineStateTracker",n)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(t,n,i,e,s){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=s,this.Hr.Ei((()=>{i.enqueueAndForget((async()=>{Ky(this)&&(Jp("RemoteStore","Restarting streams for network reachability change."),await async function(t){const n=t;n.Gr.add(4),await Fy(n),n.Jr.set("Unknown"),n.Gr.delete(4),await jy(n)}(this))}))})),this.Jr=new My(i,e)}}async function jy(t){if(Ky(t))for(const n of t.zr)await n(!0)}async function Fy(t){for(const n of t.zr)await n(!1)}function $y(t,n){const i=t;i.Wr.has(n.targetId)||(i.Wr.set(n.targetId,n),qy(i)?zy(i):lx(i).lr()&&Vy(i,n))}function Uy(t,n){const i=t,e=lx(i);i.Wr.delete(n),e.lr()&&By(i,n),0===i.Wr.size&&(e.lr()?e._r():Ky(i)&&i.Jr.set("Unknown"))}function Vy(t,n){t.Yr.X(n.targetId),lx(t).br(n)}function By(t,n){t.Yr.X(n),lx(t).vr(n)}function zy(t){t.Yr=new $w({getRemoteKeysForTarget:n=>t.remoteSyncer.getRemoteKeysForTarget(n),Et:n=>t.Wr.get(n)||null}),lx(t).start(),t.Jr.Br()}function qy(t){return Ky(t)&&!lx(t).hr()&&t.Wr.size>0}function Ky(t){return 0===t.Gr.size}function Wy(t){t.Yr=void 0}async function Gy(t){t.Wr.forEach((n=>{Vy(t,n)}))}async function Hy(t,n){Wy(t),qy(t)?(t.Jr.Kr(n),zy(t)):t.Jr.set("Unknown")}async function Jy(t,n,i){if(t.Jr.set("Online"),n instanceof jw&&2===n.state&&n.cause)try{await async function(t,n){const i=n.cause;for(const e of n.targetIds)t.Wr.has(e)&&(await t.remoteSyncer.rejectListen(e,i),t.Wr.delete(e),t.Yr.removeTarget(e))}(t,n)}catch(i){Jp("RemoteStore","Failed to remove targets %s: %s ",n.targetIds.join(","),i),await Yy(t,i)}else if(n instanceof Mw?t.Yr.ot(n):n instanceof Lw?t.Yr.dt(n):t.Yr.ut(n),!i.isEqual(bg.min()))try{const n=await ly(t.localStore);i.compareTo(n)>=0&&await function(t,n){const i=t.Yr.gt(n);return i.targetChanges.forEach(((i,e)=>{if(i.resumeToken.approximateByteSize()>0){const s=t.Wr.get(e);s&&t.Wr.set(e,s.withResumeToken(i.resumeToken,n))}})),i.targetMismatches.forEach((n=>{const i=t.Wr.get(n);if(!i)return;t.Wr.set(n,i.withResumeToken(Cg.EMPTY_BYTE_STRING,i.snapshotVersion)),By(t,n);const e=new eb(i.target,n,1,i.sequenceNumber);Vy(t,e)})),t.remoteSyncer.applyRemoteEvent(i)}(t,i)}catch(n){Jp("RemoteStore","Failed to raise snapshot:",n),await Yy(t,n)}}async function Yy(t,n,i){if(!Hv(n))throw n;t.Gr.add(1),await Fy(t),t.Jr.set("Offline"),i||(i=()=>ly(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Jp("RemoteStore","Retrying IndexedDB access"),await i(),t.Gr.delete(1),await jy(t)}))}function Xy(t,n){return n().catch((i=>Yy(t,i,n)))}async function Qy(t){const n=t,i=ax(n);let e=n.Qr.length>0?n.Qr[n.Qr.length-1].batchId:-1;for(;Zy(n);)try{const t=await ay(n.localStore,e);if(null===t){0===n.Qr.length&&i._r();break}e=t.batchId,tx(n,t)}catch(t){await Yy(n,t)}nx(n)&&ix(n)}function Zy(t){return Ky(t)&&t.Qr.length<10}function tx(t,n){t.Qr.push(n);const i=ax(t);i.lr()&&i.Sr&&i.Dr(n.mutations)}function nx(t){return Ky(t)&&!ax(t).hr()&&t.Qr.length>0}function ix(t){ax(t).start()}async function ex(t){ax(t).kr()}async function sx(t){const n=ax(t);for(const i of t.Qr)n.Dr(i.mutations)}async function rx(t,n,i){const e=t.Qr.shift(),s=ib.from(e,n,i);await Xy(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Qy(t)}async function ox(t,n){n&&ax(t).Sr&&await async function(t,n){if(function(t){switch(t){default:return Zp();case ng.CANCELLED:case ng.UNKNOWN:case ng.DEADLINE_EXCEEDED:case ng.RESOURCE_EXHAUSTED:case ng.INTERNAL:case ng.UNAVAILABLE:case ng.UNAUTHENTICATED:return!1;case ng.INVALID_ARGUMENT:case ng.NOT_FOUND:case ng.ALREADY_EXISTS:case ng.PERMISSION_DENIED:case ng.FAILED_PRECONDITION:case ng.ABORTED:case ng.OUT_OF_RANGE:case ng.UNIMPLEMENTED:case ng.DATA_LOSS:return!0}}(i=n.code)&&i!==ng.ABORTED){const i=t.Qr.shift();ax(t).wr(),await Xy(t,(()=>t.remoteSyncer.rejectFailedWrite(i.batchId,n))),await Qy(t)}var i}(t,n),nx(t)&&ix(t)}function lx(t){return t.Xr||(t.Xr=function(t,n,i){const e=t;return e.Fr(),new Oy(n,e.ir,e.authCredentials,e.appCheckCredentials,e.k,i)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Di:Gy.bind(null,t),Ni:Hy.bind(null,t),Pr:Jy.bind(null,t)}),t.zr.push((async n=>{n?(t.Xr.wr(),qy(t)?zy(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Wy(t))}))),t.Xr}function ax(t){return t.Zr||(t.Zr=function(t,n,i){const e=t;return e.Fr(),new Ry(n,e.ir,e.authCredentials,e.appCheckCredentials,e.k,i)}(t.datastore,t.asyncQueue,{Di:ex.bind(null,t),Ni:ox.bind(null,t),Nr:sx.bind(null,t),Cr:rx.bind(null,t)}),t.zr.push((async n=>{n?(t.Zr.wr(),await Qy(t)):(await t.Zr.stop(),t.Qr.length>0&&(Jp("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))}))),t.Zr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ux{constructor(t,n,i,e,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=e,this.removalCallback=s,this.deferred=new eg,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((()=>{}))}static createAndSchedule(t,n,i,e,s){const r=Date.now()+i,o=new ux(t,n,r,e,s);return o.start(i),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ig(ng.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hx(t,n){if(Yp("AsyncQueue",`${n}: ${t}`),Hv(t))return new ig(ng.UNAVAILABLE,`${n}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(t){this.comparator=t?(n,i)=>t(n,i)||Fg.comparator(n.key,i.key):(t,n)=>Fg.comparator(t.key,n.key),this.keyedMap=Sw(),this.sortedSet=new bw(this.comparator)}static emptySet(t){return new cx(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof cx))return!1;if(this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const t=n.getNext().key,e=i.getNext().key;if(!t.isEqual(e))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,n){const i=new cx;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(){this.eo=new bw(Fg.comparator)}track(t){const n=t.doc.key,i=this.eo.get(n);i?0!==t.type&&3===i.type?this.eo=this.eo.insert(n,t):3===t.type&&1!==i.type?this.eo=this.eo.insert(n,{type:i.type,doc:t.doc}):2===t.type&&2===i.type?this.eo=this.eo.insert(n,{type:2,doc:t.doc}):2===t.type&&0===i.type?this.eo=this.eo.insert(n,{type:0,doc:t.doc}):1===t.type&&0===i.type?this.eo=this.eo.remove(n):1===t.type&&2===i.type?this.eo=this.eo.insert(n,{type:1,doc:i.doc}):0===t.type&&1===i.type?this.eo=this.eo.insert(n,{type:2,doc:t.doc}):Zp():this.eo=this.eo.insert(n,t)}no(){const t=[];return this.eo.inorderTraversal(((n,i)=>{t.push(i)})),t}}class fx{constructor(t,n,i,e,s,r,o,l){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=e,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=l}static fromInitialDocuments(t,n,i,e){const s=[];return n.forEach((t=>{s.push({type:0,doc:t})})),new fx(t,n,cx.emptySet(n),s,i,e,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Om(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let t=0;t<n.length;t++)if(n[t].type!==i[t].type||!n[t].doc.isEqual(i[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(){this.so=void 0,this.listeners=[]}}class gx{constructor(){this.queries=new Bb((t=>Rm(t)),Om),this.onlineState="Unknown",this.io=new Set}}async function mx(t,n){const i=t,e=n.query;let s=!1,r=i.queries.get(e);if(r||(s=!0,r=new px),s)try{r.so=await i.onListen(e)}catch(t){const i=hx(t,`Initialization of query '${Pm(n.query)}' failed`);return void n.onError(i)}i.queries.set(e,r),r.listeners.push(n),n.ro(i.onlineState),r.so&&n.oo(r.so)&&yx(i)}async function wx(t,n){const i=t,e=n.query;let s=!1;const r=i.queries.get(e);if(r){const t=r.listeners.indexOf(n);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return i.queries.delete(e),i.onUnlisten(e)}function vx(t,n){const i=t;let e=!1;for(const t of n){const n=i.queries.get(t.query);if(n){for(const i of n.listeners)i.oo(t)&&(e=!0);n.so=t}}e&&yx(i)}function bx(t,n,i){const e=t,s=e.queries.get(n);if(s)for(const t of s.listeners)t.onError(i);e.queries.delete(n)}function yx(t){t.io.forEach((t=>{t.next()}))}class xx{constructor(t,n,i){this.query=t,this.ao=n,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=i||{}}oo(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)3!==i.type&&n.push(i);t=new fx(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.co?this.ho(t)&&(this.ao.next(t),n=!0):this.lo(t,this.onlineState)&&(this.fo(t),n=!0),this.uo=t,n}onError(t){this.ao.error(t)}ro(t){this.onlineState=t;let n=!1;return this.uo&&!this.co&&this.lo(this.uo,t)&&(this.fo(this.uo),n=!0),n}lo(t,n){return!t.fromCache||!(this.options.wo&&"Offline"!==n||t.docs.isEmpty()&&"Offline"!==n)}ho(t){return t.docChanges.length>0||!!(t.syncStateChanged||this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites)&&!0===this.options.includeMetadataChanges}fo(t){t=fx.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.ao.next(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(t){this.key=t}}class _x{constructor(t){this.key=t}}class Ex{constructor(t,n){this.query=t,this.To=n,this.Eo=null,this.current=!1,this.Io=Nw(),this.mutatedKeys=Nw(),this.Ao=Lm(t),this.Ro=new cx(this.Ao)}get Po(){return this.To}bo(t,n){const i=n?n.vo:new dx,e=n?n.Ro:this.Ro;let s=n?n.mutatedKeys:this.mutatedKeys,r=e,o=!1;const l=Em(this.query)&&e.size===this.query.limit?e.last():null,a=Im(this.query)&&e.size===this.query.limit?e.first():null;if(t.inorderTraversal(((t,n)=>{const u=e.get(t),h=Mm(this.query,n)?n:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(i.track({type:3,doc:h}),f=!0):this.Vo(u,h)||(i.track({type:2,doc:h}),f=!0,(l&&this.Ao(h,l)>0||a&&this.Ao(h,a)<0)&&(o=!0)):!u&&h?(i.track({type:0,doc:h}),f=!0):u&&!h&&(i.track({type:1,doc:u}),f=!0,(l||a)&&(o=!0)),f&&(h?(r=r.add(h),s=d?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),Em(this.query)||Im(this.query))for(;r.size>this.query.limit;){const t=Em(this.query)?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),i.track({type:1,doc:t})}return{Ro:r,vo:i,Bn:o,mutatedKeys:s}}Vo(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i){const e=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const s=t.vo.no();s.sort(((t,n)=>function(t,n){const i=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Zp()}};return i(t)-i(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,n.type)||this.Ao(t.doc,n.doc))),this.So(i);const r=n?this.Do():[],o=0===this.Io.size&&this.current?1:0,l=o!==this.Eo;return this.Eo=o,0!==s.length||l?{snapshot:new fx(this.query,t.Ro,e,s,t.mutatedKeys,0===o,l,!1),Co:r}:{Co:r}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new dx,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach((t=>this.To=this.To.add(t))),t.modifiedDocuments.forEach((()=>{})),t.removedDocuments.forEach((t=>this.To=this.To.delete(t))),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=Nw(),this.Ro.forEach((t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))}));const n=[];return t.forEach((t=>{this.Io.has(t)||n.push(new _x(t))})),this.Io.forEach((i=>{t.has(i)||n.push(new kx(i))})),n}ko(t){this.To=t.zn,this.Io=Nw();const n=this.bo(t.documents);return this.applyChanges(n,!0)}xo(){return fx.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Ix{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class Tx{constructor(t){this.key=t,this.$o=!1}}class Sx{constructor(t,n,i,e,s,r){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=e,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.Fo={},this.Oo=new Bb((t=>Rm(t)),Om),this.Mo=new Map,this.Lo=new Set,this.Bo=new bw(Fg.comparator),this.Uo=new Map,this.qo=new dy,this.Ko={},this.jo=new Map,this.Qo=Nb.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Cx(t,n){const i=function(t){const n=t;return n.remoteStore.remoteSyncer.applyRemoteEvent=Nx.bind(null,n),n.remoteStore.remoteSyncer.getRemoteKeysForTarget=qx.bind(null,n),n.remoteStore.remoteSyncer.rejectListen=Ox.bind(null,n),n.Fo.Pr=vx.bind(null,n.eventManager),n.Fo.zo=bx.bind(null,n.eventManager),n}(t);let e,s;const r=i.Oo.get(n);if(r)e=r.targetId,i.sharedClientState.addLocalQueryTarget(e),s=r.view.xo();else{const t=await function(t,n){const i=t;return i.persistence.runTransaction("Allocate target","readwrite",(t=>{let e;return i.He.getTargetData(t,n).next((s=>s?(e=s,zv.resolve(e)):i.He.allocateTargetId(t).next((s=>(e=new eb(n,s,0,t.currentSequenceNumber),i.He.addTargetData(t,e).next((()=>e)))))))})).then((t=>{const e=i.qn.get(t.targetId);return(null===e||t.snapshotVersion.compareTo(e.snapshotVersion)>0)&&(i.qn=i.qn.insert(t.targetId,t),i.Kn.set(n,t.targetId)),t}))}(i.localStore,Nm(n)),r=i.sharedClientState.addLocalQueryTarget(t.targetId);e=t.targetId,s=await async function(t,n,i,e){t.Go=(n,i,e)=>async function(t,n,i,e){let s=n.view.bo(i);s.Bn&&(s=await hy(t.localStore,n.query,!1).then((({documents:t})=>n.view.bo(t,s))));const r=e&&e.targetChanges.get(n.targetId),o=n.view.applyChanges(s,t.isPrimaryClient,r);return $x(t,n.targetId,o.Co),o.snapshot}(t,n,i,e);const s=await hy(t.localStore,n,!0),r=new Ex(n,s.zn),o=r.bo(s.documents),l=Pw.createSynthesizedTargetChangeForCurrentChange(i,e&&"Offline"!==t.onlineState),a=r.applyChanges(o,t.isPrimaryClient,l);$x(t,i,a.Co);const u=new Ix(n,i,r);return t.Oo.set(n,u),t.Mo.has(i)?t.Mo.get(i).push(n):t.Mo.set(i,[n]),a.snapshot}(i,n,e,"current"===r),i.isPrimaryClient&&$y(i.remoteStore,t)}return s}async function Ax(t,n){const i=t,e=i.Oo.get(n),s=i.Mo.get(e.targetId);if(s.length>1)return i.Mo.set(e.targetId,s.filter((t=>!Om(t,n)))),void i.Oo.delete(n);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(e.targetId),i.sharedClientState.isActiveQueryTarget(e.targetId)||await uy(i.localStore,e.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(e.targetId),Uy(i.remoteStore,e.targetId),jx(i,e.targetId)})).catch(Mb)):(jx(i,e.targetId),await uy(i.localStore,e.targetId,!0))}async function Nx(t,n){const i=t;try{const t=await function(t,n){const i=t,e=n.snapshotVersion;let s=i.qn;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=i.Qn.newChangeBuffer({trackRemovals:!0});s=i.qn;const o=[];n.targetChanges.forEach(((n,r)=>{const l=s.get(r);if(!l)return;o.push(i.He.removeMatchingKeys(t,n.removedDocuments,r).next((()=>i.He.addMatchingKeys(t,n.addedDocuments,r))));const a=n.resumeToken;if(a.approximateByteSize()>0){const u=l.withResumeToken(a,e).withSequenceNumber(t.currentSequenceNumber);s=s.insert(r,u),function(t,n,i){return tg(n.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||n.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size>0}(l,u,n)&&o.push(i.He.updateTargetData(t,u))}}));let l=Iw();if(n.documentUpdates.forEach((e=>{n.resolvedLimboDocuments.has(e)&&o.push(i.persistence.referenceDelegate.updateLimboDocument(t,e))})),o.push(function(t,n,i,e){let s=Nw();return i.forEach((t=>s=s.add(t))),n.getEntries(t,s).next((t=>{let s=Iw();return i.forEach(((i,r)=>{const o=t.get(i),l=e;r.isNoDocument()&&r.version.isEqual(bg.min())?(n.removeEntry(i,l),s=s.insert(i,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(n.addEntry(r,l),s=s.insert(i,r)):Jp("LocalStore","Ignoring outdated watch update for ",i,". Current version:",o.version," Watch version:",r.version)})),s}))}(t,r,n.documentUpdates,e).next((t=>{l=t}))),!e.isEqual(bg.min())){const n=i.He.getLastRemoteSnapshotVersion(t).next((()=>i.He.setTargetsMetadata(t,t.currentSequenceNumber,e)));o.push(n)}return zv.waitFor(o).next((()=>r.apply(t))).next((()=>i.Wn.Vn(t,l))).next((()=>l))})).then((t=>(i.qn=s,t)))}(i.localStore,n);n.targetChanges.forEach(((t,n)=>{const e=i.Uo.get(n);e&&(tg(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?e.$o=!0:t.modifiedDocuments.size>0?tg(e.$o):t.removedDocuments.size>0&&(tg(e.$o),e.$o=!1))})),await Bx(i,t,n)}catch(t){await Mb(t)}}function Dx(t,n,i){const e=t;if(e.isPrimaryClient&&0===i||!e.isPrimaryClient&&1===i){const t=[];e.Oo.forEach(((i,e)=>{const s=e.view.ro(n);s.snapshot&&t.push(s.snapshot)})),function(t,n){const i=t;i.onlineState=n;let e=!1;i.queries.forEach(((t,i)=>{for(const t of i.listeners)t.ro(n)&&(e=!0)})),e&&yx(i)}(e.eventManager,n),t.length&&e.Fo.Pr(t),e.onlineState=n,e.isPrimaryClient&&e.sharedClientState.setOnlineState(n)}}async function Ox(t,n,i){const e=t;e.sharedClientState.updateQueryState(n,"rejected",i);const s=e.Uo.get(n),r=s&&s.key;if(r){let t=new bw(Fg.comparator);t=t.insert(r,nm.newNoDocument(r,bg.min()));const i=Nw().add(r),s=new Rw(bg.min(),new Map,new kw(gg),t,i);await Nx(e,s),e.Bo=e.Bo.remove(r),e.Uo.delete(n),Vx(e)}else await uy(e.localStore,n,!1).then((()=>jx(e,n,i))).catch(Mb)}async function Rx(t,n){const i=t,e=n.batch.batchId;try{const t=await function(t,n){const i=t;return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const e=n.batch.keys(),s=i.Qn.newChangeBuffer({trackRemovals:!0});return function(t,n,i,e){const s=i.batch,r=s.keys();let o=zv.resolve();return r.forEach((t=>{o=o.next((()=>e.getEntry(n,t))).next((n=>{const r=i.docVersions.get(t);tg(null!==r),n.version.compareTo(r)<0&&(s.applyToRemoteDocument(n,i),n.isValidDocument()&&e.addEntry(n,i.commitVersion))}))})),o.next((()=>t.An.removeMutationBatch(n,s)))}(i,t,n,s).next((()=>s.apply(t))).next((()=>i.An.performConsistencyCheck(t))).next((()=>i.Wn.vn(t,e)))}))}(i.localStore,n);Lx(i,e,null),Mx(i,e),i.sharedClientState.updateMutationState(e,"acknowledged"),await Bx(i,t)}catch(t){await Mb(t)}}async function Px(t,n,i){const e=t;try{const t=await function(t,n){const i=t;return i.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let e;return i.An.lookupMutationBatch(t,n).next((n=>(tg(null!==n),e=n.keys(),i.An.removeMutationBatch(t,n)))).next((()=>i.An.performConsistencyCheck(t))).next((()=>i.Wn.vn(t,e)))}))}(e.localStore,n);Lx(e,n,i),Mx(e,n),e.sharedClientState.updateMutationState(n,"rejected",i),await Bx(e,t)}catch(i){await Mb(i)}}function Mx(t,n){(t.jo.get(n)||[]).forEach((t=>{t.resolve()})),t.jo.delete(n)}function Lx(t,n,i){const e=t;let s=e.Ko[e.currentUser.toKey()];if(s){const t=s.get(n);t&&(i?t.reject(i):t.resolve(),s=s.remove(n)),e.Ko[e.currentUser.toKey()]=s}}function jx(t,n,i=null){t.sharedClientState.removeLocalQueryTarget(n);for(const e of t.Mo.get(n))t.Oo.delete(e),i&&t.Fo.zo(e,i);t.Mo.delete(n),t.isPrimaryClient&&t.qo.us(n).forEach((n=>{t.qo.containsKey(n)||Fx(t,n)}))}function Fx(t,n){t.Lo.delete(n.path.canonicalString());const i=t.Bo.get(n);null!==i&&(Uy(t.remoteStore,i),t.Bo=t.Bo.remove(n),t.Uo.delete(i),Vx(t))}function $x(t,n,i){for(const e of i)e instanceof kx?(t.qo.addReference(e.key,n),Ux(t,e)):e instanceof _x?(Jp("SyncEngine","Document no longer in limbo: "+e.key),t.qo.removeReference(e.key,n),t.qo.containsKey(e.key)||Fx(t,e.key)):Zp()}function Ux(t,n){const i=n.key,e=i.path.canonicalString();t.Bo.get(i)||t.Lo.has(e)||(Jp("SyncEngine","New document in limbo: "+i),t.Lo.add(e),Vx(t))}function Vx(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const n=t.Lo.values().next().value;t.Lo.delete(n);const i=new Fg(Eg.fromString(n)),e=t.Qo.next();t.Uo.set(e,new Tx(i)),t.Bo=t.Bo.insert(i,e),$y(t.remoteStore,new eb(Nm(_m(i.path)),e,2,dg.I))}}async function Bx(t,n,i){const e=t,s=[],r=[],o=[];e.Oo.isEmpty()||(e.Oo.forEach(((t,l)=>{o.push(e.Go(l,n,i).then((t=>{if(t){e.isPrimaryClient&&e.sharedClientState.updateQueryState(l.targetId,t.fromCache?"not-current":"current"),s.push(t);const n=iy.$n(l.targetId,t);r.push(n)}})))})),await Promise.all(o),e.Fo.Pr(s),await async function(t,n){const i=t;try{await i.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>zv.forEach(n,(n=>zv.forEach(n.kn,(e=>i.persistence.referenceDelegate.addReference(t,n.targetId,e))).next((()=>zv.forEach(n.xn,(e=>i.persistence.referenceDelegate.removeReference(t,n.targetId,e)))))))))}catch(t){if(!Hv(t))throw t;Jp("LocalStore","Failed to update sequence numbers: "+t)}for(const t of n){const n=t.targetId;if(!t.fromCache){const t=i.qn.get(n),e=t.withLastLimboFreeSnapshotVersion(t.snapshotVersion);i.qn=i.qn.insert(n,e)}}}(e.localStore,r))}async function zx(t,n){const i=t;if(!i.currentUser.isEqual(n)){Jp("SyncEngine","User change. New user:",n.toKey());const t=await oy(i.localStore,n);i.currentUser=n,function(t){t.jo.forEach((t=>{t.forEach((t=>{t.reject(new ig(ng.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.jo.clear()}(i),i.sharedClientState.handleUserChange(n,t.removedBatchIds,t.addedBatchIds),await Bx(i,t.Gn)}}function qx(t,n){const i=t,e=i.Uo.get(n);if(e&&e.$o)return Nw().add(e.key);{let t=Nw();const e=i.Mo.get(n);if(!e)return t;for(const n of e){const e=i.Oo.get(n);t=t.unionWith(e.view.Po)}return t}}function Kx(t){const n=t;return n.remoteStore.remoteSyncer.applySuccessfulWrite=Rx.bind(null,n),n.remoteStore.remoteSyncer.rejectFailedWrite=Px.bind(null,n),n}class Wx{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Ay(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return ry(this.persistence,new ey,t.initialUser,this.k)}Yo(t){return new vy(yy.ks,this.k)}Jo(t){return new ky}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Gx extends Wx{constructor(t,n,i){super(),this.ta=t,this.cacheSizeBytes=n,this.forceOwnership=i,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await async function(t){const n=t;return n.persistence.runTransaction("Synchronize last document change read time","readonly",(t=>function(t){const n=Gb(t);let i=bg.min();return n.jt({index:Dv.readTimeIndex,reverse:!0},((t,n,e)=>{n.readTime&&(i=function(t){const n=new vg(t[0],t[1]);return bg.fromTimestamp(n)}(n.readTime)),e.done()})).next((()=>i))}(t))).then((t=>{n.jn=t}))}(this.localStore),await this.ta.initialize(this,t),await Kx(this.ta.syncEngine),await Qy(this.ta.remoteStore),await this.persistence.sn((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}Zo(t){return ry(this.persistence,new ey,t.initialUser,this.k)}Xo(t){return new Fb(this.persistence.referenceDelegate.garbageCollector,t.asyncQueue)}Yo(t){const n=function(t,n){let i=t.projectId;return t.isDefaultDatabase||(i+="."+t.database),"firestore/"+n+"/"+i+"/"}(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),i=void 0!==this.cacheSizeBytes?kb.withCacheSize(this.cacheSizeBytes):kb.DEFAULT;return new Qb(this.synchronizeTabs,n,t.clientId,i,t.asyncQueue,"undefined"!=typeof window?window:null,Cy(),this.k,this.sharedClientState,!!this.forceOwnership)}Jo(t){return new ky}}class Hx{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Dx(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=zx.bind(null,this.syncEngine),await async function(t,n){const i=t;n?(i.Gr.delete(2),await jy(i)):n||(i.Gr.add(2),await Fy(i),i.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new gx}createDatastore(t){const n=Ay(t.databaseInfo.databaseId),i=new Sy(t.databaseInfo);return function(t,n,i,e){return new Py(t,n,i,e)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return n=this.localStore,i=this.datastore,e=t.asyncQueue,s=t=>Dx(this.syncEngine,t,0),r=Ey.bt()?new Ey:new _y,new Ly(n,i,e,s,r);var n,i,e,s,r}createSyncEngine(t,n){return function(t,n,i,e,s,r,o){const l=new Sx(t,n,i,e,s,r);return o&&(l.Wo=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=t;Jp("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await Fy(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ea(this.observer.next,t)}error(t){this.observer.error?this.ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}na(){this.muted=!0}ea(t,n){this.muted||setTimeout((()=>{this.muted||t(n)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(t,n,i,e){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=e,this.user=Kp.UNAUTHENTICATED,this.clientId=pg.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,(async t=>{Jp("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(i,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ig(ng.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new eg;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=hx(n,"Failed to shutdown persistence");t.reject(i)}})),t.promise}}async function Xx(t,n){t.asyncQueue.verifyOperationInProgress(),Jp("FirestoreClient","Initializing OfflineComponentProvider");const i=await t.getConfiguration();await n.initialize(i);let e=i.initialUser;t.setCredentialChangeListener((async t=>{e.isEqual(t)||(await oy(n.localStore,t),e=t)})),n.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=n}async function Qx(t,n){t.asyncQueue.verifyOperationInProgress();const i=await async function(t){return t.offlineComponents||(Jp("FirestoreClient","Using default OfflineComponentProvider"),await Xx(t,new Wx)),t.offlineComponents}(t);Jp("FirestoreClient","Initializing OnlineComponentProvider");const e=await t.getConfiguration();await n.initialize(i,e),t.setCredentialChangeListener((t=>async function(t,n){const i=t;i.asyncQueue.verifyOperationInProgress(),Jp("RemoteStore","RemoteStore received new credentials");const e=Ky(i);i.Gr.add(3),await Fy(i),e&&i.Jr.set("Unknown"),await i.remoteSyncer.handleCredentialChange(n),i.Gr.delete(3),await jy(i)}(n.remoteStore,t))),t.onlineComponents=n}async function Zx(t){return t.onlineComponents||(Jp("FirestoreClient","Using default OnlineComponentProvider"),await Qx(t,new Hx)),t.onlineComponents}async function tk(t){const n=await Zx(t),i=n.eventManager;return i.onListen=Cx.bind(null,n.syncEngine),i.onUnlisten=Ax.bind(null,n.syncEngine),i}class nk{constructor(t,n,i,e,s,r,o,l){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=e,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=l}}class ik{constructor(t,n){this.projectId=t,this.database=n||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ik&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t,n,i){if(!i)throw new ig(ng.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${n}.`)}function rk(t){if(!Fg.isDocumentKey(t))throw new ig(ng.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ok(t){if(Fg.isDocumentKey(t))throw new ig(ng.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lk(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=function(t){return t.constructor?t.constructor.name:null}(t);return n?`a custom ${n} object`:"an object"}}return"function"==typeof t?"a function":Zp()}function ak(t,n){if("_delegate"in t&&(t=t._delegate),!(t instanceof n)){if(n.name===t.constructor.name)throw new ig(ng.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=lk(t);throw new ig(ng.INVALID_ARGUMENT,`Expected type '${n.name}', but it was: ${i}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uk{constructor(t){var n;if(void 0===t.host){if(void 0!==t.ssl)throw new ig(ng.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(n=t.ssl)||void 0===n||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ig(ng.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,n,i,e){if(!0===n&&!0===e)throw new ig(ng.INVALID_ARGUMENT,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,t.experimentalForceLongPolling,0,t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(t,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uk({}),this._settingsFrozen=!1,t instanceof ik?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ig(ng.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ik(t.options.projectId)}(t))}get app(){if(!this._app)throw new ig(ng.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ig(ng.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uk(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new rg;switch(t.type){case"gapi":const n=t.client;return tg(!("object"!=typeof n||null===n||!n.auth||!n.auth.getAuthHeaderValueForFirstParty)),new ug(n,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new ig(ng.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ek.get(t);n&&(Jp("ComponentProvider","Removing Datastore"),ek.delete(t),n.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ck{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fk(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ck(this.firestore,t,this._key)}}class dk{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new dk(this.firestore,t,this._query)}}class fk extends dk{constructor(t,n,i){super(t,n,_m(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ck(this.firestore,null,new Fg(t))}withConverter(t){return new fk(this.firestore,t,this._path)}}function pk(t,n,...i){if(t=Rn(t),1===arguments.length&&(n=pg.A()),sk("doc","path",n),t instanceof hk){const e=Eg.fromString(n,...i);return rk(e),new ck(t,null,new Fg(e))}{if(!(t instanceof ck||t instanceof fk))throw new ig(ng.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const e=t._path.child(Eg.fromString(n,...i));return rk(e),new ck(t.firestore,t instanceof fk?t.converter:null,new Fg(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Ny(this,"async_queue_retry"),this.Ra=()=>{const t=Cy();t&&Jp("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=Cy();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pa(),this.ba(t)}enterRestrictedMode(t){if(!this.ya){this.ya=!0,this.Ia=t||!1;const n=Cy();n&&"function"==typeof n.removeEventListener&&n.removeEventListener("visibilitychange",this.Ra)}}enqueue(t){if(this.Pa(),this.ya)return new Promise((()=>{}));const n=new eg;return this.ba((()=>this.ya&&this.Ia?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.ga.push(t),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(t){if(!Hv(t))throw t;Jp("AsyncQueue","Operation failed with retryable error: "+t)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}ba(t){const n=this.ma.then((()=>(this.Ea=!0,t().catch((t=>{throw this.Ta=t,this.Ea=!1,Yp("INTERNAL UNHANDLED ERROR: ",function(t){let n=t.message||"";return t.stack&&(n=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t})).then((t=>(this.Ea=!1,t))))));return this.ma=n,n}enqueueAfterDelay(t,n,i){this.Pa(),this.Aa.indexOf(t)>-1&&(n=0);const e=ux.createAndSchedule(this,t,n,i,(t=>this.Va(t)));return this.pa.push(e),e}Pa(){this.Ta&&Zp()}verifyOperationInProgress(){}async Sa(){let t;do{t=this.ma,await t}while(t!==this.ma)}Da(t){for(const n of this.pa)if(n.timerId===t)return!0;return!1}Ca(t){return this.Sa().then((()=>{this.pa.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const n of this.pa)if(n.skipDelay(),"all"!==t&&n.timerId===t)break;return this.Sa()}))}Na(t){this.Aa.push(t)}Va(t){const n=this.pa.indexOf(t);this.pa.splice(n,1)}}function mk(t){return function(t){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}class wk extends hk{constructor(t,n,i){super(t,n,i),this.type="firestore",this._queue=new gk,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||bk(this),this._firestoreClient.terminate()}}function vk(t){return t._firestoreClient||bk(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function bk(t){var n;const i=t._freezeSettings(),e=function(t,n,i,e){return new nk(t,n,i,e.host,e.ssl,e.experimentalForceLongPolling,e.experimentalAutoDetectLongPolling,e.useFetchStreams)}(t._databaseId,(null===(n=t._app)||void 0===n?void 0:n.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Yx(t._authCredentials,t._appCheckCredentials,t._queue,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yk{constructor(...t){for(let n=0;n<t.length;++n)if(0===t[n].length)throw new ig(ng.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tg(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xk(Cg.fromBase64String(t))}catch(t){throw new ig(ng.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new xk(Cg.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ig(ng.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ig(ng.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return gg(this._lat,t._lat)||gg(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=/^__.*__$/;class Ik{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return null!==this.fieldMask?new uw(t,this.data,this.fieldMask,n,this.fieldTransforms):new aw(t,this.data,n,this.fieldTransforms)}}class Tk{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return new uw(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Sk(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Zp()}}class Ck{constructor(t,n,i,e,s,r){this.settings=t,this.databaseId=n,this.k=i,this.ignoreUndefinedProperties=e,void 0===s&&this.ka(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(t){return new Ck(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(t){var n;const i=null===(n=this.path)||void 0===n?void 0:n.child(t),e=this.$a({path:i,Oa:!1});return e.Ma(t),e}La(t){var n;const i=null===(n=this.path)||void 0===n?void 0:n.child(t),e=this.$a({path:i,Oa:!1});return e.ka(),e}Ba(t){return this.$a({path:void 0,Oa:!0})}Ua(t){return Uk(t,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(t){return void 0!==this.fieldMask.find((n=>t.isPrefixOf(n)))||void 0!==this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))}ka(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ma(this.path.get(t))}Ma(t){if(0===t.length)throw this.Ua("Document fields must not be empty");if(Sk(this.xa)&&Ek.test(t))throw this.Ua('Document fields cannot begin and end with "__"')}}class Ak{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.k=i||Ay(t)}ja(t,n,i,e=!1){return new Ck({xa:t,methodName:n,Ka:i,path:Tg.emptyPath(),Oa:!1,qa:e},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Nk(t){const n=t._freezeSettings(),i=Ay(t._databaseId);return new Ak(t._databaseId,!!n.ignoreUndefinedProperties,i)}function Dk(t,n,i,e,s,r={}){const o=t.ja(r.merge||r.mergeFields?2:0,n,i,s);Lk("Data must be an object, but it was:",o,e);const l=Pk(e,o);let a,u;if(r.merge)a=new Sg(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const e of r.mergeFields){const s=jk(n,e,i);if(!o.contains(s))throw new ig(ng.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Vk(t,s)||t.push(s)}a=new Sg(t),u=o.fieldTransforms.filter((t=>a.covers(t.field)))}else a=null,u=o.fieldTransforms;return new Ik(new Zg(l),a,u)}class Ok extends kk{_toFieldTransform(t){if(2!==t.xa)throw t.Ua(1===t.xa?`${this._methodName}() can only appear at the top level of your update data`:`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ok}}function Rk(t,n){if(Mk(t=Rn(t)))return Lk("Unsupported field value:",n,t),Pk(t,n);if(t instanceof kk)return function(t,n){if(!Sk(n.xa))throw n.Ua(`${t._methodName}() can only be used with update() and set()`);if(!n.path)throw n.Ua(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(n);i&&n.fieldTransforms.push(i)}(t,n),null;if(void 0===t&&n.ignoreUndefinedProperties)return null;if(n.path&&n.fieldMask.push(n.path),t instanceof Array){if(n.settings.Oa&&4!==n.xa)throw n.Ua("Nested arrays are not supported");return function(t,n){const i=[];let e=0;for(const s of t){let t=Rk(s,n.Ba(e));null==t&&(t={nullValue:"NULL_VALUE"}),i.push(t),e++}return{arrayValue:{values:i}}}(t,n)}return function(t,n){if(null===(t=Rn(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return function(t,n){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!jg(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(n)?$m(n):Fm(t,n)}(n.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const i=vg.fromDate(t);return{timestampValue:Kw(n.k,i)}}if(t instanceof vg){const i=new vg(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Kw(n.k,i)}}if(t instanceof _k)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof xk)return{bytesValue:Ww(n.k,t._byteString)};if(t instanceof ck){const i=n.databaseId,e=t.firestore._databaseId;if(!e.isEqual(i))throw n.Ua(`Document reference is for database ${e.projectId}/${e.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Jw(t.firestore._databaseId||n.databaseId,t._key.path)}}throw n.Ua(`Unsupported field value: ${lk(t)}`)}(t,n)}function Pk(t,n){const i={};return kg(t)?n.path&&n.path.length>0&&n.fieldMask.push(n.path):xg(t,((t,e)=>{const s=Rk(e,n.Fa(t));null!=s&&(i[t]=s)})),{mapValue:{fields:i}}}function Mk(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof vg||t instanceof _k||t instanceof xk||t instanceof ck||t instanceof kk)}function Lk(t,n,i){if(!Mk(i)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(i)){const e=lk(i);throw n.Ua("an object"===e?t+" a custom object":t+" "+e)}}function jk(t,n,i){if((n=Rn(n))instanceof yk)return n._internalPath;if("string"==typeof n)return $k(t,n);throw Uk("Field path arguments must be of type string or FieldPath.",t,!1,void 0,i)}const Fk=new RegExp("[~\\*/\\[\\]]");function $k(t,n,i){if(n.search(Fk)>=0)throw Uk(`Invalid field path (${n}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,i);try{return new yk(...n.split("."))._internalPath}catch(e){throw Uk(`Invalid field path (${n}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,i)}}function Uk(t,n,i,e,s){const r=e&&!e.isEmpty(),o=void 0!==s;let l=`Function ${n}() called with invalid data`;i&&(l+=" (via `toFirestore()`)"),l+=". ";let a="";return(r||o)&&(a+=" (found",r&&(a+=` in field ${e}`),o&&(a+=` in document ${s}`),a+=")"),new ig(ng.INVALID_ARGUMENT,l+t+a)}function Vk(t,n){return t.some((t=>t.isEqual(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(t,n,i,e,s){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=e,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ck(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new zk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(qk("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n)}}}class zk extends Bk{data(){return super.data()}}function qk(t,n){return"string"==typeof n?$k(t,n):n instanceof yk?n._internalPath:n._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Wk extends Bk{constructor(t,n,i,e,s,r){super(t,n,i,e,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Gk(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(qk("DocumentSnapshot.get",t));if(null!==i)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Gk extends Wk{data(t={}){return super.data(t)}}class Hk{constructor(t,n,i,e){this._firestore=t,this._userDataWriter=n,this._snapshot=e,this.metadata=new Kk(e.hasPendingWrites,e.fromCache),this.query=i}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,n){this._snapshot.docs.forEach((i=>{t.call(n,new Gk(this._firestore,this._userDataWriter,i.key,i,new Kk(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ig(ng.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(t,n){if(t._snapshot.oldDocs.isEmpty()){let n=0;return t._snapshot.docChanges.map((i=>({type:"added",doc:new Gk(t._firestore,t._userDataWriter,i.doc.key,i.doc,new Kk(t._snapshot.mutatedKeys.has(i.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:n++})))}{let i=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>n||3!==t.type)).map((n=>{const e=new Gk(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Kk(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==n.type&&(s=i.indexOf(n.doc.key),i=i.delete(n.doc.key)),1!==n.type&&(i=i.add(n.doc),r=i.indexOf(n.doc.key)),{type:Jk(n.type),doc:e,oldIndex:s,newIndex:r}}))}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Jk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Zp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t){if(Im(t)&&0===t.explicitOrderBy.length)throw new ig(ng.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xk{}class Qk extends Xk{constructor(t,n,i){super(),this.Ga=t,this.za=n,this.Ha=i,this.type="where"}_apply(t){const n=Nk(t.firestore),i=function(t,n,i,e,s,r,o){let l;if(s.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new ig(ng.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on FieldPath.documentId().`);if("in"===r||"not-in"===r){e_(o,r);const n=[];for(const i of o)n.push(i_(e,t,i));l={arrayValue:{values:n}}}else l=i_(e,t,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||e_(o,r),l=function(t,n,i,e=!1){return Rk(i,t.ja(e?4:3,"where"))}(i,0,o,"in"===r||"not-in"===r);const a=lm.create(s,r,l);return function(t,n){if(n.V()){const i=Sm(t);if(null!==i&&!i.isEqual(n.field))throw new ig(ng.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${n.field.toString()}'`);const e=Tm(t);null!==e&&s_(0,n.field,e)}const i=function(t,n){for(const i of t.filters)if(n.indexOf(i.op)>=0)return i.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(n.op));if(null!==i)throw new ig(ng.INVALID_ARGUMENT,i===n.op?`Invalid query. You cannot use more than one '${n.op.toString()}' filter.`:`Invalid query. You cannot use '${n.op.toString()}' filters with '${i.toString()}' filters.`)}(t,a),a}(t._query,0,n,t.firestore._databaseId,this.Ga,this.za,this.Ha);return new dk(t.firestore,t.converter,function(t,n){const i=t.filters.concat([n]);return new km(t.path,t.collectionGroup,t.explicitOrderBy.slice(),i,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,i))}}function Zk(t,n,i){const e=n,s=qk("where",t);return new Qk(s,e,i)}class t_ extends Xk{constructor(t,n){super(),this.Ga=t,this.Ja=n,this.type="orderBy"}_apply(t){const n=function(t,n,i){if(null!==t.startAt)throw new ig(ng.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new ig(ng.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const e=new vm(n,i);return function(t,n){if(null===Tm(t)){const i=Sm(t);null!==i&&s_(0,i,n.field)}}(t,e),e}(t._query,this.Ga,this.Ja);return new dk(t.firestore,t.converter,function(t,n){const i=t.explicitOrderBy.concat([n]);return new km(t.path,t.collectionGroup,i,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}class n_ extends Xk{constructor(t,n,i){super(),this.type=t,this.Ya=n,this.Xa=i}_apply(t){return new dk(t.firestore,t.converter,Dm(t._query,this.Ya,this.Xa))}}function i_(t,n,i){if("string"==typeof(i=Rn(i))){if(""===i)throw new ig(ng.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Cm(n)&&-1!==i.indexOf("/"))throw new ig(ng.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${i}' contains a '/' character.`);const e=n.path.child(Eg.fromString(i));if(!Fg.isDocumentKey(e))throw new ig(ng.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${e}' is not because it has an odd number of segments (${e.length}).`);return Wg(t,new Fg(e))}if(i instanceof ck)return Wg(t,i._key);throw new ig(ng.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${lk(i)}.`)}function e_(t,n){if(!Array.isArray(t)||0===t.length)throw new ig(ng.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${n.toString()}' filters.`);if(t.length>10)throw new ig(ng.INVALID_ARGUMENT,`Invalid Query. '${n.toString()}' filters support a maximum of 10 elements in the value array.`)}function s_(t,n,i){if(!i.isEqual(n))throw new ig(ng.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${n.toString()}' and so you must also use '${n.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${i.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function r_(t,n,i){let e;return e=t?i&&(i.merge||i.mergeFields)?t.toFirestore(n,i):t.toFirestore(n):n,e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_ extends class{convertValue(t,n="none"){switch($g(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Dg(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Og(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Zp()}}convertObject(t,n){const i={};return xg(t.fields,((t,e)=>{i[t]=this.convertValue(e,n)})),i}convertGeoPoint(t){return new _k(Dg(t.latitude),Dg(t.longitude))}convertArray(t,n){return(t.values||[]).map((t=>this.convertValue(t,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const i=Pg(t);return null==i?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Mg(t));default:return null}}convertTimestamp(t){const n=Ng(t);return new vg(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=Eg.fromString(t);tg(bv(i));const e=new ik(i.get(1),i.get(3)),s=new Fg(i.popFirst(5));return e.isEqual(n)||Yp(`Document ${s} contains a document reference within a different database (${e.projectId}/${e.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new xk(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ck(this.firestore,null,n)}}function l_(t){t=ak(t,dk);const n=ak(t.firestore,wk),i=vk(n),e=new o_(n);return Yk(t._query),function(t,n,i={}){const e=new eg;return t.asyncQueue.enqueueAndForget((async()=>function(t,n,i,e,s){const r=new Jx({next:i=>{n.enqueueAndForget((()=>wx(t,o))),i.fromCache&&"server"===e.source?s.reject(new ig(ng.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(i)},error:t=>s.reject(t)}),o=new xx(i,r,{includeMetadataChanges:!0,wo:!0});return mx(t,o)}(await tk(t),t.asyncQueue,n,i,e))),e.promise}(i,t._query).then((i=>new Hk(n,e,t,i)))}function a_(t,n){return function(t,n){const i=new eg;return t.asyncQueue.enqueueAndForget((async()=>async function(t,n,i){const e=Kx(t);try{const t=await function(t,n){const i=t,e=vg.now(),s=n.reduce(((t,n)=>t.add(n.key)),Nw());let r;return i.persistence.runTransaction("Locally write mutations","readwrite",(t=>i.Wn.vn(t,s).next((s=>{r=s;const o=[];for(const t of n){const n=rw(t,r.get(t.key));null!=n&&o.push(new uw(t.key,n,tm(n.value.mapValue),tw.exists(!0)))}return i.An.addMutationBatch(t,e,o,n)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(e.localStore,n);e.sharedClientState.addPendingMutation(t.batchId),function(t,n,i){let e=t.Ko[t.currentUser.toKey()];e||(e=new bw(gg)),e=e.insert(n,i),t.Ko[t.currentUser.toKey()]=e}(e,t.batchId,i),await Bx(e,t.changes),await Qy(e.remoteStore)}catch(t){const n=hx(t,"Failed to persist write");i.reject(n)}}(await function(t){return Zx(t).then((t=>t.syncEngine))}(t),n,i))),i.promise}(vk(t),n)}function u_(t,n,i){const e=i.docs.get(n._key),s=new o_(t);return new Wk(t,s,n._key,e,new Kk(i.hasPendingWrites,i.fromCache),n.converter)}function h_(t,n){const i={};for(const e in t)t.hasOwnProperty(e)&&(i[e]=n(t[e]));return i}function c_(t){if(null==t)return null;if(t instanceof Number&&(t=t.valueOf()),"number"==typeof t&&isFinite(t))return t;if(!0===t||!1===t)return t;if("[object String]"===Object.prototype.toString.call(t))return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map((t=>c_(t)));if("function"==typeof t||"object"==typeof t)return h_(t,(t=>c_(t)));throw new Error("Data cannot be encoded in JSON: "+t)}function d_(t){if(null==t)return t;if(t["@type"])switch(t["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{const n=Number(t.value);if(isNaN(n))throw new Error("Data cannot be decoded from JSON: "+t);return n}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map((t=>d_(t))):"function"==typeof t||"object"==typeof t?h_(t,(t=>d_(t))):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,n=!0){Wp="9.6.1",Yn(new Pn("firestore",((t,{options:i})=>{const e=t.getProvider("app").getImmediate(),s=new wk(e,new lg(t.getProvider("auth-internal")),new cg(t.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:n},i),s._setSettings(i),s}),"PUBLIC")),ni(qp,"3.4.1",t),ni(qp,"3.4.1","esm2017")}();const f_={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_ extends fn{constructor(t,n,i){super(`functions/${t}`,n||""),this.details=i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class g_{constructor(t,n,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then((t=>this.auth=t),(()=>{})),this.messaging||n.get().then((t=>this.messaging=t),(()=>{})),this.appCheck||i.get().then((t=>this.appCheck=t),(()=>{}))}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return null==t?void 0:t.accessToken}catch(t){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(t){return}}async getAppCheckToken(){if(this.appCheck){const t=await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken()}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(t,n,i,e,s="us-central1",r){this.app=t,this.fetchImpl=r,this.emulatorOrigin=null,this.contextProvider=new g_(n,i,e),this.cancelAllRequests=new Promise((t=>{this.deleteService=()=>Promise.resolve(t())}));try{const t=new URL(s);this.customDomain=t.origin,this.region="us-central1"}catch(t){this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(t){const n=this.app.options.projectId;return null!==this.emulatorOrigin?`${this.emulatorOrigin}/${n}/${this.region}/${t}`:null!==this.customDomain?`${this.customDomain}/${t}`:`https://${this.region}-${n}.cloudfunctions.net/${t}`}}async function w_(t,n,i,e){let s;i["Content-Type"]="application/json";try{s=await e(t,{method:"POST",body:JSON.stringify(n),headers:i})}catch(t){return{status:0,json:null}}let r=null;try{r=await s.json()}catch(t){}return{status:s.status,json:r}}const v_="@firebase/functions";var b_;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */b_=fetch.bind(self),Yn(new Pn("functions",((t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),e=t.getProvider("auth-internal"),s=t.getProvider("messaging-internal"),r=t.getProvider("app-check-internal");return new m_(i,e,s,r,n,b_)}),"PUBLIC").setMultipleInstances(!0)),ni(v_,"0.7.6",void 0),ni(v_,"0.7.6","esm2017");class y_{constructor(t){this.watchers={},this.service=function(t=ti()){return Xn(t,"firestore").getImmediate()}(),this.functions=function(t=ti(),n="us-central1"){return Xn(Rn(t),"functions").getImmediate({identifier:n})}(),(null==t?void 0:t.emulate)&&(function(t,n,i,e={}){var s;const r=(t=ak(t,hk))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==n&&Xp("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${n}:${i}`,ssl:!1})),e.mockUserToken){let n,i;if("string"==typeof e.mockUserToken)n=e.mockUserToken,i=Kp.MOCK_USER;else{n=function(t,n){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i=n||"demo-project",e=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:e,exp:e+3600,auth_time:e,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[nn(JSON.stringify({alg:"none",type:"JWT"})),nn(JSON.stringify(r)),""].join(".")}(e.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const r=e.mockUserToken.sub||e.mockUserToken.user_id;if(!r)throw new ig(ng.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new Kp(r)}t._authCredentials=new og(new sg(n,i))}}(this.service,"localhost",8080),"localhost",5001,Rn(this.functions).emulatorOrigin="http://localhost:5001");try{!function(t,n){!function(t){if(t._initialized||t._terminated)throw new ig(ng.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}(t=ak(t,wk));const i=vk(t),e=t._freezeSettings(),s=new Hx;(function(t,n,i){const e=new eg;t.asyncQueue.enqueue((async()=>{try{await Xx(t,i),await Qx(t,n),e.resolve()}catch(t){if(!function(t){return"FirebaseError"===t.name?t.code===ng.FAILED_PRECONDITION||t.code===ng.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(t))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),e.reject(t)}})).then((()=>e.promise))})(i,s,new Gx(s,e.cacheSizeBytes,null==n?void 0:n.forceOwnership))}(this.service)}catch(t){console.log(t.message)}}call(t){return function(t,n){return function(t,n,i){return e=>async function(t,n,i,e){const s=t._url(n),r={data:i=c_(i)},o={},l=await t.contextProvider.getContext();l.authToken&&(o.Authorization="Bearer "+l.authToken),l.messagingToken&&(o["Firebase-Instance-ID-Token"]=l.messagingToken),null!==l.appCheckToken&&(o["X-Firebase-AppCheck"]=l.appCheckToken);const a=function(t){let n=null;return{promise:new Promise(((i,e)=>{n=setTimeout((()=>{e(new p_("deadline-exceeded","deadline-exceeded"))}),t)})),cancel:()=>{n&&clearTimeout(n)}}}(e.timeout||7e4),u=await Promise.race([w_(s,r,o,t.fetchImpl),a.promise,t.cancelAllRequests]);if(a.cancel(),!u)throw new p_("cancelled","Firebase Functions instance was deleted.");const h=function(t,n){let i,e=function(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(t),s=e;try{const t=n&&n.error;if(t){const n=t.status;if("string"==typeof n){if(!f_[n])return new p_("internal","internal");e=f_[n],s=n}const r=t.message;"string"==typeof r&&(s=r),i=t.details,void 0!==i&&(i=d_(i))}}catch(t){}return"ok"===e?null:new p_(e,s,i)}(u.status,u.json);if(h)throw h;if(!u.json)throw new p_("internal","Response is not valid JSON object.");let c=u.json.data;if(void 0===c&&(c=u.json.result),void 0===c)throw new p_("internal","Response is missing data field.");return{data:d_(c)}}(t,n,e,i||{})}(Rn(t),n,void 0)}(this.functions,t)}async add(t,n,i){const e=await this.collection(t);return i&&await function(t,n,i){t=ak(t,ck);const e=ak(t.firestore,wk),s=r_(t.converter,n,i);return a_(e,[Dk(Nk(e),"setDoc",t._key,s,null!==t.converter,i).toMutation(t._key,tw.none())])}(this.document(t,i),n),i?this.document(t,i):function(t,n){const i=ak(t.firestore,wk),e=pk(t),s=r_(t.converter,n);return a_(i,[Dk(Nk(t.firestore),"addDoc",e._key,s,null!==t.converter,{}).toMutation(e._key,tw.exists(!1))]).then((()=>e))}(e,n)}collection(t){return function(t,n,...i){if(t=Rn(t),sk("collection","path",n),t instanceof hk){const e=Eg.fromString(n,...i);return ok(e),new fk(t,null,e)}{if(!(t instanceof ck||t instanceof fk))throw new ig(ng.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const e=t._path.child(Eg.fromString(n,...i));return ok(e),new fk(t.firestore,null,e)}}(this.service,t)}getCollection(t){return l_(this.collection(t))}document(t,n){return n?pk(this.collection(t),n):pk(this.service,t)}getDocument(t,n){return function(t){t=ak(t,ck);const n=ak(t.firestore,wk);return function(t,n,i={}){const e=new eg;return t.asyncQueue.enqueueAndForget((async()=>function(t,n,i,e,s){const r=new Jx({next:r=>{n.enqueueAndForget((()=>wx(t,o)));const l=r.docs.has(i);!l&&r.fromCache?s.reject(new ig(ng.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&r.fromCache&&e&&"server"===e.source?s.reject(new ig(ng.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:t=>s.reject(t)}),o=new xx(_m(i.path),r,{includeMetadataChanges:!0,wo:!0});return mx(t,o)}(await tk(t),t.asyncQueue,n,i,e))),e.promise}(vk(n),t._key).then((i=>u_(n,t,i)))}(this.document(t,n))}async update(t,n,i){const e=this.document(t,n);return await function(t,n,i,...e){t=ak(t,ck);const s=ak(t.firestore,wk),r=Nk(s);let o;return o="string"==typeof(n=Rn(n))||n instanceof yk?function(t,n,i,e,s,r){const o=t.ja(1,n,i),l=[jk(n,e,i)],a=[s];if(r.length%2!=0)throw new ig(ng.INVALID_ARGUMENT,`Function ${n}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<r.length;t+=2)l.push(jk(n,r[t])),a.push(r[t+1]);const u=[],h=Zg.empty();for(let t=l.length-1;t>=0;--t)if(!Vk(u,l[t])){const n=l[t];let i=a[t];i=Rn(i);const e=o.La(n);if(i instanceof Ok)u.push(n);else{const t=Rk(i,e);null!=t&&(u.push(n),h.set(n,t))}}const c=new Sg(u);return new Tk(h,c,o.fieldTransforms)}(r,"updateDoc",t._key,n,i,e):function(t,n,i,e){const s=t.ja(1,n,i);Lk("Data must be an object, but it was:",s,e);const r=[],o=Zg.empty();xg(e,((t,e)=>{const l=$k(n,t,i);e=Rn(e);const a=s.La(l);if(e instanceof Ok)r.push(l);else{const t=Rk(e,a);null!=t&&(r.push(l),o.set(l,t))}}));const l=new Sg(r);return new Tk(o,l,s.fieldTransforms)}(r,"updateDoc",t._key,n),a_(s,[o.toMutation(t._key,tw.exists(!0))])}(e,i,{merge:!0}),(await this.getDocument(t,n)).data()}async clearWatchers(){for(const t of Object.keys(this.watchers))this.watchers[t]();return!0}watchDocument(t,n,i){this.watchers[`${t}:${n}`]=function(t,...n){var i,e,s;t=Rn(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof n[o]||mk(n[o])||(r=n[o],o++);const l={includeMetadataChanges:r.includeMetadataChanges};if(mk(n[o])){const t=n[o];n[o]=null===(i=t.next)||void 0===i?void 0:i.bind(t),n[o+1]=null===(e=t.error)||void 0===e?void 0:e.bind(t),n[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let a,u,h;if(t instanceof ck)u=ak(t.firestore,wk),h=_m(t._key.path),a={next:i=>{n[o]&&n[o](u_(u,t,i))},error:n[o+1],complete:n[o+2]};else{const i=ak(t,dk);u=ak(i.firestore,wk),h=i._query;const e=new o_(u);a={next:t=>{n[o]&&n[o](new Hk(u,e,i,t))},error:n[o+1],complete:n[o+2]},Yk(t._query)}return function(t,n,i,e){const s=new Jx(e),r=new xx(n,s,i);return t.asyncQueue.enqueueAndForget((async()=>mx(await tk(t),r))),()=>{s.na(),t.asyncQueue.enqueueAndForget((async()=>wx(await tk(t),r)))}}(vk(u),h,l,a)}(this.document(t,n),(async t=>{i&&"function"==typeof i&&i({data:t.data()})}))}unwatchDocument(t,n){const i=`${t}:${n}`;return this.watchers[i]&&"function"==typeof this.watchers[i]?(this.watchers[i](),!0):(console.log(`There is no watcher running on ${i} document.`),!1)}async query(t,n,i,e){const s=[];for(const t of n||[])(null==t?void 0:t.conditional)&&(null==t?void 0:t.key)&&s.push(Zk(t.key,t.conditional,t.value));return i&&s.push(function(t,n="asc"){const i=n,e=qk("orderBy",t);return new t_(e,i)}(i)),e&&s.push(function(t){return function(t,n){if(n<=0)throw new ig(ng.INVALID_ARGUMENT,`Function limit() requires a positive number, but it was: ${n}.`)}(0,t),new n_("limit",t,"F")}(e)),l_(function(t,...n){for(const i of n)t=i._apply(t);return t}(this.collection(t),...s))}}function x_(t){var n,i,e=window.location.search.substring(1).split("&");for(n=0;n<e.length;n++)if((i=e[n].split("="))[0]==t)return i[1];return null}let k_=class{constructor(n){t(this,n),this.config=Jt(),this.auth=new Fh(Object.assign(Object.assign({},this.config),{tokenLocalStorageKey:"madnessclub:token",authLocalStorageKey:"madnessclub:session",emulate:Jt("emulate",!1)})),this.db=new y_({emulate:Jt("emulate",!1)}),this.emailSent=!1}async onSubmit(t){var n,i;if(!(null===(i=null===(n=null==t?void 0:t.detail)||void 0===n?void 0:n.data)||void 0===i?void 0:i.email))return alert("A valid email is required to join this club.");this.auth.withEmailLink(t.detail.data.email,{url:Jt("url"),dynamicLinkDomain:Jt("dynamicLinkDomain"),iOS:{bundleId:"com.fireenjin.madnessclub"},android:{packageName:"com.fireenjin.madnessclub",installApp:!1,minimumVersion:"12"},handleCodeInApp:!0}),this.emailSent=!0}onChange(t){var n,i,e;"interests"===(null===(n=null==t?void 0:t.target)||void 0===n?void 0:n.name)&&(null===(i=this.session)||void 0===i?void 0:i.uid)&&this.db.update("users",this.session.uid,{interests:(null===(e=null==t?void 0:t.target)||void 0===e?void 0:e.value)||[]})}async getUser(t){return(await this.db.getDocument("users",t)).data()}async createNewUser(t){return this.db.add("users",{email:(null==t?void 0:t.email)||null,photo:(null==t?void 0:t.photoURL)||null,id:(null==t?void 0:t.uid)||null,displayName:(null==t?void 0:t.displayName)||null},t.uid),this.getUser(null==t?void 0:t.uid)}async logout(){await this.auth.goOffline(),await this.auth.logout(),await this.db.clearWatchers(),localStorage.clear(),window.location.href="/"}async componentDidLoad(){this.auth.onAuthChanged((async t=>{(null==t?void 0:t.uid)&&(this.session=t,this.user=await this.getUser(t.uid),this.user?this.db.update("users",this.session.uid,{email:(null==t?void 0:t.email)||null,photo:(null==t?void 0:t.photoURL)||null,id:(null==t?void 0:t.uid)||null,displayName:(null==t?void 0:t.displayName)||null}):this.user=await this.createNewUser(t),this.db.watchDocument("users",t.uid,(({data:t})=>{this.user=t})))})),x_("code")&&setTimeout((async()=>{var t;try{this.db.call("connectUserToStripe")({userId:null===(t=this.session)||void 0===t?void 0:t.uid,code:x_("code")})}catch(t){alert(`There was an error setting up your Stripe connection: ${null==t?void 0:t.message}`)}}),3e3)}render(){var t,n,e,s,r,o;return i("div",null,i("video",{src:"./assets/videos/background.mov",style:{minHeight:"100vh",minWidth:"100vw",position:"absolute",top:"0",bottom:"0",left:"50%",transform:"translate(-50%)",zIndex:"-1",pointerEvents:"none"},autoplay:!0,muted:!0,loop:!0}),i("article",{class:"ion-padding",style:{display:"block",width:"100vw"}},i("h2",null,"👊Madness Club"),(null===(t=this.session)||void 0===t?void 0:t.uid)&&i("ion-button",{style:{position:"absolute",top:"20px",right:"20px"},color:"danger",fill:"clear",onClick:()=>this.logout()},"Logout",i("ion-icon",{slot:"end",name:"power"})),(null===(n=this.session)||void 0===n?void 0:n.uid)?i("div",{class:"dashboard ion-padding"},i("h1",null,"Welcome to the Club"),i("p",null,"Well done, you are in the roster, consider joining your bretheren on our Discord, while we wait for our orders."),i("ion-button",{href:"https://discord.gg/kMXXNNSzuu",target:"_blank"},i("ion-icon",{name:"logo-discord",slot:"start"}),"Join the Discord"),i("h2",null,"What are you interested in learning?"),i("fireenjin-select",{interfaceOptions:{header:"Interested In"},name:"interests",multiple:!0,value:(null===(e=this.user)||void 0===e?void 0:e.interests)||[],placeholder:"Interests",options:[{label:"Software Engineering (Coding / Programming)",value:"software"},{label:"Graphic Engineering (Design / UI / UX)",value:"design"}]}),(null===(s=this.user)||void 0===s?void 0:s.isEnrolled)&&!(null===(r=this.user)||void 0===r?void 0:r.isPayable)&&i("div",null,i("h2",null,"Setup your Payment Method"),i("p",null,"Get paid to complete missions by creating a Stripe account."),i("ion-button",{color:"success",href:`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${Jt("stripe.clientId")}&scope=read_write`},i("ion-icon",{slot:"start",name:"logo-usd"}),"Connect to Stripe")),(null===(o=this.user)||void 0===o?void 0:o.isPayable)&&i("div",null,i("h1",null,"Setup Complete"),i("p",null,"You are setup to be paid for Missions!"))):i("div",{class:"landing ion-padding"},i("p",null,"I see all this potential, and I see it squandered. God damn it, an entire generation pumping gas, waiting tables - slaves with white collars. Advertising has us chasing cars and clothes, working jobs we hate so we can buy shit we don't need. We're the middle children of history, man. No purpose or place. We have no Great War. No Great Depression. Our great war is a spiritual war... Our great depression is our lives. We've all been raised on television to believe that one day we'd all be millionaires, and movie gods, and rock stars, but we won't. We're slowly learning that fact. And we're very, very pissed off. ",i("br",null),i("ion-text",{color:"medium",class:"ion-padding"},"-Tlyer Durden")),i("h1",null,"Join the Madness..."),i("p",null,"Engineering is our tool, our weapon, to take control of our lives and bring about, The Reboot...."),this.emailSent?i("div",null,i("ion-icon",{color:"primary",name:"mail-unread",style:{height:"150px",width:"150px",display:"block",margin:"20px auto"}}),i("h2",{class:"ion-text-center ion-no-padding"},"Email Sent!"),i("ion-text",{color:"medium",class:"ion-text-center",style:{display:"block"}},"Check your spam if you don't see it after a few.")):i("fireenjin-form",{name:"signup",resetButton:"Reset",resetButtonColor:"light",submitButton:"Send",submitButtonColor:"success"},i("p",null,"Enter & confirm your email below to join us."),i("fireenjin-input",{type:"email",name:"email",placeholder:"Email Address",required:!0})))))}};k_.style="";export{S as fireenjin_form,X as fireenjin_input,Q as fireenjin_select,Z as ion_button,rt as ion_col,lt as ion_grid,mt as ion_icon,bt as ion_input,xt as ion_item,kt as ion_label,_t as ion_ripple_effect,St as ion_row,At as ion_select,Ft as ion_select_option,Ut as ion_text,k_ as page_home}