/**
 * gulpfile.js - Legality by PLADO
 * 
 * Licensed under MIT.
 * Copyright (C) 2016 PLADO.
 */

const gulp = require('gulp')
    , sourcemaps = require('gulp-sourcemaps')
    , clean = require('gulp-clean-css')
    , concat = require('gulp-concat')
    , imagemin = require('gulp-imagemin')
    , rename = require('gulp-rename')
    , browserify = require('browserify')
    , source = require('vinyl-source-stream')
    , buffer = require('vinyl-buffer')

gulp.task('compile:js', () =>
    browserify('js/index.js').bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('js'))
)

gulp.task('compile:css', () =>
    gulp.src(['css/*.css', '!css/bundle.css'])
        .pipe(sourcemaps.init())
        .pipe(clean())
        .pipe(concat('bundle.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('css'))
)

gulp.task('compress:png', () =>
    gulp.src(['img/*.png', '!img/*.min.png'])
        .pipe(imagemin())
        .pipe(rename({ extname: '.min.png' }))
        .pipe(gulp.dest('img'))
)

gulp.task('compress:jpg', () =>
    gulp.src(['img/*.jpg', 'img/*.min.jpg'])
        .pipe(imagemin())
        .pipe(rename({ extname: '.min.jpg' }))
        .pipe(gulp.dest('img'))
)

gulp.task('compress:images', ['compress:png', 'compress:jpg'])
gulp.task('default', ['compile:js', 'compile:css', 'compress:images'])