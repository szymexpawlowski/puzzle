'use strict';

angular.module('settingsModuleDirectives').directive('filePreviewWidget', ['GridDrawer',
    function (gridDrawer) {

        var allPropertiesSetUp = function(settings) {
            return !!(settings.file !== undefined && settings.dimensionX !== undefined && settings.dimensionY !== undefined)
        };

        return {
            restrict: 'E',
            templateUrl: 'js/settings/views/directives/filePreviewWidget.html',
            link: function(scope, element, attrs, ctrl) {

                var img = new Image(),
                    reader = new FileReader(),
                    previewCtx = element.find('canvas')[0].getContext('2d'),
                    gridCtx = element.find('canvas')[1].getContext('2d');

                img.onload = function() {

                    previewCtx.drawImage(img, 0, 0, img.width, img.height, 0, 0, scope.settings.width, scope.settings.height);
                };

                reader.onloadend = function() {

                    img.src = reader.result;
                };

                scope.$watch('settings.file', function(newFile) {

                    if (newFile !== undefined) {

                        reader.readAsDataURL(newFile);
                    }
                });

                scope.$watchCollection('settings', function(settings) {

                    if (allPropertiesSetUp(settings)) {

                        gridDrawer.drawGrid(gridCtx, settings.width, settings.height, settings.dimensionX, settings.dimensionY);
                    }
                });
            }
        };
    }
]);