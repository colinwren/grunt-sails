/*
 * grunt-sails
 *
 * Copyright (c) 2013 Colin Wren
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  grunt.registerMultiTask('sails', 'Start a sails app with forever', function() {

    grunt.log.writeln('Starting sails server');

    // Start server and restart when files change

    grunt.util.spawn({
      cmd: './node_modules/grunt-sails/node_modules/forever/bin/forever',
      args: ['-w', 'app.js'],
      opts: {
        stdio: 'inherit'
      }
    }, function (error, result) {
      if (error) {
        grunt.fail.fatal(result.stdout);
      }
      grunt.log.writeln(result.stdout);
      done();
    });
  });
};
