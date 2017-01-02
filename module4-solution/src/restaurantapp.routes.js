(function () {
    'use strict';

    angular.module('RestaurantApp')
    .config(routes);

    routes.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routes($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');


        $stateProvider.state('home',{
            templateUrl: 'src/templates/home.view.html',
            url:'/'
        });

        $stateProvider.state('categories', {
            templateUrl: 'src/templates/categories.view.html',
            url:'/categories'
        });

        $stateProvider.state('items', {
            templateUrl: 'src/templates/items.view.html',
            url: '/items/{id}',
            resolve: {

                items: ['RestaurantAppService','$stateParams', function (RestaurantAppService,$stateParams) {

                    return RestaurantAppService.getItemsForCategory($stateParams.id);
                }]
            },
            controller: 'ItemsCtrl as ctrl'
        });


    }







}());