// Mock data for demonstration purposes
const videos = require('../models/mockData').videos;

exports.getAllVideos = (req, res) => {
  const { page = 1, limit = 10, region, category } = req.query;
  
  let filteredVideos = [...videos];
  
  // Apply filters if provided
  if (region) {
    filteredVideos = filteredVideos.filter(video => 
      video.location.toLowerCase().includes(region.toLowerCase())
    );
  }
  
  if (category) {
    filteredVideos = filteredVideos.filter(video => 
      video.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  // Paginate results
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedVideos = filteredVideos.slice(startIndex, endIndex);
  
  res.json({
    total: filteredVideos.length,
    page: parseInt(page),
    limit: parseInt(limit),
    data: paginatedVideos
  });
};

exports.getVideoById = (req, res) => {
  const video = videos.find(v => v.id === parseInt(req.params.id));
  
  if (!video) {
    return res.status(404).json({ message: 'Video not found' });
  }
  
  res.json(video);
};

exports.searchVideos = (req, res) => {
  const query = req.params.query.toLowerCase();
  
  const results = videos.filter(video => 
    video.title.toLowerCase().includes(query) || 
    video.description.toLowerCase().includes(query) ||
    video.publisher.toLowerCase().includes(query) ||
    video.category.toLowerCase().includes(query) ||
    video.location.toLowerCase().includes(query)
  );
  
  res.json({
    total: results.length,
    data: results
  });
};

exports.createVideo = (req, res) => {
  // In a real app, this would create a new video in the database
  res.status(201).json({ message: 'Video created successfully' });
};

exports.updateVideo = (req, res) => {
  // In a real app, this would update a video in the database
  res.json({ message: 'Video updated successfully' });
};

exports.deleteVideo = (req, res) => {
  // In a real app, this would delete a video from the database
  res.json({ message: 'Video deleted successfully' });
};