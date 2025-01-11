import React from 'react';

import Header from './Header';
import './Header.css';
import HeroContact from './HeroContact';
import './HeroContact.css';

import Footer from './Footer';
import './Footer.css';


function BookNow() {
  return (
    <div>
      <Header/>
      <HeroContact/>
      
      <Footer/>
    </div>
  );
}

export default BookNow;