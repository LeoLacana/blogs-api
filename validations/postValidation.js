const { showCategories } = require('../service/categoriesService');

const titleValidation = (req, res, next) => {
    const { title } = req.body;
    try {
    if (!title) return res.status(400).json({ message: '"title" is required' });
    } catch (err) {
        return { message: err.message };
    }
    next();
};

const contentValidation = (req, res, next) => {
    const { content } = req.body;
    try {
        if (!content) return res.status(400).json({ message: '"content" is required' });
    } catch (err) {
        return { message: err.message };
    }
    next();
};

const categoryIdsValidation = async (req, res, next) => {
    const { categoryIds } = req.body;
    // console.log(categoryIds);
    try {
        if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
        console.log(categoryIds);
        const categories = await showCategories();
        const idCategories = categories.map((category) => category.id);
        console.log(idCategories);
        const idCategoryExist = categoryIds.every((category) => idCategories.includes(category));
        if (!idCategoryExist) return res.status(400).json({ message: '"categoryIds" not found' });
    } catch (err) {
        return { message: err.message };
    }
    next();
};

module.exports = {
    titleValidation,
    contentValidation,
    categoryIdsValidation,
};