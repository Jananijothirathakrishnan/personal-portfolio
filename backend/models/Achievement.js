const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  context: {
    type: String,
    default: '',
  }
}, { timestamps: true });

module.exports = mongoose.model('Achievement', AchievementSchema);
