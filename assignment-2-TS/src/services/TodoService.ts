import {TODO, TODOType} from '../mock/todo';
export class TodoService{
    url;
    constructor(){
        
    }
    getTodoList():Promise<TODOType>{
        return new Promise((resolve,reject) => {
            setTimeout(resolve,1000,TODO);
            
        })
    }

    saveTodo(todo:TODOType):Promise<TODOType>{
        return new Promise((resolve,reject) => {
            TODO.push(todo);
            setTimeout(resolve,1000,TODO);
            
        })
    }

    getCompletedTodos(todo:TODOType):Promise<TODOType>{
        return new Promise((resolve,reject) => {
            let completed = TODO.filter(function(item){
                item.completed === true;
            });

            setTimeout(resolve,1000,completed);
            
        })
    }

    updateTodo(todo:TODOType):Promise<TODOType>{
        return new Promise((resolve,reject) => {
            for(let i =0; i < TODO.length; i++){
                if(TODO[i].id == todo.id){
                    TODO[i] = todo;
                    break;
                }
            }

            setTimeout(resolve,1000,TODO);
            
        })
    }
}