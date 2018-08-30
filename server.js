const express = require('express');
const app = express();
const { db, User } = require('./db');
const morgan = require('morgan');
const path = require('path');
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/users/', async (req, res, next) => {
  const users = await User.findAll();
  res.json(users);
});

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public'));
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}..`);
});
