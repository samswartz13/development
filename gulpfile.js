'use strict';

var gulp         = require('gulp');
var util         = require('gulp-util');
var del          = require('del');
var bower        = require('gulp-bower');

// sass
// var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

// BrowserSync
var browserSync  = require('browser-sync').create();

// Minification
var minifyHTML   = require('gulp-minify-html');
var uglify       = require('gulp-uglify');
var minifyCSS    = require('gulp-minify-css');

// image optimization
var imagemin     = require('gulp-imagemin');
var pngquant     = require('imagemin-pngquant');


var config = {
    sassPath: 'assets/scss',
    bowerDir: 'bower_components'
}

// --------------------------
// BOWER INSTALL
// --------------------------
gulp.task('bower', function() {
	return bower()
        .pipe(gulp.dest(config.bowerDir))
});


// --------------------------
// SASS
// --------------------------
gulp.task('icons', function() {
	gulp.src('bower_components/fontawesome/fonts/**.*')
	.pipe(gulp.dest('assets/fonts'));
});



gulp.task('sass', function() {
	return gulp.src("assets/scss/custom.scss")
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))

	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest("assets/css"))

	.pipe(browserSync.stream());
});


// --------------------------
// BUILD TASKS
// --------------------------

gulp.task('minifyHTML', function() {
	var opts = {comments:true,spare:true};
	del(['build/*.html']);
	gulp.src('*.html')
	.pipe(minifyHTML(opts))
	.pipe(gulp.dest('build/'))
});

gulp.task('minifyCSS', function() {
	del(['build/assets/css/*']);
	gulp.src('assets/css/*.css')
	.pipe(minifyCSS({keepBreaks:true}))
	.pipe(gulp.dest('build/assets/css'))
});

gulp.task('uglify', function() {
	del(['build/assets/js/*']);
	gulp.src('assets/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/assets/js'))
});

gulp.task('minifyIMG', function () {
	del(['build/assets/images/*']);
	gulp.src('assets/images/*')
	.pipe(imagemin({
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	}))
	.pipe(gulp.dest('build/assets/images'));
});

// --------------------------
// BROWSER SYNC
// --------------------------
gulp.task('browser-sync', function() {
	browserSync.init({
		server: "./"
	});

	// gulp.watch("assets/scss/**/*.scss", ['sass']);
	gulp.watch("*.html").on('change', browserSync.reload);
});

// gulp.task('reload-sass', ['sass'], function(){
//   browserSync.reload();
// });
gulp.task('reload-js', function(){
	browserSync.reload();
});
gulp.task('reload-html', function(){
	browserSync.reload();
});

// --------------------------
// DEV/WATCH TASK
// --------------------------
gulp.task('watch', [  'browser-sync'], function(){

});

// --------------------------
// DEV/BUILD TASK
// --------------------------
gulp.task('build', [
	'sass',
	'minifyHTML',
	'minifyCSS',
	'minifyIMG',
	'uglify'
	], function() {
	});


gulp.task('default', ['watch']);

// gulp (watch) : for development and browsersync
// gulp build : for a minified production build
