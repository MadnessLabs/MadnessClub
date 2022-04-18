import { Config } from "@stencil/core";
import nodePolyfills from "rollup-plugin-node-polyfills";
// https://stenciljs.com/docs/config

import { namespace } from "./package.json";

export const config: Config = {
  namespace,
  rollupPlugins: {
    after: [nodePolyfills()],
  },
  outputTargets: [
    {
      type: "www",
      baseUrl: "https://madness.club",
      serviceWorker: null,
      copy: [],
    },
  ],
  globalScript: "src/app.ts",
  globalStyle: "src/app.css",
};
