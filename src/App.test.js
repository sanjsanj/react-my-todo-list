import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  it('Should render', () => {
    const initialState = {
      todos: [],
    };

    const component = shallow(<App state={initialState} submitTodo={jest.fn()} todos={[]} />);
    expect(component).toHaveLength(1);
  });
});
