'use strict';
 
// dependencies
var gulp = require('gulp');
var cache = require("gulp-cache");
var browserSync = require("browser-sync").create();

// clear Cache on reload
function clearCache() {
        let projFiles = [
                "./**",
                "./**/**/**/*.html",
                "./**/**/**/*.js",
                "./**/**/**/*.php",
                "./**/**/**/*.css",
                "./**/**/**/*.scss",
                "./**/**/**/*.svg"
        ];
        gulp.watch(projFiles).on("change", function(){
                cache.clearAll();
        });
};

function serve(){
        browserSync.init({
        // you'll need to define a server,
        // perhaps a baseDir as well if your "public" files are nested.
                server: "./",
        // if you're working in wamp or related you'll need a proxy
                // port: "port-number", // maybe not needed
                // proxy: "your site name in your local server"
        });
// ./**/**/** = basically just try and search all nested directories. */ */ */
        let projFiles = [
                "./**",
                "./**/**/**/*.html",
                "./**/**/**/*.js",
                "./**/**/**/*.php",
                "./**/**/**/*.svg"
        ]
        gulp.watch(projFiles).on("change", browserSync.reload);
}

// the array as second arg was replaced by gulp.series()
// gulp.parallel does the same but at same time...
gulp.task('default', gulp.parallel(clearCache, serve));
 
exports.clearCache = clearCache;
exports.serve = serve;