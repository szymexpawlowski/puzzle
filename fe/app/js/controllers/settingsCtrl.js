'use strict';

angular.module('puzzleApp').controller('SettingsCtrl', ['$scope',
    function($scope) {
        console.log('settings ctrl boot');

        $scope.settings = {};
    }
]);
