const express = require('express');
const mongoose = require('mongoose');
const quizResult = require('../models/quizResult');
const router = express.Router();

// Check if the model already exists
const QuizAnswer = mongoose.models.QuizAnswer || mongoose.model('QuizAnswer', new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  answers: { type: Object, required: true },
}));

// Save quiz answers
router.post('/save-answers', async (req, res) => {
  try {
    const { answers } = req.body;
    // Ensure the user is authenticated before saving answers
    if (!req.isAuthenticated()) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const quizAnswer = new QuizAnswer({
      user: req.user._id,
      answers,
    });

    await quizAnswer.save();

    res.json({ success: true, message: 'Quiz answers saved successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;


