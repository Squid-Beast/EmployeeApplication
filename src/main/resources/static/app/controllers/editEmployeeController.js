// controllers/editEmployeeController.js
angular.module('employeeApp').controller('EditEmployeeController', ['$scope', '$rootScope', '$location', 'EmployeeService', 
    function($scope, $rootScope, $location, EmployeeService) {
      if (!$rootScope.selectedEmployee) {
        alert("No employee selected for editing.");
        $location.path('/');
        return;
      }
      // Prepopulate the form with the selected employee's data
      $scope.employee = angular.copy($rootScope.selectedEmployee);
  
      $scope.updateEmployee = function() {
        // Call the update endpoint using the employee's first name
        EmployeeService.updateEmployee($scope.employee.firstName, $scope.employee)
          .then(function(response) {
            alert("Employee updated successfully!");
            // Update the root selected employee with new values
            $rootScope.selectedEmployee = angular.copy($scope.employee);
            $location.path('/');
          }, function(error) {
            alert("Error updating employee.");
          });
      };
  }]);
  