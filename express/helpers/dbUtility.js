(function(){
  'use strict';
  // During an update, this will cycle through the object, schema, and the submitted data;
  // returning the updated object with the new values ready for saving to db.

  var _ = require('underscore');

  exports.updateDocument = function(doc, SchemaTarget, data) {
    for (var field in SchemaTarget.schema.paths) {
      if ((field !== '_id') && (field !== '__v')) {
        var newValue = getObjValue(field, data);
        // console.log('data[' + field + '] = ' + newValue);
        if (newValue !== undefined) {
          setObjValue(field, doc, newValue);
        }
      }
    }
    // console.log('\nreturn doc:', doc);
    return doc;
  };

  function getObjValue(field, data) {
    return _.reduce(field.split("."), function(obj, fld) {
      if(obj){
        // console.log('\ngetObjValue obj[fld]:', obj[fld]);
        return obj[fld];
      }
    }, data);
  }

  function setObjValue(field, data, value) {
    var fieldArr = field.split('.');
    return _.reduce(fieldArr, function(obj, fld, index) {
      // console.log('\nsetObjValue, obj:', obj);
      // console.log('\nsetObjValue, fld:', fld);
      // console.log('\nsetObjValue, index:', index);
      if(index === fieldArr.length-1) {
        obj[fld] = value;
      } else {
        if(!obj[fld]){
          obj[fld] = {};
        }
      }
      // console.log('\nreturn obj[fld]:', obj[fld]);
      return obj[fld];
    }, data);
  }
})();
