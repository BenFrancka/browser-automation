import { automateTodo } from './automateTodos';
//Math.floor(Math.random()*10)

//lists all the functions in automateTodo
for (prop in automateTodo) {
  if (typeof automateTodo[prop] === 'function') {
    console.log(prop);
  }
}

export const randomizer = new (function () {
  function getRandomInteger(integer) {
    return Math.floor(Math.random() * integer);
  }

  function getRandomItemIndex() {
    todoList = document.querySelectorAll('ul.todo-list li').length;

    if (todoList === 0) {
      console.log('there are no todos');
      return 0;
    }
    randomTodo = getRandomInteger(todoList) + 1;
    return randomTodo;
  }

  this.selectRandomTodo = function () {
    index = getRandomItemIndex();
    if (index > 0) {
      console.log(`select item ${index}`);
      automateTodo.selectItem(index);
    }
  };

  this.toggleAll = function () {
    console.log('toggle all todos');
    automateTodo.toggleAll();
  };

  this.createRandomTodo = function () {
    console.log('create a todo');
    automateTodo.createTodo(`random todo ${Date.now()}`);
  };

  this.amendRandomTodo = function () {
    index = getRandomItemIndex();
    if (index > 0) {
      console.log(`amend todo ${index}`);
      automateTodo.amendTodo(index, `amended random todo ${Date.now()}`);
    }
  };

  this.deleteRandomTodo = function () {
    index = getRandomItemIndex();
    if (index > 0) {
      console.log(`delete todo ${index}`);
      automateTodo.deleteItem(index);
    }
  };

  this.clearCompleted = function () {
    console.log('clear completed todo status');
    automateTodo.clearCompleted();
  };

  this.filterAll = function () {
    console.log('filter all');
    automateTodo.filterAll();
  };

  this.filterActive = function () {
    console.log('filter active');
    automateTodo.filterActive();
  };

  this.filterCompleted = function () {
    console.log('filter completed');
    automateTodo.filterCompleted();
  };

  
})();
