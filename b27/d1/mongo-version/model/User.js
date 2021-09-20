const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getNewUser = (authorData) => {
  const { id, firstName, lastName, email, password } = authorData;

  return {
      id,
      firstName,
      lastName,
      email,
      password,
  };
};

const validate = (firstName, lastName, email, password) => {
  if(!firstName) return { error: true, message: 'Primeiro nome é obrigatório!' };
  if(!lastName) return { error: true, message: 'Sobrenome nome é obrigatório!' };
  if(!email) return { error: true, message: 'Email é obrigatório!' };
  if(!password) return { error: true, message: 'Senha é obrigatória!' };
  if(email.length < 6) return { error: true, message: 'O campo password deve ter pelo menos 6 caracteres'};
  return false;
};

const getAllUsers = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray());
}

const getUserById = async (id) => {
  return connection()
    .then((db) => db.collection('users').findOne(new ObjectId(id)))
}

const create = async (firstName, lastName, email, password) => {
  return connection()
    .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password }))
    .then((result) => getNewUser({ id: result.insertedId, firstName, lastName, email, password }));
}

const edit = async (id, firstName, lastName, email, password) => {
  if(!ObjectId.isValid(id)) return null;
  const edited = connection()
    .then(
      (db) => db.collection('users').updateOne({ _id: ObjectId(id) }, { $set: { firstName, lastName, email, password }})
        .then(() => ({ id, firstName, lastName, email, password })),
    );
  return edited;
};

module.exports = {
  validate,
  create,
  getAllUsers,
  getUserById,
  edit,
}
