import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Contact from './Contact';
import BookNow from './BookNow';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/BookNow" element={<BookNow />} />
      </Routes>
    </Router>
  );
}

export default App;
