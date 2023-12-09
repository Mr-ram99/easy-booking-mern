const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  show_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Show', required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;