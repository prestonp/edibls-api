var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema(
  { owner_id: { type: String } 
  , name: { type: String, required: true }
  , street: { type: String, required: true }
  , city: { type: String, required: true }
  , state: { type: String, required: true }
  , zip: { type: Number, required: true }
  , description: { type: String, required: false }
  , phone: { type: String, required: false }
  , email: { type: String, required: false }
  , website: { type: String, required: false }
  , menu: [] // Mixed type 
  , hours: 
    { open: 
      { mon: { type: String }
      , tue: { type: String }
      , wed: { type: String }
      , thu: { type: String }
      , fri: { type: String }
      , sat: { type: String }
      , sun: { type: String }
      }
    , close:
      { mon: { type: String }
      , tue: { type: String }
      , wed: { type: String }
      , thu: { type: String }
      , fri: { type: String }
      , sat: { type: String }
      , sun: { type: String }
      }
    }
  }
);

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
