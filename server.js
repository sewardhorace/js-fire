var app = require('express')();
var compression = require('compression');
var routes = require('./config/routes');
var assert = require('assert');
var mongoose = require('mongoose');

app.use(compression())
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test';
mongoose.connect(url, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

app.get('/', routes.index);

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('listening...');
});
