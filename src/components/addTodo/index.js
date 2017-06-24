import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo, undeleteTodo, deleted, inputText, inputChanged }) => {
  let input;
  const disableUndelete = !deleted.id;
  const disableAddTodo = inputText === '';

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitTodo(input.value);
          input.value = '';
        }}
      >
        <input
          className="todo-input"
          placeholder="Type todos here"
          ref={(element) => {
            input = element;
          }}
          onChange={() => inputChanged(input.value)}
        />

        <button
          type="submit"
          className="todo-submit"
          disabled={disableAddTodo}
        >
          Add Todo
        </button>

        <button
          className="undelete-todo"
          onClick={() => undeleteTodo()}
          disabled={disableUndelete}
        >
          Undelete
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  undeleteTodo: PropTypes.func.isRequired,
  deleted: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }),
  inputText: PropTypes.string.isRequired,
  inputChanged: PropTypes.func.isRequired,
};

AddTodo.defaultProps = {
  deleted: {},
};

export default AddTodo;
