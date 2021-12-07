const { Categories } = require('../models');

const setCategories = async (name) => {
    try {
        const categories = await Categories.create({ name });
        return categories;
    } catch (err) {
        return { message: err.message };
    }
};

module.exports = {
    setCategories,
};