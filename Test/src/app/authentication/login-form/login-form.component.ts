import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  userData: any;

  @ViewChild('loginForm')
  htmlForm: NgForm;

  constructor(private loginService: LoginService, private httpClient: HttpClient,private router: Router) { }


  ngOnInit() {
  }

  loginUser(value){
    console.log(this.htmlForm);
    this.htmlForm.reset();

    this.loginService.postData(value)
      .subscribe( data => {
        console.log(data);
        this.userData = data;

        localStorage.setItem('username', this.userData.username);
        localStorage.setItem('userId',this.userData.userId );
        localStorage.setItem('token', this.userData.token);

        this.router.navigateByUrl('/home')

      })
  }

}
