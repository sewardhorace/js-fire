var Todo = require('../../models/Todo');

exports.newTodo = function(req, res) {
  console.log(res);
  res.render('index', {todos: data});
}
