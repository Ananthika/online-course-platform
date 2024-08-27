// src/Components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Online Course Platform</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
