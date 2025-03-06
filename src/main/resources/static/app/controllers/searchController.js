// controllers/searchController.js
angular.module('employeeApp').controller('SearchController', ['$scope', '$rootScope', 'EmployeeService', 
    function($scope, $rootScope, EmployeeService) {
      $scope.searchQuery = "";
      $scope.employees = [];
      
      // Load all employees from the backend
      EmployeeService.getAllEmployees().then(function(response) {
        $scope.employees = response.data;
      }, function(error) {
        console.error("Error fetching employees", error);
      });
      
      // Listen for the broadcast to update the employees list live
      $scope.$on('updateEmployees', function(event, data) {
        $scope.employees = data;
      });
      
      // When an employee is clicked, store the employee in $rootScope
      $scope.selectEmployee = function(employee) {
        $rootScope.selectedEmployee = angular.copy(employee);
      };
  }]);
  