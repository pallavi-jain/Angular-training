

export class UserService {
    constructor() {

    }
    getUser(){
        return new Promise((resolve, reject) => {
            const url = 'https://jsonplaceholder.typicode.com/users';
            fetch(url).then(response => response.json()).then(users => {
                //console.log(users)
                resolve(users)
            });
        });
    }
}