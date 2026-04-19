const tseslint = require("typescript-eslint");
const testingLibrary = require("eslint-plugin-testing-library");

module.exports = tseslint.config({
  files: ["**/*.test.{ts,tsx}"],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  ...testingLibrary.configs["flat/react"],
});
