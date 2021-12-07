const { User } = require('../models');
const { generateToken } = require('../auth/generetedToken');

const setUser = async (displayName, email, password, image) => {
  const token = await generateToken(email);
  await User.create({ displayName, email, password, image });
  return token;
};

const showUser = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (err) {
    return { message: err.message };
  }
};

const showAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const showUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (err) {
    return { message: err.message };
  }
};

module.exports = {
  setUser,
  showUser,
  showAllUsers,
  showUserById,
};