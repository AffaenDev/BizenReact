const express = require('express');
const router = express.Router();
const regionController = require('../controllers/regionController');

// Get all regions
router.get('/', regionController.getAllRegions);

module.exports = router;