(function(){
  'use strict';

  var port = 6789;
  // Load express module, a minimalist web framework
  var express = require('express');
  // Handle/transform file paths
  var path = require('path');
  // Serve favicon
  var favicon = require('serve-favicon');
  // Http request logger
  var logger = require('morgan');
  // Parse cookie header & populate req.cookies with object keyed by the cookie names
  var cookieParser = require('cookie-parser');
  // Parse form data
  var bodyParser = require('body-parser');

  // Create variable to hold express framework
  var app = express();

  // Helper functions to format Date & Time
    // (not needed now that we are angular but leaving for future/notes)
  var formatDate = require('./express/helpers/formatDate');
  var formatTime = require('./express/helpers/formatTime');

  // Provide helper functions to the views
  app.locals.formatDate = formatDate;
  app.locals.formatTime = formatTime;

  // View path & engine setup
  app.set('views', [path.join(__dirname, './angular/views'), path.join(__dirname, './test')]);
  app.set('view engine', 'ejs');
  // Map .html files to the ejs template engine
  app.engine('html', require('ejs').renderFile);

  app.use(favicon(__dirname + '/angular/img/favicon/favicon.ico'));
  app.use(logger('dev'));
  // To parse application/json
  app.use(bodyParser.json());
  // To parse application/x-www-form-urlencoded
  // Extended syntax with the qs module (true is depreciated)
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());

  // Static file location
  app.use(express.static(path.join(__dirname, './angular')));

  // Set the port number
  app.set('port', process.env.port || port);

  // Create the server
  var server = app.listen(app.get('port'), function (){
    console.log('\nMEAN Stack Server now running on port ' + server.address().port + '\n');
  });

  // Create the socket
  var io = require('socket.io').listen(server);
  // Get the routing rules pass app, io (has to be after bodyParser or post data won't be available)
  var routes = require('./config/routes')(app, io);
  // Get the database connection info
  var mongoose = require('./config/mongoose');

  // Catch 404 & forward to error handler
  app.use(function(req, res, next){
    var err = new Error('File Not Found!');
    err.status = 404;
    next(err);
  });

  // Development error handler - will print stacktrace
  if(app.get('env') === 'development'){
    app.use(function(err, req, res, next){
      res.status(err.status || 500);
      res.render('error', { message: err.message, error: {} });
    });
  }

  // Production error handler - stacktrace not leaked to user
  app.use(function (err, req, res, next){
    res.status(err.status || 500);
    res.render('error', { message: err.message, error: {} });
  });
})();
