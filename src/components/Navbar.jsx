import React from 'react';
import '../assets/Navbar.css'; // We'll create this CSS now too

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        HackDoTigrinho CMS
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">How to Book</a></li>
        <li><a href="#">How to Ad</a></li>
        <li><a href="#">Live Cam</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
