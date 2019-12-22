export class TodoItem {
    action: String;
    done: Boolean;

    constructor(action: String, done: Boolean) {
        this.action = action;
        this.done = done;
    }
}

export class Model {
    user: String;
    items: TodoItem[];

    constructor() {
        this.user = "Adam";
        this.items = [new TodoItem("Task 1", false),
        new TodoItem("Task 2", false),
        new TodoItem("Task 3", false),
        new TodoItem("Task 4", false)
        ]
    }

}