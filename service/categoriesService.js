const { Categories } = require('../models');

const setCategories = async (name) => {
    try {
        const categories = await Categories.create({ name });
        return categories;
    } catch (err) {
        return { message: err.message };
    }
};

const showCategories = async () => {
    try {
        const categories = await Categories.findAll();
        return categories;
    } catch (err) {
        return { message: err.message };
    }
};

module.exports = {
    setCategories,
    showCategories,
};