import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html'
})

export class TodoFormComponent {
  task: string;
  
  @Output() onAdd = new EventEmitter();
  addTodo() {
    if (!this.task) return;
    this.onAdd.emit(this.task)
    this.task = ''
  }
}