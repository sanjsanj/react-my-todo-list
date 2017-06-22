import types from '../constants/';

export const initialState = {
  todos: [],
  deleted: {},
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
      if (action.id && (state.todos.filter(todo => todo.id === action.id).length)) {
        return {
          ...state,
          todos: [
            ...state.todos.filter((todo) => {
              if (todo.id !== action.id) {
                return todo;
              }
              return null;
            }),
          ],
          deleted: state.todos[action.id - 1],
        };
      }
      return {
        ...state,
      };

    case types.UNDELETE_TODO:
      if (Object.keys(state.deleted).length) {
        return {
          ...state,
          todos: [
            ...state.todos,
            state.deleted,
          ],
          deleted: {},
        };
      }
      return {
        ...state,
      };


    default:
      return state;
  }
}
