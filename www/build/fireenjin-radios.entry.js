import { r as registerInstance, f as createEvent, j as Build, h } from './index-7ecca5a2.js';

const radiosCss = "fireenjin-radios .invalid .input-wrapper{border-bottom-color:var(--ion-color-danger) !important}fireenjin-radios .invalid ion-label{color:var(--ion-color-danger) !important}fireenjin-radios ion-label{color:var(--ion-color-medium-shade);font-size:12px;font-weight:bold;text-transform:uppercase;font-family:arial;display:block;background:transparent;text-align:left;padding:0 0 8px 0;font-family:var(--ion-font-family)}fireenjin-radios ion-item{border-bottom:none !important;box-shadow:none !important}fireenjin-radios ion-input{display:block;height:0;width:0;opacity:0;pointer-events:none}fireenjin-radios ion-item ion-label{color:var(--ion-color-medium-shade) !important}fireenjin-radios ion-item input{color:var(--ion-color-dark);border:none;box-shadow:none !important;font-family:var(--ion-font-family);outline:none !important}fireenjin-radios ion-item.item-input-has-focus ion-label{color:var(--ion-color-primary)}fireenjin-radios ul{display:block;width:100%;list-style:none;padding:15px 0 5px 0;margin:0;text-align:left;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}fireenjin-radios ul li{display:inline-block;margin-right:15px;font-size:14px;line-height:30px;text-align:left;color:var(--ion-text-color);position:relative;height:30px;text-indent:30px}fireenjin-radios ul li ion-icon{position:absolute;left:0px;top:0;color:var(--ion-color-primary);height:28px;width:28px}fireenjin-radios ul li ion-icon svg path{fill:var(--ion-color-primary)}fireenjin-radios ul li .empty-circle{position:absolute;top:2px;left:0px;height:23px;width:23px;border-radius:100%;border:2px solid var(--ion-color-medium-tint)}fireenjin-radios ul li:hover{cursor:pointer;color:var(--ion-color-primary)}fireenjin-radios ul li:hover .empty-circle{border-color:var(--ion-color-primary)}";

let Radios = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.lines = "none";
    this.selected = 0;
  }
  onSelectedChange() {
    if (Build.isBrowser) {
      setTimeout(() => {
        this.setSelectedIndex();
      }, 50);
    }
  }
  onValueChange() {
    if (Build.isBrowser) {
      setTimeout(() => {
        this.setSelectedValue();
      }, 50);
    }
  }
  async getOptionIndex(str) {
    if (!this.options || !this.options.length)
      return false;
    let selectedIndex = 0;
    let i = 0;
    for (const option of this.options) {
      if (option.value === str) {
        selectedIndex = i;
        break;
      }
      i = i + 1;
    }
    this.selected = this.selectedIndex;
    return selectedIndex;
  }
  setSelectedValue() {
    let index = 0;
    for (const option of this.options) {
      if (option.value === this.value) {
        this.selected = index;
      }
      index = index + 1;
    }
    this.ionChange.emit({
      value: this.value,
      name: this.name,
    });
  }
  setSelectedIndex() {
    this.selectedIndex = this.selected;
    this.value = this.options[this.selected].value;
    this.ionChange.emit({
      value: this.value,
      name: this.name,
    });
  }
  componentWillLoad() {
    if (Build.isBrowser) {
      this.setSelectedIndex();
    }
  }
  selectOption(index, option) {
    this.value = typeof option.value !== "undefined" ? option.value : null;
    this.selectedIndex = index;
    if (!this.value) {
      setTimeout(() => {
        this.setSelectedValue();
      }, 50);
    }
  }
  render() {
    return (h("ion-item", { lines: this.lines }, h("ion-label", { position: this.labelPosition }, this.label), h("ul", null, this.options.map((radio, index) => (h("li", { onClick: () => this.selectOption(index, radio) }, radio.name, index === this.selectedIndex ? (h("ion-icon", { name: "checkmark-circle" })) : (h("div", { class: "empty-circle" }))))))));
  }
  static get watchers() { return {
    "selected": ["onSelectedChange"],
    "value": ["onValueChange"]
  }; }
};
Radios.style = radiosCss;

export { Radios as fireenjin_radios };
