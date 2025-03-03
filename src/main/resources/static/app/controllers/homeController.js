// controllers/homeController.js
app.controller('HomeController', ['$scope', '$location', function($scope, $location) {
    $scope.goToAddEmployee = function() {
      $location.path('/addEmployee');
    };
  }]);
  