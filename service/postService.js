const { BlogPosts, User, Categories } = require('../models');
const { showUser } = require('./userService');

const setPost = async (bodyPost, email) => {
  const { title, content, categoryIds } = bodyPost;
  console.log(categoryIds);
  try {
    const post = await BlogPosts.create(bodyPost);
    const user = await showUser(email);
    const userId = user.dataValues.id;
    const { id } = post.dataValues;
    console.log(userId);
    const response = { id, title, content, userId };
    return response;
  } catch (err) {
    return { message: err.message };
  }
};

const showPost = async () => {
  try {
    const post = await BlogPosts.findAll(
      {
        include: [
          { model: User, as: 'Users', attributes: { exclude: ['password'] } },
          { model: Categories, as: 'Categories', through: { attributes: [] } },
        ],
      },
    );
    return post;
  } catch (err) {
    return { message: err.message };
  }
};

const showPostById = async (id) => {
  try {
    const post = await BlogPosts.findOne(
      { 
        where: { id }, 
        include: [
          { model: User, as: 'Users', attributes: { exclude: ['password'] } },
          { model: Categories, as: 'Categories' },
        ],
      },
    );
    return post;
  } catch (err) {
    return { message: err.message };
  }
};

const EditPost = async (title, content, id) => {
  try {
    await BlogPosts.update(
      { title, content },
      { where: { id } },
    );
    const postAfterEdit = await BlogPosts.findByPk(id, {
      include: {
        model: Categories, as: 'Categories', through: { attributes: [] },
      },
    });
    return postAfterEdit;
  } catch (err) {
    return { message: err.message };
  }
};

const removePost = async (id) => {
  try {
    await BlogPosts.destroy({ where: { id } });
  } catch (err) {
    return { message: err.message };
  }
};

module.exports = {
  setPost,
  showPost,
  showPostById,
  EditPost,
  removePost,
};