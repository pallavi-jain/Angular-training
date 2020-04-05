import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})

export class TodoListComponent {
    @Output() onComplete = new EventEmitter()
  @Input() todos

}