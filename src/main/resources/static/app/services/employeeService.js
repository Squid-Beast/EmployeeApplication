// services/employeeService.js
app.factory('EmployeeService', ['$http', function($http) {
    return {
        getHomePage: function() {
            return $http.get('/home');
        },
        addEmployee: function(employee) {
            return $http.post('/addEmployee', employee);
        },
        getAllEmployees: function() {
            return $http.get('/employees');
        },
        getEmployeesByFirstName: function(firstName) {
            return $http.get('/search?firstName=' + firstName);
        }
    };
}]);
