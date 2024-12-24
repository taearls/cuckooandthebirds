import { fileURLToPath } from "node:url";

import { configDefaults, defineConfig, mergeConfig } from "vitest/config";

import viteConfig, { ViteConfigInput } from "./vite.config.mjs";

export default (args: ViteConfigInput) =>
  mergeConfig(
    viteConfig(args),
    defineConfig({
      test: {
        globals: true,
        environment: "jsdom",
        exclude: [...configDefaults.exclude, "e2e/**"],
        root: fileURLToPath(new URL("./", import.meta.url)),
        setupFiles: ["./setupTests.ts"],
        // alias: {'@/': new URL('./src/', import.meta.url).pathname, }
      },
    }),
  );
