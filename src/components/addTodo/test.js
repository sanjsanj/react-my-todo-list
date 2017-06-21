import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';

describe('AddTodo component', () => {
  let component;
  const mockFunction = jest.fn();

  beforeEach(() => {
    component = shallow(<AddTodo submitTodo={mockFunction} />);
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have an input', () => {
    expect(component.find('input').length).toEqual(1);
  });

  it('Should have a submit button', () => {
    expect(component.find('button').length).toEqual(1);
  });

  it('Should call the submitTodo function when the button is clicked', () => {
    component = mount(<AddTodo submitTodo={mockFunction} />);

    expect(mockFunction.mock.calls.length).toEqual(0);
    component.find('button').simulate('submit');
    expect(mockFunction.mock.calls.length).toEqual(1);
  });
});
