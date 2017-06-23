const db = require('./db.js');
const Sequelize = require('sequelize');

var Activity = db.define('activities', {
  name: {
    type: Sequelize.STRING,
    //allowNull: false
  },
  age_range: {
    type: Sequelize.STRING,
    //allowNull: false
  }
});

module.exports = Activity;
