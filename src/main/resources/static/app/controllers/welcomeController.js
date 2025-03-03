// controllers/welcomeController.js
angular.module('employeeApp').controller('WelcomeController', ['$scope', '$rootScope', function($scope, $rootScope) {
    if ($rootScope.lastEmployee) {
        $scope.employee = $rootScope.lastEmployee;
    } else {
        $scope.employee = {};
        $scope.errorMessage = "No employee data found. Please submit the form first.";
    }
    console.log("WelcomeController loaded, employee:", $scope.employee);
}]);
