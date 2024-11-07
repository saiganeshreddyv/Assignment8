// // routes/post.js
// const express = require('express');
// const router = express.Router();
// const authMiddleware = require('../middleware/authMiddleware');  // Import the authentication middleware
// const Post = require('../models/Post');


// router.get('/', async (req, res) => {
//   try {
//     const posts = await Post.find();  // Get posts from MongoDB
//     res.json(posts);  // Send posts as JSON response
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: 'Server error' });
//   }
// });






// // Create a Post (Protected Route)
// router.post('/', authMiddleware, async (req, res) => {
//     const { title, content } = req.body;

//     try {
//         const newPost = new Post({
//             title,
//             content,
//             author: req.user  // req.user is set by the authMiddleware (user ID)
//         });

//         await newPost.save();
//         res.status(201).json(newPost);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ msg: 'Server error' });
//     }
// });

// // Update a Post (Protected Route)
// router.put('/:id', authMiddleware, async (req, res) => {
//     const { id } = req.params;
//     const { title, content } = req.body;

//     try {
//         let post = await Post.findById(id);

//         // Check if post exists
//         if (!post) {
//             return res.status(404).json({ msg: 'Post not found' });
//         }

//         // Check if the logged-in user is the author of the post
//         if (post.author.toString() !== req.user) {
//             return res.status(403).json({ msg: 'Unauthorized' });
//         }

//         post.title = title;
//         post.content = content;
//         await post.save();

//         res.json(post);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ msg: 'Server error' });
//     }
// });

// // routes/post.js
// router.delete('/:id', authMiddleware, async (req, res) => {
//     const { id } = req.params;

//     try {
//         let post = await Post.findById(id);

//         // Check if post exists
//         if (!post) {
//             return res.status(404).json({ msg: 'Post not found' });
//         }

//         // Check if the logged-in user is the author
//         if (post.author.toString() !== req.user) {
//             return res.status(403).json({ msg: 'Unauthorized' });
//         }

//         await post.remove();
//         res.json({ msg: 'Post removed' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ msg: 'Server error' });
//     }
// });


// module.exports = router;



// /server/routes/posts.js
const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// Create a new post
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const image = req.file ? req.file.path : null;

  try {
    const newPost = new Post({ title, description, image });
    await newPost.save();
    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    console.error('Error saving post:', error);
    res.status(500).json({ error: 'Error saving post' });
  }
});

module.exports = (upload) => {
  router.post('/', upload.single('image'), async (req, res) => {
    // This handles the image upload logic
    const { title, description } = req.body;
    const image = req.file ? req.file.path : null;
    try {
      const newPost = new Post({ title, description, image });
      await newPost.save();
      res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
      console.error('Error saving post:', error);
      res.status(500).json({ error: 'Error saving post' });
    }
  });
  return router;
};
