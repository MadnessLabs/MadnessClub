import { r as registerInstance, f as createEvent, j as Build, h } from './index-7ecca5a2.js';

const inputAmountCss = "fireenjin-input .invalid{--border-color:var(--ion-color-danger) !important}fireenjin-input .invalid ion-label{color:var(--ion-color-danger) !important}fireenjin-input .valid{--border-color:var(--ion-color-success) !important}fireenjin-input .valid ion-label{color:var(--ion-color-success) !important}fireenjin-input ion-label{font-size:16px !important;font-weight:bold !important;display:block;background:transparent;text-align:left;padding:0 0 8px 0;font-family:var(--ion-font-family)}fireenjin-input-amount ion-item ion-input{color:var(--ion-text-color);border:none;box-shadow:none !important;font-family:var(--ion-font-family);outline:none !important;--padding-top:5px !important;--padding-bottom:3px !important;--padding-start:8px}fireenjin-input-amount ion-item ion-input input.native-input{font-size:18px !important;font-weight:bold !important;text-indent:15px !important}fireenjin-input-amount ion-item.item-has-focus{--border-width:0 0 2px 0;--border-color:var(--ion-color-primary)}fireenjin-input-amount ion-item.item-has-focus ion-label{color:var(--ion-color-primary) !important}fireenjin-input-amount ion-item ion-icon[slot=\"start\"]{position:absolute;top:25px;left:8px;color:var(--ion-color-medium-shade)}fireenjin-input-amount ion-item .input-clear-icon{display:none !important;visibility:hidden !important}fireenjin-input-amount ion-item .text-input-clear-icon{display:none !important}fireenjin-input-amount .presets{position:absolute;top:6px;right:0px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}fireenjin-input-amount .presets span{border:1px solid var(--ion-text-color);color:var(--ion-text-color);padding:3px 8px;margin-left:13px;font-size:12px;font-weight:bold;transition:300ms ease all;border-radius:3px}fireenjin-input-amount .presets span:hover{cursor:pointer;color:var(--ion-color-success);border-color:var(--ion-color-success)}fireenjin-input-amount .presets span.selected{background-color:var(--ion-color-success);color:#ffffff;border:none}fireenjin-input-amount .hidden-input{display:block;visibility:hidden;height:0;opacity:0}fireenjin-input-amount ion-input{font-weight:bold;font-size:20px}fireenjin-input-amount input::-webkit-outer-spin-button,fireenjin-input-amount input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}fireenjin-input-amount input[type=\"number\"]{-moz-appearance:textfield}";

let InputAmount = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionInput = createEvent(this, "ionInput", 7);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.step = "0.01";
  }
  onChange(event) {
    this.formattedValue = this.formatCurrency(event.target.value);
  }
  onValueChange(newValue, oldValue) {
    if (newValue === oldValue)
      return false;
    this.formattedValue = this.formatCurrency(this.value);
  }
  formatCurrency(amount) {
    if (!amount || isNaN(parseFloat(amount))) {
      this.value = null;
      this.inputEl.value = null;
      return null;
    }
    const formattedAmount = Number(parseFloat((amount + "").replace(",", "")).toFixed(2));
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
    document.querySelectorAll(".presets span").forEach((span) => {
      if (+formattedAmount ===
        +parseFloat((span.textContent + "")
          .replace(",", "")
          .replace("$", "")
          .replace(" ", "")).toFixed(2)) {
        span.classList.add("selected");
      }
      else {
        span.classList.remove("selected");
      }
    });
    this.value = formattedAmount;
    setTimeout(() => {
      this.ionInput.emit({
        name: this.name,
        value: formattedAmount,
      });
      this.ionChange.emit({
        name: this.name,
        value: formattedAmount,
      });
    }, 200);
    return formatter.format(formattedAmount).replace("$", "");
  }
  componentDidLoad() {
    if (Build.isBrowser) {
      this.formattedValue = this.formatCurrency(this.value);
    }
  }
  selectPreset(preset) {
    this.formattedValue = this.formatCurrency(typeof preset === "string" ? preset : (preset === null || preset === void 0 ? void 0 : preset.value) ? preset.value : 0);
  }
  render() {
    return (h("ion-item", { lines: this.lines }, h("ion-icon", { name: "logo-usd", slot: "start" }), this.label && h("ion-label", { position: this.labelPosition }, this.label), this.presets && this.presets.length && (h("div", { class: "presets", slot: "end" }, this.presets.map((preset) => (h("span", { onClick: () => this.selectPreset(preset) }, typeof preset === "string"
      ? preset
      : (preset === null || preset === void 0 ? void 0 : preset.label)
        ? preset.label
        : (preset === null || preset === void 0 ? void 0 : preset.value)
          ? preset.value
          : ""))))), h("ion-input", { min: this.min, max: this.max, ref: (el) => (this.inputEl = el), disabled: this.disabled, inputmode: "decimal", type: "tel", step: this.step, placeholder: this.placeholder, required: this.required, autofocus: this.autofocus, value: this.formattedValue })));
  }
  static get watchers() { return {
    "value": ["onValueChange"]
  }; }
};
InputAmount.style = inputAmountCss;

export { InputAmount as fireenjin_input_amount };
