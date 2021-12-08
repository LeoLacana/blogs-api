const nameValidation = (req, res, next) => {
    try {
        const { name } = req.body;
        if (!name) res.status(400).json({ message: '"name" is required' });
    } catch (err) {
        return { message: err.message };
    }
    next();
};

module.exports = {
    nameValidation,
};