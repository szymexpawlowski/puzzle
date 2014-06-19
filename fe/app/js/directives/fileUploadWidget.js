'use strict';

angular.module('puzzleApp').directive('fileUploadWidget', ['$parse',
    function ($parse) {
        return {
            restrict: 'E',
            templateUrl: 'js/views/settings/directives/fileUploadWidget.html',
            link: function(scope, element, attrs) {

                var fileModel = $parse(attrs.fileModel),
                    fileModelSetter = fileModel.assign;

                element.bind('change', function() {

                    scope.$apply(function() {

                        var file = angular.element(element[0]).find('[type=file]')[0].files[0];

                        fileModelSetter(scope, file);
                    });
                });
            }
        };
    }
]);