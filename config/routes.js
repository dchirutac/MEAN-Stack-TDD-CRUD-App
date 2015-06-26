(function(){
  'use strict';

  // Require all needed express controllers
  var WidgetsController = require('./../express/controllers/widgets');

  module.exports = function Route(app, io){
    // This is the single express view that will be required. The rest is done by
    // Angular routing
    app.get('/',  function(req, res){
      res.render('index', {title: "MEAN Seed App"});
    });

    // For the Angular routes, a single route to serve partials must be included
    app.get('/partials/:file', function(req, res){
      res.render('partials/' + req.params.file);
    });

    // Hangle 'index.html' routing
    app.get('/index.html', function(req, res){
      res.redirect('/');
    });

    // Express Backend API Routing
    // Get all widgets
    app.get('/api/widgets', function(req, res){
      WidgetsController.index(req, res, function(widgets){
        console.log('routes.js get all widgets, widgets:', widgets);
        res.send(widgets);
      });
    });

    // Create widget
    app.post('/api/widgets', function(req, res){
      console.log('\n2 config/routes.js -create- post /api/widgets req.body\n', req.body);
      WidgetsController.create(req, res, function(widget){
        console.log('\n8 config/routes.js -create- post /api/widgets callback() - widget\n', widget);
        res.json(widget);
      });
    });

    // Find one widget
    app.get('/api/widgets/:id', function(req, res){
      console.log('\n2 config/routes.js -findOne- get /api/widgets/:id req.params:\n', req.params);
      WidgetsController.show(req, res, function(widget){
        console.log('\n5 config/routes.js -findOne- get /api/widgets/:id callback() - widget\n', widget);
        res.json(widget);
      });
    });

    // Update widget
    app.post('/api/widgets/:id', function(req, res){
      console.log('\n2 config/routes.js - put /api/widgets/:id req.body\n', req.body);
      WidgetsController.update(req, res, function(widget){
        console.log('\n6 config/routes.js - put /api/widgets/:id callback() - widget\n', widget);
        res.json(widget);
      });
    });

    // Destroy widget
    app.delete('/api/widgets/:id', function(req, res){
      console.log('\n2 config/routes.js - delete /api/widget/destroy req.params:\n', req.params);
      WidgetsController.destroy(req, res, function(result){
        console.log('\n5 config/routes.js - delete /api/widgets/destroy callback() - result\n', result.result);
        res.json(result);
      });
    });

    // Catch-all route, just redirecting, can put error handlers (404) if desired.
    app.get('*', function(req, res){
      res.redirect('/');
    });


  // ----------------------------------------------------------------------------
    // EMIT
    // socket.emit - sends data from the server to the client who initiated contact
    //
    // BROADCAST
    // socket.broadcast.emit - sends data from the server to all clients EXCEPT the client that initiated the contact
    //
    // FULL BROADCAST
    // io.emit - sends data from the server to all connected clients
  // ----------------------------------------------------------------------------

    // Socket.io code
    io.sockets.on('connection', function(socket){
      console.log('\nA new socket connection has been made!');
      // All socket code goes here

      // EMIT - to triggering client
      socket.emit('emit_event', {response: 'Object for client'});
      // BROADCAST
      socket.broadcast.emit('broadcast_event', {response: 'Object'});
      // FULL BROADCAST
      io.emit('full_broadcast_event', {response: 'Object'});

      // Listen for client to leave/refresh page
      socket.on('disconnect', function (data){
        console.log('\nsocket disconnected\n', data);
      });
    });
  };
})();
