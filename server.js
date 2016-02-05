var React = require('react');
var app = require('express')();
var compression = require('compression');
var MongoClient = require('mongodb').MongoClient;
var routes = require('./config/routes');
var assert = require('assert');

app.use(compression())
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

app.get('/', routes.index);

var $port = process.env.PORT || 3000;
var server = app.listen($port, function() {
  console.log('listening...');
});
