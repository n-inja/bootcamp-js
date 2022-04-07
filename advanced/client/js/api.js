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
    const res = await fetch(`${baseURL}/todo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    console.log(res);
    return;
}

// TODOのdoneの更新を行う
async function changeTodo(todo) {
    console.log('change todo');
    const res = await fetch(`${baseURL}/todo/${todo.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    console.log(res);
    return todo;
}

// TODOの削除を行う
async function deleteTodo(id) {
    console.log('delete todo');
    const res = await fetch(`${baseURL}/todo/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(res);
    return;
}

export {
    getTodoList,
    createTodo,
    changeTodo,
    deleteTodo
}