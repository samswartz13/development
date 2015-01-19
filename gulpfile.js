'use strict';
var gulp        = require('gulp');
var uglify      = require('gulp-uglify');

// sass
var sass        = require('gulp-ruby-sass');
var filter      = require('gulp-filter');
var sourcemap   = require('gulp-sourcemaps');
var bower       = require('gulp-bower');

var minifyCSS   = require('gulp-minify-css');
// BrowserSync
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

// HTML
var minifyHTML  = require('gulp-minify-html');
// js

// image optimization
var imagemin    = require('gulp-imagemin');
var pngquant    = require('imagemin-pngquant');

var config = {
     sassPath: './assets/scss',
     bowerDir: './bower_components' 
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
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*') 
        .pipe(gulp.dest('./assets/fonts')); 
  });
  gulp.task('sass', function() { 
    return gulp.src(config.sassPath + '/custom.scss')
         .pipe(sass({
             style: 'expanded',
             loadPath: [
                 './assets/sass',
                 config.bowerDir + '/bootstrap-sass/assets/stylesheets',
                 config.bowerDir + '/fontawesome/scss'
             ]
         }) )
         .pipe(gulp.dest('./assets/css'))
  });
/*  gulp.task('sass', function () {
      return gulp.src('assets/scss/custom.scss')
          .pipe(sass({sourcemap: true, style: 'compact'}))
          .pipe(gulp.dest('assets/css'))// Write the CSS & Source maps
          .pipe(filter('**.css')) // Filtering stream to only css files
          .pipe(reload({stream:true}));
  });*/

  // --------------------------
  // BUILD TASKS
  // --------------------------
	gulp.task('minifyHTML', function() {
	    var opts = {comments:true,spare:true};
	  gulp.src('*.html')
	    .pipe(minifyHTML(opts))
	    .pipe(gulp.dest('./build/'))
	});

	gulp.task('minifyCSS', function() {
	  gulp.src('./assets/css/*.css')
	    .pipe(minifyCSS({keepBreaks:true}))
	    .pipe(gulp.dest('./build/assets/css'))
	});
	gulp.task('uglify', function() {
	  gulp.src('./assets/js/*.js')
	    .pipe(uglify())
	    .pipe(gulp.dest('./build/assets/js'))
	});

  gulp.task('minifyIMG', function () {
    return gulp.src('./assets/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./build/assets/images'));
  });

  // --------------------------
  // BROWSER SYNC
  // --------------------------
  gulp.task('browser-sync', function() {
      browserSync({
          server: {
              baseDir: "./"
          },
      });
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
  gulp.task('watch', [ 'sass', 'browser-sync'], function() {
    // --------------------------
    // watch:sass
    // --------------------------
    gulp.watch('./assets/scss/*.scss', ['sass']);
    // --------------------------
    // watch:js
    // --------------------------
    gulp.watch('./assets/js/*.js', ['reload-js']);
    // --------------------------
    // watch:html
    // --------------------------
    gulp.watch('./*.html', ['reload-html']);
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