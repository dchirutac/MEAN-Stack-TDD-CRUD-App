(function(){
  'use strict';

  // Create isolated scope directive w/controller
  angular.module('widgetShowDirective', [])
    .directive('widgetShow', function(){
      return {
        controller: 'widgetShowCtrl',
        restrict: 'E',
        scope: {},
        templateUrl: 'partials/_show.html'
      };
    })
    .controller('widgetShowCtrl', ['$location', '$routeParams', '$scope',
                '$window', 'WidgetFactory',
      function($location, $routeParams, $scope, $window, WidgetFactory){
        // console.log('\n0 showWidgetCtrl, call WidgetFactory.findOneWidget()');
        $scope.widget = {};

        // Find show widget & set $scope when promise is resolved
        WidgetFactory.findOneWidget({_id: $routeParams.id})
          .then(function(widget){
            // console.log('7 showWidgetCtrl, findOneWidget() success callback widget', widget);
            $scope.show_widget = widget;
          }, function(error){
            console.log('7 showWidgetCtrl, findOneWidget() failure, redirect to `/`', error);
            $window.location = '#/';
          });

        // Add edit widget to $scope
        $scope.editWidget = function(widget){
          // console.log('\n0 showWidgetCtrl - editWidget() widget:', widget);
          $window.location.href = '#/widget/' + widget._id + '/edit';
        };

        // // Add remove widget to $scope, remove widget from $scope when promise is resolved
        $scope.destroyWidget = function(widget){
          // console.log('\n0 showWidgetCtrl - destroyWidget() widget:', widget);
          WidgetFactory.deleteWidget({_id: widget._id})
            .then(function(data){
              // console.log('7 showWidgetCtrl - destroyWidget() success callback', data);
              $window.location.href = '/';
            }, function(errors){
              console.log('7 showWidgetCtrl - destroyWidget() failure, redirect to `/`', errors);
              $window.location = '#/';
            });
        };
    }]);
})();
