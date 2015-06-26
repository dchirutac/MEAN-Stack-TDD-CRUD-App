(function(){
  'use strict';

  // Handle MongoDB Object Modeling
  var mongoose = require('mongoose');
  // Check for unique values
  var uniqueValidator = require('mongoose-unique-validator');

  // define schema (blueprint) for the model
  var widgetSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
  });

  // Validations
  widgetSchema.plugin(uniqueValidator, { message: 'Name is already taken' });
  widgetSchema.path('name').required(true, 'Widget name cannot be blank');

  // Export the model which can then access the database
  module.exports = mongoose.model('Widget', widgetSchema);
})();
