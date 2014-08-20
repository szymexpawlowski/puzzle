define(['angular'], function(angular) {

    'use strict';

    console.log('puzzleModule boot');

    return angular.module('puzzleApp.puzzle', ['ngRoute', 'ngResource']);
});