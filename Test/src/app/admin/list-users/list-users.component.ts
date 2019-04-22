import { Component, OnInit } from '@angular/core';
import {ListUsersService} from "../../services/list-users.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  usersData: any;
  user: any;
  constructor(private listUsersService: ListUsersService) { }

  ngOnInit():void {
    this.listUsersService.getUsers()
      .subscribe((data) => {
        this.usersData = data;
        this.usersData = this.usersData.users;
        console.log(this.usersData);

      })
  }


}
