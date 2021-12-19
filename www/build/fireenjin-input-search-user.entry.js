import { r as registerInstance, f as createEvent, h } from './index-7ecca5a2.js';

const inputSearchUserCss = "";

let InputSearchUser = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionInput = createEvent(this, "ionInput", 7);
    this.fireenjinSelectUser = createEvent(this, "fireenjinSelectUser", 7);
    this.placeholder = "Search Users";
    this.disableSearch = false;
    this.mode = "inline";
    this.limit = 5;
    this.results = [];
  }
  async selectUser(event, user) {
    this.value = user.email;
    this.fireenjinSelectUser.emit({
      event,
      user,
    });
    setTimeout(async () => {
      await this.inputSearchEl.checkValidity({
        setValidationClass: true,
      });
    }, 200);
    if (this.mode === "popover") {
      await this.inputSearchEl.closePopover();
    }
    else if (this.mode === "inline") {
      await this.inputSearchEl.clearResults();
    }
  }
  render() {
    return (h("fireenjin-input-search", { labelPosition: this.labelPosition, lines: this.lines, iconEnd: this.iconEnd, iconStart: this.iconStart, mode: this.mode, label: this.label, ref: (el) => (this.inputSearchEl = el), endpoint: "searchUsers", resultsKey: "searchUsers.results", name: this.name, searchParams: {
        limit: this.limit ? this.limit : null,
      }, results: this.results, placeholder: this.placeholder, value: this.value, template: (result) => (h("ion-item", { onClick: (event) => this.selectUser(event, result), style: {
          cursor: "pointer",
        } }, h("ion-label", null, h("h2", null, result.firstName ? result.firstName : "", " ", result.lastName ? result.lastName : ""), h("p", null, result.email ? result.email : "No email on file")), h("ion-icon", { name: "checkmark-circle" }))) }, h("slot", { name: "start" }), h("slot", { name: "end" })));
  }
};
InputSearchUser.style = inputSearchUserCss;

export { InputSearchUser as fireenjin_input_search_user };
