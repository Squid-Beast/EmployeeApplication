// app.js
var app = angular.module('employeeApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
$routeProvider
  .when('/', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  })
  .when('/addEmployee', {
    templateUrl: 'employeeForm.html',
    controller: 'MainController'
  })
  .when('/editEmployee', {
    templateUrl: 'editEmployee.html',
    controller: 'EditEmployeeController'
  })
  // New route for the address autocomplete form
  .when('/autoAddress', {
    templateUrl: 'autoAddressForm.html'
    // Optionally, you could assign a controller if needed.
  })
  .otherwise({
    redirectTo: '/'
  });
}]);

// Custom Directive for Google Places Autocomplete
app.directive('googlePlacesAutocomplete', function() {
return {
  restrict: 'A',
  link: function(scope, element, attrs) {
    if (typeof google !== 'undefined' && google.maps && google.maps.places) {
      var autocomplete = new google.maps.places.Autocomplete(element[0], {
        types: ['geocode'], // Restrict predictions to addresses.
        componentRestrictions: { country: 'us' } // Optional: restrict to the US.
      });
      autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        var street = "";
        var city = "";
        var state = "";
        var zip = "";
        var country = "";
        if (place.address_components) {
          place.address_components.forEach(function(component) {
            var componentType = component.types[0];
            switch (componentType) {
              case "street_number":
                street = component.long_name + " ";
                break;
              case "route":
                street += component.long_name;
                break;
              case "locality":
                city = component.long_name;
                break;
              case "administrative_area_level_1":
                state = component.short_name;
                break;
              case "postal_code":
                zip = component.long_name;
                break;
              case "country":
                country = component.long_name;
                break;
            }
          });
        }
        // Populate the corresponding fields by their IDs.
        document.getElementById('street').value = street;
        document.getElementById('city').value = city;
        document.getElementById('state').value = state;
        document.getElementById('zip').value = zip;
        document.getElementById('country').value = country;
      });
    }
  }
};
});
