const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');
const auth = require('../middleware/auth.middleware');

router.get('/', courseController.getCourses);
router.get('/:id', courseController.getCourseById);
router.post('/', auth, courseController.createCourse);
router.put('/:id', auth, courseController.updateCourse);
router.delete('/:id', auth, courseController.deleteCourse);

module.exports = router;