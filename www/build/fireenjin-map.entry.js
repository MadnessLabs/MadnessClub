import { r as registerInstance, f as createEvent, j as Build, h, k as Host, i as getElement } from './index-7ecca5a2.js';
import { c as cordova, O as Observable, I as IonicNativePlugin } from './index-5c8ebbd1.js';

class Loader {
    constructor(apiKey = null, options = {}) {
        this.apiKey = apiKey;
        this.options = options;
        if (typeof window === 'undefined') {
            throw new Error('google-maps is supported only in browser environment');
        }
    }
    load() {
        if (typeof this.api !== 'undefined') {
            return Promise.resolve(this.api);
        }
        if (typeof this.loader !== 'undefined') {
            return this.loader;
        }
        window[Loader.CALLBACK_NAME] = () => {
            this.api = window['google'];
            if (typeof this.resolve === 'undefined') {
                throw new Error('Should not happen');
            }
            this.resolve(this.api);
        };
        window['gm_authFailure'] = () => {
            if (typeof this.reject === 'undefined') {
                throw new Error('Should not happen');
            }
            this.reject(new Error('google-maps: authentication error'));
        };
        return this.loader = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
            const script = document.createElement('script');
            script.src = this.createUrl();
            script.async = true;
            script.onerror = (e) => reject(e);
            document.head.appendChild(script);
        });
    }
    createUrl() {
        const parameters = [
            `callback=${Loader.CALLBACK_NAME}`,
        ];
        if (this.apiKey) {
            parameters.push(`key=${this.apiKey}`);
        }
        for (let name in this.options) {
            if (this.options.hasOwnProperty(name)) {
                let value = this.options[name];
                if (name === 'version') {
                    name = 'v';
                }
                if (name === 'libraries') {
                    value = value.join(',');
                }
                parameters.push(`${name}=${value}`);
            }
        }
        return `https://maps.googleapis.com/maps/api/js?${parameters.join('&')}`;
    }
}
Loader.CALLBACK_NAME = '_dk_google_maps_loader_cb';

/// <reference types="googlemaps" />

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GeolocationOriginal = /** @class */ (function (_super) {
    __extends(GeolocationOriginal, _super);
    function GeolocationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeolocationOriginal.prototype.getCurrentPosition = function (options) { return cordova(this, "getCurrentPosition", { "callbackOrder": "reverse" }, arguments); };
    /**
     * Watch the current device's position.  Clear the watch by unsubscribing from
     * Observable changes.
     *
     * ```typescript
     * const subscription = this.geolocation.watchPosition()
     *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
     *                               .subscribe(position => {
     *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
     * });
     *
     * // To stop notifications
     * subscription.unsubscribe();
     * ```
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Observable<Geoposition | PositionError>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
     */
    GeolocationOriginal.prototype.watchPosition = function (options) {
        return new Observable(function (observer) {
            var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.geolocation.clearWatch(watchId); };
        });
    };
    GeolocationOriginal.pluginName = "Geolocation";
    GeolocationOriginal.plugin = "cordova-plugin-geolocation";
    GeolocationOriginal.pluginRef = "navigator.geolocation";
    GeolocationOriginal.repo = "https://github.com/apache/cordova-plugin-geolocation";
    GeolocationOriginal.install = "ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION=\"To locate you\"";
    GeolocationOriginal.installVariables = ["GEOLOCATION_USAGE_DESCRIPTION"];
    GeolocationOriginal.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    return GeolocationOriginal;
}(IonicNativePlugin));
var Geolocation = new GeolocationOriginal();

const mapCss = "fireenjin-map{position:relative;display:block}fireenjin-map #map{display:block;height:0px;width:100%;margin:0 auto;opacity:0;transition:all ease 0.5s}fireenjin-map.map-is-visible #map{height:var(--map-height, 300px);opacity:1}";

