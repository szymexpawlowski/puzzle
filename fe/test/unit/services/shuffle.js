'use strict';

describe('Shuffle', function() {

    var images,
        dimensionX = 4,
        dimensionY = 4,
        mockRandom;

    beforeEach(module('puzzleApp'));

    beforeEach(function() {

        images = Array.apply(null, Array(dimensionX * dimensionY)).map(function(undef, i) { return i;});

        mockRandom = jasmine.createSpyObj('random', ['random']);

        module(function($provide) {
            $provide.value('Random', mockRandom);
        })
    });

    describe('move', function() {

        describe('when in top left corner', function() {

            var topLeftCorner = 0;

            it('when picking first of possible positions it should move one position to the right', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0;
                });

                expect(Shuffle.move(images, topLeftCorner, dimensionX, dimensionY)).toBe(1);
            }));

            it('when picking second of possible positions it should move one position down', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0.99;
                });

                expect(Shuffle.move(images, topLeftCorner, dimensionX, dimensionY)).toBe(4);
            }));
        });

        describe('when in top right corner', function() {

            var topRightCorner = 3;

            it('when picking first of possible positions it should move one position to the left', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0;
                });

                expect(Shuffle.move(images, topRightCorner, dimensionX, dimensionY)).toBe(2);
            }));

            it('when picking second of possible positions it should move one position down', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0.99;
                });

                expect(Shuffle.move(images, topRightCorner, dimensionX, dimensionY)).toBe(7);
            }));
        });

        describe('when in bottom left corner', function() {

            var bottomLeftCorner = 12;

            it('when picking first of possible positions it should move one position to the right', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0;
                });

                expect(Shuffle.move(images, bottomLeftCorner, dimensionX, dimensionY)).toBe(13);
            }));

            it('when picking second of possible positions it should move one position up', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0.99;
                });

                expect(Shuffle.move(images, bottomLeftCorner, dimensionX, dimensionY)).toBe(8);
            }));
        });

        describe('when in bottom right corner', function() {

            var bottomRightCorner = 15;

            it('when picking first of possible positions it should move one position to the left', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0;
                });

                expect(Shuffle.move(images, bottomRightCorner, dimensionX, dimensionY)).toBe(14);
            }));

            it('when picking second of possible positions it should move one position up', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0.99;
                });

                expect(Shuffle.move(images, bottomRightCorner, dimensionX, dimensionY)).toBe(11);
            }));
        });

        describe('when on top border', function() {

            var position = 2;

            it('when picking first of possible positions it should move one position to the left', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0;
                });

                expect(Shuffle.move(images, position, dimensionX, dimensionY)).toBe(1);
            }));

            it('when picking second of possible positions it should move one position right', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0.34;
                });

                expect(Shuffle.move(images, position, dimensionX, dimensionY)).toBe(3);
            }));

            it('when picking third of possible positions it should move one position down', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0.67;
                });

                expect(Shuffle.move(images, position, dimensionX, dimensionY)).toBe(6);
            }));
        });

        describe('when on bottom border', function() {

            var position = 14;

            it('when picking first of possible positions it should move one position to the left', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0;
                });

                expect(Shuffle.move(images, position, dimensionX, dimensionY)).toBe(13);
            }));

            it('when picking second of possible positions it should move one position right', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0.34;
                });

                expect(Shuffle.move(images, position, dimensionX, dimensionY)).toBe(15);
            }));

            it('when picking third of possible positions it should move one position up', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0.67;
                });

                expect(Shuffle.move(images, position, dimensionX, dimensionY)).toBe(10);
            }));
        });

        describe('when on left border', function() {

            var position = 4;

            it('when picking first of possible positions it should move one position to the right', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0;
                });

                expect(Shuffle.move(images, position, dimensionX, dimensionY)).toBe(5);
            }));

            it('when picking second of possible positions it should move one position up', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0.34;
                });

                expect(Shuffle.move(images, position, dimensionX, dimensionY)).toBe(0);
            }));

            it('when picking third of possible positions it should move one position down', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0.67;
                });

                expect(Shuffle.move(images, position, dimensionX, dimensionY)).toBe(8);
            }));
        });

        describe('when on right border', function() {

            var position = 7;

            it('when picking first of possible positions it should move one position to the left', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0;
                });

                expect(Shuffle.move(images, position, dimensionX, dimensionY)).toBe(6);
            }));

            it('when picking second of possible positions it should move one position up', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0.34;
                });

                expect(Shuffle.move(images, position, dimensionX, dimensionY)).toBe(3);
            }));

            it('when picking third of possible positions it should move one position down', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0.67;
                });

                expect(Shuffle.move(images, position, dimensionX, dimensionY)).toBe(11);
            }));
        });
        describe('when not in a corner', function() {

            var position = 5;

            it('when picking first of possible positions it should move one position to the left', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0;
                });

                expect(Shuffle.move(images, position, dimensionX, dimensionY)).toBe(4);
            }));

            it('when picking second of possible positions it should move one position up', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0.26;
                });

                expect(Shuffle.move(images, position, dimensionX, dimensionY)).toBe(6);
            }));

            it('when picking third of possible positions it should move one position up', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0.51;
                });

                expect(Shuffle.move(images, position, dimensionX, dimensionY)).toBe(1);
            }));

            it('when picking fourth of possible positions it should move one position up', inject(function(Shuffle) {

                mockRandom.random.andCallFake(function() {
                    return 0.99;
                });

                expect(Shuffle.move(images, position, dimensionX, dimensionY)).toBe(9);
            }));
        });

    });

});