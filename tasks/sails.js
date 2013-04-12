/*
 * grunt-sails
 *
 * Copyright (c) 2013 Colin Wren
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  var spawn = require('child_process').spawn;

  grunt.registerMultiTask('sails', 'Start a sails app with forever', function() {

    grunt.log.writeln('Starting sails server');

    // Start server and restart when files change
    var sails = spawn('./node_modules/grunt-sails/node_modules/forever/bin/forever', ['-w', 'app.js']);

    sails.stdout.on('data', function (data) {
      console.log('' + data);
    });

    sails.stderr.on('data', function (data) {
      console.log('' + data);
    });
  });
};
