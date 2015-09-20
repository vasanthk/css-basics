import React         from 'react';
import { PropTypes } from 'react';
import Immutable     from 'immutable';

export default class TodosView extends React.Component {
  static propTypes = {
    todos: PropTypes.instanceOf(Immutable.List).isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  };

  // note that we use arrow functions in the class definition,
  // so that this will be bound to the class’ constructor (since arrow functions inherit the scope’s this)
  handleDelete = (e) => {
    const id = Number(e.target.dataset.id);

    // Equivalent to `dispatch(deleteTodo())`
    this.props.deleteTodo(id);
  };

  handleEdit = (e) => {
    const id = Number(e.target.dataset.id);
    const currentVal = this.props.todos.get(id).text;

    // For cutting-edge UX
    let text = window.prompt('', currentVal);

    this.props.editTodo(id, text);
  };

  render() {
    const btnStyle = {
      'margin': '1em 0 1em 1em'
    };

    return (
      <div id="todos-list">
        {
          this.props.todos.map((todo, index) => {
            return (
              <div style={btnStyle} key={index}>
                <span>{todo}</span>
                <button style={btnStyle} data-id={index} onClick={this.handleDelete}>X</button>
                <button style={btnStyle} data-id={index} onClick={this.handleEdit}>Edit</button>
              </div>
            );
          })
        }
      </div>
    );
  }
}