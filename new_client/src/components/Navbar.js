import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import CSS file for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left section with BLOG name */}
      <div className="navbar-left">
        <Link to="/" className="blog-name">BLOG</Link>
      </div>

      {/* Right section with navigation links */}
      <div className="navbar-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/post-blog" className="nav-link">Post Blog</Link> {/* New "Post Blog" link */}
        <Link to="/auth" className="nav-link">Login / Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
