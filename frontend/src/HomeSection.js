import React from 'react';
import './HomeSection.css'; // Import CSS file if you have styling
import service1 from './HomeSectionimages/service1.png'; // Adjust paths accordingly
import service2 from './HomeSectionimages/service2.png';
import service3 from './HomeSectionimages/service3.png';
import service4 from './HomeSectionimages/service4.png';
import service5 from './HomeSectionimages/service5.png';
import service6 from './HomeSectionimages/service6.png';
import service7 from './HomeSectionimages/service7.png';
import service8 from './HomeSectionimages/service8.png';

const HomeSection = () => {
  return (
    <section id="services" className="services">
      <h2>Why Choose Us?</h2>
      <hr />
      <h3>Premium Car Services</h3>
      <div className="services-container">
        <div className="service">
          <img src={service1} alt="Exterior Washing" />
          <h4>Exterior Washing</h4>
          <p>Keep your car's exterior spotless and shining with our professional washing services.</p>
        </div>
        <div className="service">
          <img src={service2} alt="Interior Washing" />
          <h4>Interior Washing</h4>
          <p>Ensure your car's interior is clean and fresh with our thorough interior washing.</p>
        </div>
        <div className="service">
          <img src={service3} alt="Vacuum Cleaning" />
          <h4>Vacuum Cleaning</h4>
          <p>Remove dirt and debris from every corner with our efficient vacuum cleaning services.</p>
        </div>
        <div className="service">
          <img src={service4} alt="Seats Washing" />
          <h4>Seats Washing</h4>
          <p>Revitalize your car's seats with our specialized seat washing solutions.</p>
        </div>
        <div className="service">
          <img src={service5} alt="Window Wiping" />
          <h4>Window Wiping</h4>
          <p>Achieve crystal-clear windows with our meticulous window wiping service.</p>
        </div>
        <div className="service">
          <img src={service6} alt="Wet Cleaning" />
          <h4>Wet Cleaning</h4>
          <p>Deep clean your car with our effective and safe wet cleaning methods.</p>
        </div>
        <div className="service">
          <img src={service7} alt="Oil Changing" />
          <h4>Oil Changing</h4>
          <p>Keep your engine running smoothly with our reliable oil change service.</p>
        </div>
        <div className="service">
          <img src={service8} alt="Brake Repairing" />
          <h4>Brake Repairing</h4>
          <p>Ensure your safety with our expert brake inspection and repair services.</p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
