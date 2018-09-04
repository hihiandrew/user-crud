const express = require('express');
const app = express();
const { User } = require('./db');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/dist', express.static('dist'));

app.get('/api/users/', async (req, res, next) => {
  const users = await User.findAll();
  res.json(users);
});

app.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      res.json(user);
    })
    .catch(next);
});

app.put('/api/users/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => user.update(req.body))
    .then(user => res.json(user))
    .catch(next);
});

app.delete('/api/users/:id', (req, res, next) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(async () => {
      const users = await User.findAll();
      res.send(users);
    })
    .catch(next);
});

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}..`);
});
