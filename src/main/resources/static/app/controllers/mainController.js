// controllers/mainController.js
app.controller('MainController', ['$scope', '$location', '$rootScope', 'EmployeeService', 
    function($scope, $location, $rootScope, EmployeeService) {
      // Instructional message for the form view
      $scope.message = "Fill in the employee details below:";
      // Response message to be displayed from the backend
      $scope.responseMessage = "";
      // Object to hold the form data
      $scope.employee = {};
  
      // Function to handle form submission
      $scope.submitForm = function() {
          console.log("submitForm triggered, employee:", $scope.employee);
          EmployeeService.addEmployee($scope.employee)
              .then(function(response) {
                  $scope.responseMessage = response.data.message;
                  // Save the submitted data on $rootScope so that it can be accessed on the welcome page
                  $rootScope.lastEmployee = angular.copy($scope.employee);
                  console.log("Redirecting with data:", $rootScope.lastEmployee);
                  // Redirect to the welcome page
                  $location.path('/welcome');
              })
              .catch(function(error) {
                  console.error("Error adding employee", error);
                  $scope.responseMessage = "Error adding employee";
              });
      };
  }]);
  