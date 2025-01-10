// src/components/HeroSection.js

import React from 'react';
import './HeroSection.css'; // Import CSS file if styling is separate

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2>Reliable Car Service Solutions to</h2>
        <h1>Enhance Your Driving Experience</h1>
        <p>Your trusted partner for vehicle care and maintenance.</p>
        <button className="learn-more">Book Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
