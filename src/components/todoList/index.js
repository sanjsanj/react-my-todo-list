import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const todoItems = todos.map((todo) => {
    const completed = todo.completed ? ' completed' : '';

    return (
      <li
        key={todo.id}
        className={`todo${completed}`}
        onClick={() => toggleTodo(todo.id)}
      >
        <button
          type="button"
          className="delete-todo"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
        {todo.text}
      </li>
    );
  });

  return (
    <ul>
      {todoItems}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    },
  )).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
