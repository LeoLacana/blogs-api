const { BlogPosts } = require('../models');
const { showUser } = require('./userService');

const setPost = async (bodyPost, email) => {
    const { title, content } = bodyPost;
    try {
        const post = await BlogPosts.create(bodyPost);
        const { id } = post.dataValues;
        const user = await showUser(email);
        const userId = user.dataValues.id;
        const response = { id, title, content, userId };
        return response;
    } catch (err) {
        return { message: err.message };
    }
};

module.exports = {
    setPost,
};