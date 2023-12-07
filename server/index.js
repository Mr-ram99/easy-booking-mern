const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apicache = require('apicache');
let cache = apicache.middleware;
const app = express();
const { User, Movie, Booking, Show, Language, Genre, Cinema } = require("./schema");
app.use(express.json());
// app.use(cache('5 minutes'))

const PORT = 3001

mongoose.connect('mongodb://127.0.0.1:27017/easy-booking')
  .then(() => {
    console.log('connected to easy-booking database');
  })
  .catch((error) => {
    console.log('not connected:', error);
  })

app.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.findOne({ username: username, password: password });

  if (user) {
    return res.status(200).send({ msg: "login success" });
  }
  else {
    return res.status(404).send({ msg: "user not found" });
  }
})

app.get('/users', async (req, res) => {
  const users = await User.find();
  return res.status(200).send(users);
})


app.post('/users', async (req, res) => {
  await User.create({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
  return res.status(201).send({ message: "user created" });
})

app.get('/movies', async (req, res) => {
  const movies = await Movie.find();
  return res.status(200).send(movies);
})

app.post('/movies', async (req, res) => {
  await Movie.create({
    name: req.body.name,
    certification: req.body.certification,
    rating: req.body.rating,
    format: req.body.format,
    length: req.body.length
  });
  return res.status(201).send({ message: "Movie created" })
})

app.listen(PORT, () => {
  console.log('server listening at port', PORT);
})