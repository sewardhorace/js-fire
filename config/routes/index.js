var Todo = require('../../models/Todo');

exports.index = function(req, res) {
  var render = function(err, data) {
    res.render('index', {todos: data});
  }

  Todo.model.find(render);
}

exports.newTodo = function(req, res) {
  var todo = new Todo.model({name: req.body.name});
  todo.save(function() {
    res.redirect('/');
  });
}

