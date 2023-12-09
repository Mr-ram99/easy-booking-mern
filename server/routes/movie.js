const express = require('express');
const { handleGetAllMovies, handleCreateMovie } = require('../controllers/movie');
const router = express.Router();

router
  .route('/')
  .get(handleGetAllMovies)
  .post(handleCreateMovie);

module.exports = router;