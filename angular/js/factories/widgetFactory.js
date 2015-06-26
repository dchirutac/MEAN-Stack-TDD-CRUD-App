(function(){
  'use strict';

  angular.module('widgetFactories', [])
    .factory('widgetFactory', ['$http', '$q', function($http, $q){
        var factory = {};

        // Add get all widgets method to the factory object.
        factory.getWidgets = function(){
          // $http returns a promise
          return $http.get('/api/widgets', {cache: true})
            .then(function(widgets){
              console.log('\n0 widgetFactory - getWidgets success callback, widgets:', widgets);
              // Do any manipulation of data before returning to the controller (skinny ctrl)
              return widgets.data;
            }, function(errors){
              console.log('\n*******  HTTP GET ERROR   *******');
              console.log('\n0 factory.getWidgets - api/widgets - error', errors);
              return $q.reject(errors.data);
            });
        };

        // Add create widget method to the factory object.
        factory.createWidget = function(widget_data){
          console.log('1 widgetFactory - createWidget() widget_data', widget_data);
          return $http.post('/api/widgets', widget_data)
            .then(function(data){
              console.log('9 widgetFactory - createWidget() success callback, data', data);
              return data.data;
            }, function(errors){
              console.log('\n*******  HTTP POST ERROR   *******');
              console.log('6 factory.createWidget - api/widgets - errors', errors);
              return $q.reject(errors.data.errors);
            });
        };

        // Add findOne widget method to the factory object.
        factory.findOneWidget = function(query_object){
          console.log('1 widgetFactory - findOneWidget() query_object', query_object);

          return $http.get('/api/widgets/' + query_object._id, {cache: true})
            .then(function(data){
              console.log('6 widgetFactory - findOneWidget() success callback, data', data);
              return data.data;
            }, function(errors){
              console.log('\n*******  HTTP GET ERROR   *******');
              console.log('factory.getWidgets - api/widgets - errors', errors);
              return $q.reject(errors.data.errors);
            });
        };

        // Add update widget method to the factory object
        factory.updateWidget = function(widget_data){
          widget_data.updated_at = Date.now();
          console.log('1 widgetFactory - updateWidget() widget_data', widget_data);
          return $http.post('/api/widgets/' + widget_data._id, widget_data)
            .then(function(data){
              console.log('7 widgetFactory - updateWidget() success callback, data', data);
              return data.data;
            }, function(errors){
              console.log('\n*******  HTTP POST ERROR   *******');
              console.log('factory.getWidgets - api/widgets - error', errors);
              return $q.reject(errors.data.errors);
            });
        };

        // // Add destroy widget method to the factory object
        factory.deleteWidget = function(widget){
          console.log('1 widgetFactory - destroyWidget() widget', widget);
          return  $http.delete('/api/widgets/' + widget._id)
            .then(function(data){
              console.log('6 widgetFactory - destroyWidget() success callback, data', data);
              return data.data;
            }, function(errors){
              console.log('\n*******  HTTP DELETE ERROR   *******');
              console.log('factory.getWidgets - api/widgets - error', errors);
              return $q.reject(errors.data.errors);
            });
        };

        return factory;
      }
    ]);
}());
