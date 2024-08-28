// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mt-4 text-center text-white-shadow">
      <h1>Welcome to the Online Course Platform</h1>
      <p>Your gateway to a world of learning opportunities.</p>
      <div className="mt-4">
        <Link to="/dashboard" className="btn btn-custom mr-2">
          Student Dashboard
        </Link>
        <Link to="/catalog" className="btn btn-custom mr-2">
          Course Catalog
        </Link>
        <Link to="/create-course" className="btn btn-custom mr-2">
          Create Course
        </Link>
        <Link to="/enroll" className="btn btn-custom">
          Enroll in a Course
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
