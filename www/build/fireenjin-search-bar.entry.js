import { r as registerInstance, f as createEvent, h, k as Host } from './index-7ecca5a2.js';

const searchBarCss = "fireenjin-search-bar{display:block;border:1px solid rgba(var(--ion-text-color-rgb), 0.6);border-radius:26px;position:relative;padding:5px 0}fireenjin-search-bar .search-bar-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-content:center}fireenjin-search-bar .filter-bar{display:inline-flex;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;align-content:center;margin:auto 10px auto auto;max-width:100%;padding-bottom:3px}fireenjin-search-bar .filter-bar::-webkit-scrollbar{height:5px}fireenjin-search-bar .filter-bar::-webkit-scrollbar-thumb{background:rgba(var(--ion-text-color-rgb), 0.6);border-radius:2px}fireenjin-search-bar .filter-bar ion-chip{margin:auto 10px;border-color:rgba(var(--ion-text-color-rgb), 0.8);opacity:0.8}fireenjin-search-bar .filter-bar ion-chip:hover{opacity:1}fireenjin-search-bar .filter-bar ion-chip ion-icon{color:var(--ion-text-color);display:inline-block;opacity:0.6;height:20px;width:20px}fireenjin-search-bar .filter-bar ion-chip:last-of-type{margin-right:50px}fireenjin-search-bar .filter-button{order:2;margin:auto 0;position:absolute;right:0px;top:12px}fireenjin-search-bar .filter-button ion-badge{border-radius:100%;font-size:8px;height:12px;width:12px;padding:2px}fireenjin-search-bar ion-searchbar{max-width:250px;padding-top:2px !important;padding-bottom:0px !important;--background:transparent !important;--box-shadow:none !important;--color:var(--ion-text-color) !important}fireenjin-search-bar .searchbar-input{padding-inline-end:65px !important;padding-inline-start:42px !important}fireenjin-search-bar .searchbar-search-icon{left:10px !important}@media only screen and (max-width: 500px){fireenjin-search-bar .filter-button ion-label{display:none}fireenjin-search-bar .search-bar-wrapper{padding-right:0}}";

let SearchBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fireenjinTrigger = createEvent(this, "fireenjinTrigger", 7);
    this.modeToggle = false;
    this.displayMode = "grid";
    this.disabled = false;
    this.showFilter = true;
    this.selectOptions = {};
    this.currentFilters = {};
  }
  onFilterChange() {
    this.updateCurrentFilters();
  }
  async onTrigger(event) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    if (((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.trigger) === "set" && ((_c = (_b = event === null || event === void 0 ? void 0 : event.detail) === null || _b === void 0 ? void 0 : _b.payload) === null || _c === void 0 ? void 0 : _c.name)) {
      for (const [i, control] of this.filter.controls.entries()) {
        if (!(control === null || control === void 0 ? void 0 : control.name) || ((_e = (_d = event === null || event === void 0 ? void 0 : event.detail) === null || _d === void 0 ? void 0 : _d.payload) === null || _e === void 0 ? void 0 : _e.name) !== (control === null || control === void 0 ? void 0 : control.name))
          continue;
        const controlData = Object.assign(Object.assign({}, control), { value: ((_g = (_f = event === null || event === void 0 ? void 0 : event.detail) === null || _f === void 0 ? void 0 : _f.payload) === null || _g === void 0 ? void 0 : _g.value) || null });
        this.filter.controls[i] = controlData;
        this.currentFilters[control.name] = controlData;
        this.filter = Object.assign({}, this.filter);
        if (this.paginationEl && !((_h = this.paginationEl) === null || _h === void 0 ? void 0 : _h.disableFetch))
          this.paginationEl.fetchData = Object.assign(Object.assign({}, (((_j = this.paginationEl) === null || _j === void 0 ? void 0 : _j.fetchData) || {})), { [control.name]: (_l = (_k = event === null || event === void 0 ? void 0 : event.detail) === null || _k === void 0 ? void 0 : _k.payload) === null || _l === void 0 ? void 0 : _l.value });
      }
      if (!((_m = this.paginationEl) === null || _m === void 0 ? void 0 : _m.clearResults) || !((_o = this.paginationEl) === null || _o === void 0 ? void 0 : _o.getResults))
        return;
      await this.paginationEl.clearResults();
      await this.paginationEl.getResults();
    }
  }
  onSuccess(event) {
    var _a;
    if (((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.name) !== "select")
      return;
    this.selectOptions[event.detail.target.name] = event.detail.data.results;
  }
  async onChange(event) {
    var _a, _b, _c;
    if (!((_a = this.paginationEl) === null || _a === void 0 ? void 0 : _a.clearParamData))
      return;
    if (((_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.name) === "orderBy") {
      this.paginationEl.orderBy = event.detail.value;
    }
    if (((_c = event === null || event === void 0 ? void 0 : event.target) === null || _c === void 0 ? void 0 : _c.tagName) === "ION-SEARCHBAR") {
      await this.paginationEl.clearParamData("next");
      await this.paginationEl.clearParamData("back");
      await this.paginationEl.clearParamData("page");
      this.paginationEl.query = event.detail.value ? event.detail.value : "";
    }
  }
  async togglePaginationDisplay() {
    this.displayMode = this.displayMode === "grid" ? "list" : "grid";
    this.paginationEl.display = this.displayMode;
  }
  async clearFilter(event, clearingControl) {
    var _a, _b, _c, _d, _e;
    event.preventDefault();
    event.stopPropagation();
    const fetchData = ((_a = this.paginationEl) === null || _a === void 0 ? void 0 : _a.fetchData) || {};
    for (const [i, control] of this.filter.controls.entries()) {
      if (!control.name ||
        !control.value ||
        control.name !== clearingControl.name)
        continue;
      this.filter.controls[i] = Object.assign(Object.assign({}, control), { value: null });
      delete this.currentFilters[clearingControl.name];
      if (fetchData[control.name])
        delete fetchData[control.name];
      this.filter = Object.assign({}, this.filter);
      if (!((_b = this.paginationEl) === null || _b === void 0 ? void 0 : _b.clearParamData))
        continue;
      await this.paginationEl.clearParamData(control.name);
    }
    const paramData = {};
    for (const filter of Object.values(this.currentFilters)) {
      paramData[filter.name] = filter.value;
    }
    let options = { paramData };
    if (this.beforeGetResults &&
      typeof this.beforeGetResults === "function")
      options = await this.beforeGetResults(options);
    if (this.paginationEl && !((_c = this.paginationEl) === null || _c === void 0 ? void 0 : _c.disableFetch))
      this.paginationEl.fetchData = fetchData;
    if ((_d = this.paginationEl) === null || _d === void 0 ? void 0 : _d.clearResults)
      await this.paginationEl.clearResults();
    if ((_e = this.paginationEl) === null || _e === void 0 ? void 0 : _e.getResults)
      await this.paginationEl.getResults(options);
  }
  async updateCurrentFilters() {
    var _a;
    if (!((_a = this.filter) === null || _a === void 0 ? void 0 : _a.controls))
      return;
    for (const control of this.filter.controls) {
      if (!(control === null || control === void 0 ? void 0 : control.value))
        continue;
      this.currentFilters[control.name] = control;
      this.currentFilters = Object.assign({}, this.currentFilters);
    }
  }
  getLabelForValue(control, value) {
    for (const option of (control === null || control === void 0 ? void 0 : control.options) || []) {
      if ((option === null || option === void 0 ? void 0 : option.value) !== value)
        continue;
      return (option === null || option === void 0 ? void 0 : option.label) ? option.label : option.value;
    }
  }
  getControlLabel(control) {
    const value = (control === null || control === void 0 ? void 0 : control.value) ? control.value : null;
    let label = value ? Array.isArray(value) ? value.map(val => this.getLabelForValue(control, val)).join(", ") : this.getLabelForValue(control, value) : control.label;
    return label;
  }
  componentDidLoad() {
    this.updateCurrentFilters();
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return (h(Host, null, h("div", { class: "search-bar-wrapper" }, h("ion-searchbar", { disabled: this.disabled }), this.showFilter && ((_b = (_a = this.filter) === null || _a === void 0 ? void 0 : _a.controls) === null || _b === void 0 ? void 0 : _b.length) && h("div", { class: "filter-bar" }, ((_d = (_c = this.filter) === null || _c === void 0 ? void 0 : _c.controls) === null || _d === void 0 ? void 0 : _d.length) && ((_e = this.filter) === null || _e === void 0 ? void 0 : _e.controls.map(control => (h("ion-chip", { outline: !Object.keys(this.currentFilters).includes(control === null || control === void 0 ? void 0 : control.name), onClick: (event) => this.fireenjinTrigger.emit({
        event,
        trigger: "filter",
        name: control === null || control === void 0 ? void 0 : control.name,
        payload: {
          control
        }
      }) }, (control === null || control === void 0 ? void 0 : control.icon) && h("ion-icon", { name: control.icon }), (control === null || control === void 0 ? void 0 : control.label) && h("ion-label", null, this.getControlLabel(control)), Object.keys(this.currentFilters).includes(control === null || control === void 0 ? void 0 : control.name) && h("ion-icon", { name: "close-circle", onClick: (event) => this.clearFilter(event, control) }))))))), ((_g = (_f = this.filter) === null || _f === void 0 ? void 0 : _f.controls) === null || _g === void 0 ? void 0 : _g.length) && h("ion-button", { onClick: () => this.showFilter = !this.showFilter, class: "filter-button", size: "small", fill: "clear", shape: "round", style: { color: "var(--ion-text-color)" } }, h("ion-icon", { name: "funnel", slot: "icon-only" }), ((_h = Object.keys(this.currentFilters)) === null || _h === void 0 ? void 0 : _h.length) && h("ion-badge", { slot: "end" }, this.currentFilters ? Object.keys(this.currentFilters).length : 0))));
  }
  static get watchers() { return {
    "filter": ["onFilterChange"]
  }; }
};
SearchBar.style = searchBarCss;

export { SearchBar as fireenjin_search_bar };
