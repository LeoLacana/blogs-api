const jwt = require('jsonwebtoken');
const { showUser } = require('../service/userService');

const secret = 'turma11';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decode = jwt.verify(token, secret, jwtConfig);
    const user = await showUser(decode.data.email);
    req.user = user;
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};
