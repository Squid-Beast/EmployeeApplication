// app.js
var app = angular.module('employeeApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    .when('/addEmployee', {
      templateUrl: 'employeeForm.html',
      controller: 'MainController'
    })
    .when('/editEmployee', {
      templateUrl: 'editEmployee.html',
      controller: 'EditEmployeeController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
