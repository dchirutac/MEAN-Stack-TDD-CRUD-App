(function(){
  'use strict';

  /* Return object */

  module.exports = function(config){
    config.set({

      background: true,

      basePath: '../',

      browsers: ['Chrome'],

      files: [
        'angular/bower_components/jquery/dist/jquery.js',
        'angular/bower_components/angular/angular.js',
        'angular/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        'angular/bower_components/angular-route/angular-route.js',
        'angular/bower_components/angular-resource/angular-resource.js',
        'angular/bower_components/angular-mocks/angular-mocks.js',
        'angular/js/**/*.js',
        'angular/views/partials/**/*.html',
        'test/unit/**/*.js',
      ],

      frameworks: ['jasmine'],

      junitReporter: {
        outputFile: 'test_out/unit.xml',
        suite: 'unit'
      },

      ngHtml2JsPreprocessor: {
        stripPrefix: 'angular/views/',
      },

      plugins: [
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-jasmine',
        'karma-jasmine-html-reporter',
        'karma-ng-html2js-preprocessor'
      ],

      preprocessors: {
        'angular/views/**/*.html': ['ng-html2js']
      },

      reporters: ['progress', 'html'],

      singleRun: false

    });
  };
})();
