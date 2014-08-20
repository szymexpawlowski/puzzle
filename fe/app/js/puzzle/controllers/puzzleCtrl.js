define(['../module'], function(puzzleModule) {

    'use strict';

    puzzleModule.controller('PuzzleCtrl', ['$scope', 'Puzzle', 'Shuffle', 'ArrayHelper', 'Position',
        function($scope, puzzle, shuffle, arrayHelper, position) {

            console.log('puzzle ctrl boot');

            var correct;

            $scope.puzzle = puzzle.query();
            $scope.puzzle.currentPosition = $scope.puzzle.images.length - 1;

            correct = arrayHelper.fill($scope.puzzle.images.length);

            $scope.shuffle = function() {

                for (var i = 0; i < 50; i++) {
                    $scope.puzzle.currentPosition = shuffle.move($scope.puzzle.images, $scope.puzzle.currentPosition, $scope.puzzle.dimensionX, $scope.puzzle.dimensionY);
                }
            }

            $scope.move = function(index) {

                var ids;

                if (position.canMove($scope.puzzle.currentPosition, index, $scope.puzzle.dimensionY)) {

                    arrayHelper.switchElements($scope.puzzle.images, $scope.puzzle.currentPosition, index);
                    $scope.puzzle.currentPosition = index;

                    ids = $scope.puzzle.images.map(function(image) {
                        return image.id;
                    });

                    if (angular.equals(correct, ids)) {
                        console.log('you won');
                    }
                }
            }


            $scope.getWidth = function() {
                return $scope.puzzle.dimensionX * $scope.puzzle.size + 'px';
            }

            $scope.getHeight = function() {
                return $scope.puzzle.dimensionY * $scope.puzzle.size + 'px';
            }
        }
    ]);
});