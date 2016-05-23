var mongoose = require('mongoose');

var pillSchema = mongoose.Schema({
  title: String,
  length: Number,
  source: String
});

var Pill = mongoose.model('Pill', pillSchema)

module.exports = Pill;
