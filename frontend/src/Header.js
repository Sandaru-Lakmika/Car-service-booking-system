import React from 'react';
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
          <li><a href="#home">Home</a></li>
          <li><a href="/Aboutus">About Us</a></li>
          {/* <li><a href="#branches">Branches</a></li> */}
          <li><a href="#contact">Contact</a></li>
          <li><a href="#Booking Info">Booking Info</a></li>
        </ul>
      </nav>
      <a href="#booking" className="btn">Book Now</a>
    </header>
  );
}

export default Header;
