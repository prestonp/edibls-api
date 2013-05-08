var assert = require('assert')
  , request = require('request')
  , http = require('http');

describe('Restaurant API', function() {
  describe('GET /restaurants', function() {

    before(function(done) {
      request({
        method: 'POST'
      , url: 'http://localhost:3001/restaurants'
      , body: JSON.stringify(
        { name: 'Test name'
        , street: '15418 Meadow Village Dr.'
        , city: 'Houston'
        , state: 'Texas'
        })
      }, function(err, res, body) {
        console.log('before stuff');
        console.dir(body);
        done();
      });
    });

    it('should return list of restaurants', function(done) {
      request.get('http://localhost:3001/restaurants', function(err, res, body) {
        assert.ok(body);
        done();
      });
    });
  });

  describe('GET /restaurants/:id', function() {
    it('should return restaurant by :id', function(done) {
      request.get('http://localhost:3001/restaurants/43141431', function(err, res, body) {
        assert(false);
        done();
      });
    });

    it('should return error for invalid :id', function(done) {
      request.get('http://localhost:3001/restaurants/43141431', function(err, res, body) {
        assert(false);
        done();
      });
    });
  });

  describe('POST /restaurants/', function() {
    it('should create restaurant and return it', function(done) {
      request.post('http://localhost:3001/restaurants/43141431', function(err, res, body) {
        assert(false);
        done();
      });
    });

    it('should fail creating restaurant', function(done) {
      request.post('http://localhost:3001/restaurants/43141431', function(err, res, body) {
        assert(false);
        done();
      });
    });
  });
});
