var Restaurant = require('../../models/restaurant')
  , express = require('express')
  , app = module.exports = express();

app.configure('production', function() {
});
app.configure('development', function() {
});

app.configure(function() {
});

/**
 * GET /restaurants.json
 **/
app.get('/restaurants.json', function(req, res) {
  Restaurant.find(function (err, results) {
    if (err) {
      res.send('Error finding all restaurants');
    } else {
      res.send(results);
    }
  });
});

/**
 * GET /restaurants/:restaurant.json
 **/
app.get('/restaurants/:restaurant.json', function(req, res) {
  Restaurant.findById(req.params.restaurant, function (err, result) {
    if (err) {
      console.log('Error finding restaurant ' + req.params.restaurant + ' ' + err);
      res.send({ msg: 'Could not find restaurant!'});
    } else {
      res.send(result);
    }
  });
});
