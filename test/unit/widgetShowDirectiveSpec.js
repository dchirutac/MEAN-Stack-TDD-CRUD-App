(function(){
  'use strict';

  /* Jasmine specs for directives */
  describe('Directive: widgetShowDirective', function(){
    var $compile, $filter, $rootScope, el, element, formatedDate, html, mockWidget;

    mockWidget = {name: 'Mock Show Widget', created_at: '1999-12-31'};

    beforeEach(module('widgetApp'));
    // Load the required partial into cache
    beforeEach(module('partials/_show.html'));

    // Mock controller
    beforeEach(function(){
      module('widgetShowDirective', function($controllerProvider){
        $controllerProvider.register('widgetShowCtrl', function($scope){
          $scope.show_widget = mockWidget;
        });
      });
    });

    // Generate the HTML
    beforeEach(function(){
      // HTML directive element
      html = '<widget-show></widget-show>';

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

    describe('Table to show widget', function(){
      it('should be displayed.', function(){
        // console.log(element.find('#widgets-display-table'));
        // console.log('element[0]', element[0]);
        // expect(element.find('#widgets-display-table')).toBeDefined();
        expect(element[0].querySelector('#widget-display-table')).not.toBeNull();
      });

      it('should contain a title `Widget`.', function(){
        // console.log('#widgets-title', element[0].querySelector('#widgets-title'));
        expect(element[0].querySelector('#widget-title')).not.toBeNull();
      });

      it('should contain a header row.', function(){
        el = element[0].querySelector('#widget-display-table thead tr');
        // console.log('header row el', el);
        expect(el).not.toBeNull();
        // expect(element.find('#widgets-display-table thead tr')).toBeDefined();
        // expect(element[0].querySelector('#widgets-display-table thead tr')).toBeDefined();
      });

      it('should display the widget\'s name.', function(){
        el = element[0].querySelector('.widget-name');
        // console.log('widget name el text', angular.element(el).text());
        expect(angular.element(el).text()).toEqual(mockWidget.name);
      });

      it('should display the widgets created at date.', function(){
        el = element[0].querySelector('.widget-created_at');
        // console.log('widget created at el text', angular.element(el).text());
        formatedDate = ($filter('date')(mockWidget.created_at));
        // console.log('widget created at formatedDate', formatedDate);
        expect(angular.element(el).text()).toEqual(formatedDate);
      });

      it('should display a button to link to the edit page.', function(){
        el = element[0].querySelector('.btn.btn-primary.edit');
        // console.log('display button el.text()', angular.element(el).text());
        expect(angular.element(el).text()).toBe('Edit');
      });

      it('should display a button to remove the widget.', function(){
        el = element[0].querySelector('.btn.btn-danger.remove');
        // console.log('display button el.text()', angular.element(el).text());
        expect(angular.element(el).text()).toBe('Remove');
      });

      it('should display a button to link to the homepage.', function(){
        el = element[0].querySelector('.btn.btn-default.goToMain');
        // console.log('display button el.text()', angular.element(el).text());
        expect(angular.element(el).text()).toBe('All Widgets');
      });
    });
  });
})();
