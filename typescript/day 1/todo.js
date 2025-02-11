var todos = [];
var nextId = 1;
var app = document.getElementById('app');
var form = document.createElement('form');
var input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter a new to-do item';
var addButton = document.createElement('button');
addButton.textContent = 'Add';
form.appendChild(input);
form.appendChild(addButton);
var list = document.createElement('ul');
app.appendChild(form);
app.appendChild(list);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (text !== '') {
        addTodo(text);
        input.value = '';
    }
});
function addTodo(text) {
    var todo = {
        id: nextId++,
        text: text,
        completed: false,
    };
    todos.push(todo);
    saveTodos();
    showTodos();
}
function showTodos() {
    list.innerHTML = '';
    todos.forEach(function (todo) {
        var listItem = document.createElement('li');
        if (todo.completed) {
            listItem.classList.add('completed');
        }
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', function () { return toggleTodo(todo.id); });
        var span = document.createElement('span');
        span.textContent = todo.text;
        var editButton = document.createElement('button');
        var deleteButton = document.createElement('button');
        editButton.textContent = 'Edit';
        deleteButton.textContent = 'Delete';
        editButton.addEventListener('click', function () { return editTodo(todo.id, span, editButton); });
        deleteButton.addEventListener('click', function () { return deleteTodo(todo.id); });
        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    });
}
function toggleTodo(id) {
    var todo = todos.find(function (t) { return t.id === id; });
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        showTodos();
    }
}
function editTodo(id, span, editButton) {
    var input = document.createElement('input');
    input.type = 'text';
    input.value = span.textContent || '';
    var saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    var spanParent = span.parentNode;
    if (spanParent) {
        spanParent.replaceChild(input, span);
    }
    var buttonParent = editButton.parentNode;
    if (buttonParent) {
        buttonParent.replaceChild(saveButton, editButton);
    }
    input.focus();
    saveButton.addEventListener('click', function () {
        var newText = input.value.trim();
        if (newText !== '') {
            var todo = todos.find(function (t) { return t.id === id; });
            if (todo) {
                todo.text = newText;
                saveTodos();
                showTodos();
            }
        }
        else {
            alert('Text cannot be empty');
        }
    });
}
function deleteTodo(id) {
    todos = todos.filter(function (t) { return t.id !== id; });
    saveTodos();
    showTodos();
}
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function loadTodos() {
    var savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        todos = JSON.parse(savedTodos);
        nextId = todos.length > 0 ? Math.max.apply(Math, todos.map(function (t) { return t.id; })) + 1 : 1;
    }
}
loadTodos();
showTodos();
