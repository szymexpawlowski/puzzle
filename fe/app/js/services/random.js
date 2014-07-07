'use strict';

angular.module('puzzleApp').factory('Random', [

    function() {

        return {

            random: function() {

                return Math.random();
            }
        }
    }
]);
