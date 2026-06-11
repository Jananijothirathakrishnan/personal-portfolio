const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Programming', 'Frontend', 'Backend', 'Databases', 'Tools', 'Cloud'],
  },
  proficiency: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
    default: 80,
  }
}, { timestamps: true });

module.exports = mongoose.model('Skill', SkillSchema);
