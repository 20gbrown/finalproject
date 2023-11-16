// routes/quizRoutes.js
const express = require('express');
const QuizResult = require('../models/quizResult');

const router = express.Router();

// Handle quiz result submission
router.post('/submit', async (req, res) => {
  try {
    const { userId, preferredClass } = req.body;
    const quizResult = new QuizResult({ userId, preferredClass });
    await quizResult.save();
    res.status(201).json({ message: 'Quiz result submitted successfully' });
  } catch (error) {
    console.error('Error submitting quiz result:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
