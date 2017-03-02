/**
 * Compile Sass to CSS using node-sass.
 * https://www.npmjs.com/package/grunt-sass
 */
module.exports = {
  options: {
    style: 'expanded',
    includePaths: [
      'src'
    ]
  },
  dev: {
    sourceMap: true,
    options: {},
    files: [{
      src: '../layout/main.scss',
      dest: 'css/main.css'
    }]
  },

  deploy: {
    outputStyle: 'compressed',
    files: [{
      src: '../layout/main.scss',
      dest: '../live/css/main.css'
    }]
  }
};
