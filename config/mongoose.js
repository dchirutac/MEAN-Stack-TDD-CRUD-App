(function(){
  'use strict';

  // Connect to database in this file
  var mongoose = require('mongoose');
  var env = process.env.NODE_ENV || 'development';
  var config = require('./config')[env];
  var fs = require('fs');

  // Connection function to MongoDB
  var connect = function(){
    var options = {server: {socketOptions: {keepAlive: 1}}};
    mongoose.connect(config.db, options);
    console.log('\nmongoose.js - connect()... complete\n');
  };

  // Execute connect function
  connect();

  // Error handler
  mongoose.connection.on('error', function(err){
    console.log('\nMongoose connection error:', err);
  });

  // Reconnect when closed
  mongoose.connection.on('disconnected', function(){
    console.log('\nmongoose.js - reconnect database\n');
    connect();
  });
})();
