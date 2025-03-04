// controllers/searchController.js
angular.module('employeeApp').controller('SearchController', ['$scope', '$location', '$rootScope', 'EmployeeService', 
    function($scope, $location, $rootScope, EmployeeService) {
      $scope.searchQuery = "";
      $scope.employees = [];
      
      // Load all employees from the backend
      EmployeeService.getAllEmployees().then(function(response) {
        $scope.employees = response.data;
      }, function(error) {
        console.error("Error fetching employees", error);
      });
      
      // When an employee is clicked, store the employee and redirect
      $scope.selectEmployee = function(employee) {
        $rootScope.selectedEmployee = angular.copy(employee);
        $location.path('/employeeDetail');
      };
  }]);
  