import { Injectable } from '@angular/core'
import {TODOType, TODO} from '../mock/todo.mock';

@Injectable()
export class TodoService {

  constructor() { }

  getTodos(): Array<TODOType> {
    return TODO;
  }

}