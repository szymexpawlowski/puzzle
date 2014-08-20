//'use strict';
//
//var puzzleModuleControllers = angular.module('puzzleModuleControllers', []);
//var puzzleModuleServices = angular.module('puzzleModuleServices', []);
//var puzzleModule = angular.module('puzzleModule', ['puzzleModuleControllers', 'puzzleModuleServices']);
//
//var settingsModuleControllers = angular.module('settingsModuleControllers', []);
//var settingsModuleDirectives = angular.module('settingsModuleDirectives', []);
//var settingsModuleServices = angular.module('settingsModuleServices', []);
//var settingsModule = angular.module('settingsModule', ['settingsModuleControllers', 'settingsModuleDirectives', 'settingsModuleServices']);
//
//angular.module('puzzleApp', ['ngRoute', 'ngResource', 'puzzleModule', 'settingsModule']).config(['$routeProvider',
//    function($routeProvider) {
//        $routeProvider.
//            when('/play', {
//                templateUrl: 'js/puzzle/views/index.html',
//                controller: 'PuzzleCtrl'
//            }).
//            when('/', {
//                templateUrl: 'js/settings/views/index.html',
//                controller: 'SettingsCtrl'
//            }).
//            otherwise({
//                redirectTo: '/play'
//            });
//    }
//]);

define([
    'angular',
    'settings/index',
    'puzzle/index'
], function(angular) {

    console.log('app boot');

    return  angular.module('puzzleApp', ['ngRoute', 'puzzleApp.settings', 'puzzleApp.puzzle']);
});
