import {Component, OnInit, ViewChild} from '@angular/core';
import {RegistrationService} from "../../services/registration.service";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";



@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  userData: any;

  @ViewChild('registerForm')
  htmlForm: NgForm;

  constructor(private registerService: RegistrationService,private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {

  }


  registerUser(value){
    console.log(this.htmlForm);
    this.htmlForm.reset();

    this.registerService.postData(value)
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
