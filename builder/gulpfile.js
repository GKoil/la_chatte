// compile SASS

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass-compile', function () {
	return gulp.src('../scss/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error',sass.logError))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('../css/'));
});

// autoprefixer

gulp.task('prefix', function () {
	return gulp.src('../css/**/main.css')
	.pipe(autoprefixer({
		browsers: ['last 4 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('../css/'));
});

gulp.task('default', function () {
	gulp.watch('../scss/**/*.scss', gulp.series('sass-compile'));
});