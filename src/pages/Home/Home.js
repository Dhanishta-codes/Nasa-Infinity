import React from 'react';
import './Home.css'; // Import the CSS for styling

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="home-container">
        <h1 className="home-title">
          Explore NASA's Space Data and Dive <br />
          into the Ocean's Invisible Heroes: Phytoplankton
        </h1>

        <div className="home-description">
          <h2>DISCOVER OUR LEARNING PORTAL</h2>
          <p>
            Phytosphere helps you answer all your doubts regarding NASA PACE data, simplifying complex technologies and terminology in a comprehensive way.
          </p>
        </div>
      </div>

      {/* Project Overview Section */}
      <div className="project-overview">
        <div className="overview-content">
          <h2 className="overview-title">Project Aim and Overview</h2>
          <p className="overview-text">
            Our project uses NASA's PACE data to promote ocean literacy and explore the impact of sunlight on Earth's oceans. Discover how phytoplankton, the invisible heroes of the ocean, contribute to the planet's ecosystem and climate balance.
          </p>
        </div>
      </div>

      {/* Project Goals Section */}
      <div className="goals-section">
        <div className="goals-text">
          <h2>Project Goals</h2>
          <ul>
            <li>Ocean plankton biomass estimation</li>
            <li>Carbon sequestration by the ocean</li>
            <li>Pollution particles' aerosols impact on climate</li>
            <li>Ocean health index calculator</li>
            <li>Atmospheric budget analysis</li>
          </ul>
        </div>
        <div className="goals-images">
          {/* Flashcards */}
          <div className="flashcard">
            <img src="/phlankton biomass.jpg" alt="Plankton Biomass" />
            <p>Ocean plankton biomass estimation</p>
          </div>
          <div className="flashcard">
            <img src="/carbon sequestration.jpg" alt="Carbon Sequestration" />
            <p>Carbon sequestration by the ocean</p>
          </div>
        </div>
      </div>

      {/* The NASA PACE Mission Section */}
      <div className="pace-section">
        <h2 className="pace-title">
          The NASA PACE Mission: Advancing Climate Science and Ocean Health Monitoring
        </h2>
        <div className="pace-flashcards">
          <div className="flashcard">
            <img src="/frontendharpcard.jpg" alt="Harp 2" />
            <h3>Harp 2</h3>
            <p>A satellite designed for studying ocean color and its implications for climate.</p>
          </div>
          <div className="flashcard">
            <img src="/OCI IMAGE1.jpeg" alt="OCI" />
            <h3>OCI</h3>
            <p>The Ocean Color Instrument monitors phytoplankton and ocean health indicators.</p>
          </div>
          <div className="flashcard">
            <img src="/specx.jpg" alt="SpecX Polarimeter" />
            <h3>SpecX Polarimeter</h3>
            <p>Measures the properties of light scattered by the atmosphere and oceans.</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Appreciation for NASA & NASA PACE</h2>
          </div>
          <div className="footer-social">
            <a href="https://www.nasa.gov" target="_blank" rel="noopener noreferrer">NASA</a>
            <a href="https://pace.jpl.nasa.gov" target="_blank" rel="noopener noreferrer">NASA PACE</a>
            <div className="social-icons">
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><img src="/public/pinterest-icon.png" alt="Pinterest" /></a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src="/public/facebook-icon.png" alt="Facebook" /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="/public/instagram-icon.png" alt="Instagram" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src="/public/twitter-icon.png" alt="Twitter" /></a>
            </div>
          </div>
          <div className="footer-links">
            <a href="/privacy-policy.html">Privacy Policy</a>
            <a href="/terms-of-service.html">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Your Website Name. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;