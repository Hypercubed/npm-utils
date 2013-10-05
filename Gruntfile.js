/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc',
      },
      'default': {
        src: [ 'index.js', 'src/*.js' ]
      }
    },

    complexity: {
      default: grunt.file.readJSON('complexity.json')
    }
  });

  var plugins = require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'complexity']);
};