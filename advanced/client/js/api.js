const baseURL = 'http://localhost:3000';

// TODOの一覧を取得する
async function getTodoList() {
    console.log('get todos');
    const res = await fetch(`${baseURL}/todo`);
    const data = await res.json();
    console.log(data);
    return data.todoList;
}

// TODOを作成する
async function createTodo(todo) {
    console.log('create todo');
    return;
}

// TODOのdoneの更新を行う
async function changeTodo(todo) {
    console.log('change todo');
    return todo;
}

// TODOの削除を行う
async function deleteTodo(id) {
    console.log('delete todo');
    return;
}

export {
    getTodoList,
    createTodo,
    changeTodo,
    deleteTodo
}