/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 * https://www.npmjs.com/package/grunt-contrib-watch
 */
module.exports = {
  grunt: {
    files: ['Gruntfile.js', 'grunt/*'],
    options: {
      reload: true
    }
  },

  style: {
    files: [
      '../layout/**/*.scss',
      '../layout/**/*.sass'
    ],
    tasks: [
      'sass:dev'
    ],
    options: {
      livereload: true
    }
  },

  frontend: {
    files: [
      '**/*.js',
      '**/*.html'
    ],
    options: {
      livereload: true
    }
  }
};
