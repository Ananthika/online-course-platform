import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

import CourseCatalog from './pages/CourseCatalog';
import CourseCreation from './pages/CourseCreation';
import CourseEnrollment from './pages/CourseEnrollment';
import QuizPage from './pages/QuizPage';
import './styles.css';
import bgImage from './bg.jpg'; 
import DiscussionForums from './pages/DiscussionForums';
function App() {
  return (
    <Router>
      <div className="bg-image" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="app-container">
          <div className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              
              <Route path="/catalog" element={<CourseCatalog />} />
              <Route path="/create-course" element={<CourseCreation />} />
              <Route path="/enroll" element={<CourseEnrollment />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/forums" element={<DiscussionForums />} />
            </Routes>
          </div>
          <div className="sidebar">
            <h3>Quick Links</h3>
            <ul>
             
              <li><a href="/catalog">Course Catalog</a></li>
              <li><a href="/create-course">Create Course</a></li>
              <li><a href="/enroll">Enroll</a></li>
              <li><a href="/quiz">Take Quiz</a></li>
              <li><a href="/forums">Discussion Forums</a></li> 
            </ul>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
