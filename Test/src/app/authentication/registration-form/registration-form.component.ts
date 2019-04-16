import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {RegistrationService} from "../registration.service";
import {HttpClient} from "@angular/common/http";

import {RegisterModel} from "../registerModel";


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  userData: Object;
  model: RegisterModel;
  constructor(private registerService: RegistrationService,private httpClient: HttpClient) {
    //this.model = new RegisterModel('', '', '');
  }

  ngOnInit() {

  }


registerUser(value){
    let user = value.username;
    let id = "";

    this.registerService.postData(value)
      .subscribe( data => {
        console.log(data);
        this.userData = data;
        localStorage.setItem('username', user)


      })
}









}
