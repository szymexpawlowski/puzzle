'use strict';

describe('GridDrawer', function() {

    beforeEach(module('puzzleApp'));

    var ctx = jasmine.createSpyObj('ctx', ['clearRect', 'beginPath', 'stroke', 'moveTo', 'lineTo']);

    it('should draw 3 lines vertically and 3 lines horizontally', inject(function(GridDrawer) {

        var width = 100,
            height = 100,
            dimensionX = 4,
            dimensionY = 4;

        GridDrawer.drawGrid(ctx, width, height, dimensionX, dimensionY);

        expect(ctx.clearRect).toHaveBeenCalledWith(0, 0, width, height);
        expect(ctx.beginPath).toHaveBeenCalled();
        expect(ctx.beginPath.calls.length).toBe(dimensionX - 1 + dimensionY - 1);
        expect(ctx.stroke).toHaveBeenCalled();
        expect(ctx.stroke.calls.length).toBe(dimensionX - 1 + dimensionY - 1);
        expect(ctx.moveTo).toHaveBeenCalled();
        expect(ctx.moveTo.calls.length).toBe(dimensionX - 1 + dimensionY - 1);
        expect(ctx.lineTo).toHaveBeenCalled();
        expect(ctx.lineTo.calls.length).toBe(dimensionX - 1 + dimensionY - 1);
    }));
});