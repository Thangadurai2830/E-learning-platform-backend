const axios = require('axios');

const baseURL = 'http://localhost:5000/api';

const testUser = {
  name: 'Test User',
  email: 'testuser@example.com',
  password: 'Test@1234'
};

const testCourse = {
  title: 'Test Course',
  description: 'This is a test course.',
  published: true
};

let token = '';
let courseId = '';

async function register() {
  try {
    const res = await axios.post(`${baseURL}/auth/register`, testUser);
    console.log('[REGISTER] Success:', res.data);
  } catch (err) {
    console.log('[REGISTER] Error:', err.response?.data || err.message);
  }
}

async function login() {
  try {
    const res = await axios.post(`${baseURL}/auth/login`, {
      email: testUser.email,
      password: testUser.password
    });
    token = res.data.token || res.data.accessToken;
    console.log('[LOGIN] Success:', res.data);
  } catch (err) {
    console.log('[LOGIN] Error:', err.response?.data || err.message);
  }
}

async function createCourse() {
  try {
    const res = await axios.post(`${baseURL}/courses`, testCourse, {
      headers: { Authorization: `Bearer ${token}` }
    });
    courseId = res.data._id;
    console.log('[CREATE COURSE] Success:', res.data);
  } catch (err) {
    console.log('[CREATE COURSE] Error:', err.response?.data || err.message);
  }
}

async function getCourses() {
  try {
    const res = await axios.get(`${baseURL}/courses`);
    console.log('[GET COURSES] Success:', res.data);
  } catch (err) {
    console.log('[GET COURSES] Error:', err.response?.data || err.message);
  }
}

async function getCourseById() {
  try {
    if (!courseId) {
      console.log('[GET COURSE BY ID] Skipped: No course created.');
      return;
    }
    const res = await axios.get(`${baseURL}/courses/${courseId}`);
    console.log('[GET COURSE BY ID] Success:', res.data);
  } catch (err) {
    console.log('[GET COURSE BY ID] Error:', err.response?.data || err.message);
  }
}

async function updateCourse() {
  try {
    if (!courseId) {
      console.log('[UPDATE COURSE] Skipped: No course created.');
      return;
    }
    const res = await axios.put(`${baseURL}/courses/${courseId}`, {
      title: 'Updated Test Course',
      description: 'Updated description.',
      published: false
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('[UPDATE COURSE] Success:', res.data);
  } catch (err) {
    console.log('[UPDATE COURSE] Error:', err.response?.data || err.message);
  }
}

async function deleteCourse() {
  try {
    if (!courseId) {
      console.log('[DELETE COURSE] Skipped: No course created.');
      return;
    }
    const res = await axios.delete(`${baseURL}/courses/${courseId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('[DELETE COURSE] Success:', res.data);
  } catch (err) {
    console.log('[DELETE COURSE] Error:', err.response?.data || err.message);
  }
}

async function runTests() {
  console.log('--- API TESTS START ---');
  await register();
  await login();
  await createCourse();
  await getCourses();
  await getCourseById();
  await updateCourse();
  await deleteCourse();
  console.log('--- API TESTS END ---');
}

runTests();