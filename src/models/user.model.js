const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  // You can add other fields, e.g. role: { type: String, default: 'student' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);