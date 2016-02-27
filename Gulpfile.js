var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('styles', function(){
  gulp.src('client/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('.client/css/'));
});

gulp.task('default', function(){
  gulp.watch('client/sass/**/*.scss', ['styles']);
});
