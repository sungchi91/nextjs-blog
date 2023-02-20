const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration',
    baseUrl: "http://localhost:3000"
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
