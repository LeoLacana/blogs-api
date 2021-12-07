const router = require('express').Router();

const validateJWT = require('../auth/validateJWT');

const { nameValidation } = require('../validations/categoriesValidation');

const { registerCategories } = require('../controller/categoriesController');

router.post('/', validateJWT, nameValidation, registerCategories);

module.exports = router;