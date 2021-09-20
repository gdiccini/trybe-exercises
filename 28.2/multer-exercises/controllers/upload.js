const upload = (req, res) => {
  if (req.fileValidationError) {
    return res.status(403).json({
      error: {
        message: 'Extension must be "png"',
      },
    });
  }

  if (req.fileDuplicated) {
    return res.status(409).json({
      error: { message: 'File already exists' },
    });
  }

  return res.send();
};

module.exports = upload;
