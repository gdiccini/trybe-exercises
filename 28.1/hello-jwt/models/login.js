const connection = require('./connection');

module.exports = async (username, password) => {
  const user = await connection()
    .then((db) => db.collection('users').findOne({ username, password }));

  return user;
};