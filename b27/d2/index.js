const express = require('express');
const bodyParser = require('body-parser');

const erroMiddleware = require('./middlewares/errorMiddleware');

const pong = require('./middlewares/Pong');
const Cep = require('./controllers/Cep');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.get('/ping', pong);

app.get('/ceps', Cep.getAll);
app.get('/ceps/:cep', Cep.getByNumber);

// app.use(erroMiddleware);

app.listen(PORT, () => {
  console.log(`Watching port ${ PORT }`);
});
