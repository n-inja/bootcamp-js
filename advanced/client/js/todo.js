class Todo {
    constructor(id, name, done = false) {
        this.id = id;
        this.name = name;
        this.done = done;
    }

    static compare(lTodo, rTodo) {
        if (lTodo.done === rTodo.done) {
            return lTodo.name.localeCompare(rTodo.name);
        }
        const lv = lTodo.done ? 1 : 0;
        const rv = rTodo.done ? 1 : 0;
        return lv - rv;
    }
}

export {
    Todo
}