import { defineConfig, js, reactPlugin, ts } from "@rslint/core";

export default defineConfig([
  {
    ignores: ["dist/**"],
  },
  js.configs.recommended,
  ts.configs.recommended,
  reactPlugin.configs.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },
]);
