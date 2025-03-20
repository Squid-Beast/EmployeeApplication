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
      
      // Listen for live updates to employee list
      $scope.$on('updateEmployees', function(event, data) {
        $scope.employees = data;
      });
      
      // When an employee is clicked, store the employee in $rootScope
      $scope.selectEmployee = function(employee) {
        $rootScope.selectedEmployee = angular.copy(employee);
        // Clear the search query so dropdown hides after selection
        $scope.searchQuery = "";
      };
  
      // Close the dropdown when clicking outside of the search card
      var handler = function(event) {
        // If the clicked element is not inside an element with class "search-card", clear searchQuery
        if (!angular.element(event.target).closest('.search-card').length) {
          $scope.$apply(function() {
            $scope.searchQuery = "";
          });
        }
      };
      angular.element(document).on('click', handler);
  
      // Clean up the event listener when the controller is destroyed
      $scope.$on('$destroy', function() {
        angular.element(document).off('click', handler);
      });
  }]);
  