import React from 'react';

import Header from './Header';
import './Header.css';
import HeroAboutus from './HeroAboutus';
import './HeroAboutus.css';
import AboutusSection from './AboutusSection';
import './AboutusSection.css';
import Footer from './Footer';
import './Footer.css';


function Aboutus() {
  return (
    <div>
      <Header/>
      <HeroAboutus/>
      <AboutusSection/>
      <Footer/>
    </div>
  );
}

export default Aboutus;