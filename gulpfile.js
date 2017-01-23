/**
 * plugins
 */
var gulp = require('gulp'),

	// gulp 较好一些的 rollup 插件: 用于将es6的模块打包成一个js文件
	rollup = require('gulp-better-rollup'),

	// rollup 的 babel 插件: 用于 6to5
	babel = require('rollup-plugin-babel'),

	// 重命名插件
	rename = require('gulp-rename'),

	// banner插件
	header = require('gulp-header'),

	concat = require('gulp-concat'),
	// copy = require('gulp-copy'),
	
	// uglify
	uglify = require('gulp-uglify');


/**
 * gulp bundle task
 */
gulp.task('bundle', function() {

	// -r: release OR debug
	var isRelease = process.argv.indexOf('-r') > -1;

	// the entry js
	return gulp.src('./src/index.js')

		// rollup: 使用 import , export 组织 js 文件,合成一个总的 js 文件
		// 使用 rollup 的 babel 插件,将 es6 的语法,转成 es5 的语法
		// 目前最好不要使用 generator 或 async ,那样还需要引入一个 polyfill
		// fromat: iife amd umd cjs es
	   .pipe(rollup({
	   		plugins: [
	   				babel({
	   					exclude: 'node_modules/**',
	   					presets: ['es2015-rollup']
	   				})
	   			]
	   	}, 'iife'))

	   // one big js
	   .pipe(rename('build.js'))
	   .pipe(header('/*! Hello ${ projectName } */\n\n', { projectName: 'Fengmap' }))
	   .pipe(gulp.dest('./build/'))

	   // uglify
	   .pipe(uglify({
	   		compress: {
	   			unused: true,
	   			dead_code: true,
	   			drop_console: isRelease,

	   			// 类似 "宏""
	   			global_defs: {
	   				DEBUG: !isRelease
	   			}
	   		}
	   }))
	   .pipe(rename('build.min.js'))
	   .pipe(gulp.dest('./build/'))
});

/**
 * gulp merge task
 * 		merge plugins and bundle
 */
gulp.task('merge', ['bundle'], function() {

	// ES6 兼容文件
	var polyfill = './lib/babel-polyfill.js';

	var fs = [
		'./build/build.min.js'
	];

	// -polyfill: 是否使用 ES6 兼容文件
	var isPolyfill = process.argv.indexOf('-polyfill') > -1;

	if (isPolyfill) {
		// append polyfill file ahead
		fs.splice(0, 0, polyfill);
	}

	return gulp.src( fs )
		.pipe(concat('all.min.js'))
	    .pipe(header('/*! Hello ${ projectName } */\n\n', { projectName: 'Fengmap' }))
		.pipe(gulp.dest('./build'))
});

/**
 * gulp default task
 */
gulp.task('default', ['bundle', 'merge']);




