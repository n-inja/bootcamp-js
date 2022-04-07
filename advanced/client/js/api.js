const baseURL = 'http://localhost:3000';

// TODOの一覧を取得する
async function getTodolist() {
    return [];
}

// TODOを作成する
async function createTodo(todo) {
    return;
}

// TODOのdoneの更新を行う
async function changeTodo(todo) {
    return todo;
}

// TODOの削除を行う
async function deleteTodo(todo) {
    return;
}

export {
    getTodolist,
    createTodo,
    changeTodo,
    deleteTodo
}