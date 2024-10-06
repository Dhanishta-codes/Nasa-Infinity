// src/pages/AboutUs.js
import React from 'react';
import './AboutUs.css';  // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to the <strong>NASA PACE Data Learning Platform</strong>! Our mission is to make 
        ocean literacy accessible and engaging for everyone by leveraging the rich environmental 
        data from NASA’s <strong>PACE (Plankton, Aerosol, Cloud, ocean Ecosystem)</strong> mission.
      </p>

      <h2>Our Mission</h2>
      <p>
        We believe that knowledge is the foundation for conservation. By translating NASA's 
        complex PACE data into interactive learning experiences, we aim to foster a deeper 
        understanding of ocean health, climate change, and sustainability.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>Interactive learning paths designed for students and educators of all levels.</li>
        <li>AI-powered "Ask Ocean" assistant for answering ocean-related queries in real-time.</li>
        <li>Dynamic data visualizations to help users explore and understand PACE data.</li>
        <li>Hands-on projects that connect theory with real-world environmental challenges.</li>
      </ul>

      <h2>Our Vision</h2>
      <p>
        Our vision is to empower the next generation of ocean scientists, environmentalists, 
        and policy-makers by offering them the tools and knowledge to drive impactful change.
      </p>

      <h2>Meet the Team</h2>
      <p>
        We are a diverse group of space enthusiasts, scientists, developers, and educators, 
        united by our passion for making data-driven learning fun and accessible.
      </p>
    </div>
  );
};

export default AboutUs;
