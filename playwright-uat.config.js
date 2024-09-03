// @ts-check
//This file is created with simple configuration only for understanding
const { defineConfig, devices } = require("@playwright/test");
require("dotenv").config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */

module.exports = defineConfig({
  use: {
    baseURL: "https://webdriveruniversity.com/index.html",
  },
  projects: [
    {
      name: "chromium",
    },
  ],
});
