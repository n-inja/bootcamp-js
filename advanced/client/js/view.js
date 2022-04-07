const todos = document.querySelector('ul.todos');
const form = document.querySelector('form.todo-form');
const doneItemSpan = document.querySelector('span.done-items-num__value');

function addEventSubmit(addTodo) {
    const input = form.querySelector('input[type="submit"]');
    const todoName = form.querySelector('input#name');

    input.addEventListener('click', e => {
        const name = todoName.value;
        console.log(`submit click ${name}`);
        addTodo(name).then(() => {
            todoName.value = '';
        }, e => {
            console.error(e);
        });
        e.preventDefault();
    });
}

function changeDoneNumber(num) {
    doneItemSpan.innerHTML = num;
}

function createTodoDOM(todo, toggle, del) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const label = document.createElement('label');
    label.className = 'todo-toggle__container';

    const input = document.createElement('input');
    input.className = 'todo-toggle';
    input.setAttribute('data-todo-id', todo.id);
    input.setAttribute('type', 'checkbox');
    if (todo.done) {
        input.setAttribute('checked', '');
    }
    input.setAttribute('value', 'checked');
    label.appendChild(input);

    const span = document.createElement('span');
    span.className = 'todo-toggle__checkmark';
    label.appendChild(span);

    li.appendChild(label);

    const name = document.createElement('div');
    name.className = 'todo-name';
    name.innerText = todo.name;

    const button = document.createElement('div');
    button.className = 'todo-remove-button';
    button.innerText = 'x';
    button.setAttribute('data-todo-id', todo.id);

    li.appendChild(name);
    li.appendChild(button);

    todos.appendChild(li);

    button.addEventListener('click', () => {
        console.log('delete ' + todo.id);
        del(todo.id);
        li.remove();
    });

    input.addEventListener('click', () => {
        console.log('change ' + todo.id);
        toggle(todo.id);
    });
}

export {
    createTodoDOM,
    addEventSubmit,
    changeDoneNumber
}