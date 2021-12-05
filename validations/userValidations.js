const { showUser } = require('../service/userService');

const validationDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (typeof (displayName) === 'string' && displayName.length < 8) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const validationEmail = async (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[com]+/i;

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  const user = await showUser(email);
  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

const validationPassword = async (req, res, next) => {
  const { password } = req.body;

  if (!password) return res.status(400).json({ message: '"password" is required' });

  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

module.exports = {
  validationDisplayName,
  validationEmail,
  validationPassword,
};