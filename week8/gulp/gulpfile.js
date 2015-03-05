// Original slideshow: http://slides.com/rainelourie/gulp

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
  scripts: {
    src: 'scripts/src/*.js',
    dest: 'scripts/dest'
  }
};

// Set up the default task
gulp.task('default', ['scripts'], function(){
  gulp.watch(paths.scripts.src, ['scripts'])
});

// Test our concatenate plugin
gulp.task('scripts', function(){
  return gulp.src(paths.scripts.src)
    .pipe(concat('output.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest));
});
