import React, { useEffect, useState } from 'react';
import './BookingTable.css';

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/bookings');
      const data = await response.json();
      setBookings(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <table className="booking-table">
      <thead>
        <tr>
          <th>Owner's Name</th>
          <th>Vehicle Number</th>
          <th>Service ID</th>
          <th>Service</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
  {bookings.map((booking) => (
    <tr key={booking.id}>
      <td>{booking.owner_name}</td>
      <td>{booking.vehicle_number}</td>
      <td>{booking.service_id}</td>
      <td>{booking.service_type}</td>
      <td>{booking.date}</td>
      <td>{booking.time}</td>
    </tr>
  ))}
</tbody>
    </table>
  );
};

export default BookingTable;