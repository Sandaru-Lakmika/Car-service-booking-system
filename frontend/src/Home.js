import React from 'react';



import Header from './Header';
import './Header.css';
import HeroSection from './HeroSection';
import './HeroSection.css';
import HomeSection from './HomeSection';
import './HomeSection.css';
import Footer from './Footer';
import './Footer.css';






function Home() {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <HomeSection/>
        <Footer/>
          
    </div>
  );
}

export default Home;
