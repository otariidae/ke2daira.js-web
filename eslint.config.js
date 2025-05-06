const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const reactRecommended = require("eslint-plugin-react/configs/recommended");
const eslintConfigPrettier = require("eslint-config-prettier/flat");
const globals = require("globals");

module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  reactRecommended,
  {
    files: ["*.js"],
    ignores: ["src/**/*"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  eslintConfigPrettier,
);
