/**
 * Minify files with UglifyJS
 * https://www.npmjs.com/package/grunt-contrib-uglify
 */
module.exports = {
  vendor: {
    src: [
      '../bower_components/jquery/dist/jquery.min.js'
    ],
    dest: '../live/js/vendor.js',
    options: {
      mangle: false,
      sourceMap: false,
      compress: true
    }
  }
};
