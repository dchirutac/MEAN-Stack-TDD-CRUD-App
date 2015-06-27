(function(){
  'use strict';

  /* App Module */
  angular.module('widgetApp', [
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'widgetEditFormDirective',
    'widgetShowDirective',
    'widgetsDisplayDirective',
    'widgetFactories'
  ])
  .config(function($routeProvider){
    // Use the config method to setup angular routing, inject $routeProvider
    // to allow the update of a partial view
    $routeProvider
      .when('/',
      {
        templateUrl: 'partials/main.html'
      })
      .when('/widget/:id',
      {
        templateUrl: 'partials/show.html'
      })
      .when('/widget/:id/edit',
      {
        templateUrl: 'partials/edit.html'
      })
      .otherwise(
      {
        redirectTo: '/'
      });
  });
})();
