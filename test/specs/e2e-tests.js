const chai = require('chai');

const expect = chai.expect;

describe('TodoList App', () => {
  let actual;
  let expected;

  beforeEach(() => {
    browser.url('http://localhost:3000/');
  });

  it('Should load with the right title', () => {
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('ToDo List');
  });

  it('Should allow me to create a Todo', () => {
    browser.element('.todo-input').setValue('Get better at testing');
    browser.click('.todo-submit');
    actual = browser.element('.todo-text').getText();
    expected = 'Get better at testing';

    expect(actual).to.equal(expected);
  });

  it('Should set new todos to incomplete', () => {
    browser.element('.todo-input').setValue('Get better at testing');
    browser.click('.todo-submit');
    actual = browser.element('.completed');

    expect(actual.state).to.equal('failure');
  });

  it('Should allow me to toggle my Todo to completed', () => {
    browser.element('.todo-input').setValue('Get better at testing');
    browser.click('.todo-submit');
    browser.click('.todo-text');
    actual = browser.element('.completed');

    expect(actual.state).to.equal('success');
  });

  it('Should allow me to toggle my Todo to completed and back to incomplete', () => {
    browser.element('.todo-input').setValue('Get better at testing');
    browser.click('.todo-submit');
    browser.click('.todo-text');
    browser.click('.todo-text');
    actual = browser.element('.completed');

    expect(actual.state).to.equal('failure');
  });

  it('Should allow me to delete my Todo', () => {
    browser.element('.todo-input').setValue('Get better at testing');
    browser.click('.todo-submit');
    browser.click('.delete-todo');
    actual = browser.element('.todo');

    expect(actual.state).to.equal('failure');
  });

  it('Should allow me to undelete my Todo', () => {
    browser.element('.todo-input').setValue('Get better at testing');
    browser.click('.todo-submit');
    browser.click('.delete-todo');
    browser.click('.undelete-todo');
    actual = browser.element('.todo');

    expect(actual.state).to.equal('success');
  });
});
