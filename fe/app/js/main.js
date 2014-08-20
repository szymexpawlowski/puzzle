require.config({
    paths: {
        "angular":          "../vendor/angular/angular",
        "angularRoute":     "../vendor/angular-route/angular-route",
        "angularResource":  "../vendor/angular-resource/angular-resource",
        "domReady":         "../vendor/requirejs-domready/domReady"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "angularRoute": {
            deps: ["angular"]
        },
        "angularResource": {
            deps: ["angular"]
        }
    },
    urlArgs: "bust=" + (new Date()).getTime()
});

require([
        'angular',
        'app',
        'angularRoute',
        'angularResource',
        'domReady'
    ],
    function(angualr, app, angularRoute, angularResource, domReady) {

        app.config(['$routeProvider', function($routeProvider) {

            $routeProvider.
                when('/play', {
                    templateUrl: 'js/puzzle/views/index.html',
                    controller: 'PuzzleCtrl'
                }).when('/', {
                    templateUrl: 'js/settings/views/index.html',
                    controller: 'SettingsCtrl'
                }).otherwise({
                    redirectTo: '/play'
                });
        }]);

        domReady(function() {
            angular.bootstrap(document, ['puzzleApp']);
        });
    }
);