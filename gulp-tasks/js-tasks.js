// Compile SASS, autoprefix css, & sourcemap
// Watch JS

// uses: browser-tasks.js

'use strict';

// packages
const gulp          = require('gulp');

// task vars
const srcJS       = '_src/_app/js/**/*.{js,json}';

//////////////////////////////////////////////////////////////////


gulp.task('watch_js', function() {
  return gulp.watch(srcJS, gulp.series('browser_reload'));
});
