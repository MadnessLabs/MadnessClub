import{r as i,c as t,h as s,H as e,a as h}from"./p-884d6dd0.js";import{g as o}from"./p-5c0ea631.js";let r=class{constructor(s){i(this,s),this.ionImgWillLoad=t(this,"ionImgWillLoad",7),this.ionImgDidLoad=t(this,"ionImgDidLoad",7),this.ionError=t(this,"ionError",7),this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()}}srcChanged(){this.addIO()}componentDidLoad(){this.addIO()}addIO(){void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver((i=>{i[i.length-1].isIntersecting&&(this.load(),this.removeIO())})),this.io.observe(this.el)):setTimeout((()=>this.load()),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){return s(e,{class:o(this)},s("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))}get el(){return h(this)}static get watchers(){return{src:["srcChanged"]}}};r.style=":host{display:block;object-fit:contain}img{display:block;width:100%;height:100%;object-fit:inherit;object-position:inherit}";export{r as ion_img}