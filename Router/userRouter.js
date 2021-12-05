const router = require('express').Router();
const {
    registerUser } = require('../controller/userController');

const {
    validationDisplayName,
    validationEmail,
    validationPassword } = require('../validations/userValidations');

router.post('/',
    validationDisplayName,
    validationPassword,
    validationEmail,
    registerUser);

module.exports = router;