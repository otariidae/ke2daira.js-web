import { defineConfig } from "@rsbuild/core";
import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact(), pluginNodePolyfill()],
  output: {
    assetPrefix: "./",
    copy: [{ from: "node_modules/kuromoji/dict", to: "dict" }],
  },
  html: {
    template: "src/index.html",
  },
});
