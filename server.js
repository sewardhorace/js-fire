var app = require('express')();
var bodyParser = require('body-parser');
var assert = require('assert');
var mongoose = require('mongoose');
var compression = require('compression');
var routes = require('./config/routes');

app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/todos';
var db = mongoose.connect(url, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

app.use(function(req, res, next) {
  req.db = db;
  next();
});

app.get('/', routes.index);
app.post('/todo', routes.newTodo);

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('listening...');
});
