const todos = document.querySelector('ul.todos');
const form = document.querySelector('form.todo-form');

function addEventSubmit() {
    const input = form.querySelector('input[type="submit"]');
    const todoName = form.querySelector('input#name');
    const name = todoName.value;

    input.addEventListener('click', e => {
        console.log(`submit click ${name}`);
        e.preventDefault();
    });
}

function createTodoDOM(todo) {
    todo = todo ? todo : {};
    todo.id = 'test 1';

    const li = document.createElement('li');
    li.className = 'todo-item';

    const label = document.createElement('label');
    label.className = 'todo-toggle__container';

    const input = document.createElement('input');
    input.className = 'todo-toggle';
    input.setAttribute('data-todo-id', todo.id);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('value', 'checked');
    label.appendChild(input);

    const span = document.createElement('span');
    span.className = 'todo-toggle__checkmark';
    label.appendChild(span);

    li.appendChild(label);

    const name = document.createElement('div');
    name.className = 'todo-name';
    name.innerText = 'test name';

    const button = document.createElement('div');
    button.className = 'todo-remove-button';
    button.innerText = 'x';
    button.setAttribute('data-todo-id', todo.id);

    li.appendChild(name);
    li.appendChild(button);

    todos.appendChild(li);

    button.addEventListener('click', () => {
        console.log('delete ' + todo.id);
    });

    input.addEventListener('click', () => {
        console.log('change ' + todo.id);
    });
}

export {
    createTodoDOM,
    addEventSubmit
}