let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  username: String,
  password: String
});

// the collection's name is `users`
let User = mongoose.model('User', userSchema);

module.exports = User;
