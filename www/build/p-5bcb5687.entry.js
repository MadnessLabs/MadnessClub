import{r,h as t}from"./p-21a72a99.js";const s=class{constructor(t){r(this,t),this.percent=0,this.radius=60,this.stroke=5}render(){const r=this.radius-2*this.stroke,s=2*r*Math.PI;return[t("svg",{height:2*this.radius,width:2*this.radius},t("circle",{id:"track",fill:"transparent","stroke-dasharray":s,"stroke-width":this.stroke,r,cx:this.radius,cy:this.radius}),t("circle",{id:"progress",fill:"transparent","stroke-dasharray":s,style:{strokeDashoffset:s-this.percent/100*s},"stroke-width":this.stroke,r,cx:this.radius,cy:this.radius})),t("div",{class:"slot-wrapper"},t("slot",null))]}};s.style=":host{display:flex;align-items:center;justify-content:center;height:100%;position:relative}.slot-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:var(--progress-font-size, inherit) !important;font-weight:var(--progress-font-weight, inherit) !important;color:inherit}circle{transition:stroke-dashoffset 0.35s;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}#track{stroke:var(--progress-track-stroke, var(--ion-color-medium, grey))}#progress{stroke:var(--progress-stroke, var(--ion-color-primary, blue))}";export{s as fireenjin_progress_circle}