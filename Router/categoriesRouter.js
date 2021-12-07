const router = require('express').Router();

const validateJWT = require('../auth/validateJWT');

const { nameValidation } = require('../validations/categoriesValidation');

const { registerCategories,
    getCategories } = require('../controller/categoriesController');

router.post('/', validateJWT, nameValidation, registerCategories);

router.get('/', validateJWT, getCategories);

module.exports = router;