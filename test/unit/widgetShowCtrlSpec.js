(function(){
  'use strict';

  /* Jasmine specs for controllers */
  describe('Controller: widgetShowCtrl', function() {
    var $controller, $q, $scope;
    var ctrl, mockDestroyWidget, mockDestroyWidgetResponse;
    var mockFindOneWidgetResponse, mockWidgetFactory;

    beforeEach(module('widgetApp'));

    // Create testing object.
    mockDestroyWidget = {_id: '1'};
    mockFindOneWidgetResponse = {_id: '1', name: 'Mock Edit Widget', created_at: '1999,12-31'};
    mockDestroyWidgetResponse = {ok: 1, n: 1};

    beforeEach(inject(function(_$controller_, _$q_, $rootScope){
      $controller = _$controller_;
      $q = _$q_;
      $scope = $rootScope.$new();
    }));

    beforeEach(function(){
      // Isolate the controller from the factory with spy object.
      mockWidgetFactory = jasmine.createSpyObj('widgetFactory',
        ['findOneWidget', 'getWidgets', 'deleteWidget']);

      // Use $q.when() to create a resolved promise to simulate return from factory.
      mockWidgetFactory.findOneWidget.and.returnValue($q.when(mockFindOneWidgetResponse));
      mockWidgetFactory.getWidgets.and.returnValue($q.when([]));
      mockWidgetFactory.deleteWidget.and.returnValue($q.when(mockDestroyWidgetResponse));

      // Create controller, injecting any dependencies.
      ctrl = $controller('widgetShowCtrl', {
        $scope: $scope,
        widgetFactory: mockWidgetFactory
      });
      // Call $scope.$apply that will result in a .$digest() to simulate scope life cycle.
      $scope.$apply();
    });

    it('should create `show_widget` model.', function(){
      expect(mockWidgetFactory.findOneWidget).toHaveBeenCalled();
      expect($scope.show_widget).toEqual(mockFindOneWidgetResponse);
    });

    it('should call `widgetFactory.deleteWidget()` when `$scope.destroyWidget()` is called.', function(){
      console.log('$scope', $scope);
      $scope.destroyWidget(mockDestroyWidget);

      expect(mockWidgetFactory.deleteWidget).toHaveBeenCalledWith(mockDestroyWidget);
    });
  });
})();
