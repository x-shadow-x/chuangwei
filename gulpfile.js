var gulp = require('gulp'),
	rev = require('gulp-rev'),
	revReplace = require('gulp-rev-replace'),
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	csso = require('gulp-csso'),
	fileinclude = require('gulp-file-include'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;

var jsPath = 'src/js/module/*.js';
var cssPath = 'src/styles/module/*.css';
var tplPath = 'src/**/*.html';

// gulp.task('tpl:product', function () {
//     return gulp.src('src/**/*.html')
//         .pipe(useref())
//         .pipe(gulpif('*.js', uglify()))
//         .pipe(gulpif('*.css', csso()))
//         .pipe(gulp.dest('dist'));
// });

// gulp.task('css:product', function() {
// 	return gulp.src(['src/**/*.css', '!styles/common/*.css'])
// 		.pipe(csso())
// 		.pipe(gulp.dest('dist'))
// 		.pipe(reload({
// 			stream: true
// 		}));
// });

// gulp.task('js:product', function() {
// 	return gulp.src(['src/**/*.js', '!js/common/*.js'])
// 		.pipe(uglify())
// 		.pipe(gulp.dest('dist'))
// 		.pipe(reload({
// 			stream: true
// 		}));
// });

// gulp.task('product', ['css:product', 'js:product', 'tpl:product'], function() {
// });

gulp.task('tpl:dev', function() {
	return gulp.src(['src/**/*.html', '!src/include/*.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(useref())
		.pipe(gulp.dest('dist'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('css:dev', function() {
	return gulp.src(['src/**/*.css', '!src/styles/common/*.css'])
		// .pipe(csso())
		.pipe(gulp.dest('dist'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('js:dev', function() {
	// return gulp.src(['src/**/*.js', '!js/common/*.js', '!js/module/'])
	return gulp.src(jsPath)
		// .pipe(uglify())
		.pipe(gulp.dest('dist/js/module'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('dev', ['css:dev', 'js:dev', 'tpl:dev'], function() {
	browserSync.init({
		server: "./dist/"
	});

	gulp.watch(jsPath, ['js:dev', 'tpl:dev']);
	gulp.watch(cssPath, ['css:dev', 'tpl:dev']);
	gulp.watch(tplPath, ['tpl:dev']);
	gulp.watch('src/styles/common/*.css', ['tpl:dev']);
	gulp.watch('src/js/common/*.js', ['tpl:dev']);
});



// gulp.task('fileinclude', function() {
// 	// 适配page中所有文件夹下的所有html，排除page下的include文件夹中html
// 	gulp.src(['src/**/*.html', '!src/include/**.html'])
// 		.pipe(fileinclude({
// 			prefix: '@@',
// 			basepath: '@file'
// 		}))
// 		.pipe(gulp.dest('dist'));
// });

// gulp.task('css:dev', function() {
// 	return gulp.src(cssPath)
// 		.pipe(gulp.dest('dist/styles/'))
// 		.pipe(reload({
// 			stream: true
// 		}))
// })

// gulp.task('js:dev', function() {
// 	return gulp.src(jsPath)
// 		.pipe(gulp.dest('dist/js/'))
// 		.pipe(reload({
// 			stream: true
// 		}))
// })
// gulp.task('tpl:dev', function() {

// 	gulp.src(['src/**/*.html', '!src/include/**.html'])
// 		.pipe(fileinclude({
// 			prefix: '@@',
// 			basepath: '@file'
// 		}))
// 		.pipe(gulp.dest('dist/'))
// 		.pipe(reload({
// 			stream: true
// 		}));
// })

// gulp.task('dev', ['fileinclude', 'js:dev', 'css:dev', 'tpl:dev'], function() {
// 	browserSync.init({
// 		server: "./dist/"
// 	})
// 	gulp.watch(jsPath, ['js:dev'])
// 	gulp.watch(cssPath, ['css:dev'])
// 	gulp.watch(tplPath, ['tpl:dev'])
// })