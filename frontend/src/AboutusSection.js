import React, { useEffect } from 'react';
import './AboutusSection.css';

function AboutusSection() {
  useEffect(() => {
    const title = document.querySelector('.about-title');
    if (title) {
      setTimeout(() => {
        title.classList.add('animate');
      }, 100);
    }
  }, []);

  return (
    <div className="about-wrapper">
    <div className="about-section1">
      <h2 className="about-title">About Us</h2>
      <p className='para'>
      Sri Lanka’s most trusted and comprehensive auto service network offers a superior range of services tailored to meet all your vehicle needs. From maintenance work and repairs to specialized care, we are your one-stop destination to ensure your vehicle receives the attention it deserves.
      </p>
      <p className='para'>
      With state-of-the-art technology at all our locations and a highly skilled team of professionals, we guarantee exceptional preventive maintenance and service standards. Our expertise extends to the latest vehicle models, ensuring a seamless experience for all clients. Our partnerships with globally renowned automotive brands such as Toyota, Kia, 3M, and Kobe Motor Company underline our commitment to providing the highest quality care for your vehicle.
      </p>
      <p className='para'>
      Over the past 25 years, we have built a network of over 40 service centers island-wide, including professional workshops and body shops in Rathmalana, Kandy, Gampaha, Galle, and Matara. With a team of over 2,000 trained professionals, we stay ahead of the latest trends and techniques in auto care, ensuring you receive unmatched service every time.
      </p>
      <p className='para'>
      Our unwavering focus on excellence and innovation has established us as the trusted choice for vehicle owners across Sri Lanka. Whether it’s routine maintenance or complex repairs, we strive to exceed expectations, making us your dependable partner for all your automobile care needs.
      </p>
    </div>
    </div>

    
  );
}

export default AboutusSection;
