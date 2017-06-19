import { actions } from '.';
import types from '../constants/';

describe('Actions', () => {
  it('Should create an action to add a todo', () => {
    const expectedAction = {
      type: types.SUBMIT_TODO,
      id: 1,
      text: 'A todo',
    };

    expect(actions.submitTodo('A todo')).toEqual(expectedAction);
  });
});
