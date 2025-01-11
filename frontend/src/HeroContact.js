import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroContact.css'; 

const HeroContact = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleBookNow = () => {
    navigate('/BookNow'); // Navigate to the BookNow page
  };

  return (
    <section id="homecontact" className="herocontact">
      <div className="hero-contentcontact">
        <h2>Quality Maintenance for</h2>
        <h1>A Hassle-Free Driving Experience</h1>
        <p>Your trusted partner for vehicle care and maintenance.</p>
        <button className="learn-more" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </section>
  );
};

export default HeroContact;