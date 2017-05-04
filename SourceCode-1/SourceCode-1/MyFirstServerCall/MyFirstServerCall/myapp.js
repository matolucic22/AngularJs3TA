var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);

app.controller('departmentsController', function ($scope,$http) { 
    $scope.GetDepartments = function () {
        alert('Hi');
        $http.get('/Departments/Index').then(function (response) {
            $scope.Depts = response.data;
        });
    };
});

app.controller('employeesController', function ($scope, $http) {

    $scope.Sort = function (col) {
        $scope.key = col;
        $scope.AscOrDesc = !$scope.AscOrDesc;
    }

    $scope.GetEmployees = function () {
        alert('Hi');
        $http.get('/Employees/Index').then(function (response) {
            $scope.Emps = response.data;
        });
    };

    $scope.GetEmployeesByDid = function (did) {
        alert('Hi');
        $http.get('/Employees/GetByDid/'+did).then(function (response) {
            $scope.Emps = response.data;
        });
    };
});




