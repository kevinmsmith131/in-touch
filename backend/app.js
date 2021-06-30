const express = require('express');
const app = express();

const config = require('./utils/config');
const logger = require('./utils/logger');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const authRouter = require('./controllers/auth');
const postsRouter = require('./controllers/posts');
const usersRouter = require('./controllers/users');
const multer = require('multer');
const path = require('path');

logger.info('Establishing connection to MongoDB using URI: ', config.MONGODB_URI);

// Connect to MongoDB database
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => logger.info('Successfully connected to MongoDB'))
  .catch(() => logger.error('Failed to connect to MongoDB'));

// Set up middleware
app.use(cors());
app.use(express.json());
app.use(morgan('common'));

// Configure route handling
app.use('/auth', authRouter);
app.use('/posts', postsRouter);
app.use('/users', usersRouter);

// Create storage for multer
const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, path.join(__dirname, 'build/images'));
  }, 
  filename: (request, file, callback) => {
    callback(null, request.body.name);
  }
});

// Handle uploading images using multer
const upload = multer({ storage: storage });
app.post('/upload', upload.single('file'), async (request, response, next) => {
  try {
    return response.status(200).json('File successfully uploaded');
  } catch(error) {
    next(error);
  }
});

// Set up app to handle request
app.use(express.static(path.join(__dirname, 'build')));
app.get('*',(request, response) => {
  response.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;

