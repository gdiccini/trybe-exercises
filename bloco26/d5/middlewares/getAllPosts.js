const posts = require('./posts');

const getAllPosts = (req, res, next) => {
  console.log(posts);
  res.status(200).json(posts);
}

module.exports = getAllPosts;
