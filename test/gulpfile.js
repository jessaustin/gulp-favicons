var gulp = require('gulp'),
    favicons = require('../');

gulp.task('default', function () {
    gulp.src('logo.png')
        .pipe(favicons({
          settings: { background: '#1d1d1d' , vinylMode: true }
        }))
        .pipe(gulp.dest('./images'));
});
