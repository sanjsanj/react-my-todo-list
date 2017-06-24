/* global expect, it, describe, beforeEach, jest */

import React from 'react';
import { shallow, mount } from 'enzyme';

import AddTodo from '.';

describe('AddTodo component', () => {
  let component;
  const submitMock = jest.fn();
  const undeleteMock = jest.fn();
  const changeMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <AddTodo
        submitTodo={submitMock}
        undeleteTodo={undeleteMock}
        deleted={{}}
        inputText=""
        inputChanged={changeMock}
      />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have an input', () => {
    expect(component.find('input').length).toEqual(1);
  });

  describe('Add todo button', () => {
    it('Should exist', () => {
      expect(component.find('.todo-submit').length).toEqual(1);
    });

    it('Should be disabled when there is no text in the input', () => {
      const disabled = component.find('.todo-submit').html().includes('disabled=""');
      expect(disabled).toEqual(true);
    });

    it('Should not be disabled when there is text in the input', () => {
      component = shallow(
        <AddTodo
          submitTodo={submitMock}
          undeleteTodo={undeleteMock}
          deleted={{}}
          inputText="A todo"
          inputChanged={changeMock}
        />,
      );

      const disabled = component.find('.todo-submit').html().includes('disabled=""');

      expect(disabled).toEqual(false);
    });

    it('Should call the submitTodo function when clicked', () => {
      component = mount(
        <AddTodo
          submitTodo={submitMock}
          undeleteTodo={undeleteMock}
          deleted={{}}
          inputText=""
          inputChanged={changeMock}
        />,
      );

      expect(submitMock.mock.calls.length).toEqual(0);
      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    });
  });

  describe('Undelete button', () => {
    it('Should exist', () => {
      expect(component.find('.undelete-todo').exists()).toEqual(true);
    });

    it('Should have the right text', () => {
      expect(component.find('.undelete-todo').text()).toEqual('Undelete');
    });

    it('Should be disabled when there is no deleted todo', () => {
      const disabled = component.find('.undelete-todo').html().includes('disabled=""');
      expect(disabled).toEqual(true);
    });

    it('Should not be disabled when there is a deleted todo', () => {
      const deletedTodo = {
        id: 1,
        text: 'A todo',
        completed: false,
      };

      component = shallow(
        <AddTodo
          submitTodo={submitMock}
          undeleteTodo={undeleteMock}
          deleted={deletedTodo}
          inputText=""
          inputChanged={changeMock}
        />,
      );

      const disabled = component.find('.undelete-todo').html().includes('disabled=""');

      expect(disabled).toEqual(false);
    });

    it('Should call the undelete function', () => {
      expect(undeleteMock.mock.calls.length).toEqual(0);
      component.find('.undelete-todo').simulate('click');
      expect(undeleteMock.mock.calls.length).toEqual(1);
    });
  });
});
