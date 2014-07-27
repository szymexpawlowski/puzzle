require.config({
    paths: {
        "angular":      "../vendor/angular/angular",
        "angularRoute": "../vendor/angular-route/angular-route",
        "domReady":     "../vendor/requirejs-domready/domReady"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "angularRoute": {
            deps: ["angular"]
        }
    },
    urlArgs: "bust=" + (new Date()).getTime()
});

require([
        'angular',
        'app',
        'angularRoute',
        'domReady'
    ],
    function(angualr, app, angularRoute, domReady) {

        app.config(['$routeProvider', function($routeProvider) {
            console.log($routeProvider);


        }]);


        domReady(function() {
            angular.bootstrap(document, ['puzzleApp']);
        });
    }
);