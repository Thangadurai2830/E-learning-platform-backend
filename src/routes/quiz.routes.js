const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quiz.controller');
const auth = require('../middleware/auth.middleware');

// @route   POST /api/quizzes
router.post('/', auth, quizController.createQuiz);

// @route   GET /api/quizzes/course/:courseId
router.get('/course/:courseId', quizController.getQuizzes);

// @route   GET /api/quizzes/:id
router.get('/:id', quizController.getQuiz);

// @route   PUT /api/quizzes/:id
router.put('/:id', auth, quizController.updateQuiz);

// @route   DELETE /api/quizzes/:id
router.delete('/:id', auth, quizController.deleteQuiz);

// @route   POST /api/quizzes/submit
router.post('/submit', auth, quizController.submitQuiz);

module.exports = router;