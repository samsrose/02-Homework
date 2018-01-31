var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: ".",
        port: "9000"
    });
    // gulp.watch("**/*.scss").on("change", reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch('assets/css/style.css', ['sass']);

});


gulp.task('sass', function() {
    return gulp.src("assets/css/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("assets/css"))

});

gulp.task('default', ['serve']);