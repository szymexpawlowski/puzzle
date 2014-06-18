'use strict';

var puzzleApp = angular.module('puzzleApp', ['ngRoute', 'ngResource']);

puzzleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/play', {
                templateUrl: 'js/views/puzzle/index.html',
                controller: 'PuzzleCtrl'
            }).
            when('/', {
                templateUrl: 'js/views/settings/index.html',
                controller: 'SettingsCtrl'
            }).
            otherwise({
                redirectTo: '/play'
            });
    }
]);