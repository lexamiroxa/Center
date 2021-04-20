'use strict'

const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const rename = require("gulp-rename")
const csso = require('gulp-csso')
const uncss = require('gulp-uncss');
const imagemin = require('gulp-imagemin')
const { notify } = require('browser-sync')
const { parallel } = require('gulp')

function startwatch() {
  browserSync.init({
    server: {
      baseDir: './app',
      directory: true
    },
    files: ["app/src/**/*.*"],
    notify: false,
    online: true,
    reloadOnRestart: true,
    port: 8080,
    tunnel: "local-dev"
  })
  gulp.watch('./app/scss/**/*.scss', style)
  gulp.watch('./app/**/*.html').on('change', browserSync.reload)
  gulp.watch('./app/js/**/*.js').on('change', browserSync.reload)
  gulp.watch('./app/src/**/*')
}

function style() {
  return gulp.src('./app/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream())
}

function exportCss() {
  return gulp.src('./app/css/**/index.css')
    .pipe(sourcemaps.init())
    .pipe(uncss({
      html: ['./app/index.html', './app/**/*.html']
    }))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'))
}

function exportImages() {
  return gulp.src('./app/src/**/*')
  .pipe(imagemin({
    progressive: true
  }))
  .pipe(gulp.dest('./dist/src/'))
}

exports.Excss = exportCss
exports.start = startwatch, style