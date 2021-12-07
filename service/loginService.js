const { User } = require('../models');

const getUserByEmailAndPassword = async (email) => {
  try {
    const response = await User.findOne({ where: { email } });
    return response;
  } catch (err) {
    return { message: err.message };
  }
};

module.exports = {
  getUserByEmailAndPassword,
};