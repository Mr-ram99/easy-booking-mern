const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/', (req, res)=>{
  if(req.user){
    return res.status(200).send({loggedIn: true, user: req.user});
  }
  return res.status(200).send({loggedIn: false});
});

module.exports = router;