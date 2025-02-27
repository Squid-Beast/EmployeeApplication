app.controller('MainController', function($scope, EmployeeService) {
    $scope.message = "Loading...";
    $scope.greeting = "";

    EmployeeService.getHomePage().then(function(response) {
        $scope.message = response.data;
    });

    $scope.submitForm = function() {
        EmployeeService.getGreeting($scope.name).then(function(response) {
            $scope.greeting = response.data;
        });
    };
});