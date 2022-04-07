const todos = document.querySelector('ul.todos');
const form = document.querySelector('form.todo-form');
const doneItemSpan = document.querySelector('span.done-items-num__value');
const sortButton = document.querySelector('button.todo-sort-button');

// submitボタンのイベントを上書きする
// - addTodo: ボタン押下時のコールバック関数
function addEventSubmit(addTodo) {
    const input = form.querySelector('input[type="submit"]');
    const todoName = form.querySelector('input#name');

    input.addEventListener('click', e => {
        e.preventDefault();
        const name = todoName.value;
        console.log(`submit click ${name}`);

        if (name === '') {
            window.alert('TODO名が空白です');

            return;
        }

        addTodo(name).then(() => {
            todoName.value = '';
        }, e => {
            console.error(e);
        });
    });
}

// doneのTODO要素の個数を更新する
// - num: doneの個数
function changeDoneNumber(num) {
    doneItemSpan.innerHTML = num;
}


// TODOリストをソートするボタンのイベントを登録する
// - sort: ボタン押下時のコールバック
function addEventSort(sort) {
    sortButton.addEventListener('click', (e) => {
        sort();
    });
}

// TODOリスト要素のDOMを作成する
// - todo: 対象のデータ
// - toggle: doneボタン押下時のコールバック関数
// - del: deleteボタン押下時のコールバック関数
function createTodoDOM(todo, toggle, del, edit) {
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
    });

    input.addEventListener('click', () => {
        console.log('change ' + todo.id);
        toggle(todo.id);
    });
}

// TODOリストの要素を削除する
// - todo: 対象のデータ
function removeTodoDOM(todo) {
    console.log(todo);
    const div = todos.querySelector(`li.todo-item > div[data-todo-id="${todo.id}"]`);
    const li = div.parentNode;
    li.remove();
}

export {
    createTodoDOM,
    addEventSubmit,
    addEventSort,
    changeDoneNumber,
    removeTodoDOM
}