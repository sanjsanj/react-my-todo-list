import types from '../constants/';
import isNullOrWhitespace from '../helpers/';

export const initialState = {
  todos: [],
  deleted: {},
  inputText: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_TODO:
      if (isNullOrWhitespace(action.text)) {
        return {
          ...state,
        };
      }
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
        inputText: '',
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
          deleted: state.todos.filter(todo => todo.id === action.id)[0],
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

    case types.INPUT_CHANGED:
      if (action.inputText) {
        return {
          ...state,
          inputText: action.inputText,
        };
      }
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
