var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');
var del = require('del');
new cache.Cache({cacheDirName: 'img-cache'})

var filetype = ["*.png", "*.jpg", "*.gif", "*.svg"]
function imgSrc(src) {
    var srcArry = []
    for (var i = 0; i < filetype.length; i++) {
        srcArry[i] = src + filetype[i]
    }
    return srcArry
}

gulp.task('img', function (cb) {
    return gulp.src(imgSrc('img/**/'))
        .pipe(cache(imagemin({
            verbose: true,
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
            use: [pngquant()]
        })))
        .pipe(gulp.dest('img/'))
        .pipe(gulp.dest('dist/img/'))
    cb();
});

// img-library

gulp.task('img-library-tiny', function (cb) {
    return gulp.src(imgSrc('pages/library/**/'))
        .pipe(cache(imagemin({
            verbose: true,
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/pages/library/'))
    cb();
});

gulp.task('img-library-del', ['image-opt'], function (cb) {
    return del(imgSrc('dist/pages/library/**/'));
    cb();
});

gulp.task('img-library', ['img-library-tiny', 'img-library-del'], function (cb) {
    cb()
});

gulp.task('cache-clear', function (done) {
    return cache.clearAll(done);
});