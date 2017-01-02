(function () {
    'use strict';

    angular.module('RestaurantApp')
    .controller('CategoriesCtrl', CategoriesCtrl)
    .controller('ItemsCtrl', ItemsCtrl);

    CategoriesCtrl.$inject = ['RestaurantAppService'];

    function CategoriesCtrl(RestaurantAppService) {

        var ctrl = this;

        RestaurantAppService.getAllCategories()
            .then(function (response) {
                ctrl.items = response;

            }).catch(function (reject) {

                console.log(reject);

            });
    }


    ItemsCtrl.$inject = ['items'];
    function ItemsCtrl(items) {
        var ctrl = this;

        ctrl.items = items.menu_items;
        ctrl.categoryName = items.category.name;
        ctrl.categoryShortName = items.category.short_name;
        
    }









}());