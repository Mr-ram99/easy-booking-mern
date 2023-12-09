const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  movie_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  showtime: { type: Date, required: true },
  cinema_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cinema', required: true },
});

const Show = mongoose.model('Show', showSchema);

module.exports = Show;
