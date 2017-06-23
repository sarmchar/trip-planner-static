const express = require('express');
const app = express();
const {db, Place, Hotel, Restaurant, Activity} = require('./models');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
app.use(volleyball);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));
app.use('/jquery', express.static('node_modules/jquery/dist'));

app.get('/', function(req, res, next) {
  var outerScopeContainer = {};
  //console.log('DB HOTELS ASDFASF', db);
  Hotel.findAll()
  .then(function (dbHotels) {
    outerScopeContainer.dbHotels = dbHotels;
    return Restaurant.findAll();
  })
  .then(function (dbRestaurants) {
    outerScopeContainer.dbRestaurants = dbRestaurants;
    return Activity.findAll();
  })
  .then(function (dbActivities) {
    res.render('index', {
      hotels: outerScopeContainer.dbHotels,
      restaurants: outerScopeContainer.dbRestaurants,
      activities: dbActivities
    });
  })
  .catch(next);
});

app.use(function(req, res, next) {
  const err = new Error('That page doesn\'t exist!');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  err.status = err.status || 500;
  console.log(err);
  res.status(err.status).render('error', { err: err });
});

db.sync()
.then(function() {
  app.listen(1337, function() {
    console.log("Server is listening on port 1337");
  });
});
