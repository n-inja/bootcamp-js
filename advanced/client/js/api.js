const baseURL = 'http://localhost:3000';

// TODOの一覧を取得する
async function getTodolist() {
    console.log('get todos');
    return [
        {
            "id": 1,
            "name": "牛乳を買う",
            "done": false
          },
          {
            "id": 2,
            "name": "部屋を掃除する",
            "done": true
          }
    ];
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
    getTodolist,
    createTodo,
    changeTodo,
    deleteTodo
}