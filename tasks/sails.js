/*
 * grunt-sails
 *
 * Copyright (c) 2013 Colin Wren
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  grunt.registerMultiTask('sails', 'Start a sails app with forever', function() {

    var args = ['-w', 'app.js'];
    var options = this.options();

    // Use options for specifying Sails server environment
    if (options.development) args.push('--dev');
    if (options.production) args.push('--prod');

    grunt.log.writeln('Starting sails server');

    // Start server and restart when files change

    grunt.util.spawn({
      cmd: './node_modules/grunt-sails/node_modules/forever/bin/forever',
      args: args,
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
