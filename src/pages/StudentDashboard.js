// src/pages/StudentDashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, ProgressBar } from 'react-bootstrap';

const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axios.get('/api/enrolled-courses').then(res => setCourses(res.data));
    axios.get('/api/upcoming-assignments').then(res => setAssignments(res.data));
  }, []);

  return (
    <div className="container mt-4 text-white-shadow">
      <h2>My Dashboard</h2>
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4" key={course.id}>
            <Card className="card-custom">
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>
                  <b>Progress:</b>
                  <ProgressBar now={course.progress} label={`${course.progress}%`} />
                </Card.Text>
                <Button variant="custom">Continue Learning</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <h3 className="mt-4">Upcoming Assignments</h3>
      <ul className="list-group">
        {assignments.map((assignment) => (
          <li key={assignment.id} className="list-group-item bg-dark text-white">
            {assignment.title} - Due: {assignment.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
