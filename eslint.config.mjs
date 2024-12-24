import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import noBarrelFiles from "eslint-plugin-no-barrel-files";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
    linterOptions: {
      reportUnusedDisableDirectives: "warn",
    },
  },
  {
    plugins: {
      react: {
        ...pluginReact.configs.flat.recommended,
        version: "detect",
      },
    },
  },
  { ignores: ["dist/*"] },
  noBarrelFiles.flat,
  eslintConfigPrettier,
];
