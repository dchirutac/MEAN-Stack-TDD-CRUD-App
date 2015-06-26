(function(){
  'use strict';

  // Get required model for this express controller
  var Widget = require('./../models/widget');
  // Get helper utility
  var dbUtility = require('./../helpers/dbUtility');

  module.exports = {
    index: function(req, res, callback){
      // Get all Widgets from the database
      Widget.find({}, function(err, widgets){
        if(err){
          res.status(300).send(JSON.stringify(err));
        } else {
          callback(widgets);
        }
      });
    },
    create: function(req, res, callback){
      // console.log('\n3 controller/widget.js create: - req.body\n', req.body);
      var new_widget = new Widget(req.body);
      // console.log('\n4 controller/widget.js create: - widget\n', new_widget);
      new_widget.save(function(err, widget, numberAffected){
        if(err){
          console.log('\n5 controller/widget.js create: - error saving to database\n', err);
          res.status(300).send(JSON.stringify(err));
        } else {
          // console.log('\n5 controller/widget.js create: - save - err\n', err);
          // console.log('\n6 controller/widget.js create: - save - widget\n', widget);
          // console.log('\n7 controller/widget.js create: - save - numberAffected\n', numberAffected);
          callback(widget);
        }
      });
    },
    show: function(req, res, callback){
      // console.log('\n3 controller/widget.js show: req.params:\n', req.params);
      Widget.findOne({_id: req.params.id}, function(err, widget){
        if(err){
          console.log('\n4 controller/widget.js show: - err\n', err);
          res.status(300).send(JSON.stringify(err));
        } else {
          // console.log('\n4 controller/widget.js show: widget:\n', widget);
          callback(widget);
        }
      });
    },
    update: function(req, res, callback){
      // console.log('\n3 controller/widget.js update req.body', req.body);
      // Using .findOne() & .save() to have validations run during update
        // (instead of .update() or findOneAndUpdate())
      Widget.findOne({_id: req.body._id}, function(err, widget){
        if(err){
          console.log('\n4 controller/widget.js -update- findOne: - err\n', err);
          res.status(300).send(JSON.stringify(err));
        } else {
          dbUtility.updateDocument(widget, Widget, req.body);
          // console.log('\n4 controller/widget.js -update- processed widget:\n', widget);

          widget.save(function(err, updatedWidget){
            if(err){
              console.log('\n5 controller/widget.js update -save-: - err\n', err);
              res.status(300).send(JSON.stringify(err));
            } else {
              // console.log('\n5 controller/widget.js update -save-: widget:\n', updatedWidget);
              callback(widget);
            }
          });
        }
      });
    },
    destroy: function(req, res, callback){
      // console.log('\n3 controller/widget.js destroy: - req.params\n', req.params);
      Widget.remove({_id: req.params.id}, function(err, result){
        if(err){
          console.log('\n4 controller/widget.js destroy: - remove - err\n', err);
          return res.status(300).send(JSON.stringify(err));
        } else {
          // console.log('\n4 controller/widget.js destroy: - remove - result\n', result.result);
          callback(result);
        }
      });
    }
  };
})();
