exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'holgerdieterich1',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'S2Lp7oshaL7SB38mn2TC',

  updateJob: false,
  specs: [
    './tests/specs/multiple_test.js'
  ],
  exclude: [],

  capabilities: [{
    browser: 'chrome',
    name: 'multiple_test',
    build: 'webdriver-browserstack'
  }],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',
  
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd'
  }
}
