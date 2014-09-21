(function() {
  var browserSync, gulp;

  gulp = require('gulp');

  browserSync = require('browser-sync');

  gulp.task("browser-sync", function() {
    browserSync.init("./*.html", {
      server: {
        baseDir: "./"
      },
      injectChanges: false,
      logConnections: true,
      ghostMode: {
        clicks: true,
        scroll: true,
        location: true
      }
    });
  });

  gulp.task("default", ['browser-sync'], function() {});

}).call(this);
