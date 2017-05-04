var app = angular.module('Myapp', []);

app.controller("MyController", function ($scope) {
    $scope.MyVal = "Bok";
    $scope.myFun = function () { alert("Form Method Call"); };

});