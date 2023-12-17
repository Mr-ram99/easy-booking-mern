const jwt = require('jsonwebtoken');
const User = require('../models/user');

const handleUserLogin = (req, res) => {
  if(req.user){
    return res.status(200).send({loggedIn: true});
  }
  const { email, password } = req.body;
  const data = {
    email,
    password
  }
  User.findOne(data).then((user) => {
    const { name, username, email } = user;
    const payload = {
      name,
      email,
      username
    }
    const authToken = jwt.sign(payload, process.env.JWT_SECRET);
    return res.status(200).send({ loggedIn: true, authToken: authToken , user: user});
  }).catch((err) => {
    return res.status(404).send({ loggedIn: false, err: err });
  })
}

const handleCreateUser = (req, res) => {
  const { name, username, email, password } = req.body;
  const data = {
    name,
    email,
    username,
    password
  }
  User.create(data).then((user) => {
    return res.status(201).send({ message: 'user created', user: user });
  }).catch((err) => {
    return res.status(500).send({ error: err });
  })
}

module.exports = { handleUserLogin, handleCreateUser }