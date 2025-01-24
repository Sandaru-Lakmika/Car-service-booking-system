import React from 'react';
import Header from './Header';
import HeroAboutus from './HeroAboutus';
import './HeroAboutus.css';
import BookingTable from './BookingTable';
import './BookingForm.css';
import Footer from './Footer';
import './Footer.css';


function BookingInfo() {
  return (
    <div>
      <Header />
      <HeroAboutus/>
      <BookingTable />
      <Footer />
    </div>
  );
}

export default BookingInfo;