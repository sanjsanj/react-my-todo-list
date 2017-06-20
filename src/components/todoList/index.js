import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos }) => {
  const todoItems = todos.map((todo) => {
    const completed = todo.completed ? ' completed' : '';

    return (
      <li
        key={todo.id}
        className={`todo${completed}`}
      >
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
};

export default TodoList;
