const { defineConfig } = require("cypress");

const { addCucumberPreprocessorPlugin,} = require("@badeball/cypress-cucumber-preprocessor");
const { preprocessor, } = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: 'd3bqgj',

  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 6000,
  viewportHeight: 900,
  viewportWidth: 1440,
  retries: {
    runMode: 1,
    // openMode: 0,
  },
  env: {
    url: "https://rahulshettyacademy.com"
  },
  e2e: {
    // This helps load all your plugins before you run your tests
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    //   require('cypress-mochawesome-reporter/plugin')(on);
    // },

    setupNodeEvents,
    // specPattern: "cypress/integration/*/BDD/*.feature"
    specPattern: "cypress/integration/*/*.js"

  },
});
