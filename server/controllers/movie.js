const Movie = require('../models/movie');

const handleGetAllMovies = async (req, res) => {
  const movies = await Movie.find();
  return res.status(200).send(movies);
}
const handleCreateMovie = async (req, res) => {
  await Movie.create({
    name: req.body.name,
    certification: req.body.certification,
    rating: req.body.rating,
    format: req.body.format,
    length: req.body.length
  });
  return res.status(201).send({ message: "Movie created" })
}

module.exports = { handleGetAllMovies, handleCreateMovie }