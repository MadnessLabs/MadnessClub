import { r as registerInstance, f as createEvent, j as Build, h } from './index-7ecca5a2.js';

const tabsCss = "fireenjin-tabs .tabs-bar{display:block;background-color:var(--ion-color-light-tint);text-align:center;font-family:var(--ion-font-family);font-weight:bold;color:var(--ion-color-dark);text-transform:capitalize;font-size:18px;padding:0}fireenjin-tabs .tabs-bar ion-col{padding:15px 0}fireenjin-tabs .tabs-bar ion-col:hover{cursor:pointer;color:var(--ion-color-primary)}fireenjin-tabs .tabs-bar ion-col.selected{background-color:var(--ion-color-primary-contrast);color:var(--ion-color-primary)}";

let Tabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fireenjinTabChange = createEvent(this, "fireenjinTabChange", 7);
    this.tabs = [];
  }
  componentDidLoad() {
    if (Build.isBrowser) {
      this.tabs = this.setSelectedTab();
      if (this.hash) {
        window.onhashchange = () => {
          const tabs = this.tabsWrapperEl.querySelectorAll("fireenjin-tab");
          this.tabs = this.setSelectedTab();
          for (let i = 0; i < tabs.length; ++i) {
            tabs[i].selected = this.selected === tabs[i].tab;
          }
        };
      }
    }
  }
  setSelectedTab() {
    const tabs = this.tabsWrapperEl.querySelectorAll("fireenjin-tab");
    const newTabs = [];
    for (let i = 0; i < tabs.length; ++i) {
      if (tabs[i].selected && (window.location.hash === "" || !this.hash)) {
        this.selected = tabs[i].tab;
      }
      else if (this.hash &&
        window.location.hash === "#" + tabs[i].tab.toLowerCase()) {
        this.selected = tabs[i].tab;
      }
      newTabs.push({ name: tabs[i].tab });
    }
    return newTabs;
  }
  tabClick(tab) {
    const tabs = this.tabsWrapperEl.querySelectorAll("fireenjin-tab");
    this.selected = tab.name;
    for (let i = 0; i < tabs.length; ++i) {
      tabs[i].selected = this.selected === tabs[i].tab;
    }
    if (this.hash) {
      window.location.hash = `#${tab.name}`;
    }
    this.fireenjinTabChange.emit({ tab });
  }
  render() {
    return (h("div", { ref: (el) => (this.tabsWrapperEl = el), class: "tabs-wrapper" }, h("ion-grid", { class: "tabs-bar" }, h("ion-row", null, this.tabs.map((tab) => (h("ion-col", { class: this.selected === tab.name ? "selected" : "", onClick: () => this.tabClick(tab) }, tab.name))))), h("div", { class: "tabs-content" }, h("slot", null))));
  }
};
Tabs.style = tabsCss;

export { Tabs as fireenjin_tabs };
