const User = require('../models/user');

const handleGetAllUsers = async (req, res) => {
  const users = await User.find();
  return res.status(200).send(users);
}

const handleGetUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.find({ _id: id });
    return res.status(200).send(user);
  }
  catch (err) {
    console.log("error:", err);
    return res.status(404).send({ msg: "user not found" });
  }
}

const handleCreateUser = async (req, res) => {
  await User.create({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
  return res.status(201).send({ message: "user created" });
}

module.exports = { handleGetUserById, handleGetAllUsers, handleCreateUser }