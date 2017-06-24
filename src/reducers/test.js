/* global expect, it, describe */

import { reducer, initialState } from '.';

import types from '../constants/';

describe('Reducer', () => {
  const todoText = 'A todo';

  it('Should return the initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Submit todo', () => {
    it('Should return the correct state when text is provided', () => {
      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
            completed: false,
          },
        ],
        deleted: {},
        inputText: '',
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('Should return the correct state when text is empty', () => {
      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: '',
      };

      const expectedState = {
        todos: [],
        deleted: {},
        inputText: '',
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('Should return the correct state when text is whitespace', () => {
      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: ' ',
      };

      const expectedState = {
        todos: [],
        deleted: {},
        inputText: '',
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('Toggle todo', () => {
    it('Should return correct state with todo completion toggled on', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText,
            completed: false,
          },
        ],
      };

      const action = {
        type: types.TOGGLE_TODO,
        id: 1,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
            completed: true,
          },
        ],
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });

    it('Should return correct state with todo completion toggled on then off', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText,
            completed: true,
          },
        ],
      };

      const action = {
        type: types.TOGGLE_TODO,
        id: 1,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
            completed: false,
          },
        ],
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });

    it('Should return state with todo completion toggled on with more than one todo', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText,
            completed: false,
          },
          {
            id: 2,
            text: 'Another todo',
            completed: false,
          },
        ],
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
            completed: true,
          },
          {
            id: 2,
            text: 'Another todo',
            completed: false,
          },
        ],
      };

      const action = {
        type: types.TOGGLE_TODO,
        id: 1,
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe('Delete todo', () => {
    it('Should return state with the todo deleted', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText,
            completed: false,
          },
        ],
        deleted: {},
      };

      const action = {
        type: types.DELETE_TODO,
        id: 1,
      };

      const expectedState = {
        todos: [],
        deleted: {
          id: 1,
          text: todoText,
          completed: false,
        },
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });

    it('Should return state correctly when no id is passed in', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText,
            completed: false,
          },
        ],
        deleted: {},
      };

      const action = {
        type: types.DELETE_TODO,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
            completed: false,
          },
        ],
        deleted: {},
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });

    it('Should return state correctly when incorrect id is passed in', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText,
            completed: false,
          },
        ],
        deleted: {},
      };

      const action = {
        type: types.DELETE_TODO,
        id: 2,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
            completed: false,
          },
        ],
        deleted: {},
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe('Undelete todo', () => {
    it('Should return state with the todo undeleted', () => {
      const startingState = {
        todos: [],
        deleted: {
          id: 1,
          text: todoText,
          completed: false,
        },
      };

      const action = {
        type: types.UNDELETE_TODO,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
            completed: false,
          },
        ],
        deleted: {},
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });

    it('Should return unchanged state when there is no deleted todo', () => {
      const startingState = {
        todos: [],
        deleted: {},
      };

      const action = {
        type: types.UNDELETE_TODO,
      };

      const expectedState = {
        todos: [],
        deleted: {},
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe('Input changed', () => {
    it('Should return correct state when no text is input', () => {
      const startingState = {
        todos: [],
        deleted: {},
        text: '',
      };

      const action = {
        type: types.INPUT_CHANGED,
        text: '',
      };

      const expectedState = {
        todos: [],
        deleted: {},
        text: '',
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });

    it('Should return correct state when some text is input', () => {
      const startingState = {
        todos: [],
        deleted: {},
        inputText: '',
      };

      const action = {
        type: types.INPUT_CHANGED,
        inputText: todoText,
      };

      const expectedState = {
        todos: [],
        deleted: {},
        inputText: todoText,
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });
});
