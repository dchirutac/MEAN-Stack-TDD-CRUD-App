(function(){
  'use strict';

  module.exports = function(){
    // Load page object.
    var WidgetHomepage = require('./../page-objects/homePage.js');
    var btn, deferred, widgetHomepage;

    this.nav = function(index){
      widgetHomepage = new WidgetHomepage();
      widgetHomepage.get();

      // Only finding first/last in testing
      if(index === 0){
        btn = element.all(by.css('a.btn.btn-primary.widget-name')).first();
      } else {
        btn = element.all(by.css('a.btn.btn-primary.widget-name')).last();
      }

      btn.click();
    };

    this.getWidget = function(index){
      widgetHomepage = new WidgetHomepage();
      widgetHomepage.get();

      // Return the deferred.promise to access the `id` in the Spec file.
      deferred = protractor.promise.defer();

      element.all(by.repeater('widget in widgets'))
        .then(function(rows){
          if(index === 1){
            index = rows.length - 1;
          }

          rows[index].evaluate('widget')
            .then(function(data){
              // console.log('in helper id.....', data._id);
              deferred.fulfill(data);
            });
        });

      return deferred.promise;
    };
  };
})();
