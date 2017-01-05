(function () {

    'use strict';

    angular.module('public').
    controller('SignupController', SignupController);

    SignupController.$inject = ["UserService",'$rootScope'];

    function SignupController(UserService,$rootScope) {
        var ctrl = this;
        ctrl.formFilled = false;
        ctrl.saveUser = function (user) {
            ctrl.formFilled = true;
            UserService.setUser(user);
        };

        ctrl.getUser = function () {
            ctrl.user = UserService.getUser();
        }

        ctrl.checkMenuItem = function (menuItem) {

            ctrl.menuItem = null;
            UserService.getMenuItem(menuItem).then(function (response) {

                ctrl.menuItem = response;

                if (!ctrl.menuItem) {
                    ctrl.signup.menuNumber.$setValidity('required', false);   
                } else {
                    ctrl.signup.menuNumber.$setValidity('required', true);
                }

            });

            
            

        }



    }



    angular.module('public').
    controller('MyinfoController', MyinfoController);
    MyinfoController.$inject = ["user","ApiPath"];
    function MyinfoController(user, ApiPath) {
        var ctrl = this;

        ctrl.user = user;
        ctrl.basePath = ApiPath;


    }






}());