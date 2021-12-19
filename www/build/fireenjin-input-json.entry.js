import { r as registerInstance, j as Build, h } from './index-7ecca5a2.js';

const inputJsonCss = "fireenjin-input-json .has-info-bubble{position:relative}fireenjin-input-json .has-info-bubble fireenjin-info-button{position:absolute;top:-6px;right:0px;cursor:pointer;pointer-events:all}fireenjin-input-json ion-label{align-self:unset !important;color:var(--ion-color-medium-tint);font-size:12px;font-weight:bold;text-transform:uppercase;font-family:arial;display:inline-block;background:transparent;text-align:left;padding:2px 35px 8px 0;font-family:var(--ion-font-family);color:var(--ion-color-medium-tint) !important}fireenjin-input-json .invalid{--border-color:var(--ion-color-danger) !important}fireenjin-input-json .invalid ion-label{color:var(--ion-color-danger) !important}fireenjin-input-json .valid{--border-color:var(--ion-color-success) !important}fireenjin-input-json .valid ion-label{color:var(--ion-color-success) !important}fireenjin-input-json ion-item{position:relative;box-shadow:none !important;--background:var(--background);font-size:inherit;color:inherit;text-align:inherit;--min-height:var(--item-min-height, 48px) !important}fireenjin-input-json ion-item ion-input{color:inherit;border:none;box-shadow:none !important;font-family:var(--ion-font-family);font-size:inherit;outline:none !important;--padding-top:15px;width:85% !important;margin-right:auto;text-align:left;--padding-top:var(--input-padding-top, 7px) !important;--padding-bottom:var(--input-padding-bottom, 6px) !important;--padding-start:var(--input-padding-start, 0px) !important;--padding-end:var(--input-padding-end, 0px) !important}fireenjin-input-json ion-item.item-has-focus{--border-width:0;border-color:var(--ion-color-primary)}fireenjin-input-json ion-item.item-has-focus ion-label{color:var(--ion-color-primary) !important}fireenjin-input-json ion-item .edit ion-button{text-decoration:none;position:absolute;right:0px;top:3px}fireenjin-input-json ion-item .edit ion-button .button-inner{font-size:14px;color:var(--ion-color-primary);padding-right:25px}fireenjin-input-json ion-item .edit ion-button ion-icon{position:absolute;top:6px;right:10px;color:var(--ion-color-primary)}fireenjin-input-json .input-password input{width:calc(100% - 60px) !important}fireenjin-input-json .input-icon ion-icon{display:block;position:absolute;right:15px;top:30px;height:35px;width:35px;color:var(--ion-color-dark)}fireenjin-input-json .input-icon ion-icon:hover{cursor:pointer;color:var(--ion-color-primary)}fireenjin-input-json .input-password ion-icon{top:25px}fireenjin-input-json .input-card.item-has-focus{border-bottom:2px solid var(--ion-color-primary);--border-color:transparent !important}fireenjin-input-json #card-number{padding:12px 0 8px 0;width:100%}fireenjin-input-json .date-field{margin-right:0px !important;display:block;width:100% !important}fireenjin-input-json .date-field input{padding-bottom:5px !important}";

let InputJson = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.value = {};
    this.name = "json";
  }
  componentDidLoad() {
    if (Build.isBrowser) {
      // Get Data
    }
  }
  render() {
    return (h("ion-item", { lines: this.lines, style: { overflow: "visible" } }, this.label && h("ion-label", { position: this.labelPosition }, this.label), h("fireenjin-json-editor", { style: { width: "100%", marginTop: "15px" }, name: this.name, value: this.value ? this.value : {} })));
  }
};
InputJson.style = inputJsonCss;

export { InputJson as fireenjin_input_json };
