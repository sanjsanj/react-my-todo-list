const chai = require('chai');
const expect = chai.expect;

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql('ToDo List');
  });

  it('Should allow me to create ToDo', () => {
    browser.url('http://localhost:3000/');
    $('.todo-input').setValue('Get better at testing');
    browser.click('.todo-submit');
    const actual = browser.element('.todo').getText();
    const expected = 'Get better at testing';
    expect(actual).toEqual(expected);
  });
});
