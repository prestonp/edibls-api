var mongoose = require('mongoose')
  , gravatar = require('gravatar');

var userSchema = new mongoose.Schema(
  { name: { type: String }
  , first_name: { type: String }
  , last_name: { type: String }
  , street: { type: String }
  , city: { type: String }
  , state: { type: String }
  , zip: { type: Number }
  , phone: { type: String }
  , email: { type: String }
  , facebookId: { type: String }
  , googleId: { type: String }
  , type: { type: String, default: 'user' }      // 'user' or 'restaurant'
  , tutorialCompleted: { type: Boolean, default: false }
  , gravatar_url: { type: String }
  }
);

userSchema.statics.generateGravatarUrl = function (email) {
  return gravatar.url(email, { s: 20, d: 'identicon' } );
}
var User = mongoose.model('User', userSchema);

module.exports = User;
