import { r as registerInstance, f as createEvent, h } from './index-7ecca5a2.js';
import { D as Debounce } from './index-639ca809.js';
import './utils-c1d29b9e.js';
import './animation-259ddc80.js';
import './ios.transition-63e48b5d.js';
import './md.transition-fc2bd7ea.js';
import './cubic-bezier-ed243a9b.js';
import './index-d086042f.js';
import './ionic-global-6dffb6cb.js';
import { b as raf, r as removeEventListener, a as addEventListener } from './helpers-282c2254.js';
import './index-cc97b114.js';
import './index-8907b0d2.js';
import './index-9caea9e0.js';
import { f as popoverController } from './overlays-92b01948.js';
import './_commonjsHelpers-93ec9c7a.js';
import './hardware-back-button-508e48cf.js';

const setupConfig = (config) => {
  const win = window;
  const Ionic = win.Ionic;
  if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
    return;
  }
  win.Ionic = win.Ionic || {};
  win.Ionic.config = Object.assign(Object.assign({}, win.Ionic.config), config);
  return win.Ionic.config;
};
const getMode = () => {
  const win = window;
  const config = win && win.Ionic && win.Ionic.config;
  if (config) {
    if (config.mode) {
      return config.mode;
    }
    else {
      return config.get('mode');
    }
  }
  return 'md';
};

/**
 * This is a plugin for Swiper that allows it to work
 * with Ionic Framework and the routing integrations.
 * Without this plugin, Swiper would be incapable of correctly
 * determining the dimensions of the slides component as
 * each view is initially hidden before transitioning in.
 */
const setupSwiperInIonic = (swiper, watchForIonPageChanges = true) => {
  if (typeof window === 'undefined') {
    return;
  }
  const swiperEl = swiper.el;
  const ionPage = swiperEl.closest('.ion-page');
  if (!ionPage) {
    if (watchForIonPageChanges) {
      /**
       * If no ion page found, it is possible
       * that we are in the overlay setup step
       * where the inner component has been
       * created but not attached to the DOM yet.
       * If so, wait for the .ion-page class to
       * appear on the root div and re-run setup.
       */
      const rootNode = swiperEl.getRootNode();
      if (rootNode.tagName === 'DIV') {
        const mo = new MutationObserver((m) => {
          const mutation = m[0];
          const wasEmpty = mutation.oldValue === null;
          const hasIonPage = rootNode.classList.contains('ion-page');
          /**
           * Now that we have an .ion-page class
           * we can safely attempt setup again.
           */
          if (wasEmpty && hasIonPage) {
            mo.disconnect();
            /**
             * Set false here so we do not
             * get infinite loops
             */
            setupSwiperInIonic(swiper, false);
          }
        });
        mo.observe(rootNode, {
          attributeFilter: ['class'],
          attributeOldValue: true
        });
      }
    }
    return;
  }
  /**
   * If using slides in a modal or
   * popover we need to wait for the
   * overlay to be shown as these components
   * are hidden when they are initially created.
   */
  const modalOrPopover = swiperEl.closest('ion-modal, ion-popover');
  if (modalOrPopover) {
    const eventName = modalOrPopover.tagName === 'ION-MODAL' ? 'ionModalWillPresent' : 'ionPopoverWillPresent';
    const overlayCallback = () => {
      /**
       * We need an raf here so the update
       * is fired one tick after the overlay is shown.
       */
      raf(() => {
        swiperEl.swiper.update();
        removeEventListener(modalOrPopover, eventName, overlayCallback);
      });
    };
    addEventListener(modalOrPopover, eventName, overlayCallback);
  }
  else {
    /**
     * If using slides in a page
     * we need to wait for the ion-page-invisible
     * class to be removed so Swiper can correctly
     * compute the dimensions of the slides.
     */
    const mo = new MutationObserver((m) => {
      var _a;
      const mutation = m[0];
      const wasPageHidden = (_a = mutation.oldValue) === null || _a === void 0 ? void 0 : _a.includes('ion-page-invisible');
      const isPageHidden = ionPage.classList.contains('ion-page-invisible');
      /**
       * Only update Swiper if the page was
       * hidden but is no longer hidden.
       */
      if (!isPageHidden && isPageHidden !== wasPageHidden) {
        swiperEl.swiper.update();
      }
    });
    mo.observe(ionPage, {
      attributeFilter: ['class'],
      attributeOldValue: true
    });
  }
  /**
   * We also need to listen for the appload event
   * which is emitted by Stencil in the
   * event that Swiper is being used on the
   * view that is rendered initially.
   */
  const onAppLoad = () => {
    swiperEl.swiper.update();
    removeEventListener(window, 'appload', onAppLoad);
  };
  addEventListener(window, 'appload', onAppLoad);
};
const IonicSwiper = {
  name: 'ionic',
  on: {
    afterInit(swiper) {
      console.warn('[Deprecation Warning]: The IonicSwiper module has been deprecated in favor of the IonSlides module. This change was made to better support the Swiper 7 release. The IonicSwiper module will be removed in Ionic 7.0. See https://ionicframework.com/docs/api/slides#migration for revised migration steps.');
      setupSwiperInIonic(swiper);
    }
  }
};

