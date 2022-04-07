import { Todo } from './model/todo.js';
import { addEventSort, addEventSubmit, changeDoneNumber, createTodoDOM, removeTodoDOM } from "./view.js";

class App {
    #doneNumber;
    constructor() {
        this.list = [];
        this.#doneNumber = 0;
        addEventSubmit(this.addList.bind(this));
        addEventSort(this.sort.bind(this));
        changeDoneNumber(0);
        this.getList();
    }

    calcDoneNumber() {
        this.#doneNumber = this.list.filter(t => t.done).length;
        changeDoneNumber(this.#doneNumber);
    }

    async getList() {
        this.list = await Todo.getTodoList();
        this.list.forEach(todo => {
            createTodoDOM(todo, this.toggleTodo.bind(this), this.deleteTodo.bind(this));
        });
        this.calcDoneNumber();
    }

    async addList(name) {
        console.log(name);
        const todo = await Todo.createTodo(name);
        createTodoDOM(todo, this.toggleTodo.bind(this), this.deleteTodo.bind(this));
        this.list.push(todo);
    }

    async deleteTodo(id) {
        const todo = this.list.find(t => t.id === id);
        this.list = this.list.filter(t => t.id !== id);
        await todo.removeTodo();
        removeTodoDOM(todo);

        this.calcDoneNumber();
    }

    async toggleTodo(id) {
        const todo = this.list.find(t => t.id === id);
        await todo.toggleTodo();

        this.calcDoneNumber();
    }

    sort() {
        this.list.sort(Todo.compare);
        this.list.forEach(todo => removeTodoDOM(todo));
        this.list.forEach(todo => createTodoDOM(todo, this.toggleTodo.bind(this), this.deleteTodo.bind(this)));
    }
}

export {
    App
}