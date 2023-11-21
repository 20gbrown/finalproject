/*/ models/quizResult.js
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

module.exports = QuizResult;*/

// models/quizAnswer.js
const mongoose = require('mongoose');

const quizAnswerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  answers: { type: Object, required: true },
});

module.exports = mongoose.model('QuizAnswer', quizAnswerSchema);
