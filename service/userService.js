const { User } = require('../models');
const { generateToken } = require('../auth/generetedToken');

const setUser = async (displayName, email, password, image) => {
  const token = await generateToken(email);
  await User.create({ displayName, email, password, image });
  return token;
};

const showUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  console.log(email);
  return user;
};

const showAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

module.exports = {
  setUser,
  showUser,
  showAllUsers,
};