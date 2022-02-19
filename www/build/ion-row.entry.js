import { r as registerInstance, h, k as Host } from './index-7ecca5a2.js';
import { g as getIonMode } from './ionic-global-6dffb6cb.js';

const rowCss = ":host{display:flex;flex-wrap:wrap}";

let Row = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: getIonMode(this) }, h("slot", null)));
  }
};
Row.style = rowCss;

export { Row as ion_row };
