const { ObjectID } = require('mongodb');
const connection = require('./connection');

const getAll = async () => {
  const moviesCollection = await connection()
    .then((db) => db.collection('movies'));

  const movies = await moviesCollection
    .find()
    .toArray();

  return movies.map(({ _id, ...movieData }) => ({
    id: _id,
    ...movieData,
  }));
};

const getById = async (id) => {
  const movie = await connection()
    .then((db) => db.collection('movies').findOne(new ObjectID(id)));

  if (!movie) return null;

  const {
    title,
    directedBy,
    releaseYear
  } = movie;

  return {
    id,
    title,
    directedBy,
    releaseYear,
  }

}

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await connection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
  };
};

module.exports = {
  create,
  getAll,
  getById,
};
