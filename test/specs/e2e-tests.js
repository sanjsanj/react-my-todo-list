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

  it('Should allow me to toggle my Todo to done', () => {
    browser.element('.todo-input').setValue('Get better at testing');
    browser.click('.todo-submit');
    actual = browser.element('.todo.done');
    expect(actual.state).to.equal('failure');
    browser.click('.todo-text');
    expect(actual.state).to.equal('success');
  });

  it('Should allow me to delete my Todo', () => {
  });

  it('Should allow me to undelete my Todo', () => {
  });
});
