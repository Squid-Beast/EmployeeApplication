// controllers/homeController.js
angular.module('employeeApp').controller('HomeController', ['$scope', '$rootScope', function($scope, $rootScope) {
    // Make the selected employee available on the scope (it will be inherited from $rootScope)
    $scope.selectedEmployee = $rootScope.selectedEmployee;
    
    // Function to clear the selected employee (i.e. close the detail card)
    $scope.closeEmployeeDetail = function() {
      $rootScope.selectedEmployee = null;
      $scope.selectedEmployee = null;
    };
    
    // Watch for changes in $rootScope.selectedEmployee so that the view updates automatically
    $scope.$watch(function() {
      return $rootScope.selectedEmployee;
    }, function(newVal) {
      $scope.selectedEmployee = newVal;
    });
  }]);
  