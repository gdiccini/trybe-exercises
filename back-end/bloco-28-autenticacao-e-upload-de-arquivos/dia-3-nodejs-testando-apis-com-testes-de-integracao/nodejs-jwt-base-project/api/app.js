const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const validateJWT = require('../middlewares/validateToken');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();

apiRoutes.get('/ping', (req, res) => res.send('pong'));
apiRoutes.get('/api/users/:userId', validateJWT, routes.getUserById);
apiRoutes.get('/api/posts', routes.getPosts);
apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.post('/api/login', routes.login);

app.use(apiRoutes);

module.exports = app;
