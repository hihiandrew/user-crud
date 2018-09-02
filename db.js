const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/user-crud',
  { logging: false }
);

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const seed = () => {
  Promise.all([
    User.create({ name: 'moe' }),
    User.create({ name: 'larry' }),
    User.create({ name: 'curly' }),
  ]).then(() => {
    console.log('users seeded');
  });
};

db.sync({ force: true }).then(() => {
  seed();
});

module.exports = { db, User };
