const Cep = require('../models/Cep');

const getAll = async () => {
  const ceps = await Cep.getAll();

  return ceps;
};

const getByNumber = async (cepNumber) => {
  const regex = /\d{5}-?\d{3}/;
  const validCep = regex.test(cepNumber);

  const cep = await Cep.getByNumber(cepNumber);

  if (!cepNumber) return { code: 422, message: 'Número de cep é obrigatório.'};
  if (!validCep) return { code: 400, message: 'Número de cep inválido.'};
  if (!cep.length) return { code: 404, message: 'Cep não encontrado.'}

  return { code: 200, cep };
}

module.exports = {
  getAll,
  getByNumber,
}
