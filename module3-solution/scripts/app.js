(function () {

    var NarrowItDownApp = angular.module('NarrowItDownApp', []);

    NarrowItDownApp.controller('NarrowItDownController', NarrowItDownController);
    NarrowItDownApp.service('MenuSearchService', MenuSearchService);

  
    NarrowItDownApp.directive("foundItems", function () {
        return {
            restrict: 'E',
            scope: {
                message: '@message',
                items: '<?items',
                remove: '&remove'
            },
            templateUrl: "foundItems.html",
            controller: ListDirectiveController,
            controllerAs: 'menu',
            bindToController: true
            };
        });
     

    function ListDirectiveController() { }
  



    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {

        var menu = this;
        menu.message = "No menu item found.";
        
        
        menu.getMatchedMenuItem = function () {
            var promise = MenuSearchService.getMatchedMenuItem(menu.search);
            promise.then(function (response) {
                
                menu.items = response;
                
                
            }).catch(function(error){
            
                menu.message = "You are not connected to internet or web service is not responding.";
            
            });

           
        };


        menu.removeMenuItem = function (index) {
            menu.items.splice(index, 1);
        }
    }



    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {

        var service = this;
        
        service.getMatchedMenuItem = function (searchTerm) {
            searchTerm = searchTerm || "";
            return $http({
                        url: 'https://davids-restaurant.herokuapp.com/menu_items.json/',
                        method: 'GET',

                        }).then(function (response) {

                            var foundItems = [];

                            for (var i = 0; i < response.data.menu_items.length; i++) {

                                    if (response.data.menu_items[i].description.indexOf(searchTerm.toLowerCase()) !== -1) {
                                            foundItems.push(response.data.menu_items[i]);
                                    }
                            }
                            return foundItems;
                        });
            };
    }


}());