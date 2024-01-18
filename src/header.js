// Header.js
import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="logo">Sudip Majkoti</div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="https://app.sajilocv.com/cv/eb1d1573-4c15-43cd-8cb3-c2e608939267">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </div>
    </header>
  );
};

export default Header;
