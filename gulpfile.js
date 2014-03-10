
var gulp = require('gulp');
var connect = require('gulp-connect');

var path = {
  src: './src/**/*.js'
};

//gulp.task('build', ['']);
//gulp.task('watch', function() {
//    gulp.watch(path.src, ['build']);
//});

gulp.task('serve', connect.server({
    root: [__dirname],
    port: 8000,
    open: {
        browser: 'chromium'
    }
}));
