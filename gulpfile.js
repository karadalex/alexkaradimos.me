var gulp = require('gulp');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var mincss = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');


gulp.task('js', function() {
  gulp.src('public_dev/scripts/**')
      .pipe(plumber())
      .pipe(babel({presets: ['es2015']}))
      .pipe(uglify())
      .pipe(gulp.dest('public/scripts'));
});

gulp.task('css', function() {
  gulp.src('public_dev/styles/fonts/**')
      .pipe(plumber())
      .pipe(gulp.dest('public/styles/fonts'));
  gulp.src('public_dev/styles/*.css')
      .pipe(plumber())
      .pipe(mincss({compatibility: 'ie8'}))
      .pipe(gulp.dest('public/styles'));
});

gulp.task('img', function() {
  gulp.src('public_dev/media/img/**')
      .pipe(plumber())
      .pipe(imagemin())
      .pipe(gulp.dest('public/media/img'));
});

gulp.task('vendor', function() {
  gulp.src('public_dev/bower_components/**/*.min.*(js|map)')
      .pipe(plumber())
      .pipe(babel({presets: ['es2015']}))
      .pipe(uglify())
      .pipe(gulp.dest('public/bower_components'));
  gulp.src('public_dev/bower_components/**/*.min.*(css|map)')
      .pipe(plumber())
      .pipe(mincss({compatibility: 'ie8'}))
      .pipe(gulp.dest('public/bower_components'));
  gulp.src('public_dev/bower_components/**/fonts/**')
      .pipe(plumber())
      .pipe(gulp.dest('public/bower_components'));
})

gulp.task('watch', function() {

});


gulp.task('default', [
  'js',
  'css',
  'img',
  'vendor',
  'watch'
])
