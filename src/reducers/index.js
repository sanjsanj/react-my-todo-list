// import { types } from '../actions/';
import constants from '../constants/';

export const initialState = {
  todos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
          },
        ],
      };
    default:
      return state;
  }
}
