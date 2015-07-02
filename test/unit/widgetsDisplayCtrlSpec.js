(function(){
  'use strict';

  /* Jasmine specs for controllers */
  describe('Controller: widgetsDisplayCtrl', function() {
    var $controller, $q, $scope;
    var ctrl, mockNewWidget, mockWidgetFactory, mockGetWidgetsResponse;

    describe('Display widgets', function(){
      beforeEach(module('widgetApp'));

      // Create testing object.
      mockGetWidgetsResponse = [{name: 'Mock get widgets', created_at: '1999-12-31'}];

      // Inject
        // $controller to create instance of the controller.
        // $q to create promises for the mocks.
        // $rootScope to create a new $scope instance.
      beforeEach(inject(function(_$controller_, _$q_, $rootScope){
        $controller = _$controller_;
        $q = _$q_;
        $scope = $rootScope.$new();
      }));

      beforeEach(function(){
        // Isolate the controller from the factory with spy object.
        mockWidgetFactory = jasmine.createSpyObj('WidgetFactory',['getWidgets']);

        // Use $q.when() to create a resolved promise to simulate return from factory.
        mockWidgetFactory.getWidgets.and.returnValue($q.when(mockGetWidgetsResponse));

        // Create controller, injecting any dependencies.
        ctrl = $controller('widgetsDisplayCtrl', {
          $scope: $scope,
          WidgetFactory: mockWidgetFactory
        });
        // Call $scope.$apply that will result in a .$digest() to simulate scope life cycle.
        $scope.$apply();
      });

      it('should create `widgets` model with one widget.', function(){
        // console.log('Executed mockGet $scope.widgets:', $scope.widgets);
        expect(mockWidgetFactory.getWidgets).toHaveBeenCalled();
        expect($scope.widgets).toEqual(mockGetWidgetsResponse);
      });
    });

    describe('Create widget', function(){
      beforeEach(module('widgetApp'));

      // Create testing object.
      mockNewWidget = {name: 'Mock new Widget', created_at: '1999-12-31'};

      beforeEach(inject(function(_$controller_, _$q_, $rootScope){
        $controller = _$controller_;
        $q = _$q_;
        $scope = $rootScope.$new();

        mockWidgetFactory = jasmine.createSpyObj('WidgetFactory',['createWidget', 'getWidgets']);

        // Use $q.when() to create a resolved promise to simulate return from factory.
        // mockWidgetFactory.createWidget.and.returnValue(mockNewWidget);
        mockWidgetFactory.createWidget.and.returnValue($q.when(mockNewWidget));
        mockWidgetFactory.getWidgets.and.returnValue($q.when([]));

        // Create controller, injecting any dependencies.
        ctrl = $controller('widgetsDisplayCtrl', {
          $scope: $scope,
          WidgetFactory: mockWidgetFactory
        });
        $scope.widget = mockNewWidget;
        // Call $scope.$apply that will result in a .$digest() to simulate scope life cycle.
        $scope.$apply();
      }));

      it('should call `factory.createWidget` with mockNewWidget and update $scope.', function(){
        // console.log('testing $scope.widget', $scope.widget);
        expect($scope.widget).toEqual(mockNewWidget);

        // Simulate create widget button click
        $scope.createWidget();

        // Call $scope.$apply that will result in a .$digest() to simulate scope life cycle.
        $scope.$apply();

        expect(mockWidgetFactory.createWidget).toHaveBeenCalledWith(mockNewWidget);
        expect($scope.widgets[0]).toEqual(mockNewWidget);
      });
    });
  });
})();
