var mongoose = require('mongoose');

// define class
var Todo = {}

// define db schema
Todo._schema = function() {
  return new mongoose.Schema({
    name: String
  });
}

// define db model
Todo.model = mongoose.model('Todo', Todo._schema())

module.exports = Todo;
