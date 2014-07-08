'use strict';

describe('Position', function() {

    beforeEach(module('puzzleModuleServices'));

    describe('getX', function() {

        it('should throw exception when dimensionX is 0', inject(function(Position) {

            expect(function() {
                Position.getX(1, 0);
            }).toThrow();
        }));

        it('should return value of x from 2 dimensional matrix', inject(function(Position) {

            expect(Position.getX(0, 2)).toBe(0);
            expect(Position.getX(1, 2)).toBe(1);
            expect(Position.getX(3, 2)).toBe(1);
        }));
    });

    describe('getY', function() {

        it('should throw exception when dimensionY is 0', inject(function(Position) {

            expect(function() {
                Position.getY(1, 0);
            }).toThrow();
        }));

        it('should return value of y from 2 dimensional matrix', inject(function(Position) {

            expect(Position.getY(0, 2)).toBe(0);
            expect(Position.getY(1, 2)).toBe(0);
            expect(Position.getY(2, 2)).toBe(1);
            expect(Position.getY(3, 2)).toBe(1);
        }));
    });

    describe('convertToFlatIndex', function() {

        it('should reduce 2 dimensional position to 1 dimensional position', inject(function(Position) {

            expect(Position.convertToFlatIndex({x: 0, y: 2}, 3)).toBe(6);
            expect(Position.convertToFlatIndex({x: 1, y: 2}, 3)).toBe(7);
            expect(Position.convertToFlatIndex({x: 3, y: 3}, 3)).toBe(12);
        }));
    });

    describe('canMove', function() {

        it('should return true when positions are in the same row and 1 field from each other', inject(function(Position) {

            expect(Position.canMove(0, 1, 4)).toBeTruthy();
        }));

        it('should return false when positions are in the same row and more than 1 field from each other', inject(function(Position) {

            expect(Position.canMove(1, 3, 4)).toBeFalsy();
        }));

        it('should return true when positions are in the same column and 1 field from each other', inject(function(Position) {

            expect(Position.canMove(0, 4, 4)).toBeTruthy();
        }));

        it('should return false when positions are in the same column and more than 1 field from each other', inject(function(Position) {

            expect(Position.canMove(0, 8, 4)).toBeFalsy();
        }));

        it('should return false when positions are diagonally and 1 field from each other', inject(function(Position) {

            expect(Position.canMove(0, 5, 4)).toBeFalsy();
            expect(Position.canMove(2, 5, 4)).toBeFalsy();
            expect(Position.canMove(8, 5, 4)).toBeFalsy();
            expect(Position.canMove(10, 5, 4)).toBeFalsy();
        }));
    });
});