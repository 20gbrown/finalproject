// server.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

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
