(function(){
  'use strict';

  module.exports = function(grunt){
    // Project configuration
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      karma: {
        unit: {
          configFile: './test/karma.conf.js'
        }
      },

      watch: {
        karma: {
          files: ['angular/js/**/*.js', 'test/unit/**/*.js'],
          tasks: ['karma:unit:run']
        }
      }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['karma']);
  };
})();
