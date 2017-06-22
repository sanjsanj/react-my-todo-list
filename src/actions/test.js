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

  it('Should create an action to toggle todo completion', () => {
    const expectedAction = {
      type: types.TOGGLE_TODO,
      id: 1,
    };

    actions.submitTodo('A todo');

    expect(actions.toggleTodo(1)).toEqual(expectedAction);
  });

  it('Should create an action to delete a todo', () => {
    const expectedAction = {
      type: types.DELETE_TODO,
      id: 1,
    };

    actions.submitTodo('A todo');

    expect(actions.deleteTodo(1)).toEqual(expectedAction);
  });

  it('Should create an action to undelete a todo', () => {
    const expectedAction = {
      type: types.UNDELETE_TODO,
    };

    actions.submitTodo('A todo');

    expect(actions.undeleteTodo()).toEqual(expectedAction);
  });
});
