import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css'; 

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleBookNow = () => {
    navigate('/BookNow'); // Navigate to the BookNow page
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2>Reliable Car Service Solutions to</h2>
        <h1>Enhance Your Driving Experience</h1>
        <p>Your trusted partner for vehicle care and maintenance.</p>
        <button className="learn-more" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
