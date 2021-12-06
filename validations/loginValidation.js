const validationEmail = async (req, res, next) => {
  const { email } = req.body;

  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }

  if (!email) return res.status(400).json({ message: '"email" is required' });

  next();
};

const validationPassword = async (req, res, next) => {
  const { password } = req.body;

  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  next();

  if (!password) return res.status(400).json({ message: '"password" is required' });
};

module.exports = {
  validationEmail,
  validationPassword,
};