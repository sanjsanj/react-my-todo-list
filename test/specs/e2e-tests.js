const chai = require('chai');
const expect = chai.expect;

describe('TodoList App', () => {
  beforeEach(() => {
    browser.url('http://localhost:3000/');
  });

  it('Should load with the right title', () => {
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql('ToDo List');
  });

  it('Should allow me to create a Todo', () => {
    $('.todo-input').setValue('Get better at testing');
    browser.click('.todo-submit');
    const actual = browser.element('.todo').getText();
    const expected = 'Get better at testing';
    expect(actual).to.equal(expected);
  });

  it('Should allow me to toggle my Todo to done', () => {
    $('.todo-input').setValue('Get better at testing');
    browser.click('.todo-submit');
    const actual = browser.element('.todo.done');
    expect(actual.state).to.equal('failure');
    browser.click('.todo');
    expect(actual.state).to.equal('success');
  });
});
