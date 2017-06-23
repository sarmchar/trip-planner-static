const db = require('./db');
//const Sequelize = require('sequelize');
const Place = require('./place');
const Hotel = require('./hotel.js');
const Restaurant = require('./restaurant.js');
const Activity = require('./activity.js');

//console.log('Hotel: ', Hotel);
//const Place = require('place.js');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
	db,
	Place,
	Hotel,
	Restaurant,
	Activity
};
