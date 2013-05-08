var assert = require('assert')
  , request = require('request')
  , Restaurant = require('../models/restaurant')
  , mongoose = require('mongoose')
  , env = require('../cfg/env')
  , http = require('http');

mongoose.connect(env.mongo_url.dev);

/**
 * Dummy restaurant created during set up
 */
var testId = '';

/**
 * Create a restaurant and let caller function
 * validate the response
 */
var testCreateRestaurant = function(body, cb) {

  if(typeof cb  === 'undefined') {
    cb = body;
    body = null;
  } else {
    body = JSON.stringify(body);
  }

  request({
    method: 'POST'
  , headers: { 'Content-Type': 'application/json' }
  , url: 'http://localhost:3001/restaurants'
  , body: body || JSON.stringify(
    { name: 'Test name'
    , street: '15418 Meadow Village Dr.'
    , city: 'Houston'
    , state: 'Texas'
    , zip: '77095'
    })
  }, function(err, res, body) {
    cb(err, res, body); 
  });
}

describe('Restaurant API', function() {

  before(function(done) {
    testCreateRestaurant(function(err, res, body) {
      testId = JSON.parse(body)._id;
      done();
    });
  });

  after(function(done) {
    // Clean up database
    Restaurant.remove({}, function(err) {
      if(err)
        console.log('Error removing restaurants: ' + err);
      done();
    });
  });

  describe('GET /restaurants', function() {
    it('should return list of restaurants', function(done) {
      request.get('http://localhost:3001/restaurants', function(err, res, body) {
        assert(body);
        assert(body.length > 0);
        assert(res.statusCode == 200);
        done();
      });
    });
  });

  describe('GET /restaurants/:id', function() {
    it('should return restaurant by :id', function(done) {
      request.get('http://localhost:3001/restaurants/' + testId, function(err, res, body) {
        assert(body);
        assert(res.statusCode == 200);
        done();
      });
    });

    it('should return error for invalid :id', function(done) {
      request.get('http://localhost:3001/restaurants/notarealid', function(err, res, body) {
        assert(body);
        assert(res.statusCode == 400);
        done();
      });
    });
  });

  describe('POST /restaurants/', function() {
    it('should create restaurant and return it', function(done) {
      testCreateRestaurant(function(err, res, body) {
        assert(body);
        assert(testId !== JSON.parse(body)._id); // make sure a new restaurant was made
        assert(res.statusCode == 200);
        done();
      });
    });

    it('should fail validation', function(done) {
      testCreateRestaurant({ name : 'NeedsWayMoreInformation' }, function(err, res, body) {
          assert(body);
          assert(res.statusCode == 400);
          done();
        });
    });
  });
});
