const jwt = require('jsonwebtoken');
const services = require('../services');

const secret = 'mysecret';

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await services.login(username, password);

    if (user.message) {
      return res.status(401).json({ message: user.message });
    }

    const userWithoutPassword = { username };

    if (user.username === 'admin' && user.password === 's3nh4S3gur4???') {
      userWithoutPassword.admin = true;
    } else {
      userWithoutPassword.admin = false;
    }

    const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };

    const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
