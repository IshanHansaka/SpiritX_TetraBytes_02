const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const router = express.Router();

router.post('/', async (req, res) => {
  const { username, password, confirmPassword } = req.body;

  if (!username || !password || !confirmPassword) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return res
        .status(400)
        .json({
          error: 'Username can only contain letters, numbers, and underscores',
        });
    }

    if (username.length < 8) {
      return res
        .status(400)
        .json({ error: 'Username must be at least 8 characters long' });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ error: 'Password must be at least 8 characters long' });
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])/.test(password)) {
      return res.status(400).json({
        error:
          'Password must contain at least one lowercase letter, one uppercase letter, and one special character',
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    const existingUser = await User.findOne({
      username: username.toLowerCase(),
    });
    if (existingUser) {
      return res.status(400).json({ error: 'Username is exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username.toLowerCase(),
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({
      message: 'User registered successfully! Redirecting to login...',
    });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
});

module.exports = router;
