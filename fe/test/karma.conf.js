//module.exports = function (config) {
//    config.set({
//
//        // base path that will be used to resolve all patterns (eg. files, exclude)
//        basePath: '../',
//
//
//        // frameworks to use
//        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
//        frameworks: ['jasmine'],
//
//
//        // list of files / patterns to load in the browser
//        files: [
//            'app/vendor/jquery/dist/jquery.js',
//            'app/vendor/angular/angular.js',
//            'app/vendor/angular-route/angular-route.js',
//            'app/vendor/angular-resource/angular-resource.js',
//            'app/vendor/angular-mocks/angular-mocks.js',
//            'app/js/**/*.js',
//            'test/unit/**/*.js'
//        ],
//
//
//        // list of files to exclude
//        exclude: [
//
//        ],
//
//
//        // preprocess matching files before serving them to the browser
//        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
//        preprocessors: {
//            'app/js/**/*.js': 'coverage'
//        },
//
//
//        // test results reporter to use
//        // possible values: 'dots', 'progress'
//        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
//        reporters: ['progress', 'coverage'],
//
//
//        // web server port
//        port: 9876,
//
//
//        // enable / disable colors in the output (reporters and logs)
//        colors: true,
//
//
//        // level of logging
//        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
//        logLevel: config.LOG_INFO,
//
//
//        // enable / disable watching file and executing tests whenever any file changes
//        autoWatch: false,
//
//
//        // start these browsers
//        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//        browsers: ['Chrome'],
//
//
//        // Continuous Integration mode
//        // if true, Karma captures browsers, runs the tests and exits
//        singleRun: false,
//
//
//        coverageReporter: {
//            type : 'html',
//            dir : 'coverage/'
//        }
//    });
//};


module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ['jasmine', 'requirejs'],
        files: [
            {pattern: 'app/js/*.js', included: false},
            {pattern: 'app/js/**/*.js', included: false},
            {pattern: 'test/unit.js', included: false},
            {pattern: 'test/unit/*.js', included: false},
            {pattern: 'test/unit/**/*.js', included: false},
            {pattern: 'app/vendor/**/*.js', included: false},
            // needs to be last http://karma-runner.github.io/0.10/plus/requirejs.html
            'test/main-test.js'
        ],

        autoWatch: false,

        LogLevel: config.LOG_DEBUG,

        browsers: ['Chrome']

//        junitReporter: {
//            outputFile: 'test_out/unit.xml',
//            suite: 'unit'
//        }
    });
};
