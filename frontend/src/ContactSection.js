import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <div className="container">
      <div className="find-us">
        <h2>
          <span>Contact</span> Us
        </h2>
        <br></br>
        
        <div className="info">
          <div className="item">
            <div className="icon">📞</div>
            <div className="text">
              <strong>HOTLINE</strong>
              <p>011 0 010 101</p>
            </div>
          </div>
          <hr></hr>
          <div className="item">
            <div className="icon">📲</div>
            <div className="text">
              <strong>FACEBOOK</strong>
              <p>RIDE-Ready</p>
            </div>
          </div>
          <hr></hr>
          <div className="item">
            <div className="icon">📧</div>
            <div className="text">
              <strong>EMAIL</strong>
              <p>info@ride-ready.lk</p>
            </div>
          </div>
          <hr></hr>
          <div className="item">
            <div className="icon">📍</div>
            <div className="text">
              <strong>ADDRESS</strong>
              <p>Faculty of Engineering - University of Ruhuna, Hapugala, Galle</p>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.3801575966468!2d80.18938967498921!3d6.079368393906757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1714b88f66a7b%3A0x8a7feea89839a01a!2sFaculty%20of%20Engineering%20-%20University%20of%20Ruhuna!5e0!3m2!1sen!2slk!4v1736627240509!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactSection;
