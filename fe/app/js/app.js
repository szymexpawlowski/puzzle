'use strict';

var puzzleApp = angular.module('puzzleApp', ['ngRoute', 'ngResource']);

puzzleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'js/views/puzzle-ctrl-index.html',
                controller: 'PuzzleCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);