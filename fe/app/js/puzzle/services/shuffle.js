'use strict';

angular.module('puzzleModuleServices').factory('Shuffle', ['ArrayHelper', 'Position', 'Random',

    function(arrayHelper, position, random) {

        var getNewPosition = function(currentPosition, dimensionX, dimensionY) {

                var possiblePositions = getPossiblePositions(currentPosition, dimensionX, dimensionY);

                return selectPossiblePosition(possiblePositions);
            },
            getPossiblePositions = function(currentPosition, dimensionX, dimensionY) {

                var x = position.getX(currentPosition, dimensionX),
                    y = position.getY(currentPosition, dimensionY),
                    possibleXMoves = getPossibleDimensionPositions(x, dimensionX, y, appendDimension),
                    possibleYMoves = getPossibleDimensionPositions(y, dimensionY, x, prependDimension);

                return possibleXMoves.concat(possibleYMoves);
            },
            selectPossiblePosition = function(possibleMoves) {

                var possibleMoveIndex = Math.floor(random.random() * possibleMoves.length);

                return possibleMoves[possibleMoveIndex];
            },
            appendDimension = function(value, dimension) {
                return { x: value, y: dimension };
            },
            prependDimension = function(value, dimension) {
                return { x: dimension, y: value };
            },
            getPossibleDimensionPositions = function(position, dimension, otherDimensionPosition,callback)
            {
                var result = [];

                if (position === 0) {
                    result.push(callback(position + 1, otherDimensionPosition));
                } else if (position === dimension - 1) {
                    result.push(callback(position - 1, otherDimensionPosition));
                } else {
                    result.push(callback(position - 1, otherDimensionPosition));
                    result.push(callback(position + 1, otherDimensionPosition));
                }

                return result;
            };

        return {

            move: function(images, currentPosition, dimensionX, dimensionY) {

                var newPosition = getNewPosition(currentPosition, dimensionX, dimensionY),
                    newPositionFlat = position.convertToFlatIndex(newPosition, dimensionX);

                arrayHelper.switchElements(images, currentPosition, newPositionFlat);

                return newPositionFlat;
            }
        }
    }
]);
