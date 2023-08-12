// NavigationBar.js
import React from 'react';
import './NavBar.css'; // Import your CSS file for styling

function NavigationBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
