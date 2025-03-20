// controllers/AddressController.js
angular.module('employeeApp').controller('AddressController', ['$scope', '$location', 'EmployeeService', 
    function($scope, $location, EmployeeService) {
      // Using 'firstName' per your requirements.
      $scope.address = {};
      $scope.responseMessage = "";
      
      $scope.submitAddressForm = function() {
        console.log("Submitting address:", $scope.address);
        EmployeeService.addAddress($scope.address).then(function(response) {
          $scope.responseMessage = response.data.message;
          alert("Address added successfully!");
          $location.path('/');
        }, function(error) {
          $scope.responseMessage = "Error adding address";
          alert("Error adding address.");
        });
      };
  }]);
  