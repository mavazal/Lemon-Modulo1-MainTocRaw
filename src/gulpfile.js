var gulp = require('gulp');
var connect = require ('gulp-connect');
var  open = require ('gulp-open');
var sass = require('gulp-sass');
var options = {
    port: 8085,
    root: ['src'],
    devBase: 'http://localhost:',
    browser: 'chrome',
    sassFolder: './src/styles/sass/*.scss',
    cssCompile: './src/styles/css'
};

gulp.task('connect', function(){ 
     var openOptions = { 
         uri: options.devBase + options.port, 
         app: options.browser 
     }; 
     connect.server({ 
         root: options.root, 
         port: options.port 
     }); 
 }); 

 gulp.task('open', function() { 
     var openOptions = { 
         uri: options.devBase + options.port, 
         app: options.browser 
     }; 
     gulp.src(__filename) 
     .pipe(open(openOptions)); 
 }); 


gulp.task('styles', function() {
   gulp.src('.styles/sass/**/*.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('.styles/css/'));
});

// gulp.task('default',function() {
//    gulp.watch('.styles/sass/**/*.scss',['styles']);
// });


gulp.task('watch', function(){ 
     gulp.watch(options.sassFolder, ['sass']); 
 }); 
 
 
 gulp.task('default', ['connect', 'open', 'watch']); 


gulp.task('copy', function() { 
     gulp.src('./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js') 
         .pipe(gulp.dest('src/js'));  
 
     gulp.src('./node_modules/jquery/dist/jquery.js') 
         .pipe(gulp.dest('src/js')); 
});
