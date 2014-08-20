define(['../module'], function(puzzleModule) {

    'use strict';

    puzzleModule.factory('Random', [

        function() {

            return {

                random: function() {

                    return Math.random();
                }
            }
        }
    ]);
});