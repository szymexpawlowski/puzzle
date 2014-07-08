'use strict';

describe('SettingsCtrl', function() {

    beforeEach(module('settingsModuleControllers'));

    it('should create "settings" model with width and height properties set to 400', inject(function($controller) {
        var scope = {},
            ctrl = $controller('SettingsCtrl', {$scope:scope});

        expect(scope.settings.width).toBe(400);
        expect(scope.settings.height).toBe(400);
    }));
});