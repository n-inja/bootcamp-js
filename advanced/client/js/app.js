import { getTodoList, createTodo, removeTodo, toggleTodo } from './model.js';
import { addEventSubmit, changeDoneNumber, createTodoDOM, removeTodoDOM } from "./view.js";

class App {
    #doneNumber;
    constructor() {
        this.list = [];
        this.#doneNumber = 0;
        addEventSubmit(this.addList.bind(this));
        changeDoneNumber(0);
        this.getList();
    }

    calcDoneNumber() {
        this.#doneNumber = this.list.filter(t => t.done).length;
        changeDoneNumber(this.#doneNumber);
    }

    async getList() {
        this.list = await getTodoList();
        this.list.forEach(todo => {
            createTodoDOM(todo, this.toggleTodo.bind(this), this.deleteTodo.bind(this));
        });
        this.calcDoneNumber();
    }

    async addList(name) {
        console.log(name);
        const todo = await createTodo(name);
        createTodoDOM(todo, this.toggleTodo.bind(this), this.deleteTodo.bind(this));        
        this.list.push(todo);
    }

    async deleteTodo(id) {
        const todo = this.list.find(t => t.id === id);
        this.list = this.list.filter(t => t.id !== id);
        await removeTodo(id);
        removeTodoDOM(todo);

        this.calcDoneNumber();
    }

    async toggleTodo(id) {
        const todo = this.list.find(t => t.id === id);
        await toggleTodo(todo);

        this.calcDoneNumber();
    }
}

export {
    App
}