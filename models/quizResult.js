// models/quizResult.js
const mongoose = require('mongoose');

const quizResultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  result: { type: String, required: true }, 
});

module.exports = mongoose.model('QuizResult', quizResultSchema);


/* models/quizResult.js
const mongoose = require('mongoose');

const quizAnswerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  answers: { type: Object, required: true },
});

module.exports = mongoose.model('QuizAnswer', quizAnswerSchema);
*/