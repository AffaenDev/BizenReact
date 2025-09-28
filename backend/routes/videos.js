const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

// Get all videos with pagination, filtering by region and category
router.get('/', videoController.getAllVideos);

// Get video by ID
router.get('/:id', videoController.getVideoById);

// Search videos
router.get('/search/:query', videoController.searchVideos);

// Create new video (protected route)
router.post('/', videoController.createVideo);

// Update video (protected route)
router.put('/:id', videoController.updateVideo);

// Delete video (protected route)
router.delete('/:id', videoController.deleteVideo);

module.exports = router;