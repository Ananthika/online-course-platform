// src/pages/CourseCatalog.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const courses = [
  { id: 1, title: 'Introduction to React', description: 'Learn the basics of React.' },
  { id: 2, title: 'Advanced JavaScript', description: 'Dive deep into JavaScript.' },
  { id: 3, title: 'Web Design Fundamentals', description: 'Understand the principles of web design.' },
  { id: 4, title: 'Node.js for Beginners', description: 'Get started with server-side JavaScript.' },
  { id: 5, title: 'Database Management', description: 'Learn how to manage databases effectively.' },
  { id: 6, title: 'Cybersecurity Basics', description: 'Protect yourself and your data online.' },
];

const CourseCatalog = () => {
  return (
    <div className="container mt-4">
      <h2>Course Catalog</h2>
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mb-4" key={course.id}>
            <Card className="card-custom">
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Button variant="custom">Enroll Now</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;
