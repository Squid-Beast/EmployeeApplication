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
    .when('/welcome', {
      templateUrl: 'welcome.html',
      controller: 'WelcomeController'
    })
    .when('/search', {
      templateUrl: 'search.html',
      controller: 'SearchController'
    })
    .when('/employeeDetail', {
      templateUrl: 'employeeDetail.html',
      controller: 'EmployeeDetailController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
