const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.findOne({ username: username, password: password });

  if (user) {
    return res.status(200).send({ msg: "login success" });
  }
  else {
    return res.status(404).send({ msg: "user not found" });
  }
});

module.exports = router;