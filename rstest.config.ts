import { pluginReact } from "@rsbuild/plugin-react";
import { defineConfig, defineInlineProject } from "@rstest/core";
import { definePlaywrightConfig } from "@rstest/playwright/config";

export default defineConfig({
  projects: [
    defineInlineProject({
      name: "unit",
      plugins: [pluginReact()],
      testEnvironment: "jsdom",
      setupFiles: ["./src/setupTests.ts"],
      globals: true,
      restoreMocks: true,
      include: ["src/**/*.{test,spec}.{ts,tsx}"],
    }),
    defineInlineProject({
      name: "e2e",
      extends: definePlaywrightConfig({
        browserName: "chromium",
        trace: process.env.CI ? "on-first-retry" : "off",
      }),
      testEnvironment: "node",
      include: ["e2e/**/*.{test,spec}.{ts,tsx}"],
      testTimeout: 60_000,
    }),
  ],
});
