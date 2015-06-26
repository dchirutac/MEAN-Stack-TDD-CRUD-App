(function(){
  'use strict';

  module.exports = function(){
    var nameInput = element(by.model('widget.name'));
    var updateButton = element(by.buttonText('Update Widget'));

    this.clear = function(){
      nameInput.clear();
    };

    this.updateWidget = function(){
      updateButton.click();
    };

    this.setName = function(name){
      nameInput.sendKeys(name);
    };
  };
})();