const IonicSlides = (opts) => {
  const { swiper, extendParams } = opts;
  const slidesParams = {
    effect: undefined,
    direction: 'horizontal',
    initialSlide: 0,
    loop: false,
    parallax: false,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 300,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    touchEventsTarget: 'container',
    autoplay: false,
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
    autoHeight: false,
    setWrapperSize: false,
    zoom: {
      maxRatio: 3,
      minRatio: 1,
      toggle: false,
    },
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    touchStartPreventDefault: false,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchReleaseOnEdges: false,
    iOSEdgeSwipeDetection: false,
    iOSEdgeSwipeThreshold: 20,
    resistance: true,
    resistanceRatio: 0.85,
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    loopAdditionalSlides: 0,
    noSwiping: true,
    runCallbacksOnInit: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    },
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    fadeEffect: {
      crossFade: false
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide'
    }
  };
  if (swiper.pagination) {
    slidesParams.pagination = {
      type: 'bullets',
      clickable: false,
      hideOnClick: false,
    };
  }
  if (swiper.scrollbar) {
    slidesParams.scrollbar = {
      hide: true
    };
  }
  extendParams(slidesParams);
};

/**
 * Get the value from an object using a dot notation string.
 *
 * @param obj The object you are searching through
 * @param path The dot noation path to the value
 * @returns The value of the path in the object
 */
function pathToValue(obj, path) {
  return path.split(".").reduce((o, i) => o[i], obj);
}

const inputSearchCss = "fireenjin-input-search .search-input ion-label{color:var(--ion-color-medium) !important;font-size:12px;font-weight:bold;text-transform:uppercase;font-family:arial;display:block;background:transparent;text-align:left;padding:0 0 8px 0;font-family:var(--ion-font-family)}fireenjin-input-search ion-icon{color:var(--ion-text-color)}fireenjin-input-search .search-input ion-icon[slot=\"start\"]{margin-right:5px}fireenjin-input-search .search-input [slot=\"end\"]{margin-left:5px}fireenjin-input-search .invalid{--border-color:var(--ion-color-danger) !important}fireenjin-input-search .invalid ion-label{color:var(--ion-color-danger) !important}fireenjin-input-search .valid{--border-color:var(--ion-color-success) !important}fireenjin-input-search .valid ion-label{color:var(--ion-color-success) !important}";

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
let InputSearch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionInput = createEvent(this, "ionInput", 7);
    this.fireenjinFetch = createEvent(this, "fireenjinFetch", 7);
    this.type = "text";
    this.searchParams = {};
    this.disableSearch = false;
    this.mode = "popover";
    this.results = [];
  }
  async checkValidity(options) {
    if (this.required || (options && options.setValidationClass)) {
      await this.setValidationClass(options && options.validationClassOptions
        ? options.validationClassOptions
        : null);
    }
    return this.inputEl
      ? await (await this.inputEl.getInputElement()).checkValidity()
      : true;
  }
  async reportValidity() {
    const isValid = this.inputEl
      ? await (await this.inputEl.getInputElement()).reportValidity()
      : true;
    this.inputEl.classList[isValid ? "remove" : "add"]("invalid");
    await this.setValidationClass();
    return isValid;
  }
  async onBlur() {
    const isValid = await this.checkValidity();
    this.inputEl.classList[isValid ? "remove" : "add"]("invalid");
    await this.setValidationClass();
  }
  async onSuccess(event) {
    var _a, _b;
    if (((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.endpoint) !== this.endpoint || !((_b = event === null || event === void 0 ? void 0 : event.detail) === null || _b === void 0 ? void 0 : _b.data))
      return;
    this.results = await pathToValue(event.detail.data, this.resultsKey ? this.resultsKey : "searchUsers.results");
    console.log(this.results);
    if (this.mode === "popover") {
      this.resultsPopover = await popoverController.create({
        translucent: true,
        showBackdrop: false,
        event: event.detail.event,
        component: "fireenjin-input-search-popover",
        componentProps: {
          results: this.results,
          template: this.template,
        },
      });
      this.resultsPopover.present();
    }
  }
  onInput(event) {
    var _a, _b;
    if (this.disableSearch || ((_b = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.length) <= 1)
      return;
    this.fireenjinFetch.emit({
      event,
      endpoint: this.endpoint,
      params: {
        data: Object.assign({ query: event.target.value }, this.searchParams),
      },
      dataPropsMap: this.dataPropsMap,
    });
  }
  async clearResults() {
    return (this.results = []);
  }
  async closePopover() {
    return this.resultsPopover.dismiss();
  }
  async openPopover() {
    return this.resultsPopover.present();
  }
  async setValidationClass(options) {
    const classList = Object.values(this.itemEl.classList);
    if (classList.indexOf("invalid") >= 0) {
      this.itemEl.classList.remove("invalid");
    }
    if (classList.indexOf("valid") >= 0) {
      this.itemEl.classList.remove("valid");
    }
    const isValid = await (await this.inputEl.getInputElement()).checkValidity();
    if (!options ||
      !options.ignoreInvalid ||
      (options && options.ignoreInvalid && isValid)) {
      this.itemEl.classList.add(isValid ? "valid" : "invalid");
    }
  }
  render() {
    var _a;
    return [
      h("ion-item", { lines: this.lines, class: "search-input", ref: (el) => (this.itemEl = el), onClick: (event) => this.onInput(event) }, h("slot", { name: "start" }), this.iconStart && h("ion-icon", { name: this.iconStart, slot: "start" }), this.label && h("ion-label", { position: this.labelPosition }, this.label), h("ion-input", { onInput: (event) => this.onInput(event), ref: (el) => (this.inputEl = el), disabled: this.disabled, type: this.type, name: this.name, placeholder: this.placeholder, required: this.required, autofocus: this.autofocus, value: this.value }), this.iconEnd && h("ion-icon", { name: this.iconEnd, slot: "end" }), h("slot", { name: "end" })),
      this.mode === "inline" && ((_a = this.results) === null || _a === void 0 ? void 0 : _a.length)
        ? this.results.map((result) => this.template(result))
        : null,
    ];
  }
};
__decorate([
  Debounce(1000)
], InputSearch.prototype, "onInput", null);
InputSearch.style = inputSearchCss;

export { InputSearch as fireenjin_input_search };
