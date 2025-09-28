const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User registration
router.post('/register', userController.register);

// User login
router.post('/login', userController.login);

// Get user profile (protected route)
router.get('/profile', userController.getProfile);

// Social login
router.post('/social-login', userController.socialLogin);

module.exports = router;