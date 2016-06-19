var gulp = require('gulp'),
    path = require('path'),
    clean = require('gulp-clean'),
    argv = require('yargs').argv;
    
gulp.task('cleanup',function () {
	return gulp.src([argv.destpath +'/*html/**/**/*'], {read: false})
		.pipe(clean({ force: true }));
});

gulp.task('cleanup-all',function () {
	return gulp.src([argv.destpath +'/**/*'], {read: false})
		.pipe(clean({ force: true }));
});

gulp.task('copy',['cleanup'], function(){
	gulp.src([argv.srcpath+'/*html/**/**/*'])
	.pipe(gulp.dest(argv.destpath));
});

gulp.task('copy-all',['cleanup-all'], function(){
	gulp.src([argv.srcpath+'/**/*'])
	.pipe(gulp.dest(argv.destpath));
});