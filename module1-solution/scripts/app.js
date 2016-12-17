(function () {


    angular.module('app', []).controller('LunchController', LunchController);

    LunchController.$inject = ['$scope'];

    function LunchController($scope) {

        $scope.message = "";
        $scope.list = "";
        $scope.class = "";

        $scope.checkTooMuch = function () {

            var arrList = $scope.list.split(',').clean("").clean(" ");


            if (arrList.length <= 0) {

                 $scope.message = "Please enter data first."
                 $scope.class = 'invalid';
            } else {

              

                if (arrList.length <= 3) {

                    $scope.message = "Enjoy!"
                    $scope.class = "valid";

                } else if (arrList.length > 3) {

                    $scope.message = "Too much!";
                    $scope.class = "valid";

                }



            }


        };


    }


    Array.prototype.clean = function (deleteValue) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == deleteValue) {
                this.splice( i, 1);
                i--;
            }
        }
        return this;
    };





}());