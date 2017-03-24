module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '*',
          livereload: true
        }
      }
    },

    watch: {
      html: {
        files: ['*.html', '**/*.css'],
        options: {
          livereload: true,
        },
      },
      configFiles: {
        files: ['Gruntfile.js'],
        options: {
          reload: true
        }
      }
    },

    imagemin: {                          // Task
      dynamic: {
        options: {                       // Target options
          optimizationLevel: 1
        },                       // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'images/',                   // Src matches are relative to this path
          src: ['**/*.png'],   // Actual patterns to match
          dest: 'dist/'                  // Destination path prefix
        }]
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);

};