const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count');

let uncheckedCountValue = 0;


function newTodo() {
  const todo = document.createElement('li');
  list.appendChild(todo);
  todo.value = list.children.length;
  todo.classList.add(classNames.TODO_ITEM);
  todo.innerHTML = 'Todo' + todo.value;
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('click', () => {
    uncheckedCount();
  })
  checkbox.classList.add(classNames.TODO_CHECKBOX);
  todo.appendChild(checkbox);
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete'
  deleteButton.classList.add(classNames.TODO_DELETE);
  deleteButton.addEventListener('click', () => {
    todo.remove();
    itemCount();
    uncheckedCount();
  })
  todo.appendChild(deleteButton);
  itemCount();
  uncheckedCount();
}

function itemCount() {
  itemCountSpan.innerText = list.children.length;
}

function uncheckedCount() {
  const todos = document.getElementsByTagName('li');
  for (let i = 0; i < todos.length; i++) {
    if (!todos[i].childNodes[1].checked) uncheckedCountValue++;
  }
  uncheckedCountSpan.innerText = uncheckedCountValue;
  uncheckedCountValue = 0;
}