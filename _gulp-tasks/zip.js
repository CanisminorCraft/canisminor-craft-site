var gulp = require('gulp');
var zip = require('gulp-zip');


gulp.task('zip', ['zip-sass', 'zip-css','zip-font']);

gulp.task('zip-css', function () {
    return gulp.src([
        'css/xmui-mobile/xmui-mobile-build.css'
    ])
        .pipe(zip('xmui-min.zip'))
        .pipe(gulp.dest('dist/download'));
});

gulp.task('zip-sass', function () {
    return gulp.src([
        '_scss/**/*.scss',
        '!_scss/*',
        '!_scss/xmui-pc/**/*',
        '!_scss/other/**/*',
    ])
        .pipe(zip('xmui-dev.zip'))
        .pipe(gulp.dest('dist/download'));
});

gulp.task('zip-font', function () {
    return gulp.src('fonts/XMUI-Regular.otf')
        .pipe(zip('XMUI-Regular.zip'))
        .pipe(gulp.dest('dist/download'));
});