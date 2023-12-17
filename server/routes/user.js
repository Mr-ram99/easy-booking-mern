const express = require('express');
const { handleCreateUser, handleUserLogin, handleUserLogout } = require('../controllers/user');
const router = express.Router();

router
  .route('/login')
  .post(handleUserLogin);
router
  .route('/')
  .post(handleCreateUser);

module.exports = router;