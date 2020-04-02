"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("../mock/todo");
class TodoService {
    constructor() {
    }
    getTodoList() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, todo_1.TODO);
        });
    }
}
exports.TodoService = TodoService;
