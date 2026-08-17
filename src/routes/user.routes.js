const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');

// @route   GET /api/users/profile
router.get('/profile', auth, userController.getProfile);

// @route   PUT /api/users/profile
router.put('/profile', auth, userController.updateProfile);

// @route   GET /api/users/progress
router.get('/progress', auth, userController.getProgress);

module.exports = router;