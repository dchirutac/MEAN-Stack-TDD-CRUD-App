(function(){
  'use strict';

  /* Protractor specs for end-to-end testing */

  // Load page objects
  var HomepageHelper = require('./helpers/homepageHelper.js');
  var WidgetHomepage = require('./page-objects/homePage.js');
  var WidgetEditpage = require('./page-objects/editPage.js');

  describe('WidgetApp smoke test', function() {
    var widgetHomepage = new WidgetHomepage();

    // Server smoke test
    it('should load the index page when the URL is `/`.', function(){
      widgetHomepage.get();

      browser.getLocationAbsUrl().then(function(url){
        // console.log('\nurl:', url);
        expect(url).toBe('/');
        // expect(url.split('#')[1]).toBe('/');
      });
    });

    it('should redirect all unknown URLs to `#/`.', function(){
      browser.get('/unknown.file');

      browser.getLocationAbsUrl().then(function(url){
        expect(url.slice(-1)).toBe('/');
      });
    });
  });

  describe('Main page', function(){
    var btn, el, el2, id, homepageHelper, testWidget, widgetHomepage;

    widgetHomepage = new WidgetHomepage();
    widgetHomepage.get();

    describe('DOM elements', function(){
      it('should contain the `widgets-display` table.', function(){
        expect(browser.isElementPresent(by.id('widgets-display'))).toBe(true);
      });

      it('should contain the widget\'s name.', function(){
        expect(browser.isElementPresent(by.css('.widget-name'))).toBe(true);
      });

      it('should contain the widget\'s created at date.', function(){
        expect(browser.isElementPresent(by.css('.widget-created_at'))).toBe(true);
      });

      it('should contain the new `widget-form`.', function(){
        expect(browser.isElementPresent(by.id('widget-form'))).toBe(true);
      });
    });

    describe('New widget form', function(){
      it('should have a text input field for the name.', function(){
        expect(browser.isElementPresent(by.model('widget.name'))).toBe(true);
      });

      it('should have a create widget button.', function(){
        expect(browser.isElementPresent(by.buttonText('Create Widget'))).toBe(true);
      });

      it('should add a new widget with valid input.', function(){
        testWidget = '0123-TEST-3210';

        widgetHomepage.setName(testWidget);
        widgetHomepage.createWidget();
        homepageHelper = new HomepageHelper();
        // Get all of the widgets, find the last row & check if matches `testWidget`
        // Use 0 for first widget or 1 for last
        homepageHelper.getWidget(1).then(function(data){
          // console.log('data......', data);
          expect(data.name).toEqual(testWidget);
        });
      });

      it('should NOT add a widget and display error message with invalid input.', function(){
        widgetHomepage.clear();
        widgetHomepage.createWidget();

        el = element(by.id('errors'));
        browser.driver.wait(protractor.until.elementIsVisible(el));

        el2 = element(by.css('bg-danger'));
        expect(el2).toBeDefined();
      });
    });

    describe('Navigation', function(){
      it('should navigate to the showpage of the selected widget.', function(){
        btn = element.all(by.css('a.btn.btn-primary.widget-name')).last();

        homepageHelper = new HomepageHelper();
        homepageHelper.getWidget(1).then(function(data){
          // console.log('data......', data);
          id = data._id;
        });

        btn.click();

        browser.getLocationAbsUrl().then(function(url){
          // console.log('\nurl:', url);
          expect(url).toBe('/widget/' + id);
        });
      });
    });
  });

  describe('Show page', function(){
    var btn, id, homepageHelper, widgetHomepage;

    beforeAll(function(){
      homepageHelper = new HomepageHelper();
      homepageHelper.getWidget(0).then(function(data){
        // console.log('data......', data);
        id = data._id;
      });
    });

    describe('DOM elements', function(){
      beforeAll(function(){
        homepageHelper.nav(0);
      });

      it('should be displayed for the first widget.', function(){
        browser.getLocationAbsUrl().then(function(url){
          // console.log('\nurl:', url);
          expect(url).toEqual('/widget/'+ id);
          // expect(url).toEqual('/widget/'+ id);
        });
      });

      it('should contain the `widget-display` table.', function(){
        expect(browser.isElementPresent(by.id('widget-display'))).toBe(true);
      });

      it('should contain the widget\'s name.', function(){
        expect(browser.isElementPresent(by.css('.widget-name'))).toBe(true);
      });

      it('should contain the widget\'s created at date.', function(){
        expect(browser.isElementPresent(by.css('.widget-created_at'))).toBe(true);
      });

      it('should have a button to the homepage.', function(){
        expect(browser.isElementPresent(by.css('a.btn.btn-default.goToMain'))).toBe(true);
      });

      it('should have an edit button.', function(){
        expect(browser.isElementPresent(by.buttonText('Edit'))).toBe(true);
      });

      it('should have a remove button.', function(){
        expect(browser.isElementPresent(by.buttonText('Remove'))).toBe(true);
      });
    });

    describe('Navigation', function(){
      beforeEach(function(){
        // See page objects file.
        widgetHomepage = new WidgetHomepage();
        widgetHomepage.get();

        btn = element.all(by.css('a.btn.btn-primary.widget-name')).first();

        homepageHelper = new HomepageHelper();
        homepageHelper.getWidget(0).then(function(data){
          // console.log('data......', data);
          id = data._id;
        });

        btn.click();
      });

      it('should navigate to the homepage.', function(){
        btn = element(by.css('.btn.btn-default.goToMain'));

        btn.click();

        browser.getLocationAbsUrl().then(function(url){
          // console.log('\nurl:', url);
          expect(url).toBe('/');
        });
      });

      it('should navigate to the edit page for the widget.', function(){
        btn = element(by.css('.btn.btn-primary.edit'));

        btn.click();

        browser.getLocationAbsUrl().then(function(url){
          // console.log('\nurl:', url);
          expect(url).toBe('/widget/' + id + '/edit');
        });
      });
      // NOTE: remove button testing done to delete the `new test widget` below.
    });
  });

  describe('Edit page', function(){
    var btn, el, homepageHelper, id;
    var testWidget, updateWidget, widgetEditpage, widgetHomepage;
    id = null;

    testWidget = '0123-TEST-3210';

    beforeAll(function(){
      // See page objects file.
      widgetHomepage = new WidgetHomepage();
      homepageHelper = new HomepageHelper();

      widgetHomepage.get();

      btn = element.all(by.css('a.btn.btn-primary.widget-name')).last();

      homepageHelper.getWidget(1).then(function(data){
        // console.log('data......', data);
          id = data._id;
      });

      btn.click();

      btn = element(by.css('.btn.btn-primary.edit'));

      btn.click();
    });

    it('should navigate from the show page to the edit page.', function(){
      browser.getLocationAbsUrl().then(function(url){
        // console.log('\nurl:', url);
        expect(url).toBe('/widget/' + id + '/edit');
      });
    });

    describe('Edit widget form', function(){
      it('should contain the edit `widget-form`.', function(){
        expect(browser.isElementPresent(by.id('widget-form'))).toBe(true);
      });

      it('should contain a text input populated with the widget\'s name.', function(){
        expect(browser.isElementPresent(by.model('widget.name'))).toBe(true);
        el = element(by.model('widget.name'));
        expect(el.getAttribute('value')).toEqual(testWidget);
      });

      it('should have an update button.', function(){
        expect(browser.isElementPresent(by.buttonText('Update Widget'))).toBe(true);
      });

      it('should have a cancel button.', function(){
        expect(browser.isElementPresent(by.css('a.btn.btn-default.cancel'))).toBe(true);
      });

      it('should update the widget when valid input is used.', function(){
        widgetEditpage = new WidgetEditpage();

        updateWidget = 'TEST EDIT';

        widgetEditpage.clear();
        widgetEditpage.setName(updateWidget);
        widgetEditpage.updateWidget();

        // Using `browser.get`, couldn't get `.wait` to work.
        widgetHomepage.get();

        // homepageHelper = new HomepageHelper();
        homepageHelper.getWidget(1).then(function(data){
          // console.log('data......', data);
          expect(data.name).toEqual(updateWidget);
        });
      });
      // TODO: NOT update when invalid input is used
    });

    describe('Delete the `test` widget', function(){
      var btn, deleteWidget, el, homepageHelper, widgetHomepage;

      widgetHomepage = new WidgetHomepage();
      homepageHelper = new HomepageHelper();

      it('should remove the widget.', function(){
        deleteWidget = 'TEST EDIT';

        widgetHomepage.get();

        btn = element.all(by.css('a.btn.btn-primary.widget-name')).last();
        btn.click();

        el = element(by.id('widget-display'));
        browser.driver.wait(protractor.until.elementIsVisible(el));

        btn = element(by.buttonText('Remove'));
        btn.click();

        // Once again, using `browser.get`, couldn't get `.wait` to work.
        widgetHomepage.get();

        el = element(by.id('widgets-display'));
        browser.driver.wait(protractor.until.elementIsVisible(el));

        homepageHelper.getWidget(1).then(function(data){
          // console.log('data......', data);
          expect(data.name).not.toEqual(deleteWidget);
        });
      });
    });
  });
})();
