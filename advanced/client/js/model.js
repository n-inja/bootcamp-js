import { getTodo, postTodo, deleteTodo, patchTodo } from './api.js'
import { Todo } from './todo.js'

async function getTodoList() {
    const data = await getTodo();
    const list = data.todoList.map(r => new Todo(r.id, r.name, r.done));
    return list;
}

async function createTodo(name) {
    const data = await postTodo(name);
    const todo = new Todo(data.id, data.name, data.done);
    return todo;
}

async function removeTodo(todo) {
    await deleteTodo(todo.id);
}

async function toggleTodo(todo) {
    todo.done = !todo.done;
    await patchTodo(todo);
}

export {
    getTodoList,
    createTodo,
    removeTodo,
    toggleTodo
}