var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
  inputValueChanged: function(e) {

  },

  render: function() {
    return (
      <DefaultLayout title="Welcome">
        <form action='/todo' method='post'>
          <input type='text' name='name' />
          <input type='submit' />
        </form>
        {this.props.todos.map(function(todo) {
          return <div key={todo._id}>{todo.name}</div>
        })}
      </DefaultLayout>
    )
  }
});

module.exports = HelloMessage;
