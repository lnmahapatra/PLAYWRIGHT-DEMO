    // Example cucumber.conf.js
    const { BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
    const { chromium } = require('playwright');

    setDefaultTimeout(60 * 1000); // Set default timeout for steps

    BeforeAll(async function () {
      global.browser = await chromium.launch(); // Launch browser once for all tests
    });

    AfterAll(async function () {
      await global.browser.close(); // Close browser after all tests
    });

    // Ensure this path correctly points to your step definitions
    module.exports = {
      paths: ['BDD/*.feature'],
      require: ['BDD/ecomloginstep.js'], // Adjust this path as needed
    };