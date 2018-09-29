var gulp = require('gulp');
var replace = require('replace');
var libSrc = './';
var libDest = 'dist/angular-bone';
var docsDest = 'docs';

gulp.task('copy', function () {
  return gulp.src([
    [libSrc, 'LICENSE'].join('/'),
    [libSrc, 'README.md'].join('/')
  ], { base: libSrc }).pipe(gulp.dest(libDest));
});

gulp.task('docs', function () {
  replace({
    regex: /(<base href=")(.*?)(">)/,
    replacement: '',
    paths: [[docsDest, 'index.html'].join('/')],
    recursive: false,
    silent: true
  });
});
