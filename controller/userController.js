const {
    setUser,
    showAllUsers } = require('../service/userService');

const registerUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const token = await setUser(displayName, email, password, image);
    return res.status(201).json({ token });
};

const getUsers = async (req, res) => {
    const users = await showAllUsers();
    return res.status(200).json(users);
};

module.exports = {
    registerUser,
    getUsers,
};