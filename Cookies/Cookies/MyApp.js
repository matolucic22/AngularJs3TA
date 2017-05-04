
var app = angular.modul("MyApp", ["ngCookies"]);

app.controller("myCntrl-1", function ($cookies, $scope) {

    $scope.PutVal = function () {
        $cookies.put("MyVal", "MTT");
    };

});

app.controller("myCntrl-2", function ($cookies, $scope) {

    $scope.PutVal = function () {
        $scope.ValueRead = $cookies.get("MyVal");
        alert($scope.ValueRead);
    };

});