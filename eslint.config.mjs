import tseslint from "typescript-eslint";
import testingLibrary from "eslint-plugin-testing-library";

export default tseslint.config({
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
