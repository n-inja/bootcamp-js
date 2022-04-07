import { getTodo, postTodo, deleteTodo, patchTodo } from '../lib/api.js'

class Todo {
    constructor(id, name, done = false) {
        this.id = id;
        this.name = name;
        this.done = done;
    }

    static async createTodo(name) {
        const data = await postTodo(name);
        const todo = new Todo(data.id, data.name, data.done);
        return todo;
    }

    async removeTodo() {
        await deleteTodo(this.id);
    }

    async toggleTodo() {
        this.done = !this.done;
        await patchTodo(this);
    }

    static compare(lTodo, rTodo) {
        if (lTodo.done === rTodo.done) {
            return lTodo.name.localeCompare(rTodo.name);
        }
        const lv = lTodo.done ? 1 : 0;
        const rv = rTodo.done ? 1 : 0;
        return lv - rv;
    }

    static async getTodoList() {
        const data = await getTodo();
        const list = data.todoList.map(r => new Todo(r.id, r.name, r.done));
        return list;
    }
}

export {
    Todo
}