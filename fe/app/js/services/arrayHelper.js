'use strict';

angular.module('puzzleApp').factory('ArrayHelper', [

    function() {

        return {
            switchElements: function(arr, currentPosition, nextPosition) {

                var tmp;

                if (arr[currentPosition] === undefined || arr[nextPosition] === undefined) {
                    throw 'rangeException';
                }

                tmp = arr[nextPosition];
                arr[nextPosition] = arr[currentPosition];
                arr[currentPosition] = tmp;
            },
            fill: function(nbOfElements, start, step) {

                var i,
                    result = [];

                step = step || 1;
                start = start || 0;

                for (i = 0; i < nbOfElements; i++) {
                    result.push(start);
                    start += step;
                }

                return result;
            }
        }
    }
]);
