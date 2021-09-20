require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);
app.get('/users/me', middlewares.authJWT, (req, res) => res.status(200).json(req.user));
app.get('/top-secret',
  middlewares.authJWT,
  middlewares.authAdmin,
  (req, res) => res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Aranha!' }));

app.post('/login', controllers.login);
app.post('/signup', controllers.signup);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
