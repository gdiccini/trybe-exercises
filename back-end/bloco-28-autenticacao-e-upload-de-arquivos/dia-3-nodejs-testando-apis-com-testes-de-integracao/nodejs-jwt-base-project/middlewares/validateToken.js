const jwt = require('jsonwebtoken');

const secret = 'mysecrete';

module.exports = async (req, res, next) => {
  const { userId } =  req.params;
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(404).json({ message: 'Token não encontrado ou informado' });
  };

  try {
    const decoded = jwt.verify(token, secret);

    if (decoded.id !== userId) {
      return res.status(401).json({ message: 'Acesso negado' });
    }

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
