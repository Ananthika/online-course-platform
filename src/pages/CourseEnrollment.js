import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const CourseEnrollment = () => {
  const [enrollmentData, setEnrollmentData] = useState({
    courseId: '',
    studentName: '',
    paymentMethod: '',
  });

  const [courseDetails, setCourseDetails] = useState(null);

  const handleChange = (e) => {
    setEnrollmentData({
      ...enrollmentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock API response
    const mockCourseDetails = {
      courseId: enrollmentData.courseId,
      courseName: 'Introduction to React',
      instructor: 'John Doe',
      description: 'Learn the basics of React, including components, state, and props.',
      imageUrl: 'https://via.placeholder.com/150', // Placeholder image
    };

    setCourseDetails(mockCourseDetails);
  };

  return (
    <div className="container mt-4">
      <h2>Enroll in a Course</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="courseId">
          <Form.Label>Course ID</Form.Label>
          <Form.Control type="text" name="courseId" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="studentName" className="mt-3">
          <Form.Label>Student Name</Form.Label>
          <Form.Control type="text" name="studentName" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="paymentMethod" className="mt-3">
          <Form.Label>Payment Method</Form.Label>
          <Form.Control as="select" name="paymentMethod" onChange={handleChange}>
            <option value="paypal">PayPal</option>
            <option value="stripe">Stripe</option>
            <option value="credit-card">Credit Card</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Enroll
        </Button>
      </Form>

      {courseDetails && (
        <Card className="mt-5">
          <Card.Img variant="top" src={courseDetails.imageUrl} />
          <Card.Body>
            <Card.Title>{courseDetails.courseName}</Card.Title>
            <Card.Text><strong>Instructor:</strong> {courseDetails.instructor}</Card.Text>
            <Card.Text>{courseDetails.description}</Card.Text>
            <Card.Text><strong>Course ID:</strong> {courseDetails.courseId}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default CourseEnrollment;
