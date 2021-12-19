import { r as registerInstance, h } from './index-7ecca5a2.js';

const homeCss = "";

let PageHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("video", { src: "./assets/videos/background.mov", style: {
        minHeight: "100vh",
        minWidth: "100vw",
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "50%",
        transform: "translate(-50%)",
        zIndex: "-1",
        pointerEvents: "none"
      }, autoplay: true, muted: true, loop: true }), h("article", { class: "ion-padding" }, h("h2", null, "\uD83D\uDC4AMadness Club"), h("p", null, "I see all this potential, and I see it squandered. God damn it, an entire generation pumping gas, waiting tables - slaves with white collars. Advertising has us chasing cars and clothes, working jobs we hate so we can buy shit we don't need. We're the middle children of history, man. No purpose or place. We have no Great War. No Great Depression. Our great war is a spiritual war... Our great depression is our lives. We've all been raised on television to believe that one day we'd all be millionaires, and movie gods, and rock stars, but we won't. We're slowly learning that fact. And we're very, very pissed off. ", h("br", null), h("ion-text", { color: "medium", class: "ion-padding" }, "-Tlyer Durden")), h("p", null, "Engineering is our tool, our weapon, to take control of our lives and bring about, The Change...."), h("h1", null, "Join the Madness..."), h("fireenjin-form", { name: "signup" }, h("ion-grid", null, h("ion-row", null, h("ion-col", null, h("fireenjin-input", { name: "email", placeholder: "Email Address" })), h("ion-col", null, h("fireenjin-select", { interfaceOptions: { header: "Interested In" }, name: "interests", multiple: true, placeholder: "Interests", options: [{
          label: "Software Engineering (Coding / Programming)",
          value: "software"
        },
        {
          label: "Graphic Engineering (Design / UI / UX)",
          value: "design"
        }] }))))))));
  }
};
PageHome.style = homeCss;

export { PageHome as page_home };
