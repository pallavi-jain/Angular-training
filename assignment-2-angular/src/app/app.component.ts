import { Component, Input } from '@angular/core';
import { UserService } from './services/UserService';
import { USERS } from './mock/USERS';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'my-first-app...';
  usersObj = this.init();
  
  constructor(private service: UserService){}
  public init() {
    const users = USERS;//await this.service.getUser();
   
    //console.log(users);
    // var testData = Array.from(users).map(function(user){
    //   return user.name;
    // })
    return users;
}

  
}
//let cmp = new AppComponent(new UserService());
//cmp.init()