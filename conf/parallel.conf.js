const commonCapabilities = {
  name: 'parallel_test',
  build: 'webdriver-browserstack'
};

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'holgerdieterich1',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'S2Lp7oshaL7SB38mn2TC',

  updateJob: false,
  specs: [
    './tests/specs/single_test.js'
  ],
  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      browser: 'chrome',
      'chromeOptions': {
        // to run chrome headless the following flags are required
        // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
        
          prefs: {
            "profile.managed_default_content_settings.geolocation": 1 
          }
        },
        
    },
    // {
    //   browser: 'firefox'
    // },
    // {
    //   browser: 'internet explorer'
    // },
    // {
    //   browser: 'safari'
    // }
  ].map(caps => Object.assign(caps, commonCapabilities)),

  logLevel: 'warn',
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
      ui: 'bdd'
  }
}


