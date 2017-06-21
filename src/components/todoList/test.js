import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '.';

describe('TodoList component', () => {
  let component;
  const mockFunction = jest.fn();

  const props = {
    todos:
    [
      {
        id: 1,
        text: 'A todo',
        completed: false,
      },
    ],
    toggleTodo: jest.fn(),
    deleteTodo: mockFunction,
  };

  beforeEach(() => {
    component = shallow(<TodoList {...props} />);
  });

  it('Should render', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should be wrapped by a <ul>', () => {
    expect(component.find('ul').length).toEqual(1);
  });

  it('Should have a <li> for each todo', () => {
    expect(component.find('li').length).toEqual(1);
  });

  describe('Todo <li>', () => {
    let listItem;

    beforeEach(() => {
      listItem = component.find('li');
    });

    it('Should not have completed class when item is not completed', () => {
      expect(listItem.hasClass('completed')).toEqual(false);
    });

    it('Should have completed class when item is completed', () => {
      component = shallow(
        <TodoList
          todos={[{ id: 1, text: 'A todo', completed: true }]}
          toggleTodo={jest.fn()}
          deleteTodo={jest.fn()}
        />,
      );

      listItem = component.find('li');

      expect(listItem.hasClass('completed')).toEqual(true);
    });

    describe('Delete button', () => {
      it('Should exist', () => {
        expect(listItem.find('.delete-todo').exists()).toEqual(true);
      });

      it('Should have the right text', () => {
        expect(listItem.find('.delete-todo').text()).toEqual('Delete');
      });

      it('Should call the delete function', () => {
        expect(mockFunction.mock.calls.length).toEqual(0);
        listItem.find('.delete-todo').simulate('click');
        expect(mockFunction.mock.calls.length).toEqual(1);
      });
    });
  });
});
