var React = require('react');
var app = require('express')();
var compression = require('compression');
app.use(compression())
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

var routes = require('./config/routes');
app.get('/', routes.index);

var $port = process.env.PORT || 5000;
var server = app.listen($port, function() {
  console.log('listening...');
});
