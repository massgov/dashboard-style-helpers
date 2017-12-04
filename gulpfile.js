var gulp = require('gulp');
var stylus = require('gulp-stylus')
var runSequence = require('run-sequence');

// compile dashboard css
gulp.task('stylus', function(){
  return gulp.src('app/styl/dashboards/dashboard--*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function(){
  gulp.watch('app/styl/**/*.styl', ['stylus']); 
})

gulp.task('default', function (callback) {
  runSequence(['stylus','watch'],
    callback
  )
})

module.exports = gulp;