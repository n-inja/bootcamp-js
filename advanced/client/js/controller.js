import { getTodoList, createTodo, deleteTodo, changeTodo } from './api.js';
import Todo from './todo.js';
import { addEventSubmit, changeDoneNumber, createTodoDOM } from "./view.js";

// APIへのリクエストを行う
class Controller {
    #doneNumber;
    constructor() {
        this.list = [];
        this.#doneNumber = 0;
        addEventSubmit(this.addList.bind(this));
        changeDoneNumber(0);
    }
    calcDoneNumber() {
        this.#doneNumber = this.list.filter(t => t.done).length;
        changeDoneNumber(this.#doneNumber);
    }
    async getList() {
        const data = await getTodoList();
        this.list = data.map(r => new Todo(r.id, r.name, r.done));
        this.list.forEach(todo => {
            createTodoDOM(todo, this.toggleTodo.bind(this), this.deleteTodo.bind(this));
        });
        this.calcDoneNumber();
    }
    async addList(name) {
        console.log(name, this);
        const todoRaw = await createTodo(name);
        const todo = new Todo(todoRaw.id, todoRaw.name, todoRaw.done);
        createTodoDOM(todo, this.toggleTodo.bind(this), this.deleteTodo.bind(this));
        
        this.list.push(todo);
    }
    async deleteTodo(id) {
        await deleteTodo(id);
        const todo = this.list.find(t => t.id === id);
        this.list = this.list.filter(t => t.id !== id);

        this.calcDoneNumber();
    }
    async toggleTodo(id) {
        const todo = this.list.find(t => t.id === id);
        todo.done = !todo.done;
        await changeTodo(todo);

        this.calcDoneNumber();
    }
}

export {
    Controller
}