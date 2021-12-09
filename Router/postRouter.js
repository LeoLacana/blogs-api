const router = require('express').Router();

const validateJWT = require('../auth/validateJWT');

const {
    titleValidation,
    contentValidation,
    categoryIdsValidation,
    validationAuthIdUser } = require('../validations/postValidation');

const {
    registerPost,
    getPost,
    getPostById,
    updatePost,
    deletePost } = require('../controller/postController');

router.post('/',
    validateJWT,
    titleValidation,
    contentValidation,
    categoryIdsValidation,
    registerPost);

router.get('/',
    validateJWT,
    getPost);

router.get('/:id',
    validateJWT,
    getPostById);

router.put('/:id',
    validateJWT,
    validationAuthIdUser,
    updatePost);

router.delete('/:id',
    validateJWT,
    deletePost);

module.exports = router;