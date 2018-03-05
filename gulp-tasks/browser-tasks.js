// Start browserSync server
// Reload browserSync server

'use strict';

// packages
const gulp          = require('gulp');
const browserSync   = require('browser-sync').create();

// task vars
const app_dir     = '_src/_app/';

//////////////////////////////////////////////////////////////////

gulp.task('browser_serve', function(done) {
  browserSync.init({
    server: app_dir,
    ghostMode: {
      clicks: true,
      forms: true,
      scroll: false
    }
  });
  done();
});

gulp.task('browser_reload', function(done) {
  browserSync.reload();
  done();
});
