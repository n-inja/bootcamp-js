import { getTodoList, createTodo, deleteTodo } from './api.js';
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
        createTodoDOM(todo);
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

export {
    Controller
}