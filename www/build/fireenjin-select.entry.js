import { r as registerInstance, f as createEvent, j as Build, h, k as Host, i as getElement } from './index-7ecca5a2.js';

const selectCss = "fireenjin-select ion-icon{margin-right:5px;color:var(--ion-text-color);opacity:0.33}";

let Select = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fireenjinFetch = createEvent(this, "fireenjinFetch", 7);
    /**
    * If `true`, the user cannot interact with the select.
    */
    this.disabled = false;
    /**
     * The text to display on the cancel button.
     */
    this.cancelText = 'Dismiss';
    /**
     * The text to display on the ok button.
     */
    this.okText = 'Okay';
    /**
     * If `true`, the select can accept multiple values.
     */
    this.multiple = false;
    /**
     * The interface the select should use: `action-sheet`, `popover` or `alert`.
     */
    this.interface = 'alert';
    /**
     * Any additional options that the `alert`, `action-sheet` or `popover` interface
     * can take. See the [ion-alert docs](../alert), the
     * [ion-action-sheet docs](../action-sheet) and the
     * [ion-popover docs](../popover) for the
     * create options for each interface.
     *
     * Note: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface.
     */
    this.interfaceOptions = {};
    this.limit = 15;
    this.options = [];
    this.results = [];
  }
  onSuccess(event) {
    var _a, _b, _c;
    if (((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.name) !== "select" || event.detail.endpoint !== this.endpoint)
      return;
    this.results = ((_c = (_b = event === null || event === void 0 ? void 0 : event.detail) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.results)
      ? event.detail.data.results
      : [];
    setTimeout(() => {
      this.value = this.value;
    }, 200);
  }
  fetchData() {
    if (!this.endpoint)
      return;
    this.fireenjinFetch.emit({
      name: "select",
      endpoint: this.endpoint,
      dataPropsMap: this.dataPropsMap ? this.dataPropsMap : this.resultsKey ? { [this.resultsKey]: "results" } : null,
      params: Object.assign({ data: Object.assign(Object.assign(Object.assign({}, (this.query ? { query: this.query } : {})), (this.orderBy ? { orderBy: this.orderBy } : {})), { limit: this.limit ? this.limit : 15 }) }, (this.params ? this.params : {})),
    });
  }
  componentWillLoad() {
    if (!Build.isBrowser)
      return;
    this.fetchData();
  }
  render() {
    return (h(Host, null, h("ion-item", { lines: this.lines }, this.icon && h("ion-icon", { slot: "start", name: this.icon }), this.label && h("ion-label", { position: this.labelPosition }, this.label), h("ion-select", { disabled: this.disabled, selectedText: this.selectedText, interface: this.interface, compareWith: this.compareWith, name: this.name, value: this.value, okText: this.okText, multiple: this.multiple, cancelText: this.cancelText, placeholder: this.placeholder, interfaceOptions: this.interfaceOptions ? this.interfaceOptions : {
        header: this.header,
        subHeader: this.subHeader,
        message: this.message,
      } }, (this.options ? this.options : []).map((option) => this.optionEl ? (this.optionEl(option)) : (h("ion-select-option", { value: option.value, disabled: option.disabled }, option.label))), (this.results ? this.results : []).map((result) => this.optionEl ? (this.optionEl(result)) : (h("ion-select-option", { value: result.id }, result.name)))))));
  }
  get selectEl() { return getElement(this); }
};
Select.style = selectCss;

export { Select as fireenjin_select };
