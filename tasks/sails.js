
/*
 * grunt-sails
 *
 * Copyright (c) 2013 Colin Wren
 * Licensed under the MIT license.
 */


module.exports = function(grunt) {

  var spawn = require('child_process').spawn;
  var forever = require('forever');

  grunt.registerMultiTask('sails', 'Start a sails app.', function() {

    var options = this.options({
    });

    // Start server.
    grunt.log.writeln('Starting sails server');
    var sails = forever.start ('app.js', '-w');
    //var sails = spawn('forever', ['-w', 'app.js']);
    sails.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });
        //this.async();
        grunt.log.write('Waiting forever...\n');
  });

};
