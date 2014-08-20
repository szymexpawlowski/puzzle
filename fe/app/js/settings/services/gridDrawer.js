define(['../module'], function(settingsModule) {

    'use strict';

    settingsModule.factory('GridDrawer', [

        function() {

            var drawLines = function(ctx, length, dimension, callback) {

                    var i, position,
                        pieceSize = length / dimension;

                    for (i = 1; i < dimension; i++) {

                        position = i * pieceSize;

                        ctx.beginPath();
                        callback(ctx, position, length);
                        ctx.lineWidth = 3;
                        ctx.strokeStyle = '#ff0000';
                        ctx.stroke();
                    }
                },
                drawVerticalLines = function(ctx, position, length) {

                    ctx.moveTo(position, 0);
                    ctx.lineTo(position, length);
                },
                drawHorizontalLines = function(ctx, position, length) {

                    ctx.moveTo(0, position);
                    ctx.lineTo(length, position);
                };

            return {
                drawGrid: function(ctx, width, height, dimensionX, dimensionY) {

                    ctx.clearRect(0, 0, width, height);

                    drawLines(ctx, width, dimensionX, drawVerticalLines);
                    drawLines(ctx, height, dimensionY, drawHorizontalLines);
                }

            }
        }
    ]);
});