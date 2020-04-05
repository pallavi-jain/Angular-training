import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

import { TodoService } from './todos/todo.service';
import { TodoComponent } from './todo-list/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
@NgModule({
  declarations: [
    AppComponent, TodosComponent, TodoFormComponent, TodoComponent,TodoListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
