var app = angular.module('MyApp', []);

app.service('MyCalService', function () {
    this.add = function (a, b) { return a + b; }
    this.sub = function (a, b) { return a - b; }
    this.mul = function (a, b) { return a * b; }
    this.div = function (a, b) { return a / b; }
});

app.controller('svcController', function ($scope, MyCalService) {
    $scope.add=function(a, b)
    {
        $scope.res=MyCalService.add(a, b);
    }
});