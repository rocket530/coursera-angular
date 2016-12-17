var student = {

    name: "",
    type: "student"

};


document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {

    document.getElementById('name').addEventListener("keyup", keyUp);

}

function keyUp(event) {

    calculateNumericOutput(); 
}

function calculateNumericOutput() {

    student.name = document.getElementById('name').value;

    var totalNameValue = 0;

    for (var i = 0; i < student.name.length ; i++) {

        totalNameValue += student.name.charCodeAt(i);

    }


    var output = "Total Numeric value of person name is " + totalNameValue;
    document.getElementById('output').innerText = output; 

}


(function () {

    'use strict';

    angular.module('app', []).
    controller('NameCalculateController',DIController);


    DIController.$inject = ['$scope', '$injector'];


    function DIController ($scope, $injector) {

        $scope.name = "";
        $scope.total = 0;
        $scope.stateOfBeing = "hungry";

        

        $scope.displayNumeric = function () {

            $scope.total = calculateName($scope.name);

        };

        $scope.feedAamir = function () {

            $scope.stateOfBeing = "fed";
        }

   
        console.log($injector.annotate(DIController));

    }



    




    function calculateName(name) {

        var totalNameValue = 0;

        for (var i = 0; i < name.length ; i++) {

            totalNameValue += name.charCodeAt(i);

        }

        return totalNameValue;

    }



   





})();