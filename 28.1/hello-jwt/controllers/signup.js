const services = require('../services');

module.exports = async (req, res, _next) => {
  const { username, password } = req.body;

  const token = await services.signup(username, password);

  if (!token) {
    return res.status(409).json({ error: 'user already exists' });
  }

  return res.status(200).json({ token });
};
