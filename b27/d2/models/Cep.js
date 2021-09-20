const connection = require('./connection');

const getAll = async () => {
  const [ceps] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps',
  );
  return ceps;
};

const getByNumber = async (number) => {
  const [cep] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep = ?',
    [number],
  );
  return cep;
};

module.exports = {
  getAll,
  getByNumber,
};
