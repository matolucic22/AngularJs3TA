var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/Department', {
        templateUrl: 'Templates/Admin/Department/Department.html',
        controller: 'departmentController'
    });
   /* $routeProvider.when('/Employees', {
        templateUrl: 'Templates/Admin/Employee/Employees.html',
        controller: 'departmentController'
    });*/
    $routeProvider.otherwise({
        redirectTo: '/'
    });

});