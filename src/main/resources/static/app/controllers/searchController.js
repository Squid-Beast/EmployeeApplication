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
    
    // Listen for live updates to employees
    $scope.$on('updateEmployees', function(event, data) {
      $scope.employees = data;
    });
    
    // When an employee is clicked, store it and clear the search query
    $scope.selectEmployee = function(employee) {
      $rootScope.selectedEmployee = angular.copy(employee);
      $scope.searchQuery = "";
    };

    // Close the dropdown when clicking outside the search card
    var handler = function(event) {
      // Use native closest() instead of angular.element(...).closest()
      if (!event.target.closest || !event.target.closest('.search-card')) {
        // Using $apply to update the model
        $scope.$apply(function() {
          $scope.searchQuery = "";
        });
      }
    };
    document.addEventListener('click', handler);
    $scope.$on('$destroy', function() {
      document.removeEventListener('click', handler);
    });
}]);
