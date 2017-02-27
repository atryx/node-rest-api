var mongoose = require('mongoose');

var BookmarkSchema = new mongoose.Schema({
  name: String,
  desc: String,
  url: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);
