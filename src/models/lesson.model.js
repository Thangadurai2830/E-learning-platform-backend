const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String, // Can be text or multimedia URLs
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  order: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Lesson', lessonSchema);