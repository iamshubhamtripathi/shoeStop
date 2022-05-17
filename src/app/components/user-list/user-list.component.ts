import { Component } from '@angular/core';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: any;
  titles: string[] = ["Name","Email","Mobile Number","Primary Address"]

  constructor(private user: UserService) { 
    this.get();
  }

  get(){
    this.user.getUsers().subscribe(data => this.users = data);
  }

}
