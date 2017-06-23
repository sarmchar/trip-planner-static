const db = require('./db.js');
const Sequelize = require('sequelize');

var Hotel = db.define('hotels', {
  name: {
    type: Sequelize.STRING,
    //allowNull: false
  },
  num_stars: {
    type: Sequelize.FLOAT(1,5),
    //allowNull: false
  },
  ammenities: {
    type: Sequelize.STRING,
    //allowNull: false
  }
});

module.exports = Hotel;
