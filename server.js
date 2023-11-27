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
const QuizResult = require('./models/quizResult');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/quiz/data', (req, res) => {
  const quizData = require('./utils/quizData');
  res.json(quizData);
});

app.use(bodyParser.json());

connectDB();

app.use(
  session({
    secret: 'd12102001',
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: MONGO_URI, 
      mongooseConnection: mongoose, 
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/api/quiz', quizRoutes);
app.use('/api/auth', authRoutes);

app.get('/api/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ userId: req.user._id });
  } else {
    res.status(401).json({ message: 'User not authenticated' });
  }
});

app.get('/api/quiz-results/:userId', async (req, res) => {
  try {
    const quizResults = await QuizResult.find({ user: req.params.userId });
    res.json(quizResults);
  } catch (error) {
    console.error('Error fetching quiz results:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




