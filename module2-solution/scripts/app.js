(function () {
    'use strict';

    var app = angular.module('app',[]);
    
    app.controller('ShoppingListController', ShoppingListController);
    app.controller('ShoppingListBoughtController', ShoppingListBoughtController);
    app.service('Service', ShoppingListService);

    ShoppingListController.$inject = ["Service"];
    ShoppingListBoughtController.$inject = ["Service"];

    function ShoppingListController(Service) {

        var ShoppingList = this;

        ShoppingList.items = Service.getList();
        ShoppingList.bought = function (index) {
            Service.bought(index);
        }

       


    }
    
    function ShoppingListBoughtController(Service) {

        var BoughtList = this;

        
        BoughtList.items = Service.getBoughtList();
        console.log(Service.getBoughtList().length);
      

    }

    function ShoppingListService() {
      
        var service = this;

        var list = [{ name: "Cookies", quantity: 200 },
                    { name: "Brushes", quantity: 3 },
                    { name: "Apples", quantity: 300 },
                    { name: "Soap", quantity: 400 },
                    { name: "Tea", quantity: 2 },
                    { name: "Coca Cola", quantity: 200 },
                    { name: "Books", quantity: 150 },
                    { name: "Cake", quantity: 205, },
                    { name: "Water", quantity: 120 }];

        var boughtList = [];

        service.getList = function () {
            return list;
        }

        service.getBoughtList = function () {
            return boughtList;
        }

        service.bought = function (index) {
            boughtList.push(list[index]);
            list.splice(index, 1);
        }


    }





}());