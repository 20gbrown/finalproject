// models/quizResult.js
const mongoose = require('mongoose');

const quizResultSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  preferredClass: {
    type: String,
    required: true,
  },
});

const QuizResult = mongoose.model('QuizResult', quizResultSchema);

module.exports = QuizResult;
