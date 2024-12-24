/// <reference types="vitest" />
/// <reference types="vite/client" />

import { fileURLToPath } from "node:url";

import { reactRouter } from "@react-router/dev/vite";
// import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// import { patchCssModules } from "vite-css-modules";
// import tsconfigPaths from "vite-tsconfig-paths";

export type ViteConfigInput = {
  mode: "development" | "production";
};

// https://vitejs.dev/config/
export default (args: ViteConfigInput) => {
  const generateScopedName =
    args.mode === "development" ? "[local]_[hash:base64:4]" : "[hash:base64:4]";
  return defineConfig({
    plugins: [
      reactRouter(),
      // tsconfigPaths({ loose: true }),
      // patchCssModules(),
      // {
      //   name: "custom-css-import",
      //   enforce: "pre",
      //   resolveId: (id, importer) =>
      //     // add .custom so CSS modules are not precessed by the default pipeline
      //     id.endsWith(".module.css")
      //       ? join(dirname(importer!), `${id}.custom`)
      //       : undefined,
      //   load: (id) => {
      //     if (id.endsWith(".module.css.custom")) {
      //       const filename = id.slice(0, -7);
      //       const a = transform({
      //         filename,
      //         code: readFileSync(filename),
      //         cssModules: true,
      //       });
      //       const styles = Object.fromEntries(
      //         Object.entries(a.exports!)
      //           // https://github.com/parcel-bundler/lightningcss/issues/291
      //           .sort((a, b) => a[0].localeCompare(b[0]))
      //           .map((a) => [a[0], a[1].name]),
      //       );
      //       const text = a.code.toString();
      //       return [
      //         `export const text = ${JSON.stringify(text)};`,
      //         `export const styles = ${JSON.stringify(styles)};`,
      //       ].join("\n");
      //     }
      //   },
      // },
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: 3000,
    },
    base: "./",
    build: {
      target: "es2022",
      // outDir: "./dist",
      // emptyOutDir: true,
    },
    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName,
      },
    },
  });
};
