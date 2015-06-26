(function(){
  'use strict';

  exports.config = {
    allScriptsTimeout: 11000,

    baseUrl: 'http://localhost:6789/',

    capabilities: {
      'browserName': 'chrome',
      'chromeOptions': {
        args: ['--test-type']
      }
    },

    directConnect: true,

    framework: 'jasmine2',

    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000,
      print: function() {} // required for jasmine-spec-reporter
    },

    // To test multiple browsers comment out the `capabilities` property above & uncomment
    // `multiCapabilities` here
    // multiCapabilities: [
    //   {
    //     'browserName': 'chrome',
    //     'chromeOptions': {
    //       args: ['test-type']
    //     }
    //   },
    //   {
    //     'browserName': 'firefox'
    //   }
    // ],
    onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter(
        {
          displayStacktrace: true,
          displayPendingSpec: true
        }
      ));
    },

    specs: [
      'e2e/*.js'
    ]

  };
})();
