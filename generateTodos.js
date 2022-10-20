//for loop to generate 100 todos.
//! The application generates ids based on the milisecond that a todo is created and stores them in local storage. This loop is too fast and ends up with duplicate ids.
for (index = 1; index <= 100; index++) {
  automateTodo.createTodo(`todo${index}`);
}

//setTimeout solution
for (index = 1; index <= 100; index++) {
  setTimeout(automateTodo.createTodo, index * 100, `todo${index}`);
}

//setInterval solution
let todoCount = 0;
const createTodoBot = setInterval(function () {
  document.querySelector('input.new-todo').value = `todo${todoCount}`;
  document
    .querySelector('input.new-todo')
    .dispatchEvent(new Event('change', { bubbles: true }));

  todoCount++;

  if (todoCount >= 100) {
    clearInterval(createTodoBot);
  }
}, 500);
