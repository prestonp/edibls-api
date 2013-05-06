var assert = require('assert')
  , request = require('request')
  , http = require('http');

describe('Restaurant API', function() {
  describe('/restaurants', function() {

    before(function() {
    });

    it('should return list of restaurants', function(done) {
      request.get('http://localhost:3001/restaurants', function(err, res, body) {
        assert.ok(body);
        done();
      });
    });

    it('should handle content negotiation', function(done) {
      assert.ok(false);
      done();
    });
  
    it('should return restaurant by :id', function(done) {
      request.get('http://localhost:3001/restaurants/43141431', function(err, res, body) {
        assert(false);
        done();
      });
    });
  });
});
