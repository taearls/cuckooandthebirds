import { fileURLToPath } from "node:url";

import { configDefaults, defineConfig, mergeConfig } from "vitest/config";

import viteConfig, { ViteConfigInput } from "./vite.config.mts";

export default (args: ViteConfigInput) =>
  mergeConfig(
    viteConfig(args),
    defineConfig({
      test: {
        environment: "jsdom",
        exclude: [...configDefaults.exclude, "e2e/**"],
        globals: true,
        root: fileURLToPath(new URL("./", import.meta.url)),
        setupFiles: ["./setupTests.ts"],
      },
    }),
  );
