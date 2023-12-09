const express = require('express');
const { handleGetAllUsers, handleCreateUser, handleGetUserById } = require('../controllers/user');
const router = express.Router();

router
  .route('/')
  .get(handleGetAllUsers)
  .post(handleCreateUser);

router
  .route('/:id')
  .get(handleGetUserById)

module.exports = router;