(function(){
  'use strict';

  angular.module('widgetFactories', [])
    .factory('WidgetFactory', ['$http', '$q', function($http, $q){
        var factory = {};

        // Add get all widgets method to the factory object.
        factory.getWidgets = function(){
          // $http returns a promise
          return $http.get('/api/widgets', {cache: true})
            .then(handleSuccess, handleError('Error getting all widgets'));
        };

        // Add create widget method to the factory object.
        factory.createWidget = function(widget_data){
          // console.log('1 widgetFactory - createWidget() widget_data', widget_data);
          return $http.post('/api/widgets', widget_data)
            .then(handleSuccess, handleError('Error creating widget'));
        };

        // Add findOne widget method to the factory object.
        factory.findOneWidget = function(query_object){
          // console.log('1 widgetFactory - findOneWidget() query_object', query_object);
          return $http.get('/api/widgets/' + query_object._id, {cache: true})
            .then(handleSuccess, handleError('Error finding widget'));
        };

        // Add update widget method to the factory object
        factory.updateWidget = function(widget_data){
          widget_data.updated_at = Date.now();
          // console.log('1 widgetFactory - updateWidget() widget_data', widget_data);
          return $http.post('/api/widgets/' + widget_data._id, widget_data)
            .then(handleSuccess, handleError('Error updating widget'));
        };

        // // Add destroy widget method to the factory object
        factory.deleteWidget = function(widget){
          // console.log('1 widgetFactory - destroyWidget() widget', widget);
          return  $http.delete('/api/widgets/' + widget._id)
            .then(handleSuccess, handleError('Error deleting widget'));
        };

        return factory;

        // private functions
        function handleSuccess(data) {
          return data.data;
        }

        function handleError(error) {
          return function () {
            // console.log('widgetFactory HTTP ERROR Handler', error);
            return $q.reject(error);
          };
        }
      }
    ]);
}());
