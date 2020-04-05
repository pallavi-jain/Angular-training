import { Component, OnInit } from '@angular/core'
import { TodoService } from './todo.service'

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html'
})

export class TodosComponent implements OnInit {
  todos: any[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  addTodo(task)
  {
    this.todos = [{task, id: this.todos.length + 1}, ...this.todos];
  }

  completeTodo(selectedItem) {
    this.todos = this.todos.filter(({id}) => id !== selectedItem.id);
  }
}