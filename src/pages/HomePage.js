// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import CSS for styling

const HomePage = () => {
  const courses = [
    { id: 1, title: 'Database Management Systems (DBMS)', description: 'Learn about relational databases, SQL, normalization, and more.' },
    { id: 2, title: 'Computer Networks (CN)', description: 'Understand the fundamentals of networking, protocols, and network security.' },
    { id: 3, title: 'Object-Oriented Programming (OOPs)', description: 'Master the principles of OOP including classes, inheritance, and polymorphism.' },
    { id: 4, title: 'Operating Systems (OS)', description: 'Explore the concepts of operating systems, process management, and memory management.' },
  ];

  return (
    <div className="homepage">
      <h1>Available Courses</h1>
      <div className="course-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <Link to={`/courses/${course.id}`} className="view-course-link">View Course</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
