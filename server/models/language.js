const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
  movie_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  language: { type: String, required: true },
});

const Language = mongoose.model('Language', languageSchema);

module.exports = Language;