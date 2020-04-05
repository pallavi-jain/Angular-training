import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

import { TodoService } from './todos/todo.service';
import { TodoComponent } from './todo-list/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {CommentsComponent} from './comments/comments.component';
import {CommentService} from './comments/comments.service';

@NgModule({
  declarations: [
    AppComponent, TodosComponent, TodoFormComponent, TodoComponent,TodoListComponent,CommentsComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [TodoService,CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
