// controllers/employeeDetailController.js
angular.module('employeeApp').controller('EmployeeDetailController', ['$scope', '$rootScope', 'EmployeeService', 
    function($scope, $rootScope, EmployeeService) {
      if ($rootScope.selectedEmployee && $rootScope.selectedEmployee.firstName) {
          EmployeeService.getEmployeesByFirstName($rootScope.selectedEmployee.firstName)
            .then(function(response) {
                if (response.data && response.data.length > 0) {
                    // Use the first matching record for the detail view
                    $scope.employee = response.data[0];
                } else {
                    $scope.errorMessage = "No employee found with that first name.";
                }
            }, function(error) {
                console.error("Error fetching employee details", error);
                $scope.errorMessage = "Error fetching employee details.";
            });
      } else {
          $scope.errorMessage = "No employee selected. Please go back and select an employee.";
      }
  }]);
  