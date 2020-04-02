import { TodoService } from './services/TODOService';

export class TodoComponent {
    constructor(private service: TodoService) { }
    public async init() {
        const todos = await this.service.getTodoList();
        console.log(todos);

    }

}
let cmp = new TodoComponent(new TodoService());
cmp.init();
