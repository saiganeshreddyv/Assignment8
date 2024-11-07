// /server/models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },  // Image file path
});

module.exports = mongoose.model('Post', postSchema);
