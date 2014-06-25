'use strict';

angular.module('puzzleApp').controller('SettingsCtrl', ['$scope',
    function($scope) {
        console.log('settings ctrl boot');

        $scope.settings = {
            width: 400,
            height: 400
        };
    }
]);
