# 📚 E-Learning Backend API

## 🚀 Overview

Welcome to the E-Learning Backend API!  
This project powers an online learning platform, enabling course management, user authentication, lessons, quizzes, certification, and more.  
Built with Node.js, Express, and MongoDB.

---

## 📖 Table of Contents

- [✨ Features](#features)
- [🛠 Tech Stack](#tech-stack)
- [📂 Folder Structure](#folder-structure)
- [🏁 Getting Started](#getting-started)
  - [✅ Prerequisites](#prerequisites)
  - [⬇️ Installation](#installation)
  - [🔒 Environment Variables](#environment-variables)
  - [🗄️ Database Connection](#database-connection)
  - [▶️ Running the Server](#running-the-server)
- [🔗 API Endpoints](#api-endpoints)
- [🗃️ Models](#models)
- [🛡️ Middlewares](#middlewares)
- [🧰 Utils](#utils)
- [🤝 Contributing](#contributing)
- [⚖️ License](#license)
- [❓ FAQ & Contact](#faq--contact)

---

## ✨ Features

- 👤 **User Authentication**: Secure register & login with JWT
- 🏅 **Roles**: Student, Instructor, Admin
- 📝 **Profile & Progress**: Track courses and completion
- 📚 **Course & Lesson Management**: CRUD operations for courses & lessons
- 🧩 **Quiz System**: Create, manage, and submit quizzes
- 🎓 **Certificates**: Issue certificates on course completion
- 🧑‍💻 **RESTful API**: Integrate easily with any frontend

---

## 🛠 Tech Stack

- **Node.js** & **Express** for server & routing
- **MongoDB** & **Mongoose** for data storage
- **JWT** & **bcryptjs** for authentication
- **dotenv** for environment variables
- **cors** for cross-origin resource sharing

---

## 📂 Folder Structure

```
src/
  config/         # Database connection
  controllers/    # Route handler logic
  middleware/     # Auth and error handling
  models/         # Mongoose schemas
  routes/         # API route definitions
  utils/          # Helper functions
  app.js          # Main entry point
.env              # Environment variables
.gitignore        # Files to ignore
README.md         # Documentation
```

---

## 🏁 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### ⬇️ Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/yourusername/e-learning-backend.git
   cd e-learning-backend
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

### 🔒 Environment Variables

- Create a `.env` file in the root:
  ```
  PORT=5000
  MONGO_URI=mongodb://localhost:27017/e-learning-db
  JWT_SECRET=your_jwt_secret_key_here
  NODE_ENV=development
  ```

### 🗄️ Database Connection

- MongoDB must be running locally or accessible via `MONGO_URI`.

### ▶️ Running the Server

- Development mode (auto-restart):
  ```bash
  npm run dev
  ```
- Production mode:
  ```bash
  npm start
  ```
- Default URL: [http://localhost:5000](http://localhost:5000)

---

## 🔗 API Endpoints

### 🛡️ Authentication
- `POST /api/auth/register` – Register a user
- `POST /api/auth/login` – Login, get JWT token

### 👤 User
- `GET /api/users/profile` – Get profile
- `PUT /api/users/profile` – Update profile
- `GET /api/users/progress` – Get course progress

### 📚 Course
- `POST /api/courses` – Create course
- `GET /api/courses` – List courses
- `GET /api/courses/:id` – Get course details
- `PUT /api/courses/:id` – Update course
- `DELETE /api/courses/:id` – Delete course

### 📝 Lesson
- `POST /api/lessons` – Create lesson
- `GET /api/lessons/course/:courseId` – List lessons for course
- `GET /api/lessons/:id` – Get lesson
- `PUT /api/lessons/:id` – Update lesson
- `DELETE /api/lessons/:id` – Delete lesson

### 🧩 Quiz
- `POST /api/quizzes` – Create quiz
- `GET /api/quizzes/course/:courseId` – List quizzes for course
- `GET /api/quizzes/:id` – Get quiz
- `PUT /api/quizzes/:id` – Update quiz
- `DELETE /api/quizzes/:id` – Delete quiz
- `POST /api/quizzes/submit` – Submit answers

### 🎓 Certificate
- `POST /api/certificates/issue` – Issue certificate
- `GET /api/certificates/user/:userId` – User's certificates
- `GET /api/certificates/:id` – Certificate details

---

## 🗃️ Models

- **User**: name, email, password, role, progress, certificates
- **Course**: title, description, instructor, lessons, quizzes, published
- **Lesson**: title, content, course, order
- **Quiz**: title, course, questions
- **Question**: text, options, correctAnswer, quiz
- **Certificate**: user, course, issuedAt

(See `src/models/` for details.)

---

## 🛡️ Middlewares

- **Auth Middleware**: Checks JWT, adds user to request
- **Error Middleware**: Centralized error handling

---

## 🧰 Utils

- **helpers.js**: Email validation, random code generation, pagination

---

## 🤝 Contributing

1. **Fork** the repo
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add some feature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## ⚖️ License

MIT

---

## ❓ FAQ & Contact

- For questions or suggestions, open an Issue or PR on [GitHub](https://github.com/yourusername/e-learning-backend).
- For security concerns, please email the maintainers directly.

---

## 🙏 Acknowledgements

- Node.js, Express, MongoDB, Mongoose documentation
- Community contributors

---