const baseURL = 'http://localhost:3000';
// APIにリクエストを投げて結果のJSONを返す関数群

// TODOの一覧を取得する
async function getTodo() {
    console.log('get todos');
    const res = await fetch(`${baseURL}/todo`);
    const data = await res.json();
    console.log(data);
    return data;
}

// TODOを作成する
async function postTodo(name) {
    console.log('create todo');
    const res = await fetch(`${baseURL}/todo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
    });
    console.log(res);
    const data = await res.json();
    return data;
}

// TODOのdoneの更新を行う
async function patchTodo(todo) {
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
    getTodo,
    postTodo,
    patchTodo,
    deleteTodo
}