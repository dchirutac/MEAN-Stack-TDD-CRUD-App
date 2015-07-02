(function(){
  'use strict';

  // Create isolated scope directive w/controller
  angular.module('widgetsDisplayDirective', [])
    .directive('widgetsDisplay', function(){
      return {
        controller: 'widgetsDisplayCtrl',
        scope: {},
        restrict: 'E',
        templateUrl: 'partials/_widgetsDisplay.html'
      };
// Alternate declarations:
      // var directive = {
      //   controller: 'widgetsDisplayCtrl',
      //   restrict: 'E',
      //   scope: {},
      //   templateUrl: 'partials/_widgetsDisplay.html'
      // };
      // return directive;

      // var directive = {};
      // directive.controller = 'widgetsDisplayCtrl';
      // directive.restrict = 'E';
      // directive.scope = {};
      // directive.templateUrl = 'partials/_widgetsDisplay.html';
      // return directive;
    })
    .controller('widgetsDisplayCtrl', ['$scope','$window', 'WidgetFactory',
      function($scope, $window, WidgetFactory){
        $scope.errors = [];
        $scope.newRecord = true;
        $scope.widget = {};
        $scope.widgets = [];

        // Get all widgets, set $scope when promise is resolved.
        WidgetFactory.getWidgets()
          .then(function(data){
            // console.log('1 widgetsDisplayCtrl - get all widgets:', data);
            $scope.widgets = data;
        }, function(error){
          console.log('Get all widgets FAILURE:', error);
        });

        // Add create new widget method to $scope, push new widget to $scope when promise is resolved
        $scope.createWidget = function(){
          $scope.errors = [];
          // console.log('\n0 widgetCreateFormCtrl - createWidget() $scope.widget', $scope.widget);

          WidgetFactory.createWidget($scope.widget)
            .then(function(widget){
              // console.log('10 controller, widgetsCtrl, createWidget() success callback widget', widget);
              $scope.widget = {};
              $scope.widgets.push(widget);
            }, function(errors){
              console.log('7 controller, widgetsCtrl, createWidget() errors:', errors);
              $scope.errors = errors.name.message;
            });
        };

        // Add show widget method to $scope.
        $scope.showWidget = function(widget){
          // console.log('\n0 widgetsDisplayCtrl - showWidget() widget:', widget);
          $window.location = '#/widget/' + widget._id;
        };
    }]);
})();
