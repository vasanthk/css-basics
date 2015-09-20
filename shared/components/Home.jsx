import React, { PropTypes }   from 'react';
import TodosView              from './TodosView';
import TodosForm              from './TodosForm';
import { bindActionCreators } from 'redux';
import * as TodoActions       from 'actions/TodoActions';
import { connect }            from 'react-redux';

// Decorator:
// Redux’s @connect decorator wraps our class in another component ( <Connector>),
// giving it access to the requested parts of state as props, hence why we can use todos as we do.
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