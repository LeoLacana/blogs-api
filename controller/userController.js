const {
    setUser,
    showAllUsers } = require('../service/userService');

const {
    showUserById } = require('../service/userService');

const registerUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const token = await setUser(displayName, email, password, image);
    return res.status(201).json({ token });
};

const getUsers = async (req, res) => {
    const users = await showAllUsers();
    return res.status(200).json(users);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await showUserById(id);
        if (!user) res.status(404).json({ message: 'User does not exist' });
        return res.status(200).json(user);
    } catch (err) {
        return { message: err.message };
    }
};

module.exports = {
    registerUser,
    getUsers,
    getUserById,
};