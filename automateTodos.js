//can now call automateTodo.clickItem(<someItem>)
//*will need to paste this code into the snippet IDE in dev tools to give the application access to these methods in the console.
export const automateTodo = new (function () {
  this.clickItem = function (item) {
    item.click();
  };

  this.toggleAll = function () {
    document.querySelector('#toggle-all').click();
  };

  this.selectItem = function (x) {
    document
      .querySelector(`ul.todo-list > li:nth-child(${x}) input.toggle`)
      .click();
  };

  this.deleteItem = function (x) {
    document
      .querySelector(`ul.todo-list > li:nth-child(${x}) button.destroy`)
      .click();
  };

  this.clearCompleted = function () {
    document.querySelector('button.clear-completed').click();
  };

  this.filterAll = function () {
    location.hash = '/';
  };

  this.filterCompleted = function () {
    location.hash = '/completed';
  };

  this.filterActive = function () {
    location.hash = '/active';
  };

  this.createTodo = function (title) {
    document.querySelector('input.new-todo').value = title;
    document
      .querySelector('input.new-todo')
      .dispatchEvent(new Event('change', { bubbles: true }));
  };

  this.amendTodo = function (x, amendedValue) {
    document
      .querySelector('ul.todo-list > li:nth-child(' + x + ') > div > label')
      .dispatchEvent(new Event('dblclick', { bubbles: true }));
    document.querySelector(
      'ul.todo-list > li:nth-child(' + x + ') .edit'
    ).value = amendedValue;
    document
      .querySelector('ul.todo-list > li:nth-child(' + x + ') .edit')
      .dispatchEvent(new Event('blur'));
  };
})();
