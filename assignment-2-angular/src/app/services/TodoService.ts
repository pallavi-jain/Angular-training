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
}