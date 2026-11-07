import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column brand-column">
          <div className="footer-brand">
            <span className="footer-logo-badge">N</span>
            <span className="footer-title">Noeline T A</span>
          </div>
          <p className="footer-desc">
            Computer Science &amp; Engineering student at Christ College of Engineering, Irinjalakuda.
            Passionate about building responsive, modern, and user-centric web applications with React.js.
          </p>
          <div className="badge-reg">Register No: 199</div>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about#certifications">Certificates &amp; Awards</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Contact Information</h4>
          <ul className="footer-contact-list">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:noelineta.official@gmail.com">noelineta.official@gmail.com</a>
            </li>
            <li>
              <strong>Phone:</strong>{' '}
              <a href="tel:+919048444211">+91 9048444211</a>
            </li>
            <li>
              <strong>Institution:</strong> Christ College of Engineering, Irinjalakuda (Autonomous)
            </li>
            <li>
              <strong>Location:</strong> Kerala, India
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Social &amp; Profiles</h4>
          <p className="footer-text-muted">Connect with me across platforms:</p>
          <div className="footer-social-links">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:noelineta.official@gmail.com" 
              className="social-btn"
              aria-label="Email Me"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Noeline T A. All rights reserved.</p>
        <p className="footer-note">
          Ziuke Infotech React.js Practical Examination Project
        </p>
      </div>
    </footer>
  );
};

export default Footer;
