// Footer.js

import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Sudip Majkoti. All rights reserved.</p>
        <div className="social-links">
          <a href='https://www.linkedin.com/in/sudipmajkoti/' target="_blank" rel="noopener noreferrer">
            <p>LinkedIn</p>
          </a>
          {/* Add GitHub link similarly */}
          <a href='https://github.com/sudipmajkoti07' target="_blank" rel="noopener noreferrer">
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
