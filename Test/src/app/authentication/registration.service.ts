import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegisterModel} from "./registerModel";
import {RegistrationFormComponent} from "./registration-form/registration-form.component";
import {Observable} from "rxjs";





@Injectable({
  providedIn: 'root'


})
export class RegistrationService {
model: RegisterModel;



  constructor(private httpClient: HttpClient) { }



  postData(data){

    let user = {username: data.username, email: data.email, password: data.hashedPassword}

  const url = 'http://localhost:9999/auth/signup';
  return this.httpClient.post(url, user, {headers: {'Content-Type': 'application/json'}})

 }



}
