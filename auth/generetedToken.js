const jwt = require('jsonwebtoken');

const secret = 'turma11';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (email, password) => {
  const dataJwt = { email, password };
  const token = jwt.sign({ data: dataJwt }, secret, jwtConfig);
  return token;
};

module.exports = {
  generateToken,
};