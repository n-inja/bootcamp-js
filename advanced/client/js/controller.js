import { getTodoList, createTodo, deleteTodo } from './api';

// APIへのリクエストを行う
class Controller {
    constructor() {
        this.list = [];
    }
    async getList() {
        this.list = await getTodoList();
    }
    async addList(todo) {
        await createTodo(todo);
        this.list.push(todo);
    }
    async deleteTodo(id) {
        await deleteTodo(id);
        this.list = this.list.filter(t => t.id !== id);
    }
    async changeTodo(todo) {
        //TODO
    }
}