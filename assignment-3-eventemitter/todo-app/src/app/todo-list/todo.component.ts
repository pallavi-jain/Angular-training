import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html'
})

export class TodoComponent {
    @Output() onChange = new EventEmitter()
    @Input() item

}