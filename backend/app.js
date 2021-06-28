const express = require('express');
const app = express();

const config = require('./utils/config');
const logger = require('./utils/logger');
const helmet = require('helmet');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const authRouter = require('./controllers/auth');
const postsRouter = require('./controllers/posts');
const usersRouter = require('./controllers/users');
const multer = require('multer');
const path = require('path');

const baseUrl = 'https://in-touch-heroku.herokuapp.com/';

logger.info('Establishing connection to MongoDB using URI: ', config.MONGODB_URI);

// Connect to MongoDB database
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => logger.info('Successfully connected to MongoDB'))
  .catch(() => logger.error('Failed to connect to MongoDB'));

// Set up path to images folder in public folder
app.use('/api/images', express.static(path.join(__dirname, 'public/images')));

// Set up middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

// Set up app to handle request
app.get('*',(request, response) => {
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// Handle files uploaded to the server
const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, 'public/images');
  }, 
  filename: (request, file, callback) => {
    callback(null, request.body.name);
  }
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), async (request, response, next) => {
  try {
    return response.status(200).json('File successfully uploaded');
  } catch(error) {
    next(error);
  }
});

// Configure route handling
app.use('/auth', authRouter);
app.use('/posts', postsRouter);
app.use('/users', usersRouter);

module.exports = app;

