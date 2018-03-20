const gulp = require('gulp');
const babel = require('gulp-babel');

const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
gulp.task('devJs', () =>
    // 这个成了,问题：文件选择
    /*
    {
    return browserify({entries:['./static/js/pages/index.js','./static/js/pages/login.js']})
        .transform(babelify,{presets: ["es2015","react"]})
        .bundle()
        .pipe(source('index.js','login.js'))
        .pipe(gulp.dest('./dist/js'))
    }
    */
    gulp.src('./static/js/pages/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./dist/js'))

);