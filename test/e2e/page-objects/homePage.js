(function(){
  'use strict';

    module.exports = function(){
      var nameInput = element(by.model('widget.name'));
      var createButton = element(by.buttonText('Create Widget'));

      this.clear = function(){
        nameInput.clear();
      };

      this.createWidget = function(){
        createButton.click();
      };

      this.get = function(){
        browser.get('/');
      };

      this.setName = function(name){
        nameInput.sendKeys(name);
      };
    };
})();
