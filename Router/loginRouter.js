const router = require('express').Router();

const {
  loginUser } = require('../controller/loginController');

const {
  validationEmail,
  validationPassword } = require('../validations/loginValidation');

router.post('/', validationEmail, validationPassword, loginUser);

module.exports = router;