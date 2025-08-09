import { defineConfig } from "@rstest/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  testEnvironment: "jsdom",
  setupFiles: ["./src/setupTests.ts"],
  globals: true,
});
