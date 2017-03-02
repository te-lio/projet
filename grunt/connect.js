/**
 * Start a connect web server.
 * https://www.npmjs.com/package/grunt-contrib-connect
 * 
 * @module Grunt/connect
 */
module.exports = {
  options: {
    protocol: 'http',
    port: 9000,
    livereload: 35729,
    hostname: 'localhost'
  },
  server: {
    options: {
      middleware: function (connect, options) {
        var rewriteModule = require('http-rewrite-middleware');
        var serveStatic = require('serve-static');
        var middlewares = [];

        // This code creates rewrites from *any route* to index.html to simulate rewrite behavior of live nginx servers.
        // => index.html / angular handles request and redirects to appropriate state
        middlewares.push(rewriteModule.getMiddleware([
          {
            from: '^\/[a-zA-Z0-9-_\/\?=,&]+$',
            to: 'index.html'
          }
        ]));
        // Converts base property to array if not already an array. base contains directories with files to be served.
        if (!Array.isArray(options.base)) {
          options.base = [options.base];
        }
        // Add all directories to serve-static. This resources will served and angular will not interfere.
        options.base.forEach(function (base) {
          middlewares.push(serveStatic(base));
        });

        return middlewares;
      }
    }
  }

};