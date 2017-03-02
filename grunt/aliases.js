/**
 * Break up grunt tasks.
 * https://www.npmjs.com/package/load-grunt-config
 */
module.exports = {
  'default': [
    'dev'
  ],

  'dev': [
    'dev:build'    
  ],

  'dev:build': [
    'concat:vendor',
    'sass:dev',
    'connect',
    'focus:dev'
  ],

  'deploy': [    
    'copy:mvc',
    'uglify:vendor'
  ]  
};
