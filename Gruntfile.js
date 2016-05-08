module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.initConfig({
    watch: {
      browserify: {
        files: ['public/lib/**/*.js'],
        tasks: ['browserify'],
      },
      concat: {
        files: ["public/lib/**/*.css"],
        tasks: ['concat']
      }
    },

    concat: {
      dist: {
        src: ["public/lib/app.css", "public/lib/app/**/*.css"],
        dest: 'public/assets/main.css',
      },
    },

    browserify: {
      dist: {
        options: {
          transform: [['babelify', { presets: ['es2015', 'react'] }]],
        },
        src: ['public/lib/**/*.js'],
        dest: 'public/bundle.js',
      },
    },
  });
};
