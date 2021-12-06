const router = require('express').Router();

// const { validateJWT } = require('../auth/validateJWT');

const {
    registerUser,
    getUsers } = require('../controller/userController');

const {
    validationDisplayName,
    validationEmail,
    validationPassword } = require('../validations/userValidations');

router.post('/',
    validationDisplayName,
    validationPassword,
    validationEmail,
    registerUser);

router.get('/',
    getUsers);

module.exports = router;