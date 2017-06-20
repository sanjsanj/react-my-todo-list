import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/addTodo/';
import TodoList from './components/todoList';

import { actions } from './actions/';

export const App = ({ submitTodo, todos, toggleTodo }) => (
  <div>
    <h1>Todo list</h1>
    <AddTodo
      submitTodo={submitTodo}
    />
    <TodoList
      todos={todos}
      toggleTodo={toggleTodo}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
