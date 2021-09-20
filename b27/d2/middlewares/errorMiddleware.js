const error = (err, req, res, next) => {
  return res.status(err.code).send(err.message);
}

module.exports = error;
