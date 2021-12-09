const {
  setPost,
  showPost,
  showPostById,
  EditPost,
  removePost } = require('../service/postService');

const registerPost = async (req, res) => {
  const bodyPost = req.body;
  const { email } = req.user;
  try {
    const post = await setPost(bodyPost, email);
    return res.status(201).json(post);
  } catch (err) {
    return { message: err.message };
  }
};

const getPost = async (req, res) => {
  try {
    const post = await showPost();
    return res.status(200).json(post);
  } catch (err) {
    return { message: err.message };
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await showPostById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(post);
  } catch (err) {
    return { message: err.message };
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content, categoryIds } = req.body;
  try {
    if (!title) return res.status(400).json({ message: '"title" is required' });
    if (!content) return res.status(400).json({ message: '"content" is required' });
    if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });
    const postAfterEdit = await EditPost(title, content, id);
    return res.status(200).json(postAfterEdit);
  } catch (err) {
    return { message: err.message };
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await removePost(id);
    return res.status(204).json();
  } catch (err) {
    return { message: err.message };
  }
};

module.exports = {
  registerPost,
  getPost,
  getPostById,
  updatePost,
  deletePost,
};