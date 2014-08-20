// we get all the test files automatically
var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/spec\.js$/i.test(file)) {
            tests.push(file);
        }
    }
}

require.config({
    paths: {
        angular: '/base/app/vendor/angular/angular',
        angularRoute: '/base/app/vendor/angular-route/angular-route',
        angularMocks: '/base/app/vendor/angular-mocks/angular-mocks'
    },
    baseUrl: '/base/app/js',
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        }
    },
    deps: tests,
    callback: window.__karma__.start
});