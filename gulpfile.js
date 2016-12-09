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
gulp.task('default', ['compile:css', 'compress:images'])