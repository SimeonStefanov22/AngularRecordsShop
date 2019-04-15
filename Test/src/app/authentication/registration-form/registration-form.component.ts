import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from "@angular/forms";
import {RegistrationService} from "../registration.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import { HttpHeaders } from '@angular/common/http';
import {headersToString} from "selenium-webdriver/http";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  userObj: any;
  constructor(private registerService: RegistrationService,private httpClient: HttpClient) { }

  ngOnInit() {

  }

  onSubmit(value: any) {
    console.log(value);
    //let body = JSON.stringify(value);
    let body = new HttpParams();
    body = body.set('username', value.name);
    body = body.set('hashedPassword', value.password);
    body = body.set('email', value.email);
    const url = 'http://localhost:9999/auth/signup';
    const myheader = new HttpHeaders().set('Content-Type', 'application/json')
    //const httpOptions = {
    //  headers: new HttpHeaders({
    //    'Content-Type':  'application/json',
    //  })
    //};
    this.httpClient.post(url, body, {headers: myheader})
      .subscribe((data) => {
        console.log(data);

      })
  }


}
