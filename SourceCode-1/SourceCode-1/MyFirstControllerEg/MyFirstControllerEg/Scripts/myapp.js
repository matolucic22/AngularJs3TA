var app = angular.module('MyApp', []);

app.controller('MyController', function ($scope) {
    $scope.MyVal = true;

    $scope.MyFun = function() {
        alert('Welcome To The World Of AngularJS ' + $scope.MyVal);
    }

    $scope.MyFun2 = function (val) {
        alert('Welcome To The World Of AngularJS ' + val);
        $scope.MyVal = val;
    }
});