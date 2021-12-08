const router = require('express').Router();

const validateJWT = require('../auth/validateJWT');

const {
    titleValidation,
    contentValidation,
    categoryIdsValidation } = require('../validations/postValidation');

const { registerPost } = require('../controller/postController');

router.post('/',
    validateJWT,
    titleValidation,
    contentValidation,
    categoryIdsValidation,
    registerPost);

module.exports = router;