var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');


gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('sass:watch', ['sass', 'browserSync'], function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('html', function(){
  return gulp.src('./src/html/**/*.html')
    .pipe(gulp.dest('./dist'))
});

gulp.task('images', function(){
  return gulp.src('./src/images/**/*.png')
    .pipe(gulp.dest('./dist/images'))
});

gulp.task('js', function(){
  return gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
})

gulp.task('default', ['sass:watch', 'html', 'images', 'js', 'browserSync']);