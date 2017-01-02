(function () {

    angular.module('RestaurantApp')
    .service('RestaurantAppService', RestaurantAppService);


    RestaurantAppService.$inject = ['$http','$log','webservice'];

    function RestaurantAppService($http, $log, webservice) {

        var service = this;

        service.getAllCategories = function () {

          return   $http({
                url: webservice + 'categories.json',
                method: 'GET',
            }).then(function (response) {

                return response.data;
            });

          
        };

        
        service.getItemsForCategory = function (categoryShortName) {


           return $http({
                url: webservice + 'menu_items.json?category=' + categoryShortName,
                method: 'GET'
            }).then(function (response) {

                return response.data;

            });


        };




    }














}());