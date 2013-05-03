var assert = require('assert')
  , request = require('request')
  , http = require('http');

describe('Restaurant API', function() {
  describe('/restaurants', function() {
    before(function() {
    });
    it('should return list of restaurants', function(done) {
        request.get('http://localhost:3001/restaurants.json', function(err, res, body) {
        assert.ok(body);
        done();
      });
    });
  });
});
