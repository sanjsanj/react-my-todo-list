import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/addTodo/';
import TodoList from './components/todoList';

import { actions } from './actions/';

const App = ({ submitTodo, todos }) => (
  <div>
    <h1>Todo list</h1>
    <AddTodo
      submitTodo={submitTodo}
    />
    <TodoList
      todos={todos}
    />
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (event) => {
    if (event) {
      dispatch(actions.submitTodo(event));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
