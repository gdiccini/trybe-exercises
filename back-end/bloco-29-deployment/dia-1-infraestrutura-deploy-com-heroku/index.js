require('dotenv/config');
const express = require('express');

const app = express();

app.get('/', (req, res) => res.send(process.env.TEXT));

const PORT = process.env.PORT || 3000;

app.listen(3000, console.log(`Online na porta ${PORT}`));