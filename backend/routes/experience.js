const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// @route   GET api/experience
// @desc    Get all experience timeline items
// @access  Public
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ createdAt: 1 }); // chronological or reverse order
    res.json(experiences);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
