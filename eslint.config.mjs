import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    globals: {
        ...globals.browser,
        ...globals.node,}}},  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  
  { rules: {
    'react/react-in-jsx-scope': 'off'
    
  },
  linterOptions: {
    reportUnusedDisableDirectives: "warn"
  }},
  { plugins: {
    react: {
      ...pluginReact.configs.flat.recommended,
      version: "detect"
    }
  }}
];
