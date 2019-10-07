var browserstack = require('browserstack-local');

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'holgerdieterich1',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'S2Lp7oshaL7SB38mn2TC',

  updateJob: false,
  specs: [
    './tests/specs/local_test.js'
  ],
  exclude: [],

  capabilities: [{
    browser: 'chrome',
    name: 'local_test',
    build: 'webdriver-browserstack',
    'browserstack.local': true
  }],

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
    ui: 'bdd',
    timeout: 60000
  },

  // Code to start browserstack local before start of test
  onPrepare: function (config, capabilities) {
    console.log("Connecting local");
    return new Promise(function (resolve, reject) {
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({ 'key': exports.config.key }, function (error) {
        if (error) return reject(error);

        console.log('Connected. Now testing...');
        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  onComplete: function (exitCode, config, capabilities, results) {
    exports.bs_local.stop();
  },
}
