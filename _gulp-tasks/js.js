var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var del = require('del');

gulp.task('js-del', function (cb) {
    return del(['js/','dist/js/']);
    cb();
});

gulp.task('js',['js-del'], function (cb) {
    return gulp.src('_js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({stream: true}));
    cb();
});

gulp.task('server-js',['js-del'], function (cb) {
    return gulp.src('_js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js'))
        .pipe(gulp.dest('dist/js'))
    cb();
});