import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';

describe('AddTodo component', () => {
  let component;
  const submitMock = jest.fn();
  const undeleteMock = jest.fn();
  const obj = {};

  beforeEach(() => {
    component = shallow(<AddTodo submitTodo={submitMock} undeleteTodo={undeleteMock} deleted={obj} />);
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have an input', () => {
    expect(component.find('input').length).toEqual(1);
  });

  it('Should have a submit button', () => {
    expect(component.find('.todo-submit').length).toEqual(1);
  });

  it('Should call the submitTodo function when the button is clicked', () => {
    component = mount(<AddTodo submitTodo={submitMock} undeleteTodo={undeleteMock} deleted={obj} />);

    expect(submitMock.mock.calls.length).toEqual(0);
    component.find('.todo-submit').simulate('submit');
    expect(submitMock.mock.calls.length).toEqual(1);
  });

  describe('Undelete button', () => {
    it('Should exist', () => {
      expect(component.find('.undelete-todo').exists()).toEqual(true);
    });

    it('Should have the right text', () => {
      expect(component.find('.undelete-todo').text()).toEqual('Undelete');
    });

    it('Should call the undelete function', () => {
      expect(undeleteMock.mock.calls.length).toEqual(0);
      component.find('.undelete-todo').simulate('click');
      expect(undeleteMock.mock.calls.length).toEqual(1);
    });

    it('Should be disabled when there is no deleted todo', () => {
      const disabled = component.find('.undelete-todo').html().includes('disabled=""');
      expect(disabled).toEqual(true);
    });

    it('Should not be disabled when there is a deleted todo', () => {

    });
  });
});
