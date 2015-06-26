(function(){
  'use strict';

  // Format time output to 12:01 am : 12:59 pm
  module.exports = function(data){
    // console.log('\nformatTime data\n', data);
    var date = new Date(data);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm': 'am';
    var result = '';
    // set midnight to 12
    hours = hours % 12;
    hours = hours ? hours: 12;
    // add leading 0 to minutes if needed
    minutes = minutes < 10 ? '0' + minutes: minutes;
    result = hours + ':' + minutes + ' ' + ampm;
    // console.log('result', result);
    return result;
  };
})();
