
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">Home</Link>
        </li>
        <li>
          <Link to="/gallery" className="nav-item">Gallery</Link>
        </li>
        <li>
          <Link to="/about-us" className="nav-item">About Us</Link>
        </li>
        <li>
          <Link to="/learning-paths" className="nav-item">Learning Paths</Link>
        </li>
        <li>
          <Link to="/phytosphere" className="nav-item">Phytosphere</Link>
        </li>
      </ul>
      <div className="sign-in">
        <Link to="/sign-in" className="nav-item">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
