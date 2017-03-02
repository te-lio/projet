/**
 * Focus and run a subset of watch targets
 * https://www.npmjs.com/package/grunt-focus
 */
module.exports = {
  dev: {
    include: [
      'grunt',
      'style',
      'frontend'
    ]
  }
};
