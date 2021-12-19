import { Config } from "@stencil/core";

// https://stenciljs.com/docs/config

import { namespace } from "./package.json";

export const config: Config = {
  namespace,
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
