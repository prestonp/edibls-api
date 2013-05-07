var assert = require('assert')
  , request = require('request')
  , http = require('http');

describe('Restaurant API', function() {
  describe('GET /restaurants', function() {

    before(function() {
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
