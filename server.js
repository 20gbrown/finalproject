// server.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const quizRoutes = require('./routes/quizRoutes');
const path = require('path');

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

// Routes
app.use('/api/quiz', quizRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

