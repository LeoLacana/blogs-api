const { setPost } = require('../service/postService');

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

module.exports = {
  registerPost,
};