// About.js
import React from 'react';
import './About.css';
import ram from './ram.png';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm Sudip Majkoti,
            a passionate data engineer and machine learning enthusiast.
            With a keen interest in harnessing the power of data,
            I thrive on building robust data pipelines, optimizing data workflows,
            and leveraging cutting-edge technologies to extract valuable insights.
          </p>
        </div>
        <div className="about-image">
          <img
            src={ram}
            alt="Your Name"
            width="200"
            height="200"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
