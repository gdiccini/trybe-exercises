require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const defaultStorage = multer.diskStorage({
  destination: (req, file, callback) => { callback(null, 'uploads'); } });

  const multipleUpload = multer({ storage: defaultStorage });

const originalName = (fileName) => {
  const nameParts = fileName.split('-');
  nameParts.shift();
  console.log('nameparts', nameParts);
  return nameParts.join('-');
};

const fileExists = (fileName) => {
  const files = fs.readdirSync(`${__dirname}/uploads`);
  if (files.length > 0) {
    return files.some((file) => originalName(file) === fileName);
  }
  return false;
};

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'image/png') {
    req.fileValidationError = true;
    return cb(null, false);
  }

  if (fileExists(file.originalname)) {
    req.fileDuplicated = true;
    return cb(null, false);
  }

  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
});

const profileStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'profilePic');
  },
});

const profileUpload = multer({ storage: profileStorage });

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static(__dirname + '/uploads'));

app.get('/ping', controllers.ping);

app.post('/uploads', upload.single('file'), controllers.upload);
app.post('/multiple', multipleUpload.array('files'), controllers.multiple);
app.post('/profile', profileUpload.single('profilePic'), controllers.profile);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
