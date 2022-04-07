const todos = document.querySelector('ul.todos');

function createTodoDOM(todo) {
    const li = document.createElement('li');
    li.innerHTML = 'aaaa';
    todos.appendChild(li);
    `<li class="todo-item">
        <label class="todo-toggle__container">
            <input data-todo-id="1" type="checkbox" class="todo-toggle" value="checked">
            <span class="todo-toggle__checkmark"></span>
        </label>
        <div class="todo-name">sample1</div>
        <div data-todo-id="1" class="todo-remove-button">x</div>
    </li>`
}

export {
    createTodoDOM
}