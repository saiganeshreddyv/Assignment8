const express = require('express');
const multer = require('multer');
const Blog = require('../models/Blog');

const router = express.Router();

// Setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// POST route for creating a blog post
router.post('/api/posts', upload.single('image'), async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? req.file.path : '';

    const newPost = new Blog({ title, description, image });
    await newPost.save();

    res.status(200).json(newPost);
  } catch (err) {
    console.error("Error posting blog:", err);
    res.status(500).json({ message: 'Error posting blog', error: err });
  }
});

module.exports = router;
