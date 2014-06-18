'use strict';

angular.module('puzzleApp').directive('fileUploadWithPreviewWidget', ['$parse',
    function ($parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {

                var reader,
                    fileModel = $parse(attrs.fileModel),
                    fileModelSetter = fileModel.assign;

                if (attrs.previewModel !== undefined) {
                    angular.element(element[0]).after('<img ng-src="{{ " + attrs.previewModel + " }}">')
                    reader = new FileReader();
                    reader.onloadend = function() {
                        scope.$apply(function() {
                            scope.settings.preview = reader.result;
                        });
                    };
                }

                element.bind('change', function() {

                    scope.$apply(function() {

                        var file = element[0].files[0];

                        fileModelSetter(scope, file);
                        if (attrs.fileModel !== undefined) {
                            reader.readAsDataURL(file);
                        }
                    });
                });
            }
        };
    }
]);