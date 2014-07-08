'use strict';

describe('ArrayHelper', function() {

    beforeEach(module('puzzleModuleServices'));

    describe('switchElements', function() {

        var arr,
            element1 = 0,
            element2 = 1;

        beforeEach(function() {

            arr = [];
            arr.push(element1);
            arr.push(element2);
        });

        it('should switch element at index 0 with element at index 1', inject(function(ArrayHelper) {

            ArrayHelper.switchElements(arr, 0, 1);

            expect(arr).toEqual([element2, element1]);
        }));

        it('should throw range exception on first index', inject(function(ArrayHelper) {

            expect(function() {
                ArrayHelper.switchElements(arr, 2, 1)
            }).toThrow();
        }));

        it('should throw range exception on second index', inject(function(ArrayHelper) {

            expect(function() {
                ArrayHelper.switchElements(arr, 1, 2)
            }).toThrow();
        }));
    });

    describe('fill', function() {

        it('should return array with 3 elements starting from 0 with step 1', inject(function(ArrayHelper) {

            expect(ArrayHelper.fill(3)).toEqual([0, 1, 2]);
        }));

        it('should return array with 3 elements starting from 0 with step 1', inject(function(ArrayHelper) {

            expect(ArrayHelper.fill(3, 0, 1)).toEqual([0, 1, 2]);
        }));

        it('should return empty array', inject(function(ArrayHelper) {

            expect(ArrayHelper.fill(0)).toEqual([]);
        }));
    });
});