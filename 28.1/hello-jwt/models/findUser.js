const connection = require('./connection');

module.exports = async (username) => {
  const user = await connection()
    .then((db) => db.collection('users').findOne({ username }));

  return user;
};