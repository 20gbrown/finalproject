//quizRoutes.js
const express = require('express');
const mongoose = require('mongoose');
const quizResult = require('../models/quizResult');
const router = express.Router();

/*
const QuizAnswer = mongoose.models.QuizAnswer || mongoose.model('QuizAnswer', new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  answers: { type: Object, required: true },
}));*/

const QuizResult= mongoose.models.QuizResult || mongoose.model('QuizResult', new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  result: { type: String, required: true },
}));

router.post('/save-results', async (req, res) => {
  try {
    const { result } = req.body;
    if (!req.isAuthenticated()) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const quizResult = new QuizResult({
      user: req.user._id,
      result,
    });

    await quizResult.save();

    res.json({ success: true, message: 'Quiz results saved successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get('/quiz-results/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const results = await QuizResult.find({ user: userId });
    res.json(results);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;


