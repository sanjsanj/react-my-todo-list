import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '.';

describe('TodoList component', () => {
  let component;
  
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
  };

  beforeEach(() => {
    component = shallow(<TodoList {...props} />);
  });

  it('Should render', () => {
    expect(component.length).toEqual(1);
  });

  it('Should be wrapped by a <ul>', () => {
    expect(component.find('ul').length).toEqual(1);
  });

  it('Should have a <li> for each todo', () => {
    expect(component.find('li').length).toEqual(1);
  });

  describe('Todo <li>', () => {
    it('Should not have completed class when item is not completed', () => {
      expect(component.find('li').hasClass('completed')).toEqual(false);
    });

    it('Should have completed class when item is completed', () => {
      component = shallow(
        <TodoList
          todos={[{ id: 1, text: 'A todo', completed: true }]}
          toggleTodo={jest.fn()}
        />
      );

      expect(component.find('li').hasClass('completed')).toEqual(true);
    });
  });
});
