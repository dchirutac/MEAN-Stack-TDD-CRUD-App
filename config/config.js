(function(){
  'use strict';

  // Application configuration
  var path = require('path');
  var rootPath = path.normalize(__dirname, '/..');

  // For now just exporting an object that gives some basic data, namely the environment information

  // Set the db name & this application name
  module.exports = {
    development: {
      db: 'mongodb://localhost/widgets_dev',
      root: rootPath,
      app: {name: 'Widget_MEAN_Stack_App_dev'}
    },
    test: {
      db: 'mongodb://localhost/widgets_test',
      root: rootPath,
      app: {name: 'Widget_MEAN_Stack_App_test'}
    },
    production: {
      db: 'mongodb://localhost/widgets_production',
      root: rootPath,
      app: {name: 'Widget_MEAN_Stack_App_production'}
    }
  };
}());
