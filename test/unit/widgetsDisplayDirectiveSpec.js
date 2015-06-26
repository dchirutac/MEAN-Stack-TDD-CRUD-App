(function(){
  'use strict';

  /* Jasmine specs for directives */
  describe('Directive: widgetsDisplayDirective', function() {
    var $compile, $filter, $rootScope, el, element, formatedDate, html, mockWidgets;

    mockWidgets = [
      {name: 'Directive Testing Widget', created_at: '1999-12-31'},
      {name: 'Second Widget', created_at: '2000-01-01'}
    ];

    beforeEach(module('widgetApp'));
    // Load the required partial into cache
    beforeEach(module('partials/_widgetsDisplay.html'));

    // Mock controller
    beforeEach(function(){
      module('widgetsDisplayDirective', function($controllerProvider){
        $controllerProvider.register('widgetsDisplayCtrl', function($scope){
          $scope.widgets = mockWidgets;
          $scope.newRecord = true;
        });
      });
    });

    // Generate the HTML
    beforeEach(function(){
      // HTML directive element
      html = '<widgets-display></widgets-display>';

      inject(function(_$compile_, _$filter_, _$rootScope_){
        $compile = _$compile_;
        $filter = _$filter_;
        $rootScope = _$rootScope_;
        // Compile the DOM
        element = $compile(angular.element(html))($rootScope);
        $rootScope.$apply();
        // console.log('element', element);
      });
    });

    describe('Table to show widgets', function(){
      it('should be displayed.', function(){
        // console.log(element.find('#widgets-display-table'));
        // console.log('element[0]', element[0]);
        // expect(element.find('#widgets-display-table')).toBeDefined();
        expect(element[0].querySelector('#widgets-display-table')).not.toBeNull();
      });

      it('should contain a title `Widgets Available`.', function(){
        // console.log('#widgets-title', element[0].querySelector('#widgets-title'));
        expect(element[0].querySelector('#widgets-title')).not.toBeNull();
      });

      it('should contain a header row.', function(){
        el = element[0].querySelector('#widgets-display-table thead tr');
        // console.log('header row el', el);
        expect(el).not.toBeNull();
        // expect(element.find('#widgets-display-table thead tr')).toBeDefined();
        // expect(element[0].querySelector('#widgets-display-table thead tr')).toBeDefined();
      });

      it('should contain 2 widgets.', function(){
        el = element[0].querySelectorAll('#widgets-display-table tbody tr');
        // console.log('widgets el length', el.length);
        expect(el.length).toBe(mockWidgets.length);
      });

      it('should display the widgets name.', function(){
        el = element[0].querySelector('.widget-name');
        // console.log('widget name el text', angular.element(el).text());
        expect(angular.element(el).text()).toEqual(mockWidgets[0].name);
      });

      it('should display the widgets created at date.', function(){
        el = element[0].querySelector('.widget-created_at');
        // console.log('widget created at el text', angular.element(el).text());
        formatedDate = ($filter('date')(mockWidgets[0].created_at));
        // console.log('widget created at formatedDate', formatedDate);
        expect(angular.element(el).text()).toEqual(formatedDate);
      });

      it('should display a button with the widget name to link to the show page.', function(){
        el = element[0].querySelector('a.btn.btn-primary.widget-name');
        // console.log('display button el.text()', angular.element(el).text());
        expect(angular.element(el).text()).toBe(mockWidgets[0].name);
      });
    });

    describe('Form to create widget', function(){
      it('should be displayed.', function(){
        // console.log('element[0]', element[0]);
        expect(element[0].querySelector('#widgets-title')).not.toBeNull();
      });

      it('should contain a title `Add a Widget`.', function(){
        // console.log('#widgets-title', element[0].querySelector('#widgets-title'));
        expect(element[0].querySelector('#form-title')).not.toBeNull();
      });

      it('should contain ng-model `widget.name` text input field.', function(){
        el = element[0].querySelectorAll('input[ng-model="widget.name"]');
        // console.log('display text input el', angular.element(el));
        expect(angular.element(el).length).toEqual(1);
      });

      it('should contain ng-click `createWidget()` button.', function(){
        el = element[0].querySelectorAll('button[ng-click="createWidget()"]');
        // console.log('display text input el', angular.element(el));
        expect(angular.element(el).text()).toEqual('Create Widget');
      });
    });
  });
})();
