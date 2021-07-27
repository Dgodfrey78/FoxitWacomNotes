const path = require('path');
const gulp = require('gulp');
const jsonEditor = require('gulp-json-editor');
const child_process = require('child_process');

const libdir = path.resolve('../../../../lib');

gulp.task('initlib', () => {
    const isWindows = /^win/.test(process.platform);
    return child_process.spawn(isWindows ? 'npm.cmd' : 'npm', ['init', '-y'],{
        cwd: libdir
    });
});

gulp.task('rewrite-main', () => {
    return gulp.src(path.resolve(libdir, 'package.json'))
    .pipe(jsonEditor({
        main: 'UIExtension.full.js',
        name: 'UIExtension'
    }))
    .pipe(gulp.dest(libdir));
});
gulp.task('setup', gulp.series('initlib', 'rewrite-main'));