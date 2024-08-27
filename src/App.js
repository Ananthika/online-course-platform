// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Navbar from './Components/NavBar';
import HomePage from './pages/HomePage';
import CourseDetailPage from './pages/CourseDetailPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Replace Switch with Routes */}
        <Route path="/" element={<HomePage />} /> {/* Use element prop instead of component */}
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
