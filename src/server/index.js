require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { mongoose } = require('./db/mongoose');
const users = require('./routes/users');
const recipes = require('./routes/recipes');

const app = express();
const port = process.env.PORT;

app.use(express.static(path.resolve(__dirname, '../../dist')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render(path.resolve(__dirname, '../../dist/index.html'));
});

app.use('/users', users);
app.use('/recipes', recipes);

app.listen(port, () => console.log(`Listening on port ${port}`));
