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
};
