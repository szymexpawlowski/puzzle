'use strict';

angular.module('puzzleModuleServices').factory('Random', [

    function() {

        return {

            random: function() {

                return Math.random();
            }
        }
    }
]);
