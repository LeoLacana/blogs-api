const { setCategories,
    showCategories } = require('../service/categoriesService');

const registerCategories = async (req, res) => {
    const { name } = req.body;
    try {
        const categories = await setCategories(name);
        return res.status(201).json({
            id: categories.id,
            name: categories.name,
        });
    } catch (err) {
        return { message: err.message };
    }
};

const getCategories = async (req, res) => {
    try {
        const categories = await showCategories();
        return res.status(200).json(categories);
    } catch (err) {
        return { message: err.message };
    }
};

module.exports = {
    registerCategories,
    getCategories,
};