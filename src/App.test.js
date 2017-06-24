import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

describe('App', () => {
  const initialState = {
    todos: [],
  };

  const mockFunction = jest.fn();

  it('Should render', () => {
    const component = shallow(
      <App
        state={initialState}
        submitTodo={mockFunction}
        todos={[]}
        toggleTodo={mockFunction}
        deleteTodo={mockFunction}
        undeleteTodo={mockFunction}
        deleted={{}}
        inputText=""
        inputChanged={mockFunction}
      />,
    );

    expect(component.exists()).toEqual(true);
  });
});
