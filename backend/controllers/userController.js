// Mock user data for demonstration
const users = require('../models/mockData').users;

exports.register = (req, res) => {
  // In a real app, this would validate input, hash password, and save to database
  res.status(201).json({ 
    message: 'User registered successfully',
    user: {
      id: Math.floor(Math.random() * 1000),
      email: req.body.email,
      name: req.body.name
    }
  });
};

exports.login = (req, res) => {
  // In a real app, this would validate credentials against database
  const { email, password } = req.body;
  
  // Mock authentication
  const user = users.find(u => u.email === email);
  
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  // Mock JWT token
  const token = 'mock-jwt-token-' + Date.now();
  
  res.json({
    message: 'Login successful',
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
};

exports.getProfile = (req, res) => {
  // In a real app, this would get user data from database using authenticated user ID
  // For demo, return first mock user
  const user = users[0];
  
  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    profilePicture: user.profilePicture
  });
};

exports.socialLogin = (req, res) => {
  // In a real app, this would validate the social token with the provider
  const { provider, token } = req.body;
  
  res.json({
    message: `${provider} login successful`,
    token: 'mock-jwt-token-' + Date.now(),
    user: {
      id: Math.floor(Math.random() * 1000),
      name: 'Social User',
      email: 'social@example.com'
    }
  });
};