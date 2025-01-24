import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    vehicleNumber: '',
    serviceId: Math.random().toString(36).substr(2, 9), // Auto-generated ID
    serviceType: 'Wash and Grooming',
    date: '',
    time: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Booking Successful!');
        setFormData({
          ownerName: '',
          vehicleNumber: '',
          serviceId: Math.random().toString(36).substr(2, 9),
          serviceType: 'Wash and Grooming',
          date: '',
          time: '',
        });
      } else {
        alert('Failed to book!');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting booking.');
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Your Service</h2>
      <div className="form-group">
        <label>Owner's Name:</label>
        <input type="text" name="ownerName" value={formData.ownerName} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label>Vehicle Number:</label>
        <input type="text" name="vehicleNumber" value={formData.vehicleNumber} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label>Auto Generated ID:</label>
        <input type="text" name="serviceId" value={formData.serviceId} readOnly />
      </div>
      <div className="form-group">
        <label>Service:</label>
        <select name="serviceType" value={formData.serviceType} onChange={handleInputChange}>
          <option>Wash and Grooming</option>
          <option>Engine Tune ups</option>
          <option>Hybrid Services</option>
          <option>Wheel Alignment</option>
          <option>Part Replacements</option>
          <option>Battery Services</option>
        </select>
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label>Time:</label>
        <input type="time" name="time" value={formData.time} onChange={handleInputChange} required />
      </div>
      <button type="submit" id="bookservice">Book Now</button>
    </form>
  );
};

export default BookingForm;