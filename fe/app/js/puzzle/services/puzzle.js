define(['../module'], function(puzzleModule) {

    'use strict';

    puzzleModule.factory('Puzzle', ['$resource',

        // resource for future use when backend will be available
        function($resource) {

            return {
                query: function() {
                    return {
                        size: 100,
                        dimensionX: 4,
                        dimensionY: 4,
                        images: [
                            {id: 0, src: 'img/0_0.jpg'},
                            {id: 1, src: 'img/0_1.jpg'},
                            {id: 2, src: 'img/0_2.jpg'},
                            {id: 3, src: 'img/0_3.jpg'},
                            {id: 4, src: 'img/1_0.jpg'},
                            {id: 5, src: 'img/1_1.jpg'},
                            {id: 6, src: 'img/1_2.jpg'},
                            {id: 7, src: 'img/1_3.jpg'},
                            {id: 8, src: 'img/2_0.jpg'},
                            {id: 9, src: 'img/2_1.jpg'},
                            {id: 10, src: 'img/2_2.jpg'},
                            {id: 11, src: 'img/2_3.jpg'},
                            {id: 12, src: 'img/3_0.jpg'},
                            {id: 13, src: 'img/3_1.jpg'},
                            {id: 14, src: 'img/3_2.jpg'},
                            {id: 15, src: 'img/3_3.jpg'}
                        ]
                    }
                }
            }
        }
    ]);
});
