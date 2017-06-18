// import { types } from '../actions/';
import constant from '../constants/';

const initialState = {
  todos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case constant.SUBMIT_TODO:
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
