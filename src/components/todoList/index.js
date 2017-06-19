import React from 'react';

const TodoList = ({ todos }) => {
  const todoItems = todos.map(todo => (
    <li
      key={todo.id}
      className="todo"
    >
      {todo.text}
    </li>
  ));

  return (
    <ul>
      {todoItems}
    </ul>
  );
};

export default TodoList;