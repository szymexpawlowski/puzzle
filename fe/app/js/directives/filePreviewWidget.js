'use strict';

angular.module('puzzleApp').directive('filePreviewWidget', [
    function () {
        return {
            restrict: 'E',
            templateUrl: 'js/views/settings/directives/filePreviewWidget.html',
            link: function(scope, element, attrs, ctrl) {

                var reader = new FileReader();
                reader.onloadend = function() {
                    scope.$apply(function() {
                        scope.settings.preview = reader.result;
                    });
                };

                scope.$watch('settings.file', function(newFile) {

                    if (newFile !== undefined) {
                        reader.readAsDataURL(newFile);
                    }
                });
            }
        };
    }
]);