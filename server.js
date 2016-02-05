var React = require('react');
var app = require('express')();
var compression = require('compression');
var mongoose = require('mongoose');
var monk = require('monk');
var routes = require('./config/routes');
var db = monk('localhost:27017/apt_logger');

app.use(compression())
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(function(res, req, next) {
  req.db = db;
  next();
});

app.get('/', routes.index);

var $port = process.env.PORT || 5000;
var server = app.listen($port, function() {
  console.log('listening...');
});
