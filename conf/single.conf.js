// exports.config = {
//   user: 'holgerdieterich1',
//   key: 'S2Lp7oshaL7SB38mn2TC',

//   capabilities: [{
//     browser: 'chrome',
//     name: 'Bstack-[WebdriverIO] Sample Test'
//   }]
// }
exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'holgerdieterich1',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'S2Lp7oshaL7SB38mn2TC',

  updateJob: false,
  specs: [
    './tests/specs/single_test.js'
    // './tests/specs/single_test_Startbutton.js'
  ],
  exclude: [],

  capabilities: [{
    browser: 'chrome',
    name: 'single_test',
    build: 'webdriver-browserstack',
    'browserstack.selenium_version': '3.9.1',
    'options': {
      prefs: {
        "profile.managed_default_content_settings.geolocation": 1 
      },
      args: ['--disable-gpu'],
    },
      
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',

  before: function () {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  },
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
}
