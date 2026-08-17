const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lesson.controller');
const auth = require('../middleware/auth.middleware');

// @route   POST /api/lessons
router.post('/', auth, lessonController.createLesson);

// @route   GET /api/lessons/course/:courseId
router.get('/course/:courseId', lessonController.getLessons);

// @route   GET /api/lessons/:id
router.get('/:id', lessonController.getLesson);

// @route   PUT /api/lessons/:id
router.put('/:id', auth, lessonController.updateLesson);

// @route   DELETE /api/lessons/:id
router.delete('/:id', auth, lessonController.deleteLesson);

module.exports = router;