let Map = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fireenjinTrigger = createEvent(this, "fireenjinTrigger", 7);
    /**
     * The current list of map markers
     */
    this.mapMarkers = [];
    /**
     * Google Maps options
     */
    this.optins = {};
    /**
     * Should the map be visible?
     */
    this.visible = true;
    /**
     * A list of markers to put onto the map
     */
    this.markers = [];
    /**
     * Is the map currently visible?
     */
    this.isVisible = true;
  }
  /**
   * Add a marker to the map
   * @param location The location information for the marker on the map
   */
  async addMarker(location) {
    const marker = typeof location === "string" ? JSON.parse(location) : location;
    const mapMarker = new this.google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: (marker === null || marker === void 0 ? void 0 : marker.name) || "",
      icon: (marker === null || marker === void 0 ? void 0 : marker.icon) ? {
        url: marker.icon,
        origin: new this.google.maps.Point(0, 0),
        anchor: new this.google.maps.Point(15, 15),
        scaledSize: new this.google.maps.Size(34, 34),
        shape: { coords: [17, 17, 18], type: "circle" },
        optimized: false,
      } : null,
    });
    mapMarker.addListener("click", () => {
      this.onMarkerClick(mapMarker, marker);
    });
    this.mapMarkers.push(mapMarker);
    return mapMarker;
  }
  async updateMarkers() {
    await this.clearMarkers();
    if (this.markers.length >= 1) {
      this.markers.map(this.addMarker.bind(this));
    }
    return this.markers;
  }
  /**
   * Set the list of map markers
   * @param markers A list of map markers
   */
  async setMarkers(markers = []) {
    this.markers = markers;
    await this.clearMarkers();
    if (this.markers.length >= 1) {
      this.markers.map(this.addMarker.bind(this));
    }
    return this.markers;
  }
  async setZoom(level) {
    return this.map.setZoom(level);
  }
  async setCenter(latLng) {
    return this.map.setCenter(latLng);
  }
  /**
   * Clear the markers off of the map
   */
  async clearMarkers() {
    var _a;
    for (let i = 0; i < this.mapMarkers.length; i++) {
      if (!((_a = this.mapMarkers[i]) === null || _a === void 0 ? void 0 : _a.setMap))
        continue;
      this.mapMarkers[i].setMap(null);
    }
    this.mapMarkers = [];
    return true;
  }
  /**
   * When a marker is clicked set the zoom level,
   * animate to center, and emit an event
   * @param marker The map marker that has been clicked
   * @param location The location information tied to the map marker
   */
  onMarkerClick(marker, location) {
    this.map.setZoom(12);
    this.map.setCenter(marker.getPosition());
    this.fireenjinTrigger.emit({
      trigger: "markerClick",
      payload: {
        marker,
        location,
      }
    });
  }
  /**
   * Get a device's location via Geolocation api and
   * fallback to location based on IP
   * @param callback The function to run when the location is determined
   */
  getLocationCoords(callback) {
    try {
      Geolocation.getCurrentPosition()
        .then((position) => {
        if (callback && typeof callback === "function") {
          callback(position.coords);
        }
      })
        .catch(async (_error) => {
        fetch("http://ip-api.com/json").then(async (response) => {
          const ISPInfo = await response.json();
          callback({
            latitude: ISPInfo.lat,
            longitude: ISPInfo.lon,
          });
        });
        if (callback && typeof callback === "function") {
          callback(false);
        }
      });
    }
    catch (error) {
      callback(false);
    }
  }
  /**
   * Create the instance of Google Maps
   * @param position The latitude and longitude to center the map on
   */
  createMap(position) {
    this.map = new this.google.maps.Map(this.mapEl.querySelector("#map"), {
      zoom: 9,
      center: {
        lat: position.latitude,
        lng: position.longitude,
      },
    });
  }
  async loadGoogleMaps(options) {
    const loader = new Loader(this.apiKey, options || {});
    this.google = await loader.load();
    return this.google;
  }
  componentDidLoad() {
    if (Build.isBrowser) {
      this.isVisible = this.visible;
      this.getLocationCoords(async (coords) => {
        var _a;
        this.position = coords
          ? coords
          : { latitude: 38.6270025, longitude: -90.19940419999999 };
        if (!((_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) && this.apiKey)
          await this.loadGoogleMaps();
        this.createMap(this.position);
        await this.setMarkers(this.markers);
      });
    }
  }
  render() {
    return (h(Host, { class: { "map-is-visible": this.isVisible } }, h("div", { id: "map" })));
  }
  get mapEl() { return getElement(this); }
  static get watchers() { return {
    "markers": ["updateMarkers"]
  }; }
};
Map.style = mapCss;

export { Map as fireenjin_map };
