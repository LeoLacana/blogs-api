const { generateToken } = require('../auth/generetedToken');
const { showUser } = require('../service/userService');

const loginUser = async (req, res) => {
  const { email } = req.body;
  const registeredUser = await showUser(email);
  console.log(registeredUser);
  if (!registeredUser) {
    console.log('cheguei aqui');
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const token = await generateToken(email);
  return res.status(200).json({ token });
};

module.exports = {
  loginUser,
};