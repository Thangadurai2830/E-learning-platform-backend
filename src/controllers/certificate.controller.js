const Certificate = require('../models/certificate.model');
const User = require('../models/user.model');
const Course = require('../models/course.model');

exports.issueCertificate = async (req, res) => {
  try {
    const { userId, courseId } = req.body;
    // Confirm user and course exist
    const user = await User.findById(userId);
    const course = await Course.findById(courseId);
    if (!user || !course) return res.status(404).json({ message: 'User or Course not found.' });

    // Check if already certified
    let certificate = await Certificate.findOne({ user: userId, course: courseId });
    if (certificate) return res.status(400).json({ message: 'Certificate already issued.' });

    certificate = new Certificate({
      user: userId,
      course: courseId,
      issuedAt: new Date()
    });
    await certificate.save();

    res.status(201).json({ message: 'Certificate issued.', certificate });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find({ user: req.params.userId }).populate('course');
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id).populate('user course');
    if (!certificate) return res.status(404).json({ message: 'Certificate not found.' });
    res.json(certificate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};