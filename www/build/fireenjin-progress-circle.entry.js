import { r as registerInstance, h } from './index-7ecca5a2.js';

const progressCircleCss = ":host{display:flex;align-items:center;justify-content:center;height:100%;position:relative}.slot-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:var(--progress-font-size, inherit) !important;font-weight:var(--progress-font-weight, inherit) !important;color:inherit}circle{transition:stroke-dashoffset 0.35s;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}#track{stroke:var(--progress-track-stroke, var(--ion-color-medium, grey))}#progress{stroke:var(--progress-stroke, var(--ion-color-primary, blue))}";

let ProgressCircle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The percent value of progress filled between 0 and 100
     */
    this.percent = 0;
    /**
     * The radius size of the circle in pixels
     */
    this.radius = 60;
    /**
     * The stroke thickness of the progress bar
     */
    this.stroke = 5;
  }
  // componentDidLoad() {
  //   let i = 0;
  //   const killInterval = setInterval(() => {
  //     this.percent = i;
  //     i++;
  //     if (i > 100) {
  //       clearInterval(killInterval);
  //     }
  //   }, 600);
  // }
  render() {
    const normalizedRadius = this.radius - this.stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    return [
      h("svg", { height: this.radius * 2, width: this.radius * 2 }, h("circle", { id: "track", fill: "transparent", "stroke-dasharray": circumference, "stroke-width": this.stroke, r: normalizedRadius, cx: this.radius, cy: this.radius }), h("circle", { id: "progress", fill: "transparent", "stroke-dasharray": circumference, style: {
          strokeDashoffset: (circumference -
            (this.percent / 100) * circumference)
        }, "stroke-width": this.stroke, r: normalizedRadius, cx: this.radius, cy: this.radius })),
      h("div", { class: "slot-wrapper" }, h("slot", null))
    ];
  }
};
ProgressCircle.style = progressCircleCss;

export { ProgressCircle as fireenjin_progress_circle };
