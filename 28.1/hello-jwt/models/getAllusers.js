const connection = require('./connection');

module.exports = async () => {
  const users = connection()
    .then((db) => db.collection('users').find().toArray())
    .then((result) => result);

  return users;
};
