import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import noBarrelFiles from "eslint-plugin-no-barrel-files";
import pluginReact from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
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
    plugins: {
      react: {
        ...pluginReact.configs.flat.recommended,
        version: "detect",
      },
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": ["warn", { varsIgnorePattern: "_*" }],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { varsIgnorePattern: "_*" },
      ],
      // not currently supported in eslint-react-plugin with eslint v9
      // "react/no-array-index-key": "error",
    },
    linterOptions: {
      reportUnusedDisableDirectives: "warn",
    },
  },
  { ignores: ["dist/*", ".react-router/*", "node_modules"] },
  noBarrelFiles.flat,
  eslintConfigPrettier,
  reactRefresh.configs.recommended,
];
