
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , restaurants = require('./lib/restaurants')
  , env = require('./cfg/env')
  , mongoose = require('mongoose');

mongoose.connect(env.mongo_url);

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3001);
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(restaurants);
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
