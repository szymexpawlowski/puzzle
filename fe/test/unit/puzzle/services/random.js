'use strict';

describe('Random', function() {

    beforeEach(module('puzzleModuleServices'));

    describe('random', function() {

        it('should return a float higher or equal 0 and lower than 1', inject(function(Random) {

            var value = Random.random();

            expect(typeof value === 'number').toBeTruthy();
            expect(value >= 0).toBeTruthy();
            expect(value).toBeLessThan(1);
        }));
    });

});