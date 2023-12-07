const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// Define movie schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  certification: { type: String, required: true },
  rating: { type: Number },
  format: { type: String, required: true },
  length: { type: Number, required: true },
});

// Define booking schema
const bookingSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  show_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Show', required: true },
});

// Define show schema
const showSchema = new mongoose.Schema({
  movie_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  showtime: { type: Date, required: true },
  cinema_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cinema', required: true },
});

// Define language schema
const languageSchema = new mongoose.Schema({
  movie_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  language: { type: String, required: true },
});

// Define genre schema
const genreSchema = new mongoose.Schema({
  movie_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  genre: { type: String, required: true },
});

// Define cinema schema
const cinemaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  building: { type: String },
  street: { type: String, required: true },
  landmark: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  pincode: { type: Number, required: true },
});

// Create models based on the schemas
const User = mongoose.model('User', userSchema);
const Movie = mongoose.model('Movie', movieSchema);
const Booking = mongoose.model('Booking', bookingSchema);
const Show = mongoose.model('Show', showSchema);
const Language = mongoose.model('Language', languageSchema);
const Genre = mongoose.model('Genre', genreSchema);
const Cinema = mongoose.model('Cinema', cinemaSchema);

module.exports = { User, Movie, Booking, Show, Language, Genre, Cinema };
