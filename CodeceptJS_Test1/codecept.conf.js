const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'test/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      windowSize: 'maximize'
    }
  },
  include: {
    I: './steps_file.js',
    girisPagePage: './pages/girisPage.js',
    kayitKabulPage: './pages/kayitKabul.js',
    hizliAramaFragment: './fragments/hizliArama.js',
    kayitKabulFragment: './fragments/kayıtKabul.js',
    solPanelFragment: './fragments/solPanel.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'Demo Test',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}