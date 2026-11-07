import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="brand-logo" onClick={closeNav}>
          <div className="brand-icon">N</div>
          <div className="brand-text">
            <span className="brand-name">Noeline T A</span>
            <span className="brand-subtitle">React Developer &bull; Reg. 199</span>
          </div>
        </Link>

        {/* Mobile menu toggle button */}
        <button 
          className={`menu-toggle ${isNavOpen ? 'open' : ''}`} 
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation links */}
        <nav className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeNav}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeNav}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeNav}
          >
            Contact
          </NavLink>
          <Link to="/contact" className="nav-cta-btn" onClick={closeNav}>
            Hire Me
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
