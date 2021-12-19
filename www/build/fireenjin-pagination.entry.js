import { r as registerInstance, f as createEvent, j as Build, h } from './index-7ecca5a2.js';
import { D as Debounce } from './index-639ca809.js';
import './_commonjsHelpers-93ec9c7a.js';

const paginationCss = "";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Pagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fireenjinFetch = createEvent(this, "fireenjinFetch", 7);
    this.disablePageCheck = false;
    this.disableFetch = false;
    this.display = "grid";
    this.page = 0;
    this.results = [];
    this.loadingSpinner = "bubbles";
    this.loadingText = "Loading more data...";
    this.name = "pagination";
    this.disableVirtualScroll = false;
    this.removeDuplicates = false;
    this.paramData = {};
  }
  onQuery() {
    this.infiniteScrollEl.disabled = false;
    this.results = [];
    this.getResults({
      page: 0,
    });
  }
  onOrderBy() {
    this.results = [];
    this.infiniteScrollEl.disabled = false;
    this.getResults({
      page: 0,
    });
  }
  onDisplay() {
    this.infiniteScrollEl.disabled = false;
    setTimeout(async () => {
      window.dispatchEvent(new window.Event("resize"));
    }, 2000);
  }
  async onSuccess(event) {
    if (event.detail.name === this.name) {
      let results = [];
      try {
        results = this.resultsKey
          .split(".")
          .reduce((o, i) => o[i], event.detail.data);
      }
      catch (error) {
        console.log("Error getting results", event.detail, this.resultsKey);
      }
      try {
        if (this.page === 0) {
          this.results = [];
        }
        this.page = this.pageKey
          ? this.pageKey.split(".").reduce((o, i) => o[i], event.detail.data)
          : this.page + 1;
        await this.addResults(results);
      }
      catch (err) {
        console.log("Error updating results!");
      }
      await this.infiniteScrollEl.complete();
      if (!(results === null || results === void 0 ? void 0 : results.length) ||
        (this.pageCountKey &&
          this.pageKey &&
          this.pageKey.split(".").reduce((o, i) => o[i], event.detail.data) ===
            this.pageCountKey
              .split(".")
              .reduce((o, i) => o[i], event.detail.data))) {
        this.infiniteScrollEl.disabled = true;
      }
      if (!this.disableVirtualScroll) {
        await this.virtualScrollEl.checkEnd();
        setTimeout(() => {
          window.dispatchEvent(new window.Event("resize"));
        }, 200);
      }
    }
  }
  onInfiniteScroll() {
    this.getResults({
      next: true,
    });
  }
  onResize() {
    var _a, _b;
    if (this.disableVirtualScroll)
      return;
    if (this.display === "list" &&
      ((_a = this.virtualScrollEl) === null || _a === void 0 ? void 0 : _a.querySelector("ion-item"))) {
      this.approxItemHeight = this.virtualScrollEl.querySelector("ion-item").offsetHeight;
    }
    else if (this.display === "grid" &&
      ((_b = this.virtualScrollEl) === null || _b === void 0 ? void 0 : _b.querySelectorAll("ion-col"))) {
      let i;
      let lastCol;
      const cols = this.virtualScrollEl.querySelectorAll("ion-col");
      for (i = 0; i < cols.length; i++) {
        const col = cols[i];
        if (lastCol && col.offsetTop !== lastCol.offsetTop) {
          break;
        }
        lastCol = col;
      }
      if (lastCol && lastCol.firstChild) {
        this.approxItemHeight = lastCol.firstChild.scrollHeight / i + 18;
      }
    }
  }
  async clearParamData(key) {
    if (key && this.paramData[key]) {
      const paramData = this.paramData;
      delete paramData[key];
      this.paramData = paramData;
    }
    else if (!key) {
      this.paramData = {};
    }
    this.infiniteScrollEl.disabled = false;
    return this.paramData;
  }
  async addResults(results = []) {
    if (this.removeDuplicates) {
      const newResultIds = results.map(result => result.id);
      this.results = [...this.results.filter(result => !newResultIds.includes(result.id)), ...results];
    }
    else {
      this.results = [...this.results, ...results];
    }
    this.infiniteScrollEl.disabled = false;
  }
  async clearResults() {
    this.page = 0;
    this.results = [];
    this.infiniteScrollEl.disabled = false;
  }
  async getResults(options = {}) {
    var _a, _b, _c;
    if (!this.disablePageCheck &&
      ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.pathname) !== this.initailizedOnPath)
      return;
    if (options.page || options.page === 0) {
      this.page = options.page;
    }
    if (options.next) {
      this.page = this.page + 1;
    }
    this.paramData = Object.assign(Object.assign(Object.assign({}, this.paramData), { limit: options.limit ? options.limit : this.limit, orderBy: this.orderBy, orderDirection: this.orderDirection, page: this.page }), ((options === null || options === void 0 ? void 0 : options.paramData) ? options.paramData : {}));
    if (this.query || this.query === "") {
      this.paramData.query = this.query;
    }
    if (this.page === 0) {
      this.paramData.next = null;
      this.paramData.back = null;
    }
    if (options.next &&
      ((_b = this.results) === null || _b === void 0 ? void 0 : _b.length) &&
      ((_c = this.results[this.results.length - 1]) === null || _c === void 0 ? void 0 : _c.id)) {
      this.paramData.next = this.results[this.results.length - 1].id;
    }
    this.fireenjinFetch.emit({
      name: this.name,
      endpoint: this.endpoint,
      dataPropsMap: this.dataPropsMap ? this.dataPropsMap : null,
      disableFetch: this.disableFetch,
      params: Object.assign(Object.assign({}, (this.fetchParams ? this.fetchParams : {})), { data: Object.assign(Object.assign({}, (this.fetchData ? this.fetchData : {})), this.paramData) }),
    });
  }
  componentWillLoad() {
    if (this.collection) {
      this.resultsKey = !this.resultsKey
        ? `${this.collection}.results`
        : this.resultsKey;
      this.pageKey = !this.pageKey ? `${this.collection}.page` : this.pageKey;
      this.pageCountKey = !this.pageCountKey
        ? `${this.collection}.pageCount`
        : this.pageCountKey;
      this.resultCountKey = !this.resultCountKey
        ? `${this.collection}.resultCount`
        : this.resultCountKey;
      this.name = !this.name ? `${this.collection}Pagination` : this.name;
    }
  }
  componentDidLoad() {
    var _a, _b;
    if (Build.isBrowser) {
      if ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.pathname) {
        this.initailizedOnPath = window.location.pathname;
      }
      if (!this.disableVirtualScroll) {
        window.dispatchEvent(new window.Event("resize"));
        this.resizeInterval = setInterval(() => {
          window.dispatchEvent(new window.Event("resize"));
        }, 3000);
      }
      if (!((_b = this.results) === null || _b === void 0 ? void 0 : _b.length)) {
        this.getResults();
      }
    }
  }
  disconnectedCallback() {
    if (Build.isBrowser && !this.disableVirtualScroll) {
      clearInterval(this.resizeInterval);
    }
  }
  renderResults() {
    return this.display === "grid" ? (h("ion-grid", null, h("ion-row", null, this.results.map((result) => typeof this.gridEl({ result }, null, null) === "string" ? (h("ion-col", { innerHTML: this.gridEl({ result }, null, null) })) : (h("ion-col", null, this.gridEl({ result }, null, null))))))) : (h("ion-card", null, h("ion-list", null, this.results.map((result) => typeof this.listEl({ result }, null, null) === "string" ? (h("div", { innerHTML: this.listEl({ result }, null, null) })) : (this.listEl({ result }, null, null))))));
  }
  render() {
    return (h("div", { class: "pagination" }, this.disableVirtualScroll ? (h("div", null, this.renderResults())) : (h("ion-virtual-scroll", { items: this.results, approxItemHeight: this.approxItemHeight, renderItem: this.renderItem, ref: (el) => (this.virtualScrollEl = el) }, this.renderResults())), h("ion-infinite-scroll", { style: { display: "block" }, ref: (el) => (this.infiniteScrollEl = el) }, h("ion-infinite-scroll-content", { "loading-spinner": this.loadingSpinner, "loading-text": this.loadingText }))));
  }
  static get watchers() { return {
    "query": ["onQuery"],
    "orderBy": ["onOrderBy"],
    "display": ["onDisplay"]
  }; }
};
__decorate([
  Debounce(1000)
], Pagination.prototype, "onQuery", null);
Pagination.style = paginationCss;

export { Pagination as fireenjin_pagination };
