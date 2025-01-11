import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroAboutus.css'; 


const HeroAboutus = () => {
  const navigate = useNavigate(); 

  const handleBookNow = () => {
    navigate('/BookNow'); 
  };

  return (
    <section id="homeaboutus" className="heroaboutus">
      <div className="hero-contentaboutus">
        <h2>Keeping Your Vehicle</h2>
        <h1>In Peak Performance, Every Mile </h1>
        <p>Your trusted partner for vehicle care and maintenance.</p>
        <button className="learn-more" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </section>
  );
};

export default HeroAboutus;
