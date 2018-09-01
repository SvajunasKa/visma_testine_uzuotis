var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    imagemin = require("gulp-imagemin"),
    plumber = require("gulp-plumber");

gulp.task('styles', function(){
    gulp.src('assets/style/scss/style.scss',)
        .pipe(plumber())
        .pipe(sassGlob())
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(prefixer('last 2 versions'))
        .pipe(concat('assets/style/style.css'))
        .pipe(gulp.dest(''));
});
gulp.task('scripts', function() {
    gulp.src('assets/scripts/modules/*.js')
        .pipe(plumber())
        .pipe(concat('assets/scripts/app.js'))
        //.pipe(uglify())
        .pipe(gulp.dest(''));
});
gulp.task('imageMin', function () {
    gulp.src('assets/images/*.{png,jpg,jpeg}')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/images/imageMin'))


})

gulp.task('watch', function(){
    gulp.watch('assets/style/scss/*.scss', ['styles']);
    gulp.watch('assets/scripts/modules/*.js', ['scripts']);
    gulp.watch('assets/images/*.{png,jpg,jpeg}')
});

gulp.task('default', [
    'watch',
    'scripts',
    'styles',
    'imageMin'
]);
