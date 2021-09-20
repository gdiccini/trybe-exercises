const express = require('express');
const bodyParser = require('body-parser');
const User = require('./model/User');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/users', async(req, res) => {
  const users = await User.getAllUsers();

  return res.status(200).json(users);
})

app.get('/users/:id', async(req, res) => {
  const { id } = req.params;
  const user = await User.getUserById(id);

  return res.status(200).json(user);
})

app.post('/users', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const validation = User.validate(firstName, lastName, email, password);
  if (validation.error) {
    return res.status(400).json({ error: true, messge: validation.message });
  }

  const newUser = await User.create(firstName, lastName, email, password);


  return res.status(200).json(newUser);
});

app.put('/users/:id', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const { id } = req.params;

  const edited = await User.edit(id, firstName, lastName, email, password);

  return res.status(200).json(edited);
});

app.listen(PORT, () => console.log(`Listen on port ${ PORT }`));
