(function () {
    
    'use strict';

    

    angular.module('public')
    .service('UserService', UserService);

    UserService.$inject = ["$http", "ApiPath"];

    function UserService($http, ApiPath) {
        var service = this;

        var _user = {};
        var _menuItem = {};

        service.setUser = function (user) {
            user.formFilled = true;
            _user = user;
        };

        service.getUser = function () {
            _user.menuItem = _menuItem;
            return _user;

        };

        service.getMenuItem = function (menuItem) {
          
            return $http.get(ApiPath + '/menu_items.json').then(function (response) {
                var menuitems = response.data.menu_items;

                if(menuItem){
                for (var i = 0; i < menuitems.length; i++) {

                    if (menuitems[i].short_name.toLowerCase() === menuItem.toLowerCase()) {
                        _menuItem = menuitems[i];
                        return menuitems[i];
                    }

                }
                }

            });
            
        }


    }













}());