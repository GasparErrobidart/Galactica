const gulp  = require('gulp');
const sass  = require('gulp-sass');
const browserSync = require('browser-sync').create();
const join = require('path').join;

const BASE_DIR = join(__dirname);
const sassDIR = join(BASE_DIR , "/scss/**/*.scss");

gulp.task('sass', function(){
	return gulp.src(sassDIR)
		.pipe(sass())
		.pipe(gulp.dest(join(BASE_DIR , "/css")));
});

gulp.task('browser-sync-reload', function() {
    browserSync.reload({stream: true});
});

gulp.task('dev' , function (){

	browserSync.init({
		server : {
			baseDir: "./",
			index: "index.html"
		}
	});

	gulp.watch( sassDIR , gulp.series('sass'));
	return gulp.watch( [
		join(  BASE_DIR , '/**/*.html'),
		join(  BASE_DIR , '/**/*.css'),
		join(  BASE_DIR , '/**/*.js')
		], gulp.series('browser-sync-reload'));

});
