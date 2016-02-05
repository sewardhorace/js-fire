var React = require('react');
var app = require('express')();
var compression = require('compression');
app.use(compression())
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

var routes = require('./config/routes');
app.get('/', routes.index);

var server = app.listen(3000, function() {
  console.log('listening...');
});
