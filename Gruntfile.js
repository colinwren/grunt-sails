module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['tasks/ghost.js'],
      options: {
        curly: true,
        camelcase: true,
        bitwise: true,
        indent: 2,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        nonew: true,
        quotmark: 'single',
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        trailing: true,
        eqnull: true,
        browser: true,
        jquery: true
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task
  grunt.registerTask('default', 'jshint');

};
