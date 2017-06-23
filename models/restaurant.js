const db = require('./db.js');
const Sequelize = require('sequelize');

var Restaurant = db.define('restaurants', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER(1,5) //?????
  }
});


module.exports = Restaurant;
