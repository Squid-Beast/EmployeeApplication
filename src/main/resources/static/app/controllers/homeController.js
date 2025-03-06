// controllers/homeController.js
angular.module('employeeApp').controller('HomeController', ['$scope', '$rootScope', '$location', 'EmployeeService', 
    function($scope, $rootScope, $location, EmployeeService) {
      $scope.isMenuOpen = false;
      
      $scope.toggleMenu = function() {
        $scope.isMenuOpen = !$scope.isMenuOpen;
      };
  
      $scope.$watch(function() {
        return $rootScope.selectedEmployee;
      }, function(newVal) {
        $scope.selectedEmployee = newVal;
      });
  
      $scope.closeEmployeeDetail = function() {
        $rootScope.selectedEmployee = null;
      };
  
      $scope.deleteEmployee = function() {
        if (!$scope.selectedEmployee) {
          alert("No employee selected for deletion.");
          return;
        }
        if (confirm("Are you sure you want to delete this employee?")) {
          EmployeeService.deleteEmployee($scope.selectedEmployee.firstName)
            .then(function(response) {
              alert("Employee deleted successfully!");
              $scope.closeEmployeeDetail();
              // Refresh the employee list and broadcast the updated list
              EmployeeService.getAllEmployees().then(function(response) {
                $rootScope.$broadcast('updateEmployees', response.data);
              });
            }, function(error) {
              alert("Error deleting employee.");
            });
        }
      };
  
      $scope.editEmployee = function() {
        if (!$scope.selectedEmployee) {
          alert("No employee selected for editing.");
          return;
        }
        $location.path('/editEmployee');
      };
  }]);
  