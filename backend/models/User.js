const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Allow cross-origin requests

// Routes
app.use('/api/auth', require('./routes/auth')); // Authentication routes
app.use('/api/posts', require('./routes/post')); // Blog post routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
