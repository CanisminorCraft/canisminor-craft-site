var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var del = require('del');

gulp.task('sass-del', function (cb) {
    return del(['css/', 'dist/css/']);
    cb();
});

//SASS编译 并输出 sourcemaps 方便开发
gulp.task('sass', ['sass-del'], function (cb) {
    return gulp.src('_scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}));
    cb();
});

// server

gulp.task('server-sass', ['sass-del'], function (cb) {
    return gulp.src('_scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: ['scss']
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('css'))
        .pipe(gulp.dest('dist/css'));
    cb();
});