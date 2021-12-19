import { r as registerInstance, f as createEvent, j as Build, h, i as getElement } from './index-7ecca5a2.js';

const inputAddressCss = "fireenjin-input-address ion-label{font-size:12px;font-weight:bold;font-family:arial;display:block;background:transparent;text-align:left;padding:0 0 8px 0}fireenjin-input-address .invalid .input-wrapper{border-bottom-color:var(--ion-color-danger) !important}fireenjin-input-address .invalid .label{color:var(--ion-color-danger) !important}fireenjin-input-address ion-item{position:relative;border-bottom:none !important;box-shadow:none !important}fireenjin-input-address ion-item.is-hidden{display:none}fireenjin-input-address ion-item ion-label{color:var(--ion-color-medium) !important}fireenjin-input-address ion-item ion-input{border:none;box-shadow:none !important;outline:none !important;font-size:16px;font-weight:normal !important}fireenjin-input-address ion-item.item-has-focus{--border-width:0;border-color:var(--ion-color-primary)}fireenjin-input-address ion-item.item-has-focus ion-label{color:var(--ion-color-primary) !important}fireenjin-input-address ion-input.autocomplete-field{--padding-top:13px !important}fireenjin-input-address ion-button{text-decoration:none;position:absolute;right:0px;top:3px;z-index:3}fireenjin-input-address ion-button .button-inner{font-size:14px;color:var(--ion-color-primary);padding-right:25px}fireenjin-input-address ion-button ion-icon{position:absolute;top:6px;right:10px;color:var(--ion-color-primary)}fireenjin-input-address .manual-fields{width:100%;padding-top:5px}fireenjin-input-address .manual-fields ion-input{--padding-top:8px;--padding-bottom:8px;--padding-start:17px}fireenjin-input-address .manual-fields ion-grid floodbot-state-autocomplete,fireenjin-input-address .manual-fields ion-grid ion-input{display:block;min-width:150px}fireenjin-input-address .autocomplete-field{display:block;padding-top:8px}fireenjin-input-address .manual-fields ion-grid,fireenjin-input-address .manual-fields ion-grid ion-row ion-col{padding-bottom:0 !important;padding-top:0 !important}fireenjin-input-address .manual-fields ion-input:not(.zip-input){border-bottom:1px solid var(--ion-color-light-shade, #eee) !important}";

