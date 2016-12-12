var gulp = require('gulp');
var browserSync = require('browser-sync');
var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'};
var cp = require('child_process');

// Jekyll build
gulp.task('jekyll', ['js', 'sass', 'img',], function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
        .on('close', done);
});


gulp.task('jekyll-rebuild', ['jekyll'], function () {
    browserSync.reload();
});

// server

gulp.task('server-jekyll', ['server-js', 'server-sass'], function (done) {
    return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
        .on('close', done);
});