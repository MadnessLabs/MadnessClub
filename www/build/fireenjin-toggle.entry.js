import { r as registerInstance, h } from './index-7ecca5a2.js';

const toggleCss = "fireenjin-toggle{display:block;width:100%}fireenjin-toggle .invalid{--border-color:var(--ion-color-danger) !important}fireenjin-toggle .invalid ion-label{color:var(--ion-color-danger) !important}fireenjin-toggle .valid{--border-color:var(--ion-color-success) !important}fireenjin-toggle .valid ion-label{color:var(--ion-color-success) !important}fireenjin-toggle ion-label{font-size:16px !important;font-weight:bold !important;display:block;background:transparent;text-align:left;padding:0 0 8px 0;font-family:var(--ion-font-family)}fireenjin-toggle ion-item{position:relative;box-shadow:none !important;--background:var(--background);font-size:inherit;text-align:inherit;--min-height:var(--item-min-height, 48px) !important}fireenjin-toggle ion-item ion-icon[slot=\"start\"]{margin:auto 10px 10px auto;fill:var(--ion-text-color)}fireenjin-toggle ion-item.item-has-focus{--border-width:0;border-color:var(--ion-color-primary)}fireenjin-toggle ion-item.item-has-focus ion-label{color:var(--ion-color-primary) !important}fireenjin-toggle .input-icon ion-icon{display:block;position:absolute;right:0px;top:30px;height:35px;width:35px;color:var(--ion-color-dark)}fireenjin-toggle .input-icon ion-icon:hover{cursor:pointer;color:var(--ion-color-primary)}";

let Toggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * If `true`, the user cannot interact with the select.
     */
    this.disabled = false;
  }
  render() {
    return (h("ion-item", { lines: this.lines }, h("slot", { name: "start", slot: "start" }), this.label && h("ion-label", { position: this.labelPosition }, this.label), h("ion-toggle", { disabled: this.disabled, color: this.color, name: this.name, checked: !!this.value }), h("slot", { name: "end", slot: "after" })));
  }
};
Toggle.style = toggleCss;

export { Toggle as fireenjin_toggle };
