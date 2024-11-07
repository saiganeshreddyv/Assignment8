// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const Post = require('./models/Post'); // Import Post model

// const app = express();
// const PORT = 5000; // Backend port

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/blogs', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.log('Error connecting to MongoDB', err);
//   });

// // API to get all blog posts
// app.get('/api/posts', async (req, res) => {
//   try {
//     const posts = await Post.find(); // Get all posts
//     res.json(posts); // Return posts in response
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching posts' });
//   }
// });

// // API to post a new blog
// app.post('/api/posts', async (req, res) => {
//   const { title, description, image } = req.body;
//   try {
//     const newPost = new Post({ title, description, image });
//     await newPost.save();
//     res.status(201).json({ message: 'Post created successfully', post: newPost });
//   } catch (error) {
//     res.status(500).json({ error: 'Error saving post' });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


// const multer = require('multer');

// // Set up storage engine for multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './uploads'); // Store uploads in 'uploads' folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

// const upload = multer({ storage });

// // Update POST route to handle image uploads
// app.post('/api/posts', upload.single('image'), async (req, res) => {
//   const { title, description } = req.body;
//   const image = req.file ? req.file.path : null; // Store the image path

//   try {
//     const newPost = new Post({ title, description, image });
//     await newPost.save();
//     res.status(201).json({ message: 'Post created successfully', post: newPost });
//   } catch (error) {
//     res.status(500).json({ error: 'Error saving post' });
//   }
// });





// /server/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const multer = require('multer');
// const path = require('path');
// const postsRoute = require('./routes/posts');

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Set up multer storage and file handling
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Add a timestamp to file name
//   },
// });

// const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
// });

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/blog', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Routes
// app.use('/api/posts', postsRoute(upload)); // Use the post route for handling API requests

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });




// const express = require('express');
// const multer = require('multer');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const app = express();

// // MongoDB setup
// mongoose.connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true });

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Setup for file upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, 'uploads/'),
//   filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
// });

// const upload = multer({ storage: storage });

// // Blog model
// const Blog = mongoose.model('Blog', {
//   title: String,
//   description: String,
//   image: String,
// });

// // Route to post a blog
// app.post('/api/posts', upload.single('image'), async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const image = req.file ? req.file.path : '';
//     const newPost = new Blog({ title, description, image });

//     await newPost.save();
//     res.status(200).json(newPost);
//   } catch (err) {
//     res.status(500).json({ message: 'Error posting blog' });
//   }
// });

// // Server start
// app.listen(5000, () => {
//   console.log('Backend running on http://localhost:5000');
// });





// const express = require('express');
// const multer = require('multer');
// const cors = require('cors');
// const Blog = require('./models/Blog'); // Import the Blog model
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Setup for file upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, 'uploads/'),
//   filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
// });

// const upload = multer({ storage: storage });

// // Route to post a blog
// app.post('/api/posts', upload.single('image'), async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const image = req.file ? req.file.path : ''; // Use the path of the uploaded image
    
//     // Save the post to MongoDB
//     const newPost = new Blog({ title, description, image });
//     await newPost.save();

//     // Respond with the saved post
//     res.status(200).json(newPost);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error posting blog' });
//   }
// });

// // Server start
// app.listen(5000, () => {
//   console.log('Backend running on http://localhost:5000');
// });


// const mongoose = require('mongoose');

// const blogSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String, // The path or URL of the uploaded image
//   },
// });

// const Blog = mongoose.model('Blog', blogSchema);

// module.exports = Blog;


// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/blogDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log("Connected to MongoDB");
// }).catch((err) => {
//   console.error("Error connecting to MongoDB:", err);
// });




const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage: storage });

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err);
  });

// Blog model schema
const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,  // You can save the file path or URL of the image
});
const Blog = mongoose.model('Blog', blogSchema);

// POST route for creating a blog post
app.post('/api/posts', upload.single('image'), async (req, res) => {
  try {
    // Get data from request body and file upload
    const { title, description } = req.body;
    const image = req.file ? req.file.path : '';

    // Create a new post document in MongoDB
    const newPost = new Blog({
      title,
      description,
      image,
    });

    // Save the post to MongoDB
    await newPost.save();
    
    // Send the saved post back as the response
    res.status(200).json(newPost);
  } catch (err) {
    console.error("Error posting blog:", err);
    res.status(500).json({ message: 'Error posting blog', error: err });
  }
});

// Start server
app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
