const express = require('express');
const middlewares = require('./middlewares');

const app = express();

app.get('/posts', middlewares.getAllPosts);

app.get('/posts/:id', middlewares.getPostById);

app.get('/user/:name', middlewares.getCommentsByUserName);

app.use((err, req, res, next) => {
  res.status(404).send(`Erro: ${ err.message }`);
});

app.listen(3000, () => {
  console.log('Escutando a porta 3000.');
});
