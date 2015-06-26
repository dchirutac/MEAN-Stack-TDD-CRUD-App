(function(){
  'use strict';

  /* Jasmine specs for controllers */
  describe('Controller: widgetEditCtrl', function() {
    describe('Update widget', function(){
      var $controller, $q, $scope;
      var ctrl, mockWindow, mockWidgetFactory, mockWidget, mockUpdatedWidget;

      // Create testing object.
      mockWidget = {name: 'Mock Widget', created_at: '1999-12-31'};
      mockUpdatedWidget = {name: 'Updated Widget!', created_at: '1999-12-31'};

      // Mock $window, Karma hangs on $window.location.href
      mockWindow = {
        location: {
          href: ''
        }
      };

      beforeEach(module('widgetApp'));

      beforeEach(inject(function(_$controller_, _$q_, $rootScope){
        $controller = _$controller_;
        $q = _$q_;
        $scope = $rootScope.$new();

        mockWidgetFactory = jasmine.createSpyObj('widgetFactory',['findOneWidget', 'getWidgets', 'updateWidget']);

        // Use $q.when() to create a resolved promise to simulate return from factory.
        mockWidgetFactory.findOneWidget.and.returnValue($q.when(mockWidget));
        mockWidgetFactory.getWidgets.and.returnValue($q.when([]));
        mockWidgetFactory.updateWidget.and.returnValue($q.when(mockUpdatedWidget));

        // Create controller, injecting any dependencies.
        ctrl = $controller('widgetEditCtrl', {
          $scope: $scope,
          widgetFactory: mockWidgetFactory,
          $window: mockWindow
        });

        // Call $scope.$apply that will result in a .$digest() to simulate scope life cycle.
        $scope.$apply();
      }));

      it('should call `factory.updateWidget` and update widget.', function(){
        $scope.widget = mockUpdatedWidget;
        $scope.$apply();
        // Simulate create widget button click
        $scope.updateWidget();

        $scope.$apply();

        expect(mockWidgetFactory.updateWidget).toHaveBeenCalledWith(mockUpdatedWidget);
      });
      // TODO: fail update if not valid
    });
  });
})();
