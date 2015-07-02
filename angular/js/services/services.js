(function(){
  'use strict';

  /* App Module */
  var widgetServices = angular.module('widgetServices', []);

  // Transfer data between controllers.
    // DI 'dataServices' into both controllers and then set $scope:
      // `$scope.dataService.foo = 'bar';`
  // In other controller access as needed:
    // `var x = $scope.dataService.foo;`
  widgetServices.service('dataService', [
    function(){
      this.x = "y";
    }
  ]);
})();
