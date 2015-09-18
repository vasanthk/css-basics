import React from 'react';
import TodosView from 'components/TodosView';
import TodosForm from 'components/TodosForm';
import { bindActionCreators } from 'redux';
import * as TodoActions from 'actions/TodoActions';
import { connect } from 'react-redux';

// Decorator:
// Redux’s @connect decorator wraps our class in another component ( <Connector>),
// giving it access to the requested parts of state as props, hence why we can use todos as we do.
@connect(state => ({todos: state.todos}))
export default
class Home extends React.Component {
  render() {
    const { todos, dispatch } = this.props;

    return (
      <div id="todo-list">
        <TodosView todos={todos}
          {...bindActionCreators(TodoActions, dispatch)} />
        <TodosForm
          {...bindActionCreators(TodoActions, dispatch)} />
      </div>
    );
  }
}