// import mongoose from "mongoose";

// // Use an async function to connect to MongoDB
// const DBCon = async () => {
//   try {
//     // Ensure the environment variable is correct
//     const mongoURI = process.env.MONGODB_URL;

//     // Check if the environment variable is set correctly
//     if (!mongoURI) {
//       console.error("MONGODB_URL is not defined in the environment variables.");
//       return;
//     }

//     // Connect to MongoDB
//     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

//     mongoose.connection.on('connected', () => {
//       console.log('MONGODB IS CONNECTED');
//     });

//     mongoose.connection.on('error', (err) => {
//       console.error('Error connecting to MongoDB:', err.message || err);
//     });
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message || error);
//   }
// };

// export default DBCon;


// db.js
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const DBCon = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB connected successfully');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// };

export default DBCon;
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

