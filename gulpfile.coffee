gulp = require 'gulp'
browserSync = require 'browser-sync'

gulp.task "browser-sync", ->
  browserSync.init "./*.html",
    server:
      baseDir: "./" # Change this to your web root dir
    injectChanges: false
    logConnections: true
    ghostMode:
      clicks: true
      scroll: true
      location: true
  return

gulp.task "default", ['browser-sync'], ->
  return
