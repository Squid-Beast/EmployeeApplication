app.service('EmployeeService', function($http) {
    this.getHomePage = function() {
        return $http.get('/api/home');
    };

    this.getGreeting = function(name) {
        return $http.get('/api/greet', { params: { name: name } });
    };
});