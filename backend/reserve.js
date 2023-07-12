const mongoose = require('mongoose');

const reserveSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  time: String,
  guests: Number
});

const Reservation = mongoose.model('Reservation', reserveSchema);

module.exports = Reservation;