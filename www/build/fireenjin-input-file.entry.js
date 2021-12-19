import { r as registerInstance, f as createEvent, h, i as getElement } from './index-7ecca5a2.js';

const inputFileCss = "fireenjin-input-file ion-card{width:95%;margin:15px auto;background-color:var(--ion-color-light-tint);--background-color:var(--ion-color-light-tint);padding:0}fireenjin-input-file ion-card.drag-over{opacity:0.8}fireenjin-input-file ion-card ion-item{padding:5px 0;background-color:var(--ion-color-light-tint);--ion-color-base:var(--ion-color-light-tint);--background:var(--ion-color-light-tint);pointer-events:none}fireenjin-input-file ion-card ion-item ion-icon{height:50px;width:50px;color:var(--ion-color-medium)}fireenjin-input-file ion-card ion-item h2{font-size:20px;color:var(--ion-color-dark);margin:0}fireenjin-input-file ion-card ion-item p{color:var(--ion-color-darker-grey);margin:0}fireenjin-input-file ion-card:hover{cursor:pointer}fireenjin-input-file ion-card:hover h2{color:var(--ion-color-primary)}fireenjin-input-file ion-card:hover ion-icon{color:var(--ion-color-primary)}fireenjin-input-file input{float:left;height:0;width:0;visibility:hidden}";

let InputFile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fireenjinUpload = createEvent(this, "fireenjinUpload", 7);
    this.ionInput = createEvent(this, "ionInput", 7);
    this.type = "file";
    /**
     * The endpoint to upload to
     */
    this.endpoint = "upload";
    this.uploadData = {};
    this.dragOver = false;
  }
  onFileChange() {
    if (!this.value)
      return false;
    this.ionInput.emit({
      name: this.name,
      value: this.value,
    });
  }
  async openFile() {
    const fileInputEl = this.fileUploaderEl.querySelector('input[type="file"]');
    fileInputEl.click();
    return fileInputEl;
  }
  uploadFile(file) {
    this.isLoading = true;
    if (!window.FileReader)
      return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      if (event.target.readyState != 2)
        return;
      if (event.target.error) {
        alert("Error while reading file");
        return;
      }
      this.fireenjinUpload.emit({
        event,
        name: this.name,
        endpoint: this.endpoint,
        data: Object.assign({
          id: this.documentId,
          type: this.type,
          fileName: this.fileName,
          file,
          path: this.path,
          encodedContent: event.target.result,
        }, this.uploadData),
      });
    };
    reader.readAsDataURL(file);
  }
  selectFile(event) {
    this.isLoading = true;
    const file = event.target.files[0];
    this.selectedFile = file.name;
    this.uploadFile(file);
  }
  onDrop(event) {
    event.preventDefault();
    if (event.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < event.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (event.dataTransfer.items[i].kind === "file") {
          var file = event.dataTransfer.items[i].getAsFile();
          this.selectedFile = file.name;
          this.uploadFile(file);
        }
      }
    }
    else {
      // Use DataTransfer interface to access the file(s)
      for (var i = 0; i < event.dataTransfer.files.length; i++) {
        const file = event.dataTransfer.files[i];
        this.selectedFile = file.name;
        this.uploadFile(file);
        console.log("... file[" + i + "].name = " + file.name);
      }
    }
    this.dragOver = false;
  }
  onDrag(event) {
    event.preventDefault();
  }
  onDragOver(event) {
    event.preventDefault();
  }
  onDragEnter(event) {
    console.log("Show UI to drop file", event);
    this.dragOver = true;
  }
  onDragLeave(event) {
    console.log("Hide UI to drop file", event);
    this.dragOver = false;
  }
  render() {
    return (h("ion-card", { class: { "drag-over": this.dragOver }, onDragEnter: (event) => this.onDragEnter(event), onDragOver: (event) => this.onDragOver(event), onDrag: (event) => this.onDrag(event), onDrop: (event) => this.onDrop(event), onDragLeave: (event) => this.onDragLeave(event), onClick: () => this.openFile() }, h("ion-item", { lines: "none" }, h("ion-icon", { name: this.icon ? this.icon : "document", slot: "start" }), h("div", null, h("h2", null, this.dragOver
      ? "Drop File Here"
      : this.label
        ? this.label
        : "Upload a File"), h("p", null, this.selectedFile
      ? this.selectedFile
      : this.defaultValue
        ? this.defaultValue
        : "Select a letterhead"))), h("input", { type: "file", onChange: (event) => this.selectFile(event), accept: this.accept ? this.accept : null, value: "blah" })));
  }
  get fileUploaderEl() { return getElement(this); }
  static get watchers() { return {
    "value": ["onFileChange"]
  }; }
};
InputFile.style = inputFileCss;

export { InputFile as fireenjin_input_file };
