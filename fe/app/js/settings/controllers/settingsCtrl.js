//'use strict';
//
//angular.module('settingsModuleControllers').controller('SettingsCtrl', ['$scope',
//    function($scope) {
//        console.log('settings ctrl boot');
//
//        $scope.settings = {
//            width: 400,
//            height: 400
//        };
//    }
//]);

define(['../module'], function (settingsModule) {

    'use strict';

    console.log('settingsCtrl boot');

    settingsModule.controller('SettingsCtrl', ['$scope',
        function($scope) {
            console.log('settings ctrl boot');

            $scope.settings = {
                width: 400,
                height: 400
            };
        }
    ]);
});