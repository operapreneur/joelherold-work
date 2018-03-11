// @operapreneur Master gulp file
// v0.1.0

/////////////////////////////////////
// !! Gulp 4.0.0 !!
/////////////////////////////////////

'use strict';

const gulp          = require('gulp');
const requireDir    = require('require-dir');

//////////////////////////////////////////////////////////////////
// globals

const onError = function (error) {
  console.error.bind(error);
  this.emit('end');
}


//////////////////////////////////////////////////////////////////
// import tasks

requireDir('./gulp-tasks');
├── browser_serve
├── browser_reload
├── compile_js
├── watch_js
├── watch_jsAssets
├── compile_sass
├── watch_sass
└─┬ default
  └─┬ <series>
    ├── compile_sass
    ├── compile_js
    ├── browser_serve
    └─┬ <parallel>
      ├── watch_sass
      ├── watch_js
      └── watch_jsAssets


//////////////////////////////////////////////////////////////////
// default

gulp.task('default',
  gulp.series('compile_sass', 'compile_js', 'browser_serve',
    gulp.parallel('watch_sass', 'watch_js', 'watch_jsAssets')
  )
);
