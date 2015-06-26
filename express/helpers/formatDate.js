(function(){
  'use strict';

  // Format date output to January 1, 2015
  module.exports = function(data){
    // console.log('\nformatDate data\n', data);
    var date = new Date(data);
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();
    var result = months[m] + ' ' + d + ', ' + y;
    // console.log('result', result);
    return result;
  };
})();
