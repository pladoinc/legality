/**
 * js/index.js - Legality by PLADO
 * 
 * Licensed under MIT.
 * Copyright (C) 2016 PLADO.
 */

~ function (app) {
    'use strict';

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.otherwise('/')
        $locationProvider.html5Mode(true)
    }])

    // remove ads that fail to load
    ;[].slice.call(document.getElementsByClassName('adsbygoogle')).forEach(function (elm) {
        if (elm.offsetHeight === 0) {
            var parent = elm.parentElement
            //parent.parentElement.removeChild(parent)
        }
    })

}( angular.module('legality', ['ngRoute', 'ngAnimate']) )