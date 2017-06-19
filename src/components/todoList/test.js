import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '.';

describe('TodoList component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TodoList todos={[]} />);
  });
  it('Should render', () => {
    expect(component.length).toEqual(1);
  });

  it('Should be wrapped by a <ul>', () => {
    expect(component.find('ul').length).toEqual(1);
  });

  it('Should have a <li> for each todo', () => {
    component = shallow(<TodoList todos={[{ id: 1, text: 'A todo' }]} />);
    expect(component.find('li').length).toEqual(1);
  });
});
