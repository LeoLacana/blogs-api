const router = require('express').Router();

const validateJWT = require('../auth/validateJWT');

const {
    registerUser,
    getUsers,
    getUserById,
    deleteUser } = require('../controller/userController');

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
    validateJWT,
    getUsers);

router.get('/:id',
    validateJWT,
    getUserById);

router.delete('/:id',
    validateJWT,
    deleteUser);

module.exports = router;