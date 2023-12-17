const { getUser } = require('../services/auth');

const authenticateUser = (req, res, next) => {
  const token = req.cookies?.authToken;
  if (!token) {
    return res.status(404).send();
  }
  const user = getUser(token);
  if (!user) {
    return res.redirect('/login');
  }
  req.user = user;
  next();
}

const checkAuth = (req, res, next) => {
  const token = req.cookies?.authToken;
  const user = getUser(token);
  req.user = user;
  next();
}

module.exports = { authenticateUser, checkAuth };