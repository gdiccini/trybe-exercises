const models = require('../models');
const randomNumber = require('../util/randomNumber');

module.exports = async (username, password) => {
  const users = await models.getAllUsers();

  const duplicatedUser = users.find((user) => user.username === username);

  if (duplicatedUser) return false;

  const newUser = { username, password };

  if (randomNumber() > 50) {
    newUser.admin = true;
  } else {
    newUser.admin = false;
  }

  const user = await models.signup(...newUser);

}