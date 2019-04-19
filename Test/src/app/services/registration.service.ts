import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegisterModel} from "../models/registerModel";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'


})
export class RegistrationService {
  model: RegisterModel;

  constructor(private httpClient: HttpClient) { }

  postData(data){

    this.model = {username: data.username, email: data.email, password: data.hashedPassword}

    const url = 'http://localhost:9999/auth/signup';
    return this.httpClient.post(url, this.model, {headers: {'Content-Type': 'application/json'}})

  }



}
