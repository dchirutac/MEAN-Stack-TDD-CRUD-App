(function(){
  'use strict';

  // Create isolated scope directive w/controller
  angular.module('widgetEditFormDirective', [])
    .directive('widgetEditForm', function(){
      return {
        controller: 'widgetEditCtrl',
        scope: {
          widgets: '='
        },
        restrict: 'E',
        templateUrl: 'partials/_form.html'
      };
    })
    .controller('widgetEditCtrl', ['$location', '$routeParams', '$scope',
                '$window', 'WidgetFactory',
      function($location, $routeParams, $scope, $window, WidgetFactory){

        // Get edit widget, set $scope when promise is resolved
        function findOne(params_id){
          WidgetFactory.findOneWidget(params_id)
            .then(function(widget){
              // console.log('7 widgetEditCtrl, findOneWidget() success callback widget', widget);
              $scope.widget = widget;
            }, function(errors){
              console.log('7 widgetEditCtrl, findOneWidget() failure, redirect `/`', errors);
              $window.location = '#/';
            });
        }

        // Set initial $scope
        findOne({_id: $routeParams.id});

        // Add update widget method to $scope
        $scope.updateWidget = function(){
          $scope.errors = [];
          // console.log('\n0 updateWidgetCtrl - updateWidget() $scope.widget', $scope.widget);

          WidgetFactory.updateWidget($scope.widget)
            .then(function(widget){
              // console.log('8 updateWidgetCtrl, updateWidget() success callback', widget);
              $window.location.href = '/';
            }, function(errors){
              console.log('6 updateWidgetCtrl, updateWidget() errors:', errors);

              // Reset $scope so form is re-populated with widget values
              findOne({_id: $routeParams.id});
              $scope.errors = errors.name.message;
            });
        };
    }]);
})();
