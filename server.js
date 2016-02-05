var React = require('react');
var app = require('express')();
var compression = require('compression');
var routes = require('./config/routes');

app.use(compression())
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', routes.index);

var $port = process.env.PORT || 3000;
var server = app.listen($port, function() {
  console.log('listening...');
});
