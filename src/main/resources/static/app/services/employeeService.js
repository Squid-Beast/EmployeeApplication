// services/employeeService.js
app.factory('EmployeeService', ['$http', function($http) {
    return {
        // Fetches the home page message from /home endpoint
        getHomePage: function() {
            return $http.get('/home');
        },
        // Adds an employee by sending a POST request to /addEmployee
        addEmployee: function(employee) {
            return $http.post('/addEmployee', employee);
        },
        // Optional: fetch all employees
        getAllEmployees: function() {
            return $http.get('/employees');
        }
    };
}]);
