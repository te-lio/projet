/**
 * Copy files and folders.
 * https://www.npmjs.com/package/grunt-contrib-copy
 */
module.exports = {
  mvc: {
    files: [{
      expand: true,
      flatten: false,
      src: ['**/*', '!**/test/**', '!**/specs/**', '!**/*.specs.js'],
      dest: '../live/'
    }]
  }
};
