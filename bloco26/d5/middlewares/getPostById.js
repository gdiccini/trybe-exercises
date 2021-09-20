const posts = require('./posts');

const getPostById = (req, res, next) => {
  const { id } = req.params;
  const post = posts.find((curr) => curr.id === Number(id));
  (post) ? res.status(200).json(post) : next(new Error('id not found'));
}

module.exports = getPostById;
