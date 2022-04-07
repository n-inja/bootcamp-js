import { getTodoList, createTodo, deleteTodo, changeTodo } from './api.js';
import Todo from './todo.js';
import { addEventSubmit, changeDoneNumber, createTodoDOM } from "./view.js";

// APIへのリクエストを行う
class Controller {
    constructor() {
        this.list = [];
        addEventSubmit(this.addList.bind(this));
        changeDoneNumber(0);
    }
    async getList() {
        this.list = await getTodoList();
    }
    async addList(name) {
        console.log(name, this);
        const todo = new Todo(this.list.length, name);
        createTodoDOM(todo, this.toggleTodo.bind(this), this.deleteTodo.bind(this));
        await createTodo(todo);
        this.list.push(todo);
    }
    async deleteTodo(id) {
        await deleteTodo(id);
        this.list = this.list.filter(t => t.id !== id);
    }
    async toggleTodo(id) {
        const todo = this.list.find(t => t.id === id);
        todo.done = !todo.done;
        await changeTodo(todo);
    }
}

export {
    Controller
}