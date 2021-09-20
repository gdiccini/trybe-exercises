const jwt = require('jsonwebtoken');
const models = require('../models');

const secret = 'mysecret';

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }

  try {
    const decoded = jwt.verify(authorization, secret);

    const user = await models.findUser(decoded.data.username);

    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    }

    req.user = decoded.data;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};