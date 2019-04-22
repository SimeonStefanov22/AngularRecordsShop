import { Component, OnInit } from '@angular/core';
import {DeleteUserService} from "../../services/delete-user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  response: any;
  userData;
  id: string;
  constructor(
    private deleteUserService: DeleteUserService,
    private router: Router,
    private httpClient: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) =>{
      this.id = params.id;
    })

    this.deleteUserService.getUser(this.id)
      .subscribe((data) => {
        this.response = data;
        this.userData = this.response.user;

      })
  }

  deleteUser(){
    this.deleteUserService.delete(this.id)
      .subscribe((data) => {
        console.log(data);
      })
    this.router.navigateByUrl('/users');
  }

}
