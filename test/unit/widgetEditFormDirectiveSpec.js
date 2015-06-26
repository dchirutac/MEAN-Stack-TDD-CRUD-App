(function(){
  'use strict';

  /* Jasmine specs for directives */
  describe('Directive: widgetEditFormDirective', function() {
    var $compile, $filter, $rootScope, element, html, mockWidget;

    mockWidget = {name: 'Directive Testing Widget', created_at: '1999-12-31'};

    beforeEach(module('widgetApp'));
    // Load the required partial into cache
    beforeEach(module('partials/_form.html'));

    // Mock controller
    beforeEach(function(){
      module('widgetEditFormDirective', function($controllerProvider){
        $controllerProvider.register('widgetEditCtrl', function($scope){
          $scope.widget = mockWidget;
          $scope.newRecord = false;
        });
      });
    });

    // Generate the HTML
    beforeEach(function(){
      // HTML directive element
      html = '<widget-edit-form></widget-edit-form>';

      inject(function(_$compile_, _$filter_, _$rootScope_){
        $compile = _$compile_;
        $filter = _$filter_;
        $rootScope = _$rootScope_;

        // Compile the DOM
        element = $compile(angular.element(html))($rootScope);
        $rootScope.$apply();
      });
    });

    describe('Form to edit widget', function(){
      it('should be displayed.', function(){
        // console.log('element[0]', element[0]);
        expect(element[0].querySelector('#widget-form')).not.toBeNull();
      });

      it('should have a text input field populated with the widgets name.', function(){
        var el = element[0].querySelector('#name');
        // console.log('widget name el text', angular.element(el).val());
        expect(angular.element(el).val()).toEqual(mockWidget.name);
      });

      it('should display an `Update Widget` button.', function(){
        var el = element[0].querySelectorAll('button[ng-click="updateWidget()"]');
        // console.log('display text input el', angular.element(el));
        expect(angular.element(el).text()).toEqual('Update Widget');
      });

      it('should display a `Cancel` button', function(){
        expect(element[0].querySelector('a.btn.btn-default.cancel'));
      });
    });
  });
})();
