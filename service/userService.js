const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'turma11';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const setUser = async (displayName, email, password, image) => {
  const infoUser = { displayName, email };
  const token = await jwt.sign({ data: infoUser }, secret, jwtConfig);
  await User.create({ displayName, email, password, image });
  return token;
};

const showUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  setUser,
  showUser,
};