import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AddTodo from './components/addTodo/';
import TodoList from './components/todoList';

import { actions } from './actions/';

export const App = ({ submitTodo, todos, toggleTodo, deleteTodo, undeleteTodo, deleted }) => (
  <div
    className="app"
  >
    <h1>Todo list</h1>
    <AddTodo
      submitTodo={submitTodo}
      undeleteTodo={undeleteTodo}
      deleted={deleted}
    />
    <TodoList
      todos={todos}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    },
  )).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  undeleteTodo: PropTypes.func.isRequired,
  deleted: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }),
};

App.defaultProps = {
  deleted: {},
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (event) => {
    if (event) {
      dispatch(actions.submitTodo(event));
    }
  },

  toggleTodo: (id) => {
    dispatch(actions.toggleTodo(id));
  },

  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id));
  },

  undeleteTodo: () => {
    dispatch(actions.undeleteTodo());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
