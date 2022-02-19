import { r as registerInstance, h } from './index-7ecca5a2.js';

const tabCss = "fireenjin-tab .tab-wrapper{opacity:0;pointer-events:none;height:0;display:block;transition:0.3s ease opacity;overflow:hidden}fireenjin-tab .tab-wrapper.tab-selected{opacity:1;pointer-events:all;height:auto;overflow:auto}";

let Tab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selected = false;
  }
  render() {
    return (h("div", { class: {
        "tab-selected": this.selected,
        "tab-deselected": !this.selected,
        "tab-wrapper": true,
      } }, h("slot", null)));
  }
};
Tab.style = tabCss;

export { Tab as fireenjin_tab };
