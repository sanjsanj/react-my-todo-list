import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo, undeleteTodo, deleted }) => {
  let input;
  const disableUndelete = !deleted.id;

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
        />

        <button
          type="submit"
          className="todo-submit"
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
};

AddTodo.defaultProps = {
  deleted: {},
};

export default AddTodo;
