const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: { type: String, default: Date.now() },
  clickCounter: Array,
});

module.exports = mongoose.model('Url', urlSchema);
