import types from '../constants/';

export const initialState = {
  todos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false,
          },
        ],
      };

    case types.TOGGLE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo, index) => {
            if (todo.id === action.id) {
              return Object.assign({}, state.todos[index], {
                completed: !state.todos[index].completed,
              });
            }
            return state.todos[index];
          }),
        ],
      };

    case types.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo) => {
            if (todo.id !== action.id) {
              return todo;
            }
          }),
        ],
      };

    default:
      return state;
  }
}
