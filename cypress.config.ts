import { defineConfig } from "cypress";
import { GoogleSocialLogin } from "cypress-social-logins/src/Plugins";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});