let InputAddress = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionInput = createEvent(this, "ionInput", 7);
    this.fireenjinAddressMode = createEvent(this, "fireenjinAddressMode", 7);
    this.fireenjinUpdateAutoHeight = createEvent(this, "fireenjinUpdateAutoHeight", 7);
    /**
     * The value of the input field
     */
    this.value = {};
    this.manualEntry = false;
  }
  onChange() {
    if (this.manualEntry) {
      setTimeout(() => {
        const fullAddress = `${this.streetInputEl.value},${this.unitInputEl.value ? ` ${this.unitInputEl.value},` : ""} ${this.cityInputEl.value}, ${this.stateSelectEl.querySelector("ion-select").value} ${this.zipInputEl.value}`;
        this.autocompleteFieldEl.value = fullAddress;
        this.value.full = fullAddress;
        this.ionInput.emit({
          name: this.name,
          value: this.value,
        });
      }, 100);
    }
  }
  injectScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.async = true;
      script.src = src;
      script.addEventListener("load", resolve);
      script.addEventListener("error", () => reject("Error loading script."));
      script.addEventListener("abort", () => reject("Script loading aborted."));
      document.head.appendChild(script);
    });
  }
  async componentWillLoad() {
    var _a;
    if (Build.isBrowser) {
      try {
        if (this.googleMapsKey && !((_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps)) {
          await this.injectScript(`https://maps.googleapis.com/maps/api/js?key=${this.googleMapsKey}&libraries=places`);
        }
      }
      catch (e) {
        console.log("Error injecting Google Maps");
      }
    }
  }
  async componentDidLoad() {
    if (Build.isBrowser) {
      const inputEl = await this.autocompleteFieldEl.getInputElement();
      setTimeout(() => {
        inputEl.setAttribute("autocomplete", "new-password");
      }, 200);
      const autocomplete = new google.maps.places.Autocomplete(inputEl, {
        types: ["address"],
      });
      google.maps.event.addListener(autocomplete, "place_changed", () => {
        var _a, _b, _c, _d, _e, _f, _g;
        this.place = autocomplete.getPlace();
        if (!this.value) {
          this.value = {};
        }
        this.value.full = this.place.formatted_address;
        let streetAddress = "";
        this.value.placeId = (_a = this.place) === null || _a === void 0 ? void 0 : _a.place_id;
        this.value.lat = (_d = (_c = (_b = this.place) === null || _b === void 0 ? void 0 : _b.geometry) === null || _c === void 0 ? void 0 : _c.location) === null || _d === void 0 ? void 0 : _d.lat();
        this.value.lng = (_g = (_f = (_e = this.place) === null || _e === void 0 ? void 0 : _e.geometry) === null || _f === void 0 ? void 0 : _f.location) === null || _g === void 0 ? void 0 : _g.lng();
        this.place.address_components.map((field, index) => {
          if (field.types.indexOf("street_number") !== -1) {
            streetAddress = field.long_name;
          }
          if (field.types.indexOf("route") !== -1) {
            streetAddress = streetAddress + " " + field.long_name;
          }
          if (field.types.indexOf("locality") !== -1) {
            this.value.city = field.long_name;
          }
          if (field.types.indexOf("postal_code") !== -1) {
            this.value.zip = field.short_name;
          }
          if (field.types.indexOf("administrative_area_level_1") !== -1) {
            this.value.state = field.short_name;
          }
          if (this.place.address_components.length === index + 1) {
            this.value.street = streetAddress;
          }
          if (index === this.place.address_components.length - 1) {
            setTimeout(() => {
              this.ionInput.emit({
                name: this.name,
                value: this.value,
              });
            }, 10);
          }
        });
      });
    }
  }
  toggleManualEntry() {
    this.manualEntry = !this.manualEntry;
    if (this.manualEntry) {
      this.value = {
        city: this.cityInputEl.value,
        country: "US",
        full: this.autocompleteFieldEl.value,
        state: this.stateSelectEl.value,
        street: this.streetInputEl.value,
        unit: this.unitInputEl.value,
        zip: this.zipInputEl.value,
      };
    }
    this.fireenjinAddressMode.emit({ maual: this.manualEntry });
    this.fireenjinUpdateAutoHeight.emit();
    setTimeout(() => {
      this.addressAutocompleteEl.forceUpdate();
    }, 0);
  }
  render() {
    const value = this.value ? this.value : {};
    return [
      h("ion-item", { lines: this.lines, class: { "is-hidden": !this.manualEntry } }, h("ion-label", { position: this.labelPosition }, this.label), h("div", { class: "manual-fields" }, h("ion-input", { ref: (el) => (this.streetInputEl = el), type: "text", name: this.name + ".street", placeholder: "Street Address", value: value.street, required: this.required && this.manualEntry }), h("ion-input", { ref: (el) => (this.unitInputEl = el), type: "text", name: this.name + ".unit", placeholder: "Street Address 2", value: value.unit }), h("ion-input", { ref: (el) => (this.cityInputEl = el), type: "text", name: this.name + ".city", placeholder: "City", value: value.city, required: this.required && this.manualEntry }), h("ion-grid", null, h("ion-row", null, h("ion-col", { size: "6" }, h("fireenjin-input-state", { ref: (el) => (this.stateSelectEl = el), name: this.name + ".state", value: value.state, placeholder: "State" })), h("ion-col", { size: "6" }, h("ion-input", { ref: (el) => (this.zipInputEl = el), class: "zip-input", type: "tel", name: this.name + ".zip", min: "0", max: "999999", value: value.zip, placeholder: "Zip Code", required: this.required && this.manualEntry }))))), h("ion-button", { fill: "clear", color: "primary", onClick: () => this.toggleManualEntry(), slot: "end" }, h("span", { class: "button-inner" }, "Search", h("ion-icon", { name: "search" })))),
      h("ion-item", { class: { "is-hidden": this.manualEntry } }, h("ion-label", { position: "stacked" }, this.label), h("ion-input", { ref: (el) => (this.autocompleteFieldEl = el), class: "autocomplete-field", type: "text", placeholder: this.placeholder, value: value.full, autocomplete: "off", required: this.required && !this.manualEntry }), h("ion-button", { fill: "clear", color: "primary", onClick: () => this.toggleManualEntry(), slot: "end" }, h("span", { class: "button-inner" }, "Manual", h("ion-icon", { name: "create" })))),
    ];
  }
  get addressAutocompleteEl() { return getElement(this); }
};
InputAddress.style = inputAddressCss;

export { InputAddress as fireenjin_input_address };
