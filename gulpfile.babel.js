let gulp = require('gulp');

import './gulp/js';
import './gulp/css';
import './gulp/template';
import './gulp/img';
import './gulp/watch';
//require('./gulp/js');
//require('./gulp/css');
//require('./gulp/template');
//require('./gulp/img');
//require('./gulp/watch');

gulp.task('dev',['devJs']);