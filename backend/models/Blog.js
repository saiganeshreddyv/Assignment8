const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,  // Path to uploaded image
});

module.exports = mongoose.model('Blog', blogSchema);
