const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apicache = require('apicache');
let cache  = apicache.middleware;
const app = express();
app.use(bodyParser.json());
// app.use(cache('5 minutes'))

const PORT = 3001

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String
});
const movieSchema = mongoose.Schema({
  name: String,
  certification: String,
  rating: Number,
  format: String,
  length: Number
});

const User = mongoose.model("User", userSchema);
const Movie = mongoose.model("Movie", movieSchema);

mongoose.connect('mongodb://127.0.0.1:27017/easy-booking')
  .then(() => {
    console.log('connected to easy-booking database')
  })
  .catch((error) => {
    console.log('not connected')
  })

app.post('/login', async(req, res)=>{
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.findOne({username: username, password: password});

  if(user){
    return res.status(200).send({msg:"login success"});
  }
  else{
    return res.status(404).send({msg:"user not found"});
  }
})

app.get('/users', async (req, res) => {
  const users = await User.find();
  return res.send(users);
})


app.post('/users', async (req, res) => {
  await User.create({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  })
  return res.status(201).send({ msg: "user created" });
})


app.listen(PORT, () => {
  console.log('server listening at port', PORT);
})