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
    , browserSync = require('browser-sync').create()
    , validator = require('gulp-html')

gulp.task('validate:html', () =>
    gulp.src(['*.html'])
        .pipe(validator())
)

gulp.task('compile:js', () =>
    browserify('js/index.js').bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('js'))
)

gulp.task('bundle:js', ['compile:js'], () =>
    gulp.src(['vendor/angular/angular.min.js', 'vendor/angular-animate/angular-animate.min.js', 'vendor/angular-route/angular-route.min.js', 'js/app.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('js'))
)

gulp.task('compile:css', () =>
    gulp.src(['vendor/normalize-css/normalize.css', 'css/*.css', '!css/bundle.css'])
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
gulp.task('default', ['validate:html', 'bundle:js', 'compile:css', 'compress:images'])

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })

    gulp.watch('*.html', ['validate:html']).on('change', browserSync.reload)
    gulp.watch('js/**/*.js', ['bundle:js']).on('change', browserSync.reload)
    gulp.watch('css/**/*.css', ['compile:css']).on('change', browserSync.reload)
})