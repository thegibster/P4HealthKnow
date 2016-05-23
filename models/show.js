var mongoose = require('mongoose');

var showSchema = mongoose.Schema({
  title: String,
  length: Number,
  source: String
});

var Show = mongoose.model('Show', showSchema)

module.exports = Show;
