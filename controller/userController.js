const {
    setUser } = require('../service/userService');

const registerUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const token = await setUser(displayName, email, password, image);
    return res.status(201).json({ token });
}

module.exports = {
    registerUser,
}