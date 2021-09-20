const rescue = require('express-rescue');
const Cep = require('../services/Cep');

const getAll = rescue(async (_req, res) => {
  const ceps = await Cep.getAll();

  return res.status(200).json(ceps);
});

const getByNumber = rescue(async (req, res) => {
  const { cep: cepNumber } = req.params;

  const {cep, code, message} = await Cep.getByNumber(cepNumber);

  if (message) return res.status(code).json({ message });

  return res.status(code).json(cep);
});

module.exports = {
  getAll,
  getByNumber,
}