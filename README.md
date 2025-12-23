# 🎯 MockMate – AI Powered Mock Interview Platform

MockMate is a full-stack AI-powered mock interview application designed to help users prepare for technical interviews through role-based interview simulations and AI-driven feedback.

---

## 🚀 Features

### 🔐 Authentication
- User Signup & Login
- JWT-based authentication
- Protected routes
- Persistent login

### 👤 User Dashboard
- Displays logged-in user information
- Protected dashboard
- Start interview flow
- Interview statistics (in progress)

### 🧠 AI Mock Interviews
- Role-based interviews (Frontend, Backend, Fullstack)
- AI-generated interview questions
- AI-based answer evaluation using Groq API

### 🎭 Role Selection
- Dedicated role selection page
- Redux-based role management

### 🌗 UI / UX
- Responsive design
- Dark / Light mode toggle
- Modern Tailwind CSS UI
- Glassmorphism navbar

---

## 🏗️ Tech Stack

### Frontend
- React (Vite)
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Groq AI SDK

---

## 📁 Project Structure

### Client
client/
├── src/
│   ├── components/    # Reusable UI components (Navbar, ThemeToggle, etc.)
│   ├── pages/         # Application pages (Login, Signup, Dashboard, Interview)
│   ├── store/         # Redux Toolkit slices & store configuration
│   ├── utils/         # Axios configuration and helpers
│   ├── App.jsx        # Application routes and layout
│   └── main.jsx       # Application entry point
server/
├── src/
│   ├── config/        # DB & AI (Groq) configuration
│   ├── middleware/   # Auth middleware (JWT verification)
│   ├── models/       # Mongoose schemas (User, Interview)
│   ├── routes/       # API routes (auth, interview)
├── server.js          # Express server entry
├── .env               # Environment variables
