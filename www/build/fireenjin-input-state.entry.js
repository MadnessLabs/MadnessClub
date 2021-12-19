import { r as registerInstance, j as Build, h, i as getElement } from './index-7ecca5a2.js';

const inputStateCss = "fireenjin-input-state ion-select{color:var(--ion-color-dark);font-family:var(--ion-font-family);--padding-start:0;max-width:auto}";

let InputState = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.stateList = {
      AK: "Alaska",
      AL: "Alabama",
      AR: "Arkansas",
      AS: "American Samoa",
      AZ: "Arizona",
      CA: "California",
      CO: "Colorado",
      CT: "Connecticut",
      DC: "District of Columbia",
      DE: "Delaware",
      FL: "Florida",
      GA: "Georgia",
      GU: "Guam",
      HI: "Hawaii",
      IA: "Iowa",
      ID: "Idaho",
      IL: "Illinois",
      IN: "Indiana",
      KS: "Kansas",
      KY: "Kentucky",
      LA: "Louisiana",
      MA: "Massachusetts",
      MD: "Maryland",
      ME: "Maine",
      MI: "Michigan",
      MN: "Minnesota",
      MO: "Missouri",
      MS: "Mississippi",
      MT: "Montana",
      NC: "North Carolina",
      ND: " North Dakota",
      NE: "Nebraska",
      NH: "New Hampshire",
      NJ: "New Jersey",
      NM: "New Mexico",
      NV: "Nevada",
      NY: "New York",
      OH: "Ohio",
      OK: "Oklahoma",
      OR: "Oregon",
      PA: "Pennsylvania",
      PR: "Puerto Rico",
      RI: "Rhode Island",
      SC: "South Carolina",
      SD: "South Dakota",
      TN: "Tennessee",
      TX: "Texas",
      UT: "Utah",
      VA: "Virginia",
      VI: "Virgin Islands",
      VT: "Vermont",
      WA: "Washington",
      WI: "Wisconsin",
      WV: "West Virginia",
      WY: "Wyoming"
    };
  }
  componentDidLoad() {
    if (Build.isBrowser) {
      const ionSelectEl = this.stateAutocompleteEl.querySelector("ion-select");
      ionSelectEl.interfaceOptions = { header: "State" };
    }
  }
  render() {
    return (h("ion-select", { color: "primary", name: this.name, value: this.value, "ok-text": "Select", "cancel-text": "Cancel", placeholder: this.placeholder }, Object.keys(this.stateList).map(abbrev => (h("ion-select-option", { value: abbrev }, this.stateList[abbrev])))));
  }
  get stateAutocompleteEl() { return getElement(this); }
};
InputState.style = inputStateCss;

export { InputState as fireenjin_input_state };
