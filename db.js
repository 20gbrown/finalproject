//db.js
const mongoose = require('mongoose');
const session = require('express-session');
//const connectMongo = require('connect-mongo');
const passportLocal = require('passport-local');

const MongoStore = require('connect-mongo');

const { MONGO_URI } = require('./config/config');

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;




