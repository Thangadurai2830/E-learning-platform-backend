const Quiz = require('../models/quiz.model');
const Question = require('../models/question.model');

exports.createQuiz = async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find({ course: req.params.courseId });
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id).populate('questions');
    if (!quiz) return res.status(404).json({ message: 'Quiz not found.' });
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!quiz) return res.status(404).json({ message: 'Quiz not found.' });
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    await Quiz.findByIdAndDelete(req.params.id);
    res.json({ message: 'Quiz deleted.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Submit quiz answers
exports.submitQuiz = async (req, res) => {
  try {
    const { quizId, answers } = req.body;
    const quiz = await Quiz.findById(quizId).populate('questions');
    if (!quiz) return res.status(404).json({ message: 'Quiz not found.' });

    let score = 0;
    quiz.questions.forEach((question, i) => {
      if (answers[i] && answers[i] === question.correctAnswer) score++;
    });

    res.json({ score, total: quiz.questions.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};