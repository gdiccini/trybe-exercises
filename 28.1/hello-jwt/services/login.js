/* eslint-disable complexity */
const models = require('../models');

module.exports = async (username, password) => {
  if (!username || typeof username !== 'string' || username.length < 5) {
    return { code: 'invalid_data', message: 'invalid userame or password' };
  }

  if (!password || typeof password !== 'string' || password.length < 5) {
    return { code: 'invalid_data', message: 'invalid userame or password' };
  }

  const user = await models.login(username, password);

  if (!user) {
    return { code: 'invalid_data', message: 'user does not exists' };
  }

  return user;
};
