import reducer, { initialState } from '.';
import constants from '../constants/';

describe('Reducer', () => {
  it('Should return the initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Submit todo', () => {
    it('Should return the state with the new todo', () => {
      const action = {
        type: constants.SUBMIT_TODO,
        id: 1,
        text: 'A todo',
      };

      const expectedState = {
        todos: [{ id: 1, text: 'A todo' }],
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
});
