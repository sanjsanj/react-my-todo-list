import types from '../constants/';

let todoId = 0;

export const actions = {
  submitTodo(text) {
    return {
      type: types.SUBMIT_TODO,
      id: todoId += 1,
      text,
    };
  },

  toggleTodo(id) {
    return {
      type: types.TOGGLE_TODO,
      id,
    };
  },

  deleteTodo(id) {
    return {
      type: types.DELETE_TODO,
      id,
    };
  },
};
