const { generateToken } = require('../auth/generetedToken');
const { showUser } = require('../service/userService');

const loginUser = async (req, res) => {
  const { email } = req.body;
  try {
    const registeredUser = await showUser(email);
    if (!registeredUser) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const token = await generateToken(email);
    return res.status(200).json({ token });
  } catch (err) {
    return { message: err.message };
  }
};

module.exports = {
  loginUser,
};