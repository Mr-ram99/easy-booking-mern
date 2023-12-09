const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  certification: { type: String, required: true },
  rating: { type: Number },
  format: { type: String, required: true },
  length: { type: Number, required: true },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;