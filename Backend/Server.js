const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Add your XAMPP MySQL password
  database: 'test',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

app.use(cors());
app.use(bodyParser.json());

// CREATE booking
app.post('/api/bookings', (req, res) => {
  const { ownerName, vehicleNumber, serviceId, serviceType, date, time } = req.body;
  const query = 'INSERT INTO bookings (owner_name, vehicle_number, service_id, service_type, date, time) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [ownerName, vehicleNumber, serviceId, serviceType, date, time], (err, result) => {
    if (err) throw err;
    res.send('Booking added');
  });
});

// READ bookings
app.get('/api/bookings', (req, res) => {
  db.query('SELECT * FROM bookings', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// DELETE booking
app.delete('/api/bookings/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM bookings WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.send('Booking deleted');
  });
});

app.listen(PORT, () => {
  console.log('Server running on http://localhost:${PORT}');
});