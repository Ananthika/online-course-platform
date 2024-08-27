// src/pages/CourseDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetailPage.css'; // Import CSS for styling

const CourseDetailPage = () => {
  const { id } = useParams();

  const courseData = {
    1: {
      title: 'Database Management Systems (DBMS)',
      description: 'Learn about relational databases, SQL, normalization, and more.',
      content: `
        <h3>Course Overview</h3>
        <p>This course covers the fundamentals of database management systems, including:</p>
        <ul>
          <li>Introduction to Databases</li>
          <li>Relational Model and Relational Algebra</li>
          <li>Structured Query Language (SQL)</li>
          <li>Normalization and Database Design</li>
          <li>Transaction Management and Concurrency Control</li>
        </ul>
      `,
    },
    2: {
      title: 'Computer Networks (CN)',
      description: 'Understand the fundamentals of networking, protocols, and network security.',
      content: `
        <h3>Course Overview</h3>
        <p>This course explores the key concepts in computer networking, including:</p>
        <ul>
          <li>Network Models (OSI and TCP/IP)</li>
          <li>Data Link Layer and MAC Protocols</li>
          <li>Network Layer and IP Addressing</li>
          <li>Transport Layer Protocols (TCP/UDP)</li>
          <li>Network Security and Cryptography</li>
        </ul>
      `,
    },
    3: {
      title: 'Object-Oriented Programming (OOPs)',
      description: 'Master the principles of OOP including classes, inheritance, and polymorphism.',
      content: `
        <h3>Course Overview</h3>
        <p>This course delves into the core concepts of object-oriented programming, including:</p>
        <ul>
          <li>Classes and Objects</li>
          <li>Inheritance and Polymorphism</li>
          <li>Encapsulation and Abstraction</li>
          <li>Interfaces and Abstract Classes</li>
          <li>Exception Handling and File I/O</li>
        </ul>
      `,
    },
    4: {
      title: 'Operating Systems (OS)',
      description: 'Explore the concepts of operating systems, process management, and memory management.',
      content: `
        <h3>Course Overview</h3>
        <p>This course covers the essential topics in operating systems, including:</p>
        <ul>
          <li>Process Management and Scheduling</li>
          <li>Memory Management and Paging</li>
          <li>File Systems and I/O Management</li>
          <li>Concurrency and Deadlock Handling</li>
          <li>Virtualization and Security in OS</li>
        </ul>
      `,
    },
  };

  const course = courseData[id];

  return (
    <div className="course-detail">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <div dangerouslySetInnerHTML={{ __html: course.content }} />
    </div>
  );
};

export default CourseDetailPage;
