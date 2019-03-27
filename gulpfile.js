/*
* Dependencias
*/
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const path = require('path');

/*
* Configuración de la tarea 'demo'
*/


gulp.task('demo', function () {
  gulp.src(path.resolve(__dirname,'js/src/*.js'))
  .pipe(concat('todo.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./js/build/'))
});

gulp.task('default', ()=>{
	console.log('default');
});

gulp.task('hola', ()=>{
	console.log('hola! gulp');
});