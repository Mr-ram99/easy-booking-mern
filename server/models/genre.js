const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  movie_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  genre: { type: String, required: true },
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;