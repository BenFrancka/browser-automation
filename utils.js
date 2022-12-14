//need to pass the function a clickable element from the DOM
export function clickItem(item){
    item.click();
}

//toggles all todos
export function toggleAll() {
    document.querySelector('#toggle-all').click();
}

//x represents a position on the list to be selected on click.
export function selectItem(x){
    document.querySelector(`ul.todo-list > li:nth-child(${x}) input.toggle`).click()
}

//x represents position of item in list to be deleted on button click
export function deleteItem(x){
    document.querySelector(`ul.todo-list > li:nth-child(${x}) button.destroy`).click()

}

//clears completed status for all todos
export function clearCompleted(){
    document.querySelector('button.clear-completed').click();
}

//Below filter functions access the hashchange event to use the different filter views.
export function filterAll(){
    location.hash = "/";
}

export function filterCompleted(){
    location.hash = "/completed";
}

export function filterActive(){
    location.hash = "/active";
}

//adds a new todo to the list
export function createTodo(name){
    document.querySelector('input.new-todo').value=name;
    document.querySelector('input.new-todo').dispatchEvent(new Event('change',{'bubbles':true}));
}

//Edits an existing todo
export function amendTodo(x, amendedValue){
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') > div > label').dispatchEvent(new Event('dblclick', {'bubbles':true}));
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').value=amendedValue;
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').dispatchEvent(new Event('blur'));
}
