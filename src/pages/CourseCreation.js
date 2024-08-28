// src/pages/CourseBooking.js
import React, { useState } from 'react';

function CourseBooking() {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({ course: '', student: '', date: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({ ...newBooking, [name]: value });
  };

  const handleAddBooking = () => {
    if (editIndex !== null) {
      const updatedBookings = bookings.map((booking, index) =>
        index === editIndex ? newBooking : booking
      );
      setBookings(updatedBookings);
      setEditIndex(null);
    } else {
      setBookings([...bookings, newBooking]);
    }
    setNewBooking({ course: '', student: '', date: '' });
  };

  const handleEditBooking = (index) => {
    setNewBooking(bookings[index]);
    setEditIndex(index);
  };

  const handleDeleteBooking = (index) => {
    setBookings(bookings.filter((_, i) => i !== index));
  };

  return (
  
    <div>
      <h2>Course Booking</h2>

      <div className="booking-form">
        <input
          type="text"
          name="course"
          placeholder="Course Name"
          value={newBooking.course}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="student"
          placeholder="Student Name"
          value={newBooking.student}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={newBooking.date}
          onChange={handleInputChange}
        />
        <button onClick={handleAddBooking}>
          {editIndex !== null ? 'Update Booking' : 'Add Booking'}
        </button>
      </div>

      <div className="booking-table">
        <h3>Current Bookings</h3>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Student Name</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.course}</td>
                <td>{booking.student}</td>
                <td>{booking.date}</td>
                <td>
                  <button onClick={() => handleEditBooking(index)}>Edit</button>
                  <button onClick={() => handleDeleteBooking(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   
  );
}

export default CourseBooking;
