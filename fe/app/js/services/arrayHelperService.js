'use strict';

angular.module('puzzleApp').factory('ArrayHelper', [

    function() {

        return {
            switchElements: function(matrix, currentPosition, nextPosition) {

                var tmp = matrix[nextPosition];

                matrix[nextPosition] = matrix[currentPosition];
                matrix[currentPosition] = tmp;
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
