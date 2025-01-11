import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import ridereadylogo from './Headerimages/ridereadylogo.png';
import designlogo from './Headerimages/designlogo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={ridereadylogo} alt="RIDE-Ready Logo" className="logo-img" />
        <h1>RIDE-Ready</h1>
        <img src={designlogo} alt="Design Logo" className="secondary-logo" />
      </div>
      <nav>
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Aboutus">About Us</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
          <li><a href="#Booking Info">Booking Info</a></li>
        </ul>
      </nav>
      <a href="#booking" className="btn">Book Now</a>
    </header>
  );
}

export default Header;
