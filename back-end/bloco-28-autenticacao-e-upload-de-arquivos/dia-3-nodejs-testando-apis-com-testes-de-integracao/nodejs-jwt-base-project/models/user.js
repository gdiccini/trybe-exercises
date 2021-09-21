const { connection } = require('./connection');

const registerUser = async (username, password) => {
  const db = await connection();
  const userCreated = await db.collection('users').insertOne({ username, password });
  return userCreated.ops[0].username;
}

const findUser = async (username) => {
  const db = await connection();
  const userData = await db.collection('users').findOne({ username });
  return userData;
}

module.exports = { registerUser, findUser };
