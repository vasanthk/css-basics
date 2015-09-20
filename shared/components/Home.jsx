import React, { PropTypes }   from 'react';
import TodosView              from './TodosView';
import TodosForm              from './TodosForm';
import { bindActionCreators } from 'redux';
import * as TodoActions       from 'actions/TodoActions';
import { connect }            from 'react-redux';

// Decorator:
// Redux’s @connect decorator wraps our class in another component ( <Connector>),
// giving it access to the requested parts of state as props, hence why we can use todos as we do.

// Details:
// The @connect decorator is a factory function that takes a function as an argument and returns an actual decorator function.
// The returned function then converts a state from Redux to props of the Component - every time state changes.
// This is amazing because our component does not need to handle any Redux state change. All it needs to do is, being fed with new props.

// The connect decorator hides all the ugly and unmaintainable state transition codes as its implementation details.
// It exposes a simple, readable and easy to understand transform function.
// Reference link: https://medium.com/@tomchentw/redux-universal-576fb9475b5b
@connect(state => ({ todos: state.todos }))

export default class Home extends React.Component {
  static propTypes = {
    todos:    PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  static needs = [
    TodoActions.getTodos
  ];

  render() {
    const { todos, dispatch } = this.props;

    return (
      <div id="todo-list">
        <TodosView todos={todos}
          {...bindActionCreators(TodoActions, dispatch)} />

        <TodosForm
          {...bindActionCreators(TodoActions, dispatch)}/>
      </div>
    );
  }
}