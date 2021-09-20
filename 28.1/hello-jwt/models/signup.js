const connection = require('./connection');

module.exports = async (username, password) => {
  await connection()
    .then((db) => db.collection('users').insertOne({ username, password }));

  return true;
};
