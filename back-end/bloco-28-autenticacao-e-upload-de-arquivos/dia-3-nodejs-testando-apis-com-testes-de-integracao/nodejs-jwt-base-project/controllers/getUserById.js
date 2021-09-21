const userModel = require('../models/user');

module.exports = async (req, res) => {
  const { username } = req.body;

  const userData = await userModel.findUser(username);

  return res.status(200).json({ userData });

}