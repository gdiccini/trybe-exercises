const users = require('./users');

const getCommentsByUserName = (req, res, next) => {
  const { name } = req.params;
  const user = users.find((curr) => curr.user === name);
  (user) ? res.status(200).json(user.comments) : next(new Error('user not found'));
}

module.exports = getCommentsByUserName;
