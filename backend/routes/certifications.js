const express = require('express');
const router = express.Router();
const Certification = require('../models/Certification');

// @route   GET api/certifications
// @desc    Get all certifications
// @access  Public
router.get('/', async (req, res) => {
  try {
    const certifications = await Certification.find().sort({ date: -1 });
    res.json(certifications);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
