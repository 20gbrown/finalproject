// routes/authRoutes.js
const express = require('express');
const passport = require('passport');
const User = require('../models/user');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username });
    await User.register(user, password);
    res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Login
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ success: true, message: 'Login successful' });
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.json({ success: true, message: 'Logout successful' });
});

module.exports = router;
