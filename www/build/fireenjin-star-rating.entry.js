import { r as registerInstance, f as createEvent, j as Build, h, i as getElement } from './index-7ecca5a2.js';

const starRatingCss = ".star-rating{display:flex;flex-direction:row-reverse;justify-content:space-around;text-align:center;width:var(\n    --star-rating-width,\n    calc(\n      (var(--star-rating-size, 25px) * var(--star-rating-max, 5)) +\n        var(--star-rating-spacing, -10px)\n    )\n  )}.star-rating input{display:none}.star-rating>label{color:var(--star-rating-default, #fff);font-size:var(--star-rating-size, 25px);cursor:pointer}.star-rating .star-active{color:var(--star-rating-active, var(--ion-color-warning-shade, #f90))}.star-rating:not(.is-disabled) label:hover,.star-rating:not(.is-disabled) label:hover~label{color:var(--star-rating-hover, var(--ion-color-warning-tint, #fc0))}";

let StarRating = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fireenjinStarRating = createEvent(this, "fireenjinStarRating", 7);
    this.disabled = false;
    this.name = "rating";
    this.maxRating = 5;
  }
  onInput(event) {
    console.log(event);
    if (this.disabled) {
      return false;
    }
    this.currentRating = parseFloat(event.target.value);
    this.fireenjinStarRating.emit({
      event,
      name: this.name,
      value: this.currentRating
    });
  }
  async setCurrentRating(rating) {
    this.currentRating = parseFloat(rating);
  }
  onValueChange() {
    this.currentRating = parseFloat(this.value);
  }
  componentDidLoad() {
    if (Build.isBrowser) {
      this.currentRating = parseFloat(this.value ? this.value : "0");
      this.starRatingEl.style.setProperty("--star-rating-max", `${this.maxRating}`);
    }
  }
  render() {
    return (h("div", { class: this.disabled ? "star-rating is-disabled" : "star-rating" }, [...Array(this.maxRating)].map((_radio, index) => [
      h("label", { class: this.currentRating >= this.maxRating - index - 0.5
          ? "star-active"
          : null }, h("input", { type: "radio", name: this.name, value: this.maxRating - index, onInput: event => this.onInput(event) }), "\u2605")
    ])));
  }
  get starRatingEl() { return getElement(this); }
  static get watchers() { return {
    "value": ["onValueChange"]
  }; }
};
StarRating.style = starRatingCss;

export { StarRating as fireenjin_star_rating };
