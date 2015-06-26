(function(){
  'use strict';

  /* Jasmine specs for services go here */

  describe('Factory: widgetFactory', function() {
    // console.log('\n.....Starting WidgetApp widgetsFactory Karma Test.....\n');
    var $httpBackend, $q, deferred, mockErr, mockInvalidWidget, mockDeleteWidget;
    var mockDestroyWidgetResponse, mockEditWidget, mockFindOneWidget;
    var mockGetWidgetsResponse, mockNewWidget, mockNewWidgetResponse;
    var rejectReason, result, widgets, widgetFactory;

    // Create testing objects
    mockInvalidWidget = {name: ''};
    mockDeleteWidget = {_id: '1'};
    mockDestroyWidgetResponse = {data:{n: 1, ok: 1}, status: 200};
    mockEditWidget = {_id: '1', name: 'UPDATED!'};
    mockFindOneWidget = {_id: '1', name: 'Mock show widget'};
    mockGetWidgetsResponse = [{name: 'Factory Testing Widget', created_at: '1999-12-31'}];
    mockNewWidget = [{name: 'Mock new widget'}];
    mockNewWidgetResponse = {data: {name: 'Mock new widget'}, status: 200};
    mockErr = {errors: 'Name Required!'};

    beforeEach(function(){
      // Load main module
      module('widgetApp');

      // Inject widgetFactory for testing.
        // Underscore wrap name to use same name in testing.
      inject(function(_$httpBackend_, _$q_, _widgetFactory_){
        $httpBackend = _$httpBackend_;
        $q = _$q_;
        widgetFactory = _widgetFactory_;
        deferred = $q.defer();
      });
    });

    // Cleanup any missed expectations.
    afterEach(function(){
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe('.getWidgets()', function(){
      // Check existence of factory function.
      it('function should be defined.', function(){
        expect(angular.isFunction(widgetFactory.getWidgets)).toBe(true);
      });

      it('should resolve GET request with mocked reponse.', function(){
        // Make the simulated HTTP request
        $httpBackend.when('GET', '/api/widgets').respond(mockGetWidgetsResponse);

        // Chain .then() to resolve returned $http promise
        widgetFactory.getWidgets()
          .then(function(data){
            widgets = data;
            // console.log('.then widgets', widgets);
          });

        $httpBackend.flush();
        // console.log('Post flush() - widgets', widgets);

        expect(widgets).toEqual(mockGetWidgetsResponse);
      });

      it('should reject GET request and respond with error.', function(){
        rejectReason = 'Mock Error!';
        $httpBackend.when('GET', '/api/widgets').respond(500, rejectReason);

        widgetFactory.getWidgets()
          .then(function(data){
            widgets = data;
          }, function(reason){
            result = reason;
          });

        $httpBackend.flush();
        // console.log('reject .get result', result);

        expect(result).toEqual(rejectReason);
      });
    });

    describe('.createWidget()', function(){
      it('function should be defined.', function(){
        expect(angular.isFunction(widgetFactory.createWidget)).toBe(true);
      });

      it('should create new widget when valid input is used.', function(){
        spyOn(widgetFactory, 'createWidget').and.callThrough();

        $httpBackend.when('POST', '/api/widgets').respond(201, mockNewWidget);

        // Getting a promise from the $http request, using .then to verify success.
        widgetFactory.createWidget(mockNewWidget)
          .then(function(data){
            expect(data).toEqual(mockNewWidget);
          });

        $httpBackend.flush();

        expect(widgetFactory.createWidget).toHaveBeenCalledWith(mockNewWidget);
      });

      it('should NOT create new widget when invalid input is used.', function(){
        spyOn(widgetFactory, 'createWidget').and.callThrough();

        $httpBackend.when('POST', '/api/widgets').respond(300, mockErr);

        // Getting a promise from the $http request, using .then to verify failure.
        widgetFactory.createWidget(mockInvalidWidget)
          .then(function(data){
            console.log('data', data);
            // If it makes it here there was a problem.
            expect(true).toBe(false);
          }, function(errors){
            // console.log('errors', errors);
            expect(errors).toBe(mockErr.errors);
          });

        $httpBackend.flush();

        expect(widgetFactory.createWidget).toHaveBeenCalledWith(mockInvalidWidget);
      });
    });

    describe('.findOneWidget()', function(){
      it('function should be defined.', function(){
        expect(angular.isFunction(widgetFactory.findOneWidget)).toBe(true);
      });

      it('should return a widget.', function(){
        spyOn(widgetFactory, 'findOneWidget').and.callThrough();

        $httpBackend.when('GET', '/api/widgets/1').respond(201, mockFindOneWidget);

        widgetFactory.findOneWidget(mockFindOneWidget)
          .then(function(data){
            // console.log('data', data);
            expect(data).toEqual(mockFindOneWidget);
          });

        $httpBackend.flush();
      });
    });

    describe('.updateWidget()', function(){
      it('function should be defined.', function(){
        expect(angular.isFunction(widgetFactory.updateWidget)).toBe(true);
      });

      it('should update a widget when valid input is entered.', function(){
        spyOn(widgetFactory, 'updateWidget').and.callThrough();

        $httpBackend.when('POST', '/api/widgets/1').respond({data: mockEditWidget, status: 200});

        widgetFactory.updateWidget(mockEditWidget)
          .then(function(data){
            // console.log('update data......', data);
            expect(data.data.name).toEqual(mockEditWidget.name);
            expect(data.status).toEqual(200);
            expect(data.status).toBeDefined();
          });

        $httpBackend.flush();
      });
    });

    describe('.deleteWidget()', function(){
      it('function should be defined.', function(){
        expect(angular.isFunction(widgetFactory.deleteWidget)).toBe(true);
      });

      it('should remove the widget.', function(){
        spyOn(widgetFactory, 'deleteWidget').and.callThrough();

        $httpBackend.when('DELETE', '/api/widgets/1').respond(mockDestroyWidgetResponse);

        widgetFactory.deleteWidget(mockDeleteWidget);

        $httpBackend.flush();
      });
    });
  });
})();
