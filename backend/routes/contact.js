const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST api/contact
// @desc    Submit a contact form query
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, idea, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: 'Please enter all required fields (Name, Email, Message)' });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      idea,
      message
    });

    const contact = await newContact.save();
    res.json({ success: true, contact, msg: 'Message sent successfully! Thank you.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
