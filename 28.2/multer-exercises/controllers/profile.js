const fs = require('fs');

const writeProfile = (profile) => {
  console.log(profile);
  fs.writeFileSync('./profiles.json', JSON.stringify(profile));

  return true;
};

module.exports = (req, res) => {
  const { name, email, password, bio } = req.body;
  const id = req.file.filename;

  writeProfile({ id, name, email, password, bio });

  return res.status(200).json({ message: 'ok' });
};
