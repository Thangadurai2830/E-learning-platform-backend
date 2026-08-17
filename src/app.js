const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
const connectDB = require('./config/db');
connectDB();

// Route imports
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/courses', require('./routes/course.routes'));
app.use('/api/lessons', require('./routes/lesson.routes'));
app.use('/api/quizzes', require('./routes/quiz.routes'));
app.use('/api/certificates', require('./routes/certificate.routes'));

// Error handler middleware (optional)
const errorHandler = require('./middleware/error.middleware');
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});