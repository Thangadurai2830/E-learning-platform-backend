const Course = require('../models/course.model');

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('createdBy', 'name email');
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Server Error', details: err.message });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('createdBy', 'name email');
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: 'Server Error', details: err.message });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const { title, description, published } = req.body;
    if (!title || !description)
      return res.status(400).json({ error: 'Title and description are required' });

    const course = new Course({
      title,
      description,
      published: published || false,
      createdBy: req.user.id,
    });

    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: 'Server Error', details: err.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const { title, description, published } = req.body;
    const course = await Course.findById(req.params.id);

    if (!course) return res.status(404).json({ error: 'Course not found' });

    if (title !== undefined) course.title = title;
    if (description !== undefined) course.description = description;
    if (published !== undefined) course.published = published;

    await course.save();
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: 'Server Error', details: err.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });

    await course.remove();
    res.json({ message: 'Course deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server Error', details: err.message });
  }
};