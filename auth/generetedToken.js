const jwt = require('jsonwebtoken');

const secret = 'turma11';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (email) => {
    const token = jwt.sign({ data: email }, secret, jwtConfig);
    return token;
};

module.exports = {
    generateToken,
};