var gulp = require('gulp');
var requireDir = require('require-dir');
var browserSync = require('browser-sync');
requireDir('./_gulp-tasks');

//gulp默认指令 打包-同步-监听
gulp.task('default', ['browser-sync', 'watch']);


//服务端
gulp.task('build', ['server-js', 'server-sass', 'server-jekyll']);

//task
gulp.task('browser-sync', ['js', 'sass', 'img', 'jekyll'], function (cb) {
    browserSync({server: {baseDir: 'dist'}});
    cb();
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch([
        '_scss/**/*.scss',
        'img/**/*.scss'
    ], ['sass']);
    //js
    gulp.watch([
        '_js/**/*.js'
    ], ['js']);
    //image
    gulp.watch([
        'img/**/*.png',
        'img/**/*.gif',
        'img/**/*.jpg',
        'img/**/*.svg'
    ], ['img']);
    //jekyll
    gulp.watch([
        'index.md',
        '_includes/*',
        '_layouts/*',
        '_data/*.yml',
        'pages/**/*',
    ], ['jekyll-rebuild']);
});




