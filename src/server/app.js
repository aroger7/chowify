require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const { mongoose } = require('./db/mongoose');
const users = require('./routes/users');
const recipes = require('./routes/recipes');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['x-auth', 'Content-Type'],
    exposedHeaders: ['x-auth']
  })
);
app.use(express.static(path.resolve(__dirname, '../../dist')));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'development') {
  app.get('/', (req, res) => {
    res.render(path.resolve(__dirname, '../../dist/index.html'));
  });
}

app.use('/users', users);
app.use('/recipes', recipes);

module.exports = { app };
