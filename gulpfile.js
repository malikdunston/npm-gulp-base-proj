'use strict';

var gulp = require('gulp');
var cache = require("gulp-cache");
var browserSync = require("browser-sync").create();
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

var SCSS_WATCH = './assets/scss/**/*.scss';
var SCSS_SRC = './assets/scss/index.scss';
var SCSS_DEST = './';

function compile_scss() {
	return gulp.src(SCSS_SRC)
		.pipe(sass().on('error', sass.logError))
		.pipe(minifyCSS())
		.pipe(rename({suffix: '.min'}))
		.pipe(changed(SCSS_SRC))
		.pipe(gulp.dest(SCSS_DEST));
};

function watch_scss() {
	gulp.watch(SCSS_WATCH, compile_scss);
};

function clearCache() {
	cache.clearAll();
};

var projFiles = [
	"./**",
	"./**/**/**/*.php",
	"./**/**/**/*.js",
	"./**/**/**/*.svg",
	"./**/**/**/*.html",
	"./**/**/**/*.scss",
	"./**/**/**/*.css"
];

function serve() {
	browserSync.init({
		server: "./",
	});
	gulp.watch(projFiles).on("change", gulp.parallel(browserSync.reload, clearCache));
}

gulp.task('default', gulp.parallel(serve, watch_scss));

exports.clearCache = clearCache;
exports.serve = serve;
exports.compile_scss = compile_scss;
exports.watch_scss = watch_scss;