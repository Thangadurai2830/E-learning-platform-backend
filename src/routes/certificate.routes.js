const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/certificate.controller');
const auth = require('../middleware/auth.middleware');

// @route   POST /api/certificates/issue
router.post('/issue', auth, certificateController.issueCertificate);

// @route   GET /api/certificates/user/:userId
router.get('/user/:userId', auth, certificateController.getUserCertificates);

// @route   GET /api/certificates/:id
router.get('/:id', auth, certificateController.getCertificate);

module.exports = router;