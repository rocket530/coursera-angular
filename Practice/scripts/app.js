(function () {


    angular.module('app', [])
        .controller('MsgController', MsgController)
        .filter('loves', LovesFilter)
        .filter('truth', truthFilter);


    MsgController.$inject =
        ['$scope',
         '$filter',
         'lovesFilter',
         'truthFilter'
        ];


    function MsgController($scope, $filter, lovesFilter, truthFilter) {
        $scope.name = "Aamir";
        $scope.stateOfBeing = "hungry";
        $scope.cost = .45;
        $scope.msg = "Aamir Likes to eat health snacks at night.";


        $scope.sayMessage = function () {
            var output = $filter('uppercase')($scope.msg);
            return output;
        };

        $scope.sayLoves = function () { 
            var output = lovesFilter($scope.msg);
            return output;
        };

        $scope.replace = function () {
            var output = truthFilter($scope.msg, 'health','wealth');
            return output;
        };

        $scope.feedAamir = function () {
            $scope.stateOfBeing = "fed";
        };

    }


    // Factory Function 

    function LovesFilter() {

        return function (input) {

            input = input || "";
            input = input.replace("Likes", "loves");
            return input;
        };

    }



    function truthFilter() {

        return function (input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        };



    }






}());