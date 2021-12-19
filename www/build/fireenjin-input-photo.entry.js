import { r as registerInstance, f as createEvent, h, i as getElement } from './index-7ecca5a2.js';

async function resizeImage(base64image, width = 1080, height = 1080) {
  return new Promise((resolve, reject) => {
    try {
      let img = new Image();
      img.src = base64image;
      img.onload = () => {
        let base64ResizedImage;
        // Check if the image require resize at all
        if (img.height <= height && img.width <= width) {
          base64ResizedImage = base64image;
          // TODO: Call method to do something with the resize image
        }
        else {
          // Make sure the width and height preserve the original aspect ratio and adjust if needed
          if (img.height > img.width) {
            width = Math.floor(height * (img.width / img.height));
          }
          else {
            height = Math.floor(width * (img.height / img.width));
          }
          let resizingCanvas = document.createElement("canvas");
          let resizingCanvasContext = resizingCanvas.getContext("2d");
          // Start with original image size
          resizingCanvas.width = img.width;
          resizingCanvas.height = img.height;
          // Draw the original image on the (temp) resizing canvas
          resizingCanvasContext.drawImage(img, 0, 0, resizingCanvas.width, resizingCanvas.height);
          let curImageDimensions = {
            width: Math.floor(img.width),
            height: Math.floor(img.height),
          };
          let halfImageDimensions = {
            width: null,
            height: null,
          };
          // Quickly reduce the dize by 50% each time in few iterations until the size is less then
          // 2x time the target size - the motivation for it, is to reduce the aliasing that would have been
          // created with direct reduction of very big image to small image
          while (curImageDimensions.width * 0.5 > width) {
            // Reduce the resizing canvas by half and refresh the image
            halfImageDimensions.width = Math.floor(curImageDimensions.width * 0.5);
            halfImageDimensions.height = Math.floor(curImageDimensions.height * 0.5);
            resizingCanvasContext.drawImage(resizingCanvas, 0, 0, curImageDimensions.width, curImageDimensions.height, 0, 0, halfImageDimensions.width, halfImageDimensions.height);
            curImageDimensions.width = halfImageDimensions.width;
            curImageDimensions.height = halfImageDimensions.height;
          }
          // Now do final resize for the resizingCanvas to meet the dimension requirments
          // directly to the output canvas, that will output the final image
          let outputCanvas = document.createElement("canvas");
          let outputCanvasContext = outputCanvas.getContext("2d");
          outputCanvas.width = width;
          outputCanvas.height = height;
          outputCanvasContext.drawImage(resizingCanvas, 0, 0, curImageDimensions.width, curImageDimensions.height, 0, 0, width, height);
          // output the canvas pixels as an image. params: format, quality
          base64ResizedImage = outputCanvas.toDataURL("image/jpeg", 1);
          // TODO: Call method to do something with the resize image
        }
        resolve(base64ResizedImage);
      };
    }
    catch (error) {
      reject("Error resizing image!");
    }
  });
}

const inputPhotoCss = "fireenjin-input-photo .upload-wrapper{display:block;margin:0 auto;height:150px;width:150px;position:relative}fireenjin-input-photo .upload-wrapper .photo{position:relative;background:var(--ion-color-medium);border-radius:4px;border:2px solid var(--ion-color-light);height:150px;width:150px;margin:0 auto;display:block;background-repeat:no-repeat;background-size:cover;background-position:center;color:var(--ion-color-medium);font-size:75px;line-height:150px;text-align:center;font-weight:bolder}fireenjin-input-photo .upload-wrapper .photo.is-loading:before{border-radius:4px}fireenjin-input-photo .upload-wrapper .photo.is-loading:after{border-radius:4px}fireenjin-input-photo .upload-wrapper .photo:hover{cursor:pointer;border-color:var(--ion-color-primary)}fireenjin-input-photo input[type=\"file\"]{height:0;width:0;visibility:hidden;opacity:0;pointer-events:none;float:left}";

let InputPhoto = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fireenjinUpload = createEvent(this, "fireenjinUpload", 7);
    this.ionInput = createEvent(this, "ionInput", 7);
    /**
     * Is the uploader disabled
     */
    this.disabled = false;
    /**
     * Should the photo uploader show the button
     */
    this.showButton = false;
    /**
     * Text to display on the photo upload button
     */
    this.buttonText = "Edit Image";
    /**
     * The type of photo being uploaded
     */
    this.type = "photo";
    /**
     * The endpoint to upload to
     */
    this.endpoint = "upload";
    /**
     * Allow uploading multiple
     */
    this.multiple = false;
    /**
     * Resize photos before uploading
     */
    this.resize = false;
  }
  onSuccess(event) {
    if (event.detail.endpoint !== "upload" || event.detail.name !== this.name)
      return false;
    this.loading = false;
  }
  onPhotoChange() {
    this.updatePhoto();
  }
  componentDidLoad() {
    this.updatePhoto();
  }
  updatePhoto() {
    this.photoUrl = this.value
      ? this.value
      : this.fallback
        ? this.fallback
        : null;
    if (this.value) {
      this.ionInput.emit({
        name: this.name,
        value: this.value,
      });
    }
  }
  async triggerFileInput(_event) {
    if (this.disabled) {
      return false;
    }
    const fileInputEl = this.photoUploaderEl.querySelector('input[type="file"]');
    fileInputEl.click();
  }
  selectFile(event) {
    var _a;
    for (const file of ((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.files) || []) {
      this.uploadPhoto(file);
    }
  }
  uploadPhoto(file) {
    this.loading = true;
    if (!window.FileReader)
      return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      var _a, _b;
      if (event.target.readyState != 2)
        return;
      if (event.target.error) {
        alert("Error while reading file");
        return;
      }
      this.fireenjinUpload.emit({
        event,
        endpoint: this.endpoint,
        name: this.name,
        data: {
          id: this.documentId,
          type: this.type,
          path: this.path,
          file,
          fileName: this.fileName,
          encodedContent: this.resize ? resizeImage((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.result) : (_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.result,
        },
      });
    };
    reader.readAsDataURL(file);
  }
  onDrop(event) {
    event.preventDefault();
    this.uploadPhoto(event.dataTransfer.files[0]);
  }
  onDrag(event) {
    event.preventDefault();
  }
  onDragEnter() {
    this.showButton = true;
  }
  onDragLeave() {
    this.showButton = false;
  }
  render() {
    return (h("div", null, h("div", { class: "upload-wrapper" }, h("div", { class: this.loading ? "photo is-loading" : "photo", style: {
        backgroundImage: this.photoUrl ? `url('${this.photoUrl}')` : null,
      }, onClick: (event) => this.triggerFileInput(event), onDrop: (event) => this.onDrop(event), onDragOver: (event) => this.onDrag(event), onDragEnter: () => this.onDragEnter(), onDragLeave: () => this.onDragLeave() }, !this.photoUrl && this.initials ? this.initials : null), this.showButton ? (h("ion-button", { fill: "clear", expand: "block", size: "small", onClick: (event) => this.triggerFileInput(event) }, this.buttonText, h("ion-icon", { name: "image", slot: "end" }))) : null), h("slot", null), h("input", { type: "file", onChange: (event) => this.selectFile(event), accept: "image/*", multiple: this.multiple })));
  }
  get photoUploaderEl() { return getElement(this); }
  static get watchers() { return {
    "value": ["onPhotoChange"]
  }; }
};
InputPhoto.style = inputPhotoCss;

export { InputPhoto as fireenjin_input_photo };
