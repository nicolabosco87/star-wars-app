var gulp        = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var include     = require('gulp-include');
var copy     = require('gulp-copy');


var htmlFiles = '*.html';

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
});

gulp.task('bs-reload', ['build-html','copy-js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('build-html', function(){
    gulp.src('*.html')
        .pipe(include())
        .on('error', console.log)
        .pipe(gulp.dest('./dist/'));

    gulp.src('views/**/*.html')
        .pipe(include())
        .on('error', console.log)
        .pipe(gulp.dest('./dist/views/'));
});

gulp.task('copy-js',function(){
    gulp.src('js/**/*.js', {base: './'})
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', function() {
    runSequence(
        ['copy-js', 'build-html', 'browser-sync' ]
    );

    gulp.watch("js/**/*.js", ['copy-js', 'bs-reload']);
    gulp.watch(["*.html","views/*.html", "partials/*.html"], ['build-html','bs-reload']);

});