'use strict';

angular.module('puzzleApp').factory('Position',

    function() {

        var isARowSibling = function(position1, position2) {
                return Math.abs(position1 - position2) === 1
            },
            isAColumnSibling = function(position1, position2, dimensionY) {
                return Math.abs(position1 - position2) === dimensionY;
            };

        return {
            getX: function(position, dimensionX) {

                if (dimensionX === 0) {
                    throw 'RuntimeException';
                }

                return position % dimensionX;
            },
            getY: function(position, dimensionY) {

                if (dimensionY === 0) {
                    throw 'RuntimeException';
                }

                return Math.floor(position / dimensionY);
            },
            convertToFlatIndex: function(position, dimensionX) {
                return position.y * dimensionX + position.x;
            },
            canMove: function(position1, position2, dimensionY) {
                return (isARowSibling(position1, position2) || isAColumnSibling(position1, position2, dimensionY));
            }
        }
    }
);
