import { defineConfig } from "cypress";

// import viteConfig from "./vite.config.mts";

const BASE_CYPRESS_DIR = "tests/integration";

export default defineConfig({
  // component: {
  //   devServer: {
  //     bundler: "vite",
  //     framework: "react",
  //     viteConfig,
  //   },
  //   // supportFolder: "tests/integration/support/support.ts",
  //   specPattern: `${BASE_CYPRESS_DIR}/**/*.{cy,spec}.{js,jsx,ts,tsx}`,
  //   supportFile: `${BASE_CYPRESS_DIR}/support/support.ts`,
  //   downloadsFolder: `${BASE_CYPRESS_DIR}/downloads`,
  //   fixturesFolder: `${BASE_CYPRESS_DIR}/fixtures`,
  //   screenshotsFolder: `${BASE_CYPRESS_DIR}/screenshots`,
  //   videosFolder: `${BASE_CYPRESS_DIR}/videos`,
  // },
  e2e: {
    specPattern: `${BASE_CYPRESS_DIR}/**/*.{cy,spec}.{js,jsx,ts,tsx}`,
    baseUrl: "http://localhost:4173",
    supportFile: `${BASE_CYPRESS_DIR}/support/support.ts`,
    downloadsFolder: `${BASE_CYPRESS_DIR}/downloads`,
    fixturesFolder: `${BASE_CYPRESS_DIR}/fixtures`,
    screenshotsFolder: `${BASE_CYPRESS_DIR}/screenshots`,
    videosFolder: `${BASE_CYPRESS_DIR}/videos`,
  },
  // supportFolder: "tests/integration/support/support.ts",
});

// export default defineConfig({
//   e2e: {
//     specPattern: `${BASE_CYPRESS_DIR}/**/*.{cy,spec}.{js,jsx,ts,tsx}`,
//     baseUrl: "http://localhost:4173",
//     supportFile: `${BASE_CYPRESS_DIR}/support/e2e.{js,jsx,ts,tsx}`,
//     downloadsFolder: `${BASE_CYPRESS_DIR}/downloads`,
//     fixturesFolder: `${BASE_CYPRESS_DIR}/fixtures`,
//     screenshotsFolder: `${BASE_CYPRESS_DIR}/screenshots`,
//     videosFolder: `${BASE_CYPRESS_DIR}/videos`,
//   },
// });
