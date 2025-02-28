// controllers/mainController.js
app.controller('MainController', ['$scope', 'EmployeeService', function($scope, EmployeeService) {
    $scope.message = "Loading...";
    $scope.responseMessage = "";
    // Object to hold form data, matching your EmployeeDetails fields
    $scope.employee = {};

    // Call /home to load a message from the backend
    EmployeeService.getHomePage().then(function(response) {
        $scope.message = response.data;
    }, function(error) {
        console.error("Error fetching home page message", error);
    });

    // On form submission, post the employee data to /addEmployee
    $scope.submitForm = function() {
        EmployeeService.addEmployee($scope.employee).then(function(response) {
            // The backend returns a SuccessResponse with a 'message' property
            $scope.responseMessage = response.data.message;
        }, function(error) {
            console.error("Error adding employee", error);
            $scope.responseMessage = "Error adding employee";
        });
    };
}]);
