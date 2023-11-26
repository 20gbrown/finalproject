//server.js

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const quizRoutes = require('./routes/quizRoutes');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const MongoStore = require('connect-mongo');
const User = require('./models/user');
const authRoutes = require('./routes/authRoutes');
const { MONGO_URI } = require('./config/config'); 
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3000;

// Serve the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve the quiz data
app.get('/api/quiz/data', (req, res) => {
  const quizData = require('./utils/quizData');
  res.json(quizData);
});

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Express session
app.use(
  session({
    secret: 'd12102001',
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: MONGO_URI, // Use the MongoDB URI from config.js
      mongooseConnection: mongoose, // assuming you already have this mongoose connection
    }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport local strategy
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
app.use('/api/quiz', quizRoutes);
app.use('/api/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




