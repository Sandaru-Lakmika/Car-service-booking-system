import React from 'react';

import Header from './Header';
import './Header.css';
import HeroContact from './HeroContact';
import './HeroContact.css';
import ContactSection from './ContactSection';
import './ContactSection.css';
import Footer from './Footer';
import './Footer.css';


function Contact() {
  return (
    <div>
      <Header/>
      <HeroContact/>
      <ContactSection />
      <Footer/>
    </div>
  );
}

export default Contact;