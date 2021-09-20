const bodyParser = require('body-parser');
const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');

const app = express();

app.use(bodyParser.json());

app.get('/simpsons',
  rescue(async (req, res) => {
    const file = await fs.readFile('./simpsons.json');
    res.send(JSON.parse(file));
  })
);

app.get('/simpsons/:id',
  rescue(async (req, res, next) => {
    const file = await fs.readFile('./simpsons.json');
    const simpsons = JSON.parse(file);
    const { id } = req.params;
    const simpson = simpsons.find((element) => element.id === id);
    simpson ? res.json(simpson) : next(new Error('simpson not found'));
  })
);

app.post('/simpsons',
  rescue(async (req, res, next) => {
    const file = await fs.readFile('./simpsons.json');
    const simpsons = JSON.parse(file);
    const { id, name } = req.body;
    console.log(id, name);
    const exists = simpsons.find((element) => element.id === id);
    console.log(exists);
    if (exists) {
      return next(new Error('id already exists'))
    }
    simpsons.push({ id, name });
    console.log(simpsons);
    await fs.writeFile('./simpsons.json', JSON.stringify(simpsons));

    res.status(204).end();
  })
);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
})

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});
