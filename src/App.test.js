import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  let component;

  const initialState = {
    todos: [],
  };

  beforeEach(() => {
    component = shallow(
      <App
        state={initialState}
        submitTodo={jest.fn()}
        todos={[]}
        toggleTodo={jest.fn()}
        deleteTodo={jest.fn()}
        undeleteTodo={jest.fn()}
      />,
    );
  });

  it('Should render', () => {
    expect(component.exists()).toEqual(true);
  });
});
