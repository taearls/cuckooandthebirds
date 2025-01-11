import path, { dirname } from "path";
import { fileURLToPath } from "url";

import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import noBarrelFiles from "eslint-plugin-no-barrel-files";
import pluginReact from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: "module",
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
    ...importPlugin.flatConfigs.recommended,
    settings: {
      ...importPlugin.flatConfigs.recommended.settings,

      // ignore npm packages starting with @; e.g., @vitejs/plugin-react in vite.config.mts
      "import/ignore": ["@[^/]"],
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        alias: {
          extensions: [".ts", ".js", ".jsx", ".tsx"],
          map: [["@", path.resolve(__dirname, "./src")]],
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          moduleDirectory: ["node_modules", "./src/"],
          paths: ["./"],
        },
        typescript: true,
      },
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: "warn",
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { varsIgnorePattern: "_*" },
      ],
      "no-unused-vars": ["warn", { varsIgnorePattern: "_*" }],
      "react/react-in-jsx-scope": "off",
      "sort-keys": "warn",
      // not currently supported in eslint-react-plugin with eslint v9
      // "react/no-array-index-key": "error",
    },
  },
  { ignores: ["dist/*", ".react-router/*", "node_modules"] },
  noBarrelFiles.flat,
  eslintConfigPrettier,
  reactRefresh.configs.recommended,
];
