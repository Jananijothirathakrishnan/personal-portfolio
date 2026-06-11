const mongoose = require('mongoose');

const CertificationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  issuer: {
    type: String,
    default: '',
  },
  date: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  }
}, { timestamps: true });

module.exports = mongoose.model('Certification', CertificationSchema);
