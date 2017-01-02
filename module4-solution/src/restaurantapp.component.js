(function () {

    'use strict';

    angular.module('RestaurantApp')
    .component('categories', {
        templateUrl: 'src/templates/categories.template.html',
        bindings: { items: '<' },
        controller:SpinnerCtrl
    });


    angular.module('RestaurantApp')
    .component('spinner', {
        templateUrl: 'src/templates/spinner.component.html',
        controller: SpinnerCtrl
       
    });

    SpinnerCtrl.$inject = ['$rootScope'];
    function SpinnerCtrl($rootScope) {

        var spinner = this;
        var cancelation = [];

        spinner.$onInit = function () {

            var cancel = $rootScope.$on('$stateChangeStart', function () {

                spinner.showSpinner = true;

            });

            cancelation.push(cancel);

            cancel = $rootScope.$on('$stateChangeSuccess', function () {

                spinner.showSpinner = false;

            });

            cancelation.push(cancel);

            spinner.$onDestroy = function () {

                cancelation.forEach(function (item) {

                    item();

                });



            };


        };



        }

}());