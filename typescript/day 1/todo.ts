let todos: {
  id: number;
  text: string;
  completed: boolean;
}[] = [];

let nextId: number = 1;

const app = document.getElementById('app')!;

const form = document.createElement('form');
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter a new to-do item';

const addButton = document.createElement('button');
addButton.textContent = 'Add';

form.appendChild(input);
form.appendChild(addButton);

const list = document.createElement('ul');
app.appendChild(form);
app.appendChild(list);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
  }
});

function addTodo(text: string): void {
  const todo = {
    id: nextId++,
    text: text,
    completed: false,
  };
  todos.push(todo);
  showTodos();
}

function showTodos(): void {
  list.innerHTML = '';

  todos.forEach((todo) => {
    const listItem = document.createElement('li');
    if (todo.completed) {
      listItem.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => toggleTodo(todo.id));

    const span = document.createElement('span');
    span.textContent = todo.text;

    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    editButton.textContent = 'Edit';
    deleteButton.textContent = 'Delete';

    editButton.addEventListener('click', () => editTodo(todo.id, span, editButton));
    deleteButton.addEventListener('click', () => deleteTodo(todo.id));

    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    listItem.appendChild(editButton); 
    listItem.appendChild(deleteButton);

    list.appendChild(listItem);
  });
}

function toggleTodo(id: number): void {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    showTodos();
  }
}

function editTodo(id: number, span: HTMLSpanElement, editButton: HTMLButtonElement): void {
  const input = document.createElement('input');
  input.type = 'text';
  input.value = span.textContent || '';

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';

  const spanParent = span.parentNode;
  if (spanParent) {
    spanParent.replaceChild(input, span);
  }

  const buttonParent = editButton.parentNode;
  if (buttonParent) {
    buttonParent.replaceChild(saveButton, editButton);
  }

  input.focus();



  saveButton.addEventListener('click', () => {
    const newText = input.value.trim();
    if (newText !== '') {
      const todo = todos.find((t) => t.id === id);
      if (todo) {
        todo.text = newText;
        showTodos();
      }
    } else {
      alert('Text cannot be empty');
    }
  });
}

function deleteTodo(id: number): void {
  todos = todos.filter((t) => t.id !== id);
  showTodos();
}


showTodos();