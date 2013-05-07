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
 * GET /restaurants
 */
app.get('/restaurants', function(req, res) {
  Restaurant.find(function (err, results) {
    if (err) {
      res.send(400, { message: 'Error finding all restaurants' });
    } else {
      res.send(200, results);
    }
  });
});

/**
 * POST /restaurants
 */
app.post('/restaurants', function(req, res) {
  var restaurant = new Restaurant(
    { name: req.body.name
    , address: req.body.address
    , city: req.body.city
    , state: req.body.state
    , zip: req.body.zip
    , description: req.body.description
    , phone: req.body.phone
    , email: req.body.email
    , website: req.body.website
    , hours: 
      { open:
        { mon: req.body.openmon
        , tue: req.body.opentue
        , wed: req.body.openwed
        , thu: req.body.openthu
        , fri: req.body.openfri
        , sat: req.body.opensat
        , sun: req.body.opensun
        }
      , close:
        { mon: req.body.closemon
        , tue: req.body.closetue
        , wed: req.body.closewed
        , thu: req.body.closethu
        , fri: req.body.closefri
        , sat: req.body.closesat
        , sun: req.body.closesun
        }
      }    
    }
  );
  restaurant.save(function(err) {
    if (err) {
      res.send(400, { message: 'Error creating restaurant' });
    } else {
      res.send(200, restaurant);
    }
  });
});


/**
 * POST /restaurants/search
 */
app.post('/restaurants/search', function(req, res) {
  Restaurant.find({ 'name' : new RegExp(req.body.query, 'i')}, 
    function(err, results) { 
      if (err) {
        res.send(400, { message: 'Unable to search restaurants' });
      } else {
        res.send(results); 
      }
    }
  );
});


/**
 * GET /restaurants/:id
 */
app.get('/restaurants/:id', function(req, res) {
  Restaurant.findById(req.params.id, function (err, result) {
    if (err) {
      res.send(400, { message: 'Could not find restaurant' });
    } else {
      res.send(200, result);
    }
  });
});

/**
 * PUT /restaurants/:id
 **/
app.put('/restaurants/:id', function(req, res) {
  Restaurant.findById(req.params.id, function(err, result) {
    result.name = req.body.name;
    result.address = req.body.address;
    result.city = req.body.city;
    result.state = req.body.state;
    result.zip = req.body.zip;
    result.description = req.body.description;
    result.phone = req.body.phone;
    result.email = req.body.email;
    result.website = req.body.website;

    result.hours.open.mon = req.body.openmon;
    result.hours.open.tue = req.body.opentue;
    result.hours.open.wed = req.body.openwed;
    result.hours.open.thu = req.body.openthu;
    result.hours.open.fri = req.body.openfri;
    result.hours.open.sat = req.body.opensat;
    result.hours.open.sun = req.body.opensun;

    result.hours.close.mon = req.body.closemon;
    result.hours.close.tue = req.body.closetue;
    result.hours.close.wed = req.body.closewed;
    result.hours.close.thu = req.body.closethu;
    result.hours.close.fri = req.body.closefri;
    result.hours.close.sat = req.body.closesat;
    result.hours.close.sun = req.body.closesun;

    return result.save(function(err) {
      if(err) {
        res.send(400, { message: 'Error updating restaurant' });
      } else {
        res.send(200, result);
      }
    });
  });
});

/**
 * DELETE /restaurants/:restaurant
 */
app.del('/restaurants/:id', function(req, res) {
  Restaurant.findById(req.params.id, function(err, result) {
    result.remove(function(err) {
      if(err) {
        res.send(400, { message: 'Error deleting restaurant' });
      } else {
        res.send(200, { message: 'Restaurant deleted successfully' });
      }
    });
  });
});