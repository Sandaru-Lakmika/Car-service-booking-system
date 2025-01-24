import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Contact from './Contact';
import BookNow from './BookNow';
import BookingInfo from './BookingInfo';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/BookingInfo" element={<BookingInfo />} />
        <Route path="/BookNow" element={<BookNow />} />
      </Routes>
    </Router>
  );
}

export default App;
