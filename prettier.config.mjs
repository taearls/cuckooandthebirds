export default {
  $schema: "https://json.schemastore.org/prettierrc",
  semi: true,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "all",
  plugins: [
    // https://github.com/IanVS/prettier-plugin-sort-imports
    "@ianvs/prettier-plugin-sort-imports",
  ],
  importOrder: [
    "<TYPES>^(node:)",
    "<TYPES>",
    "<TYPES>^[.]",
    "",
    "<BUILTIN_MODULES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^[.]",
  ],
};
