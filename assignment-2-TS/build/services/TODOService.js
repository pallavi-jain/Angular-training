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
    saveTodo(todo) {
        return new Promise((resolve, reject) => {
            todo_1.TODO.push(todo);
            setTimeout(resolve, 1000, todo_1.TODO);
        });
    }
    getCompletedTodos(todo) {
        return new Promise((resolve, reject) => {
            let completed = todo_1.TODO.filter(function (item) {
                item.completed === true;
            });
            setTimeout(resolve, 1000, completed);
        });
    }
    updateTodo(todo) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < todo_1.TODO.length; i++) {
                if (todo_1.TODO[i].id == todo.id) {
                    todo_1.TODO[i] = todo;
                    break;
                }
            }
            setTimeout(resolve, 1000, todo_1.TODO);
        });
    }
}
exports.TodoService = TodoService;
