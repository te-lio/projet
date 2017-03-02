/**
 * Concatenate files.
 * https://www.npmjs.com/package/grunt-contrib-concat
 */
module.exports = {
  'vendor': {
    files: {
      'js/vendor.js': [
        '../bower_components/jQuery/dist/jquery.js'      ]
    }
  }
};