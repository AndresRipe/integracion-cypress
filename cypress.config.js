const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'if25yp',
  e2e: {
    setupNodeEvents(on, config) {
      // Aquí irían tus listeners o plugins si los necesitas
    },
    viewportWidth: 1500,
    viewportHeight: 900,
    chromeWebSecurity: false,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 15000
  },
});
