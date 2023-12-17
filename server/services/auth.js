const jwt = require('jsonwebtoken');

const setUser = (user) => {
  const payload = {
    name: user.name,
    email: user.email,
  }
  try {
    return jwt.sign(payload, process.env.JWT_SECRET);
  }
  catch (err) {
    console.log("JWT sign error:", err);
    return null;
  }
}

const getUser = (token) => {
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  }
  catch (err) {
    console.log("JWT verify error:", err);
    return null;
  }
}

module.exports = { setUser, getUser };