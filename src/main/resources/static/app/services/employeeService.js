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
        },
        updateEmployee: function(firstName, employee) {
            return $http.put('/update?firstName=' + firstName, employee);
        },
        deleteEmployee: function(firstName) {
            return $http.delete('/delete?firstName=' + firstName);
        },
        addAddress: function(address) {
            return $http.post('/addAddress', address);
        }
    };
}]);